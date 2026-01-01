import React, { useState } from "react";
import { WalletBalanceDisplay } from "../hooks/useWalletBalance";
import { SelectWalletModalComponent } from "./SelectWalletModal";
import { WalletOverviewComponent } from "./WalletOverviewModal";
import { FundModalComponent } from "./FundModal";

const GameDashboard: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<string>("");

  const games = [
    { id: "slots", name: "🎰 Slots", description: "Classic slot machine" },
    { id: "blackjack", name: "♠️ Blackjack", description: "Beat the dealer" },
    { id: "roulette", name: "🎲 Roulette", description: "Spin to win" },
  ];

  return (
    <div className="game-dashboard">
      <div className="dashboard-header">
        <h2>Game Dashboard</h2>
        <div className="balance-info">
          <WalletBalanceDisplay />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <SelectWalletModalComponent />
            <WalletOverviewComponent />
            <FundModalComponent />
          </div>
        </div>
      </div>

      <div className="games-grid">
        {games.map((game) => (
          <div
            key={game.id}
            className="game-card"
            onClick={() => setSelectedGame(game.id)}
          >
            <h3>{game.name}</h3>
            <p>{game.description}</p>
            <button className="play-btn">Play Now</button>
          </div>
        ))}
      </div>

      {selectedGame && (
        <GameArea gameType={selectedGame} onClose={() => setSelectedGame("")} />
      )}
    </div>
  );
};

const GameArea: React.FC<{ gameType: string; onClose: () => void }> = ({
  gameType,
  onClose,
}) => (
  <div className="game-area">
    <div className="game-header">
      <h3>Playing: {gameType}</h3>
      <button onClick={onClose} className="close-btn">
        ✕
      </button>
    </div>
    <div className="game-content">
      <p>Game content for {gameType} would go here</p>
      <button className="bet-btn">Place Bet</button>
    </div>
  </div>
);

export default GameDashboard;
