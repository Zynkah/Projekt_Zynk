import React from "react";
import WalletConnection from "./WalletConnection";
import GameDashboard from "./GameDashboard";

const YourCasinoApp: React.FC = () => {

  return (
    <div className="casino-app">
      <header className="app-header">
        <h1>Projekt Zynk</h1>
        <WalletConnection />
      </header>

      <main className="app-main">
        <GameDashboard /> 
      </main>
    </div>
  );
};


export default YourCasinoApp;
