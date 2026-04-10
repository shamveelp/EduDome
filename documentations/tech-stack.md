# 🛠️ Tech Stack Documentation

This document explicitly outlines the technologies used across the **EDU + ERP Platform**. It serves as a blueprint for our architectural choices, focusing on **performance, scalability, and financial reliability.**

Every piece of technology chosen here was evaluated under the lens of building a **production-grade Modular Monolith**, aiming to support high-concurrency learning features and sensitive ERP/Payment flows.

---

## 🟢 1. Core Backend Technologies

### **Framework:** NestJS
- **Why we chose it:** Express.js is too unstructured for a massive platform involving ERP systems and financial ledgers. NestJS enforces an Angular-like structure (Controllers, Services, Modules), making it perfect for our **Modular Monolith**. It provides built-in Dependency Injection (DI), robust Guards for Role-Based Access Control (RBAC), and scales seamlessly as the team grows.

### **Language:** TypeScript
- **Why we chose it:** In a system dealing with payments and multi-tiered agency roles, dynamic typing leads to disaster. TypeScript catches data mismatches at compile time, ensures our DTOs (Data Transfer Objects) are completely type-safe, and provides excellent developer autocomplete across both the frontend and backend. 

### **Runtime:** Node.js (LTS)
- **Why we chose it:** The Node.js asynchronous event loop is exceptionally well-suited for I/O heavy operations—perfect for handling thousands of concurrent WebSocket connections, WebRTC signaling, and frequent database interactions.

---

## 🗄️ 2. Database & Data Access

### **Primary Database:** PostgreSQL
- **Why we chose it:** We are building an ERP containing a strict double-entry ledger, student-to-agency relational mapping, and immutable audit logs. **This unequivocally requires a relational database.** We rejected NoSQL (like MongoDB) because financial systems require strict ACID compliance, transactional integrity, and rigid relational linking that NoSQL struggles to enforce safely without deep codebase hacks.

### **ORM (Object-Relational Mapper):** Prisma
- **Why we chose it:** Prisma guarantees absolute type-safety from our database schema up to our NestJS controllers. It generates fully-typed database clients dynamically based on your schema structure, radically speeding up development while preventing the runtime errors common in loosely-typed ORMs or raw SQL string queries.

---

## ⚡ 3. Realtime, Cache & Background Processing

### **Caching & Message Broker:** Redis
- **Why we chose it:** As our platform handles Live Classes and Realtime notifications, Redis serves as an ultrafast in-memory datastore. It is used for API rate limiting, locking financial transactions (preventing race conditions via Idempotency), caching heavy Prisma queries, and serving as our internal Pub/Sub backbone to emit events across modules.

### **Job Queue System:** BullMQ
- **Why we chose it:** Running heavy operations synchronously (like sending massive email blasts, compiling student PDF reports, or background Stripe payment verifications) would block the Node.js main thread and halt API responses. BullMQ (which runs on Redis) safely offloads these to background workers, featuring built-in retries, failure handling, and cron-like repeating jobs.

### **WebSockets & WebRTC:** Socket.io + Native WebRTC
- **Why we chose them:** 
  - **Socket.io:** Powers system-wide notifications and chat features over WebSockets with graceful HTTP long-polling fallbacks for clients on restrictive networks.
  - **WebRTC:** Used exclusively for Live Classes to allow high-throughput, peer-to-peer video streaming with ultra-low latency. Coupled with STUN / TURN servers to navigate through client firewalls and NATs.

---

## 💰 4. Financial Infrastructure

### **Payment Gateway:** Stripe
- **Why we chose it:** For selling courses, collecting exam fees, and managing agency subscriptions, Stripe is the industry gold standard. We utilize **Stripe Checkout** (to offload PCI compliance to Stripe entirely), **Webhooks** (to listen for asynchronous payment statuses safely), and we ensure all internal payment logic relies on an isolated **Fund Ledger** rather than just arbitrary balance math.

---

## ☁️ 5. Storage & DevOps

### **File Storage:** Amazon S3
- **Why we chose it:** Standard local, on-disk file storage does not scale horizontally. By piping KYC documents, certificates, and heavy course assets directly to an AWS S3 Bucket, our NestJS backend remains completely stateless. This allows us to spin up multiple instances of the backend on different servers without losing sync of uploaded files.

### **Hosting/Deployment (Phase Target):** Managed Platforms
- **Why we chose it:** Using services like Dockerized deployment across AWS EC2 or managed services like Railway allows rapid CI/CD deployments. Pairing this with a Managed PostgreSQL instance (like Neon, Supabase, or AWS RDS) guarantees automated DB backups, connection pooling, and multi-AZ redundancy without requiring a dedicated DevOps engineer on day one.

---

## 🧱 6. Frontend Technologies

### **Framework:** Next.js (App Router)
- **Why we chose it:** Provides server-side rendering (SSR) for blazing-fast initial load times and strong SEO visibility for our B2C course pages. The App Router allows us to logically group our code features (Auth, Student, Teacher, Agency) matching our backend modularity natively.

### **Styling:** Tailwind CSS
- **Why we chose it:** Eliminates massive CSS bundles, global inheritance scope-bleed, and naming collisions. Its utility-first approach aligns perfectly with our component-driven React architecture.

### **State Management:** React Query + Zustand
- **Why we chose them:** 
  - **React Query:** Acts as our asynchronous server-state cache. It handles fetching, caching, synchronizing, and updating server data seamlessly, replacing the need for bloated global Redux stores.
  - **Zustand:** Used for raw global client-side state (like detecting if a side-nav is open, or tracking local hardware states for WebRTC) without the extreme boilerplate of traditional tools.

---

## 🔐 7. Authentication & Security

### **Auth Mechanism:** JWT + HttpOnly Cookies
- **Why we chose it:** Rather than relying on bulky server-side sessions, JSON Web Tokens (JWT) allow stateless authentication, which scales infinitely across instances. Wrapping these tokens inside `HttpOnly` and `Secure` cookies prevents rogue cross-site scripting (XSS) client scripts from scraping and exfiltrating the tokens.

---

## 🧭 Summary of the Architecture Philosophy

By choosing **NestJS + Prisma + Postgres + Next.js**, we have achieved an architecture that marries rapid developer velocity with enterprise-level safety. While microservices often look appealing, this **Modular Monolith** stack eliminates operational server overhead for our team size, whilst the strict Nested boundaries ensure that, if needed, any piece (like Payments) *can* be cleanly extracted into its own Microservice in the future.
