# Architecture

This document describes the repository as currently inspected. Do not treat planned components as implemented.

## Current Diagram

```text
Implemented:

User Browser
    |
    v
React + Vite frontend
    |
    v
wagmi + viem
    |
    +--> Coinbase Smart Wallet connector
    +--> Injected wallet connector
    |
    v
Sepolia placeholder RPC

Planned:

React frontend --> Base Sepolia contracts --> contract events
        |                 ^                       |
        v                 |                       v
FastAPI backend ---- oracle service          indexer
        |                                         |
        v                                         v
PostgreSQL API/cache state                PostgreSQL indexed state

Authoritative state: blockchain contracts
Derived state: PostgreSQL
```

## Frontend

Status: implemented, minimal prototype.

The frontend lives in `frontend/` and uses React, Vite, TypeScript, Tailwind, wagmi, viem, and Coinbase Wallet SDK. It currently supports wallet connection and balance display.

The app does not yet read or write AC_ON contracts.

## Contracts

Status: planned.

No Solidity, Foundry, ABI, deployment scripts, or contract tests were found. The intended project architecture requires contracts to own market lifecycle, trades, LMSR pricing, challenge state, resolver selection/voting, settlement, and payouts.

## Backend

Status: planned.

No Python/FastAPI backend exists yet. The intended backend should provide application APIs, esports data integration, oracle coordination, indexer support, and PostgreSQL access.

## Oracle

Status: planned.

No oracle service exists yet. Intended behavior: compare approved esports API results, propose outcomes on-chain when rules allow, route disagreements or timeouts to dispute/manual paths, and avoid unilateral settlement of disputed markets.

## Indexer

Status: planned.

No indexer exists yet. Intended behavior: read contract events and store derived data in PostgreSQL for efficient application queries.

## Database

Status: planned.

No PostgreSQL configuration or schema exists yet. PostgreSQL should be treated as derived/indexed state. Blockchain state is authoritative.

## Deployment Assumptions

Status: planned.

The project target chain is Base Sepolia. The current frontend uses Sepolia as a placeholder. No deployment scripts or environment variable templates were found.

## On-Chain vs Off-Chain Boundary

On-chain planned responsibilities:

- Market state.
- Trades.
- LMSR pricing.
- YES/NO share ownership.
- Challenge state.
- Resolver registry.
- Resolver voting.
- Settlement.
- Payouts.

Off-chain planned responsibilities:

- Esports API calls.
- API credentials.
- Oracle automation.
- Backend API.
- Indexing.
- PostgreSQL derived views.
- Initial bootstrap workflows.

The project should not be described as fully trustless or fully permissionless.
