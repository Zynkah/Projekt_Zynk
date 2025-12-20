import React, { useState, useEffect } from "react";

interface SolBalanceProps {
  address: string;
}

const SolBalance: React.FC<SolBalanceProps> = ({ address }) => {
  const [balance, setBalance] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch("https://api.mainnet-beta.solana.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            jsonrpc: "2.0",
            id: 1,
            method: "getBalance",
            params: [address],
          }),
        });
        const data = await response.json();
        if (data.error) throw new Error(data.error.message);
        const lamports = data.result?.value ?? 0;
        setBalance(lamports / 1e9);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to fetch balance");
        }
      }
    };
    fetchBalance();
  }, [address]);

  if (error) return <span style={{ color: "red" }}>Error: {error}</span>;
  if (balance === null) return <span>Loading SOL...</span>;
  return <span>SOL: {balance.toFixed(4)}</span>;
};

export default SolBalance;
