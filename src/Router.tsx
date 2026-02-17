import { Routes, Route } from "react-router-dom";
import GameDashboard from "./pages/GameDashboard";
import { SwitchWalletModal } from "./pages/SwitchWalletModal";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GameDashboard />} />
      <Route path="/game-dashboard" element={<GameDashboard />} />
      <Route path="/switch-wallet" element={<SwitchWalletModal />} />
      {/* <Route path="/wallet-overview" element={<div><h2>Wallet Overview Modal</h2></div>} />
        <Route path="/fund-wallet" element={<div><h2>Fund Wallet Modal</h2></div>} />
        <Route path="/quickplay" element={<div><h2>QuickPlay Modal</h2></div>} /> */}
    </Routes>
  );
};
