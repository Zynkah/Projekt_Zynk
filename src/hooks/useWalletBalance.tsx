import { useWalletBalance } from "fare-privy-core";

export function WalletBalanceDisplay() {
  const { ethereumBalance, solanaBalance, loading, error, refetchBalance } =
    useWalletBalance();

  if (loading) return <div>Loading balances...</div>;
  if (error) return <div>Error: {String(error)}</div>;

  return (
    <div>
      <div className="balance-display">
        <div>
          <h2>Wallet Balance</h2>
          {solanaBalance !== null && solanaBalance !== undefined && (
            <span>SOL: {Number(solanaBalance).toFixed(6)}</span>
          )}
          {ethereumBalance !== null && ethereumBalance !== undefined && (
            <span>ETH: {Number(ethereumBalance).toFixed(6)}</span>
          )}
          {(solanaBalance === null || solanaBalance === undefined) &&
            (ethereumBalance === null || ethereumBalance === undefined) && (
              <span>No wallet connected</span>
            )}
        </div>
        <div>
          <button className="wallet-btn" onClick={refetchBalance}>
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}
