import { useWalletAddresses } from "fare-privy-core";
import SolBalance from "../components/SolBalance";
import EthBalance from "../components/EthBalance";

export function BalanceDisplay() {
  const { primarySolanaAddress, primaryEthereumAddress } = useWalletAddresses();

  return (
    <div className="balance-display">
      {primarySolanaAddress && <SolBalance address={primarySolanaAddress} />}
      {primaryEthereumAddress && (
        <EthBalance address={primaryEthereumAddress} />
      )}
    </div>
  );
}
