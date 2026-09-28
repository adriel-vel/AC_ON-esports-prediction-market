// Paste Benny's deployed Base Sepolia address here.
export const PREDICTION_MARKET_ADDRESS = undefined as `0x${string}` | undefined;

// Replace with the "abi" array from contracts/out/PredictionMarket.sol/PredictionMarket.json
// if Benny's contract differs from the agreed getMarket interface.
export const predictionMarketAbi = [
  {
    type: "function",
    name: "getMarket",
    stateMutability: "view",
    inputs: [{ name: "id", type: "uint256" }],
    outputs: [
      { name: "question", type: "string" },
      { name: "tradingDeadline", type: "uint256" },
      { name: "state", type: "uint8" },
      { name: "creator", type: "address" },
    ],
  },
] as const;

export const MARKET_STATES = [
  "Created",
  "Open",
  "Closed",
  "Proposed",
  "Disputed",
  "Finalized",
  "Void",
] as const;
