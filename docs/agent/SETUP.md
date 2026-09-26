# Setup

This file lists commands that are expected to work based on the current repository. Do not add aspirational commands here until the matching subsystem exists.

## Frontend

From the repository root:

```bash
cd frontend
npm install
npm run dev
```

Then open:

```text
http://localhost:5173
```

## Frontend Build

```bash
cd frontend
npm install
npm run build
```

## Contracts

No contract setup exists yet.

## Backend

No backend setup exists yet.

## Database

No database setup exists yet.

## Oracle

No oracle setup exists yet.

## Indexer

No indexer setup exists yet.

## Environment Variables

No `.env.example` file exists yet.

Expected future categories:

- frontend RPC settings
- contract deployment addresses
- backend database URL
- esports API credentials
- oracle private key or signer setup

## Base Sepolia

The intended target chain is Base Sepolia, but the frontend currently uses Sepolia as a placeholder in `frontend/src/wagmi.ts`.
