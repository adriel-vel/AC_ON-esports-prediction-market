import { useReadContract } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import {
  MARKET_STATES,
  PREDICTION_MARKET_ADDRESS,
  predictionMarketAbi,
} from "./predictionMarket";

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function MarketCard() {
  const { data, isLoading, error } = useReadContract({
    address: PREDICTION_MARKET_ADDRESS,
    abi: predictionMarketAbi,
    functionName: "getMarket",
    args: [0n],
    chainId: baseSepolia.id,
    query: { enabled: !!PREDICTION_MARKET_ADDRESS },
  });

  return (
    <div className="rounded-lg border border-neutral-700 bg-neutral-900 p-5">
      <p className="text-xs uppercase tracking-wide text-neutral-500">
        Market #0 · read from Base Sepolia
      </p>

      {!PREDICTION_MARKET_ADDRESS && (
        <p className="mt-2 text-sm text-neutral-400">
          Contract address not set yet.
        </p>
      )}
      {isLoading && <p className="mt-2 text-sm text-neutral-400">Loading...</p>}
      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error.message.split("\n")[0]}
        </p>
      )}

      {data && (
        <div className="mt-2 flex flex-col gap-2">
          <p className="text-lg font-semibold text-neutral-100">{data[0]}</p>
          <p className="text-sm text-neutral-400">
            Status:{" "}
            <span className="text-amber-300">
              {MARKET_STATES[data[2]] ?? `Unknown (${data[2]})`}
            </span>
          </p>
          <p className="text-sm text-neutral-400">
            Trading deadline:{" "}
            {new Date(Number(data[1]) * 1000).toLocaleString()}
          </p>
          <p className="text-sm text-neutral-400">
            Creator: <span className="font-mono">{shortenAddress(data[3])}</span>
          </p>
          <a
            href={`https://sepolia.basescan.org/address/${PREDICTION_MARKET_ADDRESS}`}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-amber-300 underline underline-offset-2"
          >
            View contract on Basescan
          </a>
        </div>
      )}
    </div>
  );
}
