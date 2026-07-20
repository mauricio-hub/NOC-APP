# NOC App - Notification and Monitoring Center

A notification and monitoring system with clean architecture built with Node.js + TypeScript.

## Description

NOC (Notification and Monitoring Center) is an application that performs URL health checks, logs events, and sends email notifications based on system logs.

## Features

- 🔍 **URL Health Checks** - Monitor service availability
- 📝 **Log System** - Persistent event logging in the file system
- 📧 **Email Notifications** - Automatic log delivery via email
- ⏱️ **Scheduled Tasks** - Cron job execution
- 🏛️ **Clean Architecture** - Clear separation of concerns (Domain, Application, Infrastructure)

## Requirements

- Node.js 18+
- npm or yarn

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd 05-noc

# Install dependencies
npm install
```

## Configuration

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Configure environment variables:
```env
PORT=3000
MAILER_SERVICE=gmail
MAILEAR_EMAIL=your@email.com
MAILER_SECRET_KEY=yourPassword
```

## Available Scripts

```bash
# Development with auto-reload
npm run dev

# Compile TypeScript
npm run build

# Build and start the application
npm start
```

## Project Structure

```
src/
├── domain/              # Business logic
│   ├── entities/        # Domain entities
│   ├── use-cases/       # Use cases
│   └── repository/      # Repository interfaces
├── infrastructure/      # Technical implementations
│   ├── datasources/     # Data sources
│   └── repositories/    # Repository implementations
└── presentation/        # Presentation layer
    ├── server.ts        # Server setup
    ├── cron/            # Scheduled job services
    └── email/           # Email services
```

## Usage

### Check URL Health

```typescript
const checkService = new CheckService(
    logRepository,
    () => console.log("✅ URL is ok"),
    (error) => console.error(`❌ ${error}`)
);

await checkService.execute("https://www.example.com");
```

### Send Logs via Email

```typescript
const sendEmailLogs = new SendEmailLogs(
    emailService,
    logRepository
);

await sendEmailLogs.execute(['recipient@example.com']);
```

## Technologies

- **TypeScript** - Typed language
- **Node.js** - Runtime
- **Nodemailer** - Email delivery
- **Cron** - Task scheduling
- **dotenv** - Environment configuration
- **ts-node-dev** - TypeScript development

## License

ISC
