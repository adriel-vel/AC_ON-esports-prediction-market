# Esports Prediction Market — Frontend (AC_ON)

Milestone 2 prototype. Connects a wallet and shows the address + balance.

## What's running

- React + Vite + Tailwind
- Wallet connect via wagmi:
  - **Coinbase Smart Wallet** (primary) — no extension needed, signs in with a passkey or email. Works on any computer, including school lab machines.
  - **MetaMask/injected** (fallback) — for anyone who already has a wallet extension.
- Shows connected wallet address and testnet balance

## Not here yet

- No contract reads (waiting on a deployed contract address + ABI)
- No trading UI
- Chain is set to Sepolia as a placeholder — swap it in `src/wagmi.ts` once we pick the real testnet

## Run it locally

**Requires [Node.js](https://nodejs.org/) installed first (any recent LTS version).**

1. Clone the whole repo (not just this folder), then open a terminal (Terminal on Mac, PowerShell or Command Prompt on Windows):

   ```bash
   git clone https://github.com/adriel-vel/AC_ON-esports-prediction-market.git
   ```

2. Move into this folder — it's the `frontend` folder inside the repo you just cloned:

   ```bash
   cd AC_ON-esports-prediction-market/frontend
   ```

   (adjust the path if you cloned into a different location, or already have the repo cloned elsewhere — the key part is you need to be *inside* the `frontend` folder, not the repo root, before running npm commands)

   Tip: you can type `cd ` (with a space) and then drag the `frontend` folder into the terminal window — it fills in the path for you.

3. Install dependencies and start the app:

   ```bash
   npm install
   npm run dev
   ```

4. Open **http://localhost:5173** in your browser, click **Connect Wallet**, and sign in with a passkey or email (no extension needed).

If you pull new changes later and `npm run dev` errors, run `npm install` again first — dependencies may have changed.

## Next steps

1. Swap Sepolia for the real testnet in `src/wagmi.ts`
2. Add the deployed contract address + ABI, wire up a read call
3. Note for Benny/Yudhveer: Smart Wallet is a contract wallet (ERC-4337) — any signature checks in the resolver contract need EIP-1271 support, not just `ecrecover`
