import { mainnet, bsc, polygon } from "wagmi/chains";

/* Your Reown Project ID */
export const REOWN_PROJECT_ID = "c00145b1e7f8d39d821971d8aeb61276";

/* Supported EVM chains */
export const CHAINS = [mainnet, bsc, polygon];

/* Optional visible recipients per chain */
export const CHAIN_RECIPIENTS = {
  1: [
    { label: "Ethereum Treasury", address: "0xYourEthereumAddress" }
  ],
  56: [
    { label: "BSC Treasury", address: "0xYourBSCAddress" }
  ],
  137: [
    { label: "Polygon Treasury", address: "0xYourPolygonAddress" }
  ]
};

/* Solana network (if you plan to use Solana adapter) */
export const SOLANA_NETWORK = "mainnet";