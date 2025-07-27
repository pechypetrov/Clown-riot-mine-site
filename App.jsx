
import { ConnectWallet, useAddress, useContract, Web3Button } from "@thirdweb-dev/react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import React from "react";

const contractAddress = "YOUR_CONTRACT_ADDRESS";

export default function App() {
  const address = useAddress();
  const { contract } = useContract(contractAddress);

  return (
    <ThirdwebProvider activeChain="binance">
      <div style={{ padding: 40, fontFamily: "monospace", background: "#111", color: "#fff" }}>
        <h1>🤡 ClownRiotFarm Mint</h1>
        <ConnectWallet />
        {address && (
          <Web3Button
            contractAddress={contractAddress}
            action={async (contract) => await contract.erc721.claim(1)}
          >
            Mint Clown NFT
          </Web3Button>
        )}
      </div>
    </ThirdwebProvider>
  );
}
