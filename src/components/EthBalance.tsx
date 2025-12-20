import React, { useState, useEffect } from "react";

interface EthBalanceProps {
  address: string;
}

const EthBalance: React.FC<EthBalanceProps> = ({ address }) => {
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        setLoading(true);
        setError(null);

        // Check if web3 is available
        if (typeof window.ethereum !== "undefined") {
          // Request balance using eth_getBalance
          const balanceHex = await window.ethereum.request({
            method: "eth_getBalance",
            params: [address, "latest"],
          });

          // Convert from wei to ETH
          const balanceInWei = parseInt(balanceHex, 16);
          const balanceInEth = balanceInWei / 1e18;

          setBalance(balanceInEth);
        } else {
          // Fallback to public RPC if no injected web3
          const response = await fetch(
            "https://eth-mainnet.g.alchemy.com/v2/demo",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                jsonrpc: "2.0",
                method: "eth_getBalance",
                params: [address, "latest"],
                id: 1,
              }),
            }
          );

          const data = await response.json();
          if (data.result) {
            const balanceInWei = parseInt(data.result, 16);
            const balanceInEth = balanceInWei / 1e18;
            setBalance(balanceInEth);
          } else {
            throw new Error("Failed to fetch balance");
          }
        }
      } catch (err) {
        setError("Failed to fetch ETH balance");
        console.error("Error fetching ETH balance:", err);
      } finally {
        setLoading(false);
      }
    };

    if (address) {
      fetchBalance();
    }
  }, [address]);

  if (loading) {
    return (
      <div className="balance-container">
        <span className="balance-label">ETH Balance:</span>
        <span className="balance-value loading">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="balance-container error">
        <span className="balance-label">ETH Balance:</span>
        <span className="balance-value">Error</span>
      </div>
    );
  }

  return (
    <div className="balance-container">
      <span className="balance-label">ETH Balance:</span>
      <span className="balance-value">
        {balance !== null ? `${balance.toFixed(6)} ETH` : "0 ETH"}
      </span>
    </div>
  );
};

export default EthBalance;
