import React from "react";
import "./styles.css";
import { useLogin } from "@privy-io/react-auth";
import { Features } from "./Features";

const LoginPrompt: React.FC = () => {
  const { login } = useLogin();

  const handleConnect = async () => {
    try {
      await login();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="login-prompt">
      <div className="section-container">
        <div className="login-header">
          <h2>Welcome to Projekt Zynk</h2>
          <p>Connect your wallet to start playing and win big!</p>
        </div>
        <Features />

        <button onClick={handleConnect} className="login-btn">
          🚀 Connect Wallet & Play
        </button>

        <div className="supported-wallets">
          <p>Supported wallets:</p>
          <div className="wallet-icons">
            <span>🦊 MetaMask</span>
            <span>👻 Phantom</span>
            <span>🔥 Solflare</span>
            <span>📱 WalletConnect</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPrompt;
