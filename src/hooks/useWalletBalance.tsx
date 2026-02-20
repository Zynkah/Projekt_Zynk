import { useWalletBalance } from "fare-privy-core";
import { WalletDisplay } from "./useConnectedWallets";
import "../components/WalletInfo/styles.css";

export function WalletBalanceDisplay() {
  const {
    ethereumBalance,
    solanaBalance,
    loading,
    error,
    // refetchBalance
  } = useWalletBalance();

  if (loading) return <div>Loading balances...</div>;
  if (error) return <div>Error: {String(error)}</div>;

  return (
    <div className="balance-display">
      <div>
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
        <h2>Your connected wallets</h2>
        <WalletDisplay />
      </div>

      {/* <div>
        <button className="wallet-btn" onClick={refetchBalance}>
          Refresh
        </button>
      </div> */}
    </div>
  );
}
