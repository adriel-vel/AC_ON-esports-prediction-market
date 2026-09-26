# Tasks

## In Progress

| Owner | Subsystem | Description | Dependencies | Status |
|---|---|---|---|---|
| unassigned | docs | Create agent coordination docs and milestone workflow. | none | in progress |

## Ready

| Owner | Subsystem | Description | Dependencies | Status |
|---|---|---|---|---|
| unassigned | repo | Create or confirm `dev` branch as integration branch. | team agreement | ready |
| unassigned | CI | Add GitHub Actions skeleton for frontend build/lint. | package install behavior confirmed | ready |
| unassigned | contracts | Add minimal Foundry scaffold. | team confirms Foundry layout | ready |
| unassigned | contracts | Implement minimal sample market contract value/read. | contract scaffold | ready |
| unassigned | frontend | Configure Base Sepolia once target RPC/deployment assumptions are confirmed. | chain decision | ready |
| unassigned | frontend | Wire one contract read through wagmi/viem. | deployed/local contract address and ABI | ready |
| unassigned | frontend | Wire one contract write through wagmi/viem. | write function in contract | ready |
| unassigned | backend | Add minimal FastAPI scaffold with `GET /health`. | Python dependency strategy | ready |
| unassigned | database | Decide Milestone 2 database path: PostgreSQL now or temporary dev DB. | backend scaffold | ready |
| unassigned | oracle/indexer | Create lightweight service boundaries/docs without full resolver logic. | contract event plan | ready |

## Blocked

| Owner | Subsystem | Description | Dependencies | Status |
|---|---|---|---|---|
| unassigned | frontend/contracts | Real contract integration is blocked until a contract ABI and address exist. | contract scaffold/deployment | blocked |

## Done

| Owner | Subsystem | Description | Dependencies | Status |
|---|---|---|---|---|
| team | frontend | Minimal wallet connect prototype. | none | done |
