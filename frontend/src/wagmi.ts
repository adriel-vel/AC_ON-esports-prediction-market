import { http, createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { coinbaseWallet, injected } from "wagmi/connectors";

// Change this one line to move networks (e.g. baseSepolia for Milestone 3).
export const CHAIN = sepolia;

export const config = createConfig({
  chains: [CHAIN],
  connectors: [
    // Primary: no extension or app install needed, works on any computer
    // (passkey / email login via a popup).
    coinbaseWallet({
      appName: "Esports Prediction Market",
      preference: "smartWalletOnly",
    }),
    // Fallback: for users who already have MetaMask or another extension.
    injected(),
  ],
  transports: {
    [CHAIN.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
