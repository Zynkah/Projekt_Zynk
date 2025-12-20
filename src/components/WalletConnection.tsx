import React from "react";
import { useIsAuthenticated, useConnectedWallets } from "fare-privy-core";
import { useLogin, useLogout } from "@privy-io/react-auth";

const WalletConnection: React.FC = () => {
  const { isAuthenticated } = useIsAuthenticated();
  const { connectedWallets } = useConnectedWallets();
  const { login } = useLogin();
  const { logout } = useLogout();

    console.log('connected wallets:', connectedWallets)

  const handleLogin = async () => {
    try {
      await login();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
      // Fallback: reload the page to clear state
      window.location.reload();
    }
  };

  if (!isAuthenticated) {
    return (
      <button onClick={handleLogin} className="connect-btn">
        Connect Wallet
      </button>
    );
  }

  return (
    <div className="wallet-info">
      <div className="wallet-details">
        {connectedWallets && connectedWallets.length > 0 ? (
          connectedWallets.map((wallet, index) => (
            <div key={index} className="wallet-item">
              <span>🔗 {wallet.walletClientType || "Wallet"}</span>
              <span className="wallet-address">
                {wallet.address?.slice(0, 6)}...{wallet.address?.slice(-4)}
              </span>
            </div>
          ))
        ) : (
          <div className="wallet-item">
            <span>🔗 Connected</span>
          </div>
        )}
      </div>
      <button onClick={handleLogout} className="disconnect-btn">
        Disconnect
      </button>
    </div>
  );
};

export default WalletConnection;
