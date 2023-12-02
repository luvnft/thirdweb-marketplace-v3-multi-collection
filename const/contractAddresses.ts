// const/contractAddresses.ts
/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Mumbai } from "@thirdweb-dev/chains";
export const NETWORK = Mumbai;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0xaA4F87a8A991EbAeCA3a2d22eF16898D61A2371a";

// 3. Multiple NFT collection smart contract addresses with names.
export const NFT_COLLECTION_ADDRESSES = [
  {
    address: "0xd13B9a097C0E4ECfA608422C9D702bE4C96D1C56" // The address of the NFT collection
  },
  {
    address: "0x4CA308996724E4778712A92D82C49247E93dE805"
  },
  {
    address: "0xB4b9cE2a27605D1B94012Eaa2BB25D26AAB42a09"
  }
  // You can add more collections as needed
];


// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://mumbai.polygonscan.com";
