import { useConnectedWallets } from "fare-privy-core";

export function WalletDisplay() {
  const {
    primaryWallet, // First connected wallet
    embeddedWallet, // Privy embedded wallet
    externalWallet, // MetaMask/Phantom etc.
    isAuthenticated, // true if user has wallet
  } = useConnectedWallets();

  return (
    <>
      <div>Address: {primaryWallet?.address}</div>
      <div>Embedded Wallet: {embeddedWallet?.address}</div>
      <div>External Wallet: {externalWallet?.address}</div>
      <div>Authenticated: {isAuthenticated ? "Yes" : "No"}</div>
    </>
  );
}
