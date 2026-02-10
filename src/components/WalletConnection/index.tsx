import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import { useIsAuthenticated, useConnectedWallets } from "fare-privy-core";
import { useLogin, useLogout } from "@privy-io/react-auth";

const WalletConnection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isAuthenticated } = useIsAuthenticated();
  const { connectedWallets } = useConnectedWallets();
  const { login } = useLogin();
  const { logout } = useLogout();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogin = async () => {
    try {
      await login();
      setIsOpen(false);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsOpen(false);
    } catch (error) {
      console.error("Logout failed:", error);
      // Fallback: reload the page to clear state
      window.location.reload();
    }
  };

  return (
    <div className="wallet-dropdown-container" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="wallet-btn">
        Wallet {isOpen ? "▲" : "▼"}
      </button>

      {isOpen && (
        <div className="wallet-dropdown-menu">
          {!isAuthenticated ? (
            <button
              onClick={handleLogin}
              className="dropdown-item connect-item"
            >
              Connect Wallet
            </button>
          ) : (
            <>
              <div className="wallet-details">
                {connectedWallets && connectedWallets.length > 0 ? (
                  connectedWallets.map((wallet) => (
                    <div
                      key={wallet.address ?? wallet.walletClientType}
                      className="wallet-item"
                    >
                      <span>🔗 {wallet.walletClientType || "Wallet"}</span>
                      <span className="wallet-address">
                        {wallet.address
                          ? `${wallet.address.slice(0, 6)}...${wallet.address.slice(-4)}`
                          : "No address"}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="wallet-item">
                    <span>🔗 Connected</span>
                  </div>
                )}
              </div>
              <button
                onClick={handleLogout}
                className="dropdown-item disconnect-item"
              >
                Disconnect
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default WalletConnection;
