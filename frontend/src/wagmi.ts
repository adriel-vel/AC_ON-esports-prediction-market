import { http, createConfig } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { coinbaseWallet, injected } from "wagmi/connectors";

export const config = createConfig({
  chains: [baseSepolia],
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
    [baseSepolia.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
