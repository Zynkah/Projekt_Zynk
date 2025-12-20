import React from "react";
import { useLogin } from "@privy-io/react-auth";

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
      <div className="login-container">
        <div className="login-header">
          <h2>🎰 Welcome to Zynk Casino</h2>
          <p>Connect your wallet to start playing and win big!</p>
        </div>

        <div className="login-features">
          <div className="feature">
            <span className="feature-icon">🔒</span>
            <h3>Secure & Safe</h3>
            <p>Your funds are always under your control</p>
          </div>
          <div className="feature">
            <span className="feature-icon">⚡</span>
            <h3>Instant Payouts</h3>
            <p>Win and withdraw immediately</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🎮</span>
            <h3>Provably Fair</h3>
            <p>All games are verifiably fair</p>
          </div>
        </div>

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
