# CareSphere HMS 🏥

<div align="left">

<!-- ![CareSphere Banner](https://via.placeholder.com/1200x300?text=CareSphere+Hospital+Management+System) -->

### Enterprise Hospital Management System

A scalable, secure, and cloud-native Hospital Management System built with **Next.js**, **TypeScript**, **Supabase**, **PostgreSQL**, **Stripe**, and **Tailwind CSS**.

Designed for hospitals, clinics, healthcare networks, and medical institutions to streamline patient care, appointment scheduling, electronic medical records, billing, analytics, and role-based operations.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?logo=supabase)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?logo=postgresql)
![Stripe](https://img.shields.io/badge/Stripe-Payments-635BFF?logo=stripe)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-UI-38BDF8?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

</div>

---

#  Table of Contents 📋

* Overview
* Features
* Architecture
* User Roles
* Tech Stack
* Project Structure
* Database Design
* Authentication & Security
* Installation
* Environment Variables
* Running the Application
* Stripe Setup
* Deployment
* API Modules
* Future Enhancements
* Contributing
* License

---

#  Overview 📌

CareSphere HMS is an enterprise-grade healthcare management platform that digitizes and automates hospital workflows.

The platform enables:
* Patient Registration
* Doctor Management
* Appointment Scheduling
* Electronic Medical Records (EMR)
* Billing & Invoicing
* Online Payments
* Role-Based Access Control (RBAC)
* Analytics & Reporting
* Secure Authentication
* Real-Time Operations

Built with scalability, security, and maintainability in mind.

---

#  Features ✨

##  Patient Management 👤

* Patient Registration
* Patient Profiles
* Medical History Tracking
* Patient Search & Filtering
* Admission & Discharge Records

---

##  Doctor Management 🩺

* Doctor Profiles
* Department Assignment
* Availability Scheduling
* Consultation Records
* Workload Tracking

---

##  Appointment Management 📅

* Appointment Booking
* Rescheduling
* Cancellation
* Calendar Integration
* Availability Management

---

##  Electronic Medical Records (EMR) 📄

* Medical Reports
* Prescriptions
* Diagnosis History
* Lab Results
* Clinical Notes

---

##  Billing & Payments 💳

* Invoice Generation
* Payment Tracking
* Billing Dashboard
* Stripe Integration
* Refund Handling

---

##  Authentication & Authorization 🔐

* Secure Login
* Email Verification
* Password Recovery
* Session Management
* Role-Based Access Control

---

##  Analytics Dashboard 📊

* Revenue Analytics
* Patient Statistics
* Doctor Performance
* Appointment Metrics
* Operational Reports

---

##  Cloud Infrastructure ☁️

* PostgreSQL Database
* Supabase Services
* Secure Storage
* Automated Backups
* Scalable Deployment

---

#  System Architecture 🏗️

```text
Client
   │
   ▼
Next.js Application
   │
   ├── Authentication
   ├── Dashboard
   ├── EMR Module
   ├── Appointment Module
   ├── Billing Module
   │
   ▼
Supabase Backend
   │
   ├── PostgreSQL
   ├── Authentication
   ├── Storage
   └── Realtime
   │
   ▼
Stripe Payment Gateway
```

---

#  User Roles 👥

| Role         | Permissions                 |
| ------------ | --------------------------- |
| Admin        | Full System Access          |
| Doctor       | Manage Patients & Records   |
| Receptionist | Manage Appointments         |
| Patient      | View Records & Appointments |

---

#  Tech Stack 🛠

## Frontend

* Next.js 15
* React 19
* TypeScript
* Tailwind CSS
* Shadcn UI

## Backend

* Supabase
* PostgreSQL
* Edge Functions

## Authentication

* Supabase Auth
* JWT
* Session Management

## Payments

* Stripe

## Validation

* Zod

## State Management

* Redux toolkit

## Deployment

* Vercel
* Supabase Cloud

---

#  Project Structure 📂

```bash
caresphere-hms-website/
│
├── app/
│   ├── (auth)/
│   ├── (dashboard)/
│   ├── (public)/
│   ├── appointments/
│   ├── patients/
│   ├── doctors/
│   ├── billing/
│   ├── records/
│   ├── api/
│   └── layout.tsx
│
├── components/
├── features/
├── lib/
├── hooks/
├── store/
├── types/
├── schemas/
├── services/
├── database/
├── public/
│
├── middleware.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

#  Database Modules 🗄

## Users

```sql
users
```

## Patients

```sql
patients
```

## Doctors

```sql
doctors
```

## Appointments

```sql
appointments
```

## Medical Records

```sql
medical_records
```

## Billing

```sql
billing
```

## Payments

```sql
payments
```

---

#  Security Features 🔒

* Role-Based Access Control
* Protected Routes
* Secure Cookies
* JWT Authentication
* Row Level Security (RLS)
* CSRF Protection
* Input Validation
* Rate Limiting
* Audit Logging

---

#  Installation ⚙️

## Clone Repository

```bash
git clone https://github.com/izarvek/caresphere-hms-website.git
```

## Move into Project

```bash
cd caresphere
```

## Install Dependencies

```bash
npm install
```

---

#  Environment Variables 🔐

Create:

```bash
.env.local
```

```env
NEXT_PUBLIC_APP_URL=

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

SUPABASE_SERVICE_ROLE_KEY=

DATABASE_URL=

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

RESEND_API_KEY=

NEXTAUTH_SECRET=
NEXTAUTH_URL=
```

---

#  Running the Application 🚀

## Development

```bash
npm run dev
```

---

## Production Build

```bash
npm run build
```

```bash
npm start
```

---

#  Stripe Configuration 💳

Install Stripe:

```bash
npm install stripe
```

Run Stripe Listener:

```bash
stripe listen --forward-to localhost:3000/api/webhooks
```

---

#  Testing 🧪

```bash
npm run test
```

```bash
npm run test:coverage
```

---

#  Deployment 🌐

## Frontend

* Vercel

## Database

* Supabase Cloud

## Payments

* Stripe

Deployment Flow:

```text
GitHub
   ↓
Vercel
   ↓
Supabase
   ↓
Stripe
```

---

#  API Modules 📡

## Authentication

```http
/api/auth
```

## Patients

```http
/api/patients
```

## Doctors

```http
/api/doctors
```

## Appointments

```http
/api/appointments
```

## Billing

```http
/api/billing
```

## Stripe Webhooks

```http
/api/webhooks
```

---

#  Screenshots 📸

| Landing Page | Admin Dashboard | Patient Portal |
| ------------ | --------------- | -------------- |
| Add Image    | Add Image       | Add Image      |

---

#  Future Enhancements 📈

* AI Symptom Analysis
* Telemedicine Integration
* Video Consultations
* Multi Hospital Support
* Inventory Management
* Pharmacy Module
* Insurance Claims
* Mobile Applications
* Doctor Availability AI
* Advanced Reporting

---

#  Contributing 🤝

```bash
git checkout -b feature/new-feature
```

```bash
git commit -m "feat: add new functionality"
```

```bash
git push origin feature/new-feature
```

Open a Pull Request.

---

#  License 📄

Licensed under the MIT License.

---

#  Author 👨‍💻

### Vivek Sharma

Software Developer

* Next.js
* TypeScript
* PostgreSQL
* Supabase
* Cloud Architecture

---

#  Support ⭐

If you found this project useful, consider giving it a star on GitHub.

It helps increase visibility and supports continued development.

---

<div align="left">

### Transforming Healthcare Through Technology

CareSphere HMS 🏥

</div>
