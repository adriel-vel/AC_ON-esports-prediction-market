# AC_ON Esports Prediction Market

AC_ON is a testnet-only decentralized esports prediction market for binary esports match outcomes. Users connect a Coinbase Wallet and eventually trade YES/NO shares on match results.

Milestone 2 is focused on proving the architecture can run end to end. The current repo has a working frontend wallet prototype, a FastAPI backend scaffold, Supabase/PostgreSQL-backed fake sample match data, and GitHub Actions CI.

## What Works Now

- React + Vite + TypeScript + Tailwind frontend.
- Coinbase Smart Wallet connection through wagmi/viem.
- Connected wallet address and testnet balance display.
- Frontend reads a placeholder market (`getMarket(0)`) from the deployed `PredictionMarket` contract. Set the address in `frontend/src/predictionMarket.ts`.
- FastAPI backend with health and sample-match endpoints.
- Supabase PostgreSQL connection through `DATABASE_URL`.
- Repeatable seed script for three fake sample matches.
- CI workflow that builds the frontend and runs backend tests.

## Important Boundaries

- Sample match data is fake Milestone 2 display data only.
- PostgreSQL/Supabase is not authoritative for real market state.
- Future smart contracts on Base Sepolia should be the source of truth for markets, trades, settlement, and payouts.
- The frontend and the Milestone 2 contract run on Ethereum Sepolia (see `frontend/src/wagmi.ts`); moving to Base Sepolia is planned for Milestone 3.
- The frontend, contract, and backend are not connected to each other yet (Milestone 3).

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

Run the backend:

```powershell
uvicorn app.main:app --reload
```

Useful endpoints:

```text
http://localhost:8000/health
http://localhost:8000/api/sample-matches
http://localhost:8000/api/sample-matches/valorant-sentinels-loud
```

## Run Checks

Frontend:

```bash
cd frontend
npm run build
```

Backend:

```powershell
cd backend
.\.venv\Scripts\Activate.ps1
python -m pytest
```

## Not Here Yet

- Full Solidity contracts (only a placeholder market exists).
- Base Sepolia deployment.
- Contract writes and a trading UI in the frontend.
- Real on-chain markets/trading.
- Oracle service implementation.
- Indexer implementation.
- Resolver committee implementation.

## Notes

- Coinbase Smart Wallet is a contract wallet (ERC-4337), so any signature checks in the resolver contract need EIP-1271 support, not just `ecrecover`.
