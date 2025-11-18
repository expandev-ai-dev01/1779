# StockBox Backend API

Backend REST API for StockBox - Inventory Management System

## Overview

This is the backend service for StockBox, providing RESTful APIs for inventory management operations including stock movements, product tracking, and quantity control.

## Technology Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: Microsoft SQL Server
- **Validation**: Zod

## Project Structure

```
backend/
├── migrations/              # Database migration files
├── src/
│   ├── api/                # API controllers
│   │   └── v1/            # API version 1
│   │       ├── external/  # Public endpoints
│   │       └── internal/  # Authenticated endpoints
│   ├── config/            # Configuration files
│   ├── middleware/        # Express middleware
│   ├── migrations/        # Migration runner code
│   ├── routes/            # Route definitions
│   ├── services/          # Business logic
│   ├── utils/             # Utility functions
│   └── server.ts          # Application entry point
├── .env.example           # Environment variables template
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- SQL Server instance available
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your database credentials
```

3. Run database migrations:
```bash
npm run dev
# Migrations run automatically on startup
```

### Development

Start the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000/api/v1`

### Building for Production

Build the project:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## API Documentation

### Health Check

```
GET /health
```

Returns server health status.

### API Versioning

All API endpoints are versioned:
- Version 1: `/api/v1/`

### Endpoint Structure

- **External endpoints**: `/api/v1/external/` (public access)
- **Internal endpoints**: `/api/v1/internal/` (authenticated access)

## Environment Variables

| Variable | Description | Default |
|----------|-------------|----------|
| NODE_ENV | Environment mode | development |
| PORT | Server port | 3000 |
| DB_SERVER | Database server address | localhost |
| DB_PORT | Database port | 1433 |
| DB_NAME | Database name | stockbox |
| DB_USER | Database user | sa |
| DB_PASSWORD | Database password | - |
| DB_ENCRYPT | Enable encryption | true |

## Database Migrations

Migrations run automatically on application startup. To run migrations manually:

```bash
ts-node src/migrations/run-migrations.ts
```

To skip migrations on startup:
```bash
SKIP_MIGRATIONS=true npm start
```

## Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## Code Quality

Lint code:
```bash
npm run lint
```

Fix linting issues:
```bash
npm run lint:fix
```

## Project Standards

- TypeScript strict mode enabled
- ESLint for code quality
- 2-space indentation
- Single quotes for strings
- Semicolons required
- Maximum line length: 120 characters

## License

ISC
