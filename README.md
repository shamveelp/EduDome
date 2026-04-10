# 🌍 EDU + ERP Platform (German Learning + Agency System)

## 📌 Overview

This project is a **unified digital platform** combining:

- 🎓 Language Learning Platform (B2C)
- 🏢 Agency ERP System (B2B SaaS)
- 💳 Unified Payment System

It is built as a **modular monolith** to support scalability, maintainability, and future AI integration.

---

## 🧠 Architecture

### 🔷 Tech Stack

| Layer        | Technology                     |
|-------------|-------------------------------|
| Frontend    | Next.js + Tailwind CSS        |
| Backend     | NestJS (Node.js + TypeScript) |
| Database    | PostgreSQL (Prisma ORM)       |
| Realtime    | Socket.io + WebRTC            |
| Queue       | BullMQ (Redis)                |
| Payments    | Stripe                        |
| Storage     | AWS S3                        |

---

### 🧩 Architecture Style

- Modular Monolith
- Feature-Based Structure
- Repository Pattern + DTO
- Event-Driven Design
- Role-Based Access Control (RBAC)

---

## 📁 Backend Folder Structure

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
│   ├── ...                     # (See Modules Overview below)
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

### 🧩 Inside a Business Module

Each domain module (e.g., `payment`) adheres strictly to its boundary definitions. 
For example, inside `modules/payment/`:

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

---

## 🧩 Modules Overview

### 🎓 Learning Platform
- course
- live-class
- assessment
- certificate
- gamification
- community

### 🏢 Agency ERP
- agency
- student-management
- exam
- accommodation
- visa

### 💰 Financial System (Critical)
- payment
- fund-ledger
- payout

### ⚙️ System Modules
- auth
- users
- notification
- audit-log
- analytics

---

## 🔄 Event-Driven Flow

Example:

1. Payment Success  
2. Event Triggered  
3. Actions:
   - Course enrollment
   - Ledger update
   - Notification

---

## 🔐 Authentication & Security

- JWT (Access + Refresh Tokens)
- Role-Based Access Control (RBAC)
- Multi-Tenancy (agency isolation)
- Encrypted sensitive data
- Immutable audit logs

---

## 💳 Payment System

All payments go through the platform:

- Course purchases
- Exam fees
- Accommodation
- Visa processing
- Agency subscriptions

### Key Principles

- Stripe Checkout (server-side)
- Webhook verification
- Idempotency handling
- Commission split calculation

---

## 📡 Realtime System

- Socket.io → notifications, chat
- WebRTC → live classrooms

---

## 🧠 Background Jobs

Handled using BullMQ:

- Emails
- Payment verification
- Notifications
- Reports

---

## 🗄️ Database

- PostgreSQL (Relational)
- Prisma ORM

### Core Domains:
- Users & Roles
- Courses
- Agency ERP
- Payments & Ledger
- Audit Logs

---

## 🚀 Getting Started

### 1. Clone Repo
```bash
git clone <repo-url>
cd project
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
```env
DATABASE_URL=
JWT_SECRET=
STRIPE_SECRET_KEY=
REDIS_URL=
AWS_S3_BUCKET=
```

### 4. Run Migrations
```bash
npx prisma migrate dev
```

### 5. Start Server
```bash
npm run start:dev
```

### 🧪 Testing
```bash
npm run test
```

---

## ⚠️ Development Rules

- ❌ Do NOT mix modules
- ❌ Do NOT bypass repository layer
- ❌ Do NOT hardcode business logic
- ✅ Always use DTOs
- ✅ Always enforce RBAC
- ✅ Always validate payments via webhook

---

## 📈 Future Roadmap (Phase 2)

- AI Chatbot
- Adaptive Learning
- AI Writing Evaluation
- Agentic AI Automation
- Multi-language support

---

## 👨‍💻 Development Guidelines

- Follow modular structure strictly
- Keep financial modules isolated
- Use event-driven communication
- Write clean and scalable code

---

## 📄 License

Private project — All rights reserved.

---

## 🧭 Final Note

This is not just an application — it is a platform ecosystem.

Build carefully, especially around:

- Payments
- Multi-tenancy
- Realtime systems
