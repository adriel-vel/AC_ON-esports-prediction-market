# Interfaces

This file records actual interfaces first. Proposed interfaces are clearly marked.

## Actual Frontend Interfaces

### Wallet Connection

| Name | Inputs | Outputs | Caller | Owner | Status |
|---|---|---|---|---|---|
| `connect({ connector })` | wagmi connector | wallet session or error | `WalletConnect.tsx` | frontend | implemented |
| `disconnect()` | none | disconnected wallet state | `WalletConnect.tsx` | frontend | implemented |
| `useAccount()` | none | address and connection state | `WalletConnect.tsx` | frontend | implemented |
| `useBalance({ address, token })` | connected address, optional token | balance data | `WalletConnect.tsx` | frontend | implemented |

### Chain Configuration

| Name | Inputs | Outputs | Caller | Owner | Status |
|---|---|---|---|---|---|
| `createConfig(...)` | Sepolia chain, Coinbase Wallet connector, injected connector, HTTP transport | wagmi config | `main.tsx` | frontend | implemented with placeholder chain |

## Actual Contract Interfaces

No AC_ON contract interfaces currently exist in the repository.

## Actual Backend API

No backend API currently exists in the repository.

## Actual Contract Events

No contract events currently exist in the repository.

## Proposed Milestone 2 Interfaces

These are working targets, not final commitments.

### Frontend -> Contract

| Name | Inputs | Outputs | Caller | Owner | Status |
|---|---|---|---|---|---|
| `marketCount()` or equivalent read | none | number or sample value | frontend | contracts | proposed |
| `createSampleMarket(...)` or equivalent write | minimal sample market data | transaction hash / receipt | frontend | contracts | proposed |
| `buyYes(...)` / `buyNo(...)` or temporary trade stub | market id, amount | transaction hash / receipt | frontend | contracts | proposed |

### Backend -> Contract

| Name | Inputs | Outputs | Caller | Owner | Status |
|---|---|---|---|---|---|
| `proposeOutcome(...)` | market id, proposed outcome | transaction hash / receipt | backend/oracle | contracts | proposed for later than first contract scaffold |

### Contract -> Indexer Events

| Name | Inputs | Outputs | Caller | Owner | Status |
|---|---|---|---|---|---|
| `MarketCreated` | market id and market metadata | event log | contract | contracts/indexer | proposed |
| `TradeExecuted` | market id, trader, side, amount | event log | contract | contracts/indexer | proposed |
| `OutcomeProposed` | market id, outcome, proposer | event log | contract | contracts/indexer | proposed |
| `OutcomeChallenged` | market id, challenger | event log | contract | contracts/indexer | proposed |
| `MarketFinalized` | market id, final outcome | event log | contract | contracts/indexer | proposed |
| `PayoutClaimed` | market id, user, amount | event log | contract | contracts/indexer | proposed |

### Backend API

| Endpoint | Inputs | Outputs | Caller | Owner | Status |
|---|---|---|---|---|---|
| `GET /health` | none | service status | frontend/dev tools | backend | proposed |
| `GET /markets` | optional filters | market list | frontend | backend | proposed |
| `GET /markets/{id}` | market id | market detail | frontend | backend | proposed |
| `GET /markets/{id}/history` | market id | event/history list | frontend | backend | proposed |
