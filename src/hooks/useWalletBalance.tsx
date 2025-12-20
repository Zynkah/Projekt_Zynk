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
          <button onClick={refetchBalance}>Refresh</button>
        </div>
        {solanaBalance !== null && solanaBalance !== undefined && (
          <div className="balance-item">
            <span>SOL: {Number(solanaBalance).toFixed(6)}</span>
          </div>
        )}
        {ethereumBalance !== null && ethereumBalance !== undefined && (
          <div className="balance-item">
            <span>ETH: {Number(ethereumBalance).toFixed(6)}</span>
          </div>
        )}
        {(solanaBalance === null || solanaBalance === undefined) &&
          (ethereumBalance === null || ethereumBalance === undefined) && (
            <span>No wallet connected</span>
          )}
      </div>
    </div>
  );
}
