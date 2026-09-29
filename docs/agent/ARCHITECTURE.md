# AC_ON Architecture

AC_ON is a testnet-only decentralized esports prediction market. Users connect a Coinbase Wallet and trade YES/NO shares on binary esports match outcomes. The planned product is not fully trustless or fully permissionless: contract state should be authoritative for markets and payouts, while esports APIs, oracle automation, initial resolver bootstrapping, and indexing are trusted/off-chain support systems.

This document describes the repository as currently inspected. Do not treat planned components as implemented.

## Current Repo State

| Area | Status | Notes |
|---|---|---|
| Frontend | implemented | React + Vite + TypeScript app under `frontend/`. |
| Wallet | implemented | Coinbase Smart Wallet and injected wallet fallback through wagmi. |
| Chain config | partial | Frontend currently uses Sepolia as a placeholder. Target chain is Base Sepolia. |
| Contracts | planned | No Solidity, Foundry project, ABI, deployments, or tests found. |
| Backend | scaffolded | FastAPI app under `backend/` with health and fake sample-match endpoints. |
| Oracle | planned | No oracle service found. |
| Indexer | planned | No indexer found. |
| Database | scaffolded | Milestone 2 sample data uses Supabase PostgreSQL through `DATABASE_URL`; data is fake and non-authoritative. |
| CI | scaffolded | GitHub Actions runs frontend build and backend tests. |

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

Status: scaffolded.

The backend is a FastAPI service intended to run from `backend/`. For Milestone 2 it exposes health/sample-match API endpoints backed by Supabase PostgreSQL through `DATABASE_URL`.

The sample matches are fake display data only. They are not on-chain markets and must not be treated as authoritative market state.

## Oracle

Status: planned.

No oracle service exists yet. Intended behavior: compare approved esports API results, propose outcomes on-chain when rules allow, route disagreements or timeouts to dispute/manual paths, and avoid unilateral settlement of disputed markets.

## Indexer

Status: planned.

No indexer exists yet. Intended behavior: read contract events and store derived data in PostgreSQL for efficient application queries.

## Database

Status: scaffolded.

Milestone 2 uses Supabase PostgreSQL as a hosted development database so teammates do not need local PostgreSQL. PostgreSQL should be treated as derived/indexed or demo display state. Blockchain state is authoritative.

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

## Planned Market Lifecycle

```text
CREATED
  -> OPEN
  -> CLOSED
  -> PROPOSED
  -> FINALIZED
  -> CLAIMABLE

Dispute path:

PROPOSED
  -> DISPUTED
  -> RESOLVER_VOTING
  -> FINALIZED
  -> CLAIMABLE
```

Possible exceptional states include `POSTPONED`, `VOID`, and `ORACLE_TIMEOUT`.

Important invariants:

- Trading at or after close time must fail.
- Challenged markets must not finalize through the normal unchallenged path.
- Duplicate payouts must fail.
- Unauthorized resolver voting must fail.
- Conflicted resolver participation must fail.

## Interfaces To Add

Actual contract and backend interfaces do not exist yet. Proposed Milestone 2 interfaces:

| Boundary | Interface | Status |
|---|---|---|
| Frontend -> contract | one simple read, such as `marketCount()` or sample market getter | proposed |
| Frontend -> contract | one simple write, such as creating a sample market or placing a temporary trade | proposed |
| Backend -> frontend/dev tools | `GET /health` | proposed |
| Contract -> indexer | basic event for market creation or sample state change | proposed |

## Setup Notes

Current frontend commands:

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`.

Backend commands:

```bash
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
copy .env.example .env
python -m scripts.seed_sample_matches
uvicorn app.main:app --reload
```

Set `DATABASE_URL` in `backend/.env` to the Supabase PostgreSQL connection string before seeding/running.

No contract, oracle, or indexer setup commands exist yet.

## Known Gaps

- Base Sepolia is the target, but the frontend currently uses Sepolia placeholder config.
- No contract ABI/address exists for frontend reads or writes.
- No smart contracts, oracle, indexer, or contract tests exist yet.
- Backend sample-match data is fake/off-chain and exists only for Milestone 2 fallback display.
