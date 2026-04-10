# 📂 Backend Project Folder Structure & Architecture

This document provides a detailed, comprehensive breakdown of the NestJS backend folder structure used for the EDU + ERP Platform.

Our architecture strictly follows a **Feature-First (or Domain-First)** Modular Monolith design. Instead of grouping all controllers together and all services together, we group files by the business domain they serve.

---

## 🏗️ Global Directory Architecture

This is the root layout of our application's `src/` directory.

```text
src/
│
├── main.ts                     # Application entry point
├── app.module.ts               # Root module orchestrating all feature modules
│
├── config/                     # App configs (env, database, stripe, redis, etc.)
│   ├── database.config.ts
│   ├── jwt.config.ts
│   ├── stripe.config.ts
│   └── redis.config.ts
│
├── common/                     # Shared utilities (GLOBAL)
│   ├── decorators/             # Custom NestJS decorators (e.g., @Roles)
│   ├── guards/                 # Authentication & Role guards
│   ├── interceptors/           # Global request/response interceptors
│   ├── filters/                # Global exception filters
│   ├── pipes/                  # Validation & transformation pipes
│   ├── utils/                  # Helper functions
│   ├── constants/              # System-wide constants
│   └── types/                  # Global TypeScript types and interfaces
│
├── infrastructure/             # External services (LOW-LEVEL)
│   ├── database/               # Prisma setup
│   ├── redis/                  # Redis connection
│   ├── stripe/                 # Stripe SDK wrapper
│   ├── storage/                # AWS S3 integration
│   ├── mail/                   # Email provider integration
│   ├── socket/                 # Socket.io setup
│   └── webrtc/                 # WebRTC signaling
│
├── modules/                    # 🔥 CORE BUSINESS MODULES
│   ├── auth/                   # Authentication logic
│   ├── users/                  # User management
│   ├── course/                 # LMS Core
│   ├── agency/                 # ERP Core
│   ├── payment/                # 🔥 VERY CRITICAL
│   ├── ...                     # (Other domain modules)
│
├── events/                     # Domain events (decoupling patterns)
│   ├── event-bus.ts            # Internal event emitter
│   └── handlers/               # Listeners for various events
│
├── jobs/                       # Background workers (BullMQ)
│   ├── queues/                 # Queue definitions
│   └── processors/             # Job handlers
│
├── prisma/                     # Database schemas and migrations
│   └── schema.prisma
│
└── scripts/                    # Seed, migrations, database utilities
```

### 🔍 Unpacking the Global Layers

#### ⚙️ `config/` (Configuration Layer)
Contains classes and files responsible for reading `.env` variables and mapping them into strongly-typed configurations. This ensures that the application fails early during bootstrapping if misconfigured. Examples include validating Stripe Secret keys or the Prisma Database URL.

#### 🛠️ `common/` (Global Utilities Layer)
This folder holds logic that is **system-wide and unattached to any specific business domain**.
- **`decorators/`**: Custom annotations like `@AgencyTenant()` to extract multi-tenancy IDs from requests.
- **`guards/`**: Contains overarching security logic (e.g., verifying a JWT token, role-based access checks) before the request reaches the controller.
- **`interceptors/` & `filters/`**: Manages modifying responses or catching global crash exceptions to return formatted JSON API errors instead of HTML.
- **`pipes/`**: Validation pipes (like ensuring an ID in a URL is a valid UUID).

#### 🔌 `infrastructure/` (Provider Wrapper Layer)
The rule for this folder is: **Never directly leak a 3rd party SDK into your business modules.** 
If our payment module needs to talk to Stripe, it calls the `stripe.service.ts` found here. If we need to emit a socket event, the controller calls `socket/`. This isolates external dependencies, making testing easy and preventing vendor lock-in.

#### 🔥 `modules/` (The Business Logic Heart)
This is where the actual project lives. It is segmented strictly by Domains: `course/`, `agency/`, `payment/`, `users/`, etc. **Code from one module should never deeply entangle with another module using direct dependencies.** Use Events if they must communicate.

#### 🛎️ `events/` & `jobs/` (Asynchronous Activity)
- **`events/`**: For fire-and-forget logic. If a student passes an exam, `exam` fires an `ExamPassedEvent` and `gamification` listens to it to reward points.
- **`jobs/`**: Uses `BullMQ` + `Redis` for heavy processing. You offload PDF generation, emailing, or mass webhook processing to `queues/` and handles them in `processors/`.

---

## 🧩 Anatomy of a Business Module

Each domain module strictly manages its own internal layers of responsibility. Below is the blueprint applied to every folder within `modules/`:

```text
modules/payment/
│
├── payment.module.ts           # Module definition & dependency wiring
│
├── controller/                 # HTTP layer
│   └── payment.controller.ts
│
├── service/                    # Business logic layer
│   ├── payment.service.ts
│   └── stripe.service.ts
│
├── repository/                 # Database abstraction layer
│   └── payment.repository.ts
│
├── dto/                        # Data Transfer Objects (Validation)
│   ├── create-payment.dto.ts
│   └── verify-payment.dto.ts
│
├── entity/                     # Domain model definitions
│   └── payment.entity.ts
│
├── events/                     # Events emitted by this module
│   └── payment-success.event.ts
│
└── listeners/                  # Event listeners affecting this module
    └── payment.listener.ts
```

### 🧠 How an API Request Flows Through a Module

By organizing each module exactly as shown above, we enforce strict separation of concerns within that domain. Let's trace a request (e.g., POST `/api/payment`):

#### 1. `dto/` (The Shield & Validator)
The incoming JSON payload hits a class like `CreatePaymentDto`. Using `class-validator`, the DTO guarantees that `amount` is a positive number and `currency` is valid. If it fails, a 400 Bad Request is thrown instantly.

#### 2. `controller/` (The HTTP Router Layer)
`payment.controller.ts` intercepts the validated DTO, handles the `@Post()` HTTP decorator, maps out response codes (201 Created), and passes the validated data onward. **No business pricing rules belong in the controller.**

#### 3. `service/` (The Brain)
`payment.service.ts` takes over. This is where pricing calculators, discount applications, and Stripe webhook logic checkouts happen. **This is the ONLY place where business decisions are made.**

#### 4. `repository/` (The Database Whisperer)
When the service needs to save the payment state to PostgreSQL, it passes the data to `payment.repository.ts`. **Controllers and Services never interact with Prisma directly.** Repositories exist to hide database queries.

#### 5. `events/` & `listeners/` (Cross-Module Communication)
When the payment completes, `payment.service.ts` emits a `PaymentSuccessEvent` (defined in the `events/` subfolder). Somewhere else (maybe `modules/course/listeners/course.listener.ts`) a listener hears this event and asynchronously enrolls the student. Since they communicate by events, if the course module crashes, the payment module is unaffected!

---

## 🚫 Critical Development Rules
1. **Repository Pattern is Mandatory:** Do NOT put `prisma.payment.create()` inside `PaymentService`. Always write `paymentRepository.createPayment()`.
2. **Total Module Isolation:** The `PaymentModule` should NOT inject `CourseRepository`. It should not know how Courses are structured in the database.
3. **Financials via Double-Entry Ledger ONLY:** Features dealing with agency payouts or student wallets must route through the `fund-ledger` system utilizing atomic DB transactions.
