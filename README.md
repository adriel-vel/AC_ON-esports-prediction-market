# Frontend — Esports Prediction Market (AC_ON)

Milestone 2 prototype: connects a wallet and displays the connected address
and balance.

## What's running

- React + Vite app
- Wallet connect via wagmi:
  - **Primary: Coinbase Smart Wallet** — no extension or app install
    needed, signs in via a popup with a passkey or email. This is what
    we demo with, since it works on any computer (including school
    lab machines with no admin rights to install extensions).
  - **Fallback: injected** — MetaMask or another browser extension, for
    users who already have one.
- Displays connected address and testnet balance

## What's NOT here yet

- No contract reads (blocked on Benny's deployed address + ABI)
- No trading UI
- Chain is set to Sepolia as a placeholder — needs to be swapped for whatever
  testnet the team actually deploys to (see `src/wagmi.ts`)

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173 and click "Connect Wallet" — a popup opens,
no extension required. Sign in with a passkey or email.

If you already have `node_modules` installed from before this change, run
`npm install` again to pick up the new `@coinbase/wallet-sdk` dependency.

## Next steps

1. Swap the chain config in `src/wagmi.ts` once we know the real testnet.
2. Once Benny has a contract deployed, add its address + ABI and wire up a
   read call (e.g., market info) to prove frontend → contract works end to end.
3. Flag to Benny/Yudhveer: Smart Wallet is a contract wallet (ERC-4337), not
   a plain EOA. If the resolution/dispute contract ever verifies a signature
   (e.g., for a resolver vote or challenge), it needs to support EIP-1271,
   not just `ecrecover`, or Smart Wallet signatures won't validate.
