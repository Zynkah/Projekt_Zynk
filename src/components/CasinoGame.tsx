import React, { useState } from "react";
import { useWalletAddresses } from "fare-privy-core";
import { BalanceDisplay } from "../hooks/useWalletAddress";

interface Game {
  id: string;
  name: string;
  icon: string;
  description: string;
  minBet: number;
  maxBet: number;
}

const CasinoGame: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [betAmount, setBetAmount] = useState<number>(0.1);
  const [gameResult, setGameResult] = useState<string>("");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const { primarySolanaAddress } = useWalletAddresses();

  // Create a simple logout function that reloads the page
  // This will reset the Privy state
  const handleLogout = () => {
    window.location.reload();
  };

  const games: Game[] = [
    {
      id: "slots",
      name: "Lucky Slots",
      icon: "🎰",
      description: "Classic 3-reel slot machine",
      minBet: 0.01,
      maxBet: 10,
    },
    {
      id: "coinflip",
      name: "Coin Flip",
      icon: "🪙",
      description: "Double or nothing",
      minBet: 0.01,
      maxBet: 5,
    },
    {
      id: "dice",
      name: "Dice Roll",
      icon: "🎲",
      description: "Roll high to win",
      minBet: 0.01,
      maxBet: 3,
    },
    {
      id: "blackjack",
      name: "Blackjack",
      icon: "♠️",
      description: "Beat the dealer",
      minBet: 0.05,
      maxBet: 20,
    },
  ];

  const playGame = async () => {
    if (!selectedGame) return;

    setIsPlaying(true);
    setGameResult("");

    // Simulate game delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simple random outcome
    const isWin = Math.random() > 0.5;
    const multiplier =
      selectedGame.id === "slots" ? (Math.random() > 0.8 ? 10 : 2) : 2;

    if (isWin) {
      setGameResult(
        `🎉 You won ${(betAmount * multiplier).toFixed(4)} ${
          primarySolanaAddress ? "SOL" : "ETH"
        }!`
      );
    } else {
      setGameResult(
        `😢 You lost ${betAmount.toFixed(4)} ${
          primarySolanaAddress ? "SOL" : "ETH"
        }`
      );
    }

    setIsPlaying(false);
  };

  return (
    <div className="casino-game">
      <header className="casino-header">
        <h1>🎰 Zynk Casino</h1>
        <div className="header-info">
          <BalanceDisplay />
          <button onClick={handleLogout} className="logout-btn">
            Disconnect
          </button>
        </div>
      </header>

      {!selectedGame ? (
        <div className="game-selection">
          <h2>Choose Your Game</h2>
          <div className="games-grid">
            {games.map((game) => (
              <div
                key={game.id}
                className="game-card"
                onClick={() => setSelectedGame(game)}
              >
                <div className="game-icon">{game.icon}</div>
                <h3>{game.name}</h3>
                <p>{game.description}</p>
                <div className="bet-range">
                  Min: {game.minBet} | Max: {game.maxBet}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="game-play">
          <div className="game-header">
            <button onClick={() => setSelectedGame(null)} className="back-btn">
              ← Back to Games
            </button>
            <h2>
              {selectedGame.icon} {selectedGame.name}
            </h2>
          </div>

          <div className="game-area">
            <div className="game-display">
              {isPlaying ? (
                <div className="game-loading">
                  <div className="spinner"></div>
                  <p>Playing...</p>
                </div>
              ) : gameResult ? (
                <div className="game-result">
                  <p>{gameResult}</p>
                </div>
              ) : (
                <div className="game-ready">
                  <p>Ready to play {selectedGame.name}!</p>
                  <p>Place your bet and click play</p>
                </div>
              )}
            </div>

            <div className="game-controls">
              <div className="bet-controls">
                <label>Bet Amount:</label>
                <div className="bet-input-group">
                  <input
                    type="number"
                    value={betAmount}
                    onChange={(e) => setBetAmount(Number(e.target.value))}
                    min={selectedGame.minBet}
                    max={selectedGame.maxBet}
                    step={0.01}
                    disabled={isPlaying}
                  />
                  <span className="currency">
                    {primarySolanaAddress ? "SOL" : "ETH"}
                  </span>
                </div>
              </div>

              <button
                onClick={playGame}
                disabled={
                  isPlaying ||
                  betAmount < selectedGame.minBet ||
                  betAmount > selectedGame.maxBet
                }
                className="play-btn"
              >
                {isPlaying
                  ? "Playing..."
                  : `Play for ${betAmount} ${
                      primarySolanaAddress ? "SOL" : "ETH"
                    }`}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CasinoGame;
