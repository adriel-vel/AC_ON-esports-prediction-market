# Known Issues

## Current Issues

- `frontend/README.md` is tracked by Git but currently deleted in the working tree.
- Top-level `README.md` is untracked.
- The current README content has encoding artifacts in some punctuation characters.
- Current frontend chain config uses Sepolia as a placeholder, while the intended target chain is Base Sepolia.
- No contract ABI or address exists.
- No backend exists.
- No CI skeleton exists.
- No tests exist.

## Temporary Behavior

- Wallet balance display uses native testnet currency unless `TEST_TOKEN_ADDRESS` is later configured.
- The frontend does not read or write AC_ON contracts yet.

## Security/Correctness Concerns To Track Later

- Coinbase Smart Wallet may require EIP-1271-aware signature verification for any contract signature checks.
- Oracle logic must not silently finalize markets when APIs disagree or time out.
- PostgreSQL must not be treated as authoritative market state.
