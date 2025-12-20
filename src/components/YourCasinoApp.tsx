import React from "react";
import { useIsAuthenticated } from "fare-privy-core";
import WalletConnection from "./WalletConnection";
import GameDashboard from "./GameDashboard";

const YourCasinoApp: React.FC = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <div className="casino-app">
      <header className="app-header">
        <h1>🎰 Zynk Casino</h1>
        <WalletConnection />
      </header>

      <main className="app-main">
        {isAuthenticated ? <GameDashboard /> : <LandingPage />}
      </main>
    </div>
  );
};

const LandingPage: React.FC = () => (
  <div className="landing-page">
    <h2>Welcome to Zynk Casino</h2>
    <p>Connect your wallet to start playing!</p>
  </div>
);

export default YourCasinoApp;
