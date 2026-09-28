# AC_ON Esports Prediction Market

Milestone 2 prototype. Connects a wallet on **Base Sepolia**, shows the address + balance, and reads a placeholder market from the deployed `PredictionMarket` contract.
AC_ON is a testnet-only decentralized esports prediction market for binary esports match outcomes. Users connect a Coinbase Wallet and eventually trade YES/NO shares on match results.

Milestone 2 is focused on proving the architecture can run end to end. The current repo has a working frontend wallet prototype, a FastAPI backend scaffold, Supabase/PostgreSQL-backed fake sample match data, and GitHub Actions CI.

- React + Vite + Tailwind
- Wallet connect via wagmi:
  - **Coinbase Smart Wallet** (primary) — no extension needed, signs in with a passkey or email. Works on any computer, including school lab machines.
  - **MetaMask/injected** (fallback) — for anyone who already has a wallet extension.
- Shows connected wallet address and Base Sepolia balance
- Reads market #0 (`getMarket(0)`) from the `PredictionMarket` contract — set the address in `src/predictionMarket.ts`

## What Works Now 

- React + Vite + TypeScript + Tailwind frontend.
- Coinbase Smart Wallet connection through wagmi/viem.
- Connected wallet address and testnet balance display.
- FastAPI backend with health and sample-match endpoints.
- Supabase PostgreSQL connection through `DATABASE_URL`.
- Repeatable seed script for three fake sample matches.
- CI workflow that builds the frontend and runs backend tests.

- No trading UI
- No market list / odds (one market read only)
- Frontend, contract, and backend are not connected to each other yet (Milestone 3)
- 
## Important Boundaries

- Sample match data is fake Milestone 2 display data only.
- PostgreSQL/Supabase is not authoritative for real market state.
- Future smart contracts on Base Sepolia should be the source of truth for markets, trades, settlement, and payouts.
- The current frontend chain config still uses Sepolia as a placeholder until the contract deployment target is finalized.

## Run The Frontend

Requires Node.js LTS.

```bash
cd frontend
npm install
npm run dev
```

Open:

```text
http://localhost:5173
```

## Run The Backend

Requires Python 3.12.

```powershell
cd backend
py -3.12 -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
copy .env.example .env
```

Edit `backend/.env` and set `DATABASE_URL` to the Supabase PostgreSQL connection string. Use the SQLAlchemy psycopg format:

```env
DATABASE_URL=postgresql+psycopg://USER:PASSWORD@HOST:PORT/DBNAME?sslmode=require
FRONTEND_ORIGIN=http://localhost:5173
```

Seed the fake sample matches:

```powershell
python -m scripts.seed_sample_matches
```

1. Trading UI (buy/sell YES/NO) wired to contract writes
2. Market list from the backend/indexer
3. Note for Benny/Yudhveer: Smart Wallet is a contract wallet (ERC-4337) — any signature checks in the resolver contract need EIP-1271 support, not just `ecrecover`
