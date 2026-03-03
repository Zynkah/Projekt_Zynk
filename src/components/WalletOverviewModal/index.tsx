import { useConnectedWallets, WalletOverview } from "fare-privy-core";
import privyIcon from "../../assets/icons/privy-icon.svg";
import metaMaskIcon from "../../assets/icons/metamask.svg";
import walletIcon from "../../assets/icons/link-wallet.png";

export const WalletOverviewComponent = () => {
  const { connectedWallets } = useConnectedWallets();

  const getWalletIcon = () => {
    const walletType = connectedWallets[0]?.meta?.name?.toLowerCase() || "";

    if (walletType === "privy") return privyIcon;
    if (walletType === "metamask") return metaMaskIcon;
    return walletIcon;
  };

  return (
    <WalletOverview
      activeWallet={{
        meta: {
          name: connectedWallets[0]?.meta?.name ?? "Unknown Wallet",
          icon: getWalletIcon(),
        },
      }}
      fallbackIcon="/icons/default-wallet.svg"
    />
  );
};
