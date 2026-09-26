# Project Status

Last inspected: 2026-09-25

| Area | Status | Notes |
|---|---|---|
| Frontend | implemented | React + Vite + TypeScript app exists under `frontend/`. |
| Wallet | implemented | wagmi config includes Coinbase Smart Wallet and injected wallet fallback. UI connects wallet, displays address, and displays balance. |
| Chain config | partial | Current frontend uses Sepolia as a placeholder. Project target is Base Sepolia, but Base Sepolia is not configured yet. |
| Smart contracts | planned | No `contracts/`, Foundry project, Solidity files, ABI, or deployed address found. |
| LMSR | planned | No on-chain LMSR implementation found. |
| Backend | planned | No FastAPI app, Python package manifest, or backend folder found. |
| Oracle | planned | No oracle service code found. |
| Indexer | planned | No indexer code found. |
| PostgreSQL | planned | No database schema, migrations, SQLAlchemy models, or connection config found. |
| Tests | planned | No Vitest, Pytest, Foundry tests, or test commands found. |
| CI/CD | planned | No `.github/workflows` directory found. |
| Documentation | partial | Top-level `README.md` exists as an untracked file. Tracked `frontend/README.md` is currently deleted in the working tree. |

## Current Blockers

- No smart contract exists for frontend contract reads or writes.
- No contract deployment address or ABI exists.
- Chain mismatch: desired target is Base Sepolia, current frontend config is Sepolia placeholder.
- No CI skeleton exists yet.
- No backend, database, oracle, or indexer scaffolds exist yet.

## Immediate Milestone 2 Priorities

1. Stabilize documentation and team workflow.
2. Add a CI skeleton.
3. Add a minimal Foundry contract scaffold.
4. Add one simple contract read to the frontend.
5. Add one simple contract write to the frontend.
6. Add a minimal backend scaffold that can run locally.
7. Choose a development database path for Milestone 2.
8. Scaffold oracle/indexer boundaries without overbuilding full resolution logic.

## Known Integration Gaps

- Frontend has no contract integration.
- Backend has no API integration.
- No shared interface source exists for ABIs, event names, or API schemas.
- No documented local full-system startup flow exists.
