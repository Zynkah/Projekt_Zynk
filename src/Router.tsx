import { Routes, Route } from "react-router-dom";
import GameDashboard from "./pages/GameDashboard";
import { SwitchWalletModal } from "./pages/SwitchWalletModal";
import { WalletInfoPage } from "./pages/WalletInfo";
import { WalletOverviewPage } from "./pages/WalletOverviewModal";
import { FundWalletPage } from "./pages/FundWalletModal/index";
import { QuickPlayComponent } from "./components/QuickPlayModal";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GameDashboard />} />
      <Route path="/game-dashboard" element={<GameDashboard />} />
      <Route path="/wallet-info" element={<WalletInfoPage />} />
      <Route path="/switch-wallet" element={<SwitchWalletModal />} />
      <Route path="/wallet-overview" element={<WalletOverviewPage />} />
      <Route path="/fund-wallet" element={<FundWalletPage />} />
      <Route path="/quickplay" element={<QuickPlayComponent />} />
    </Routes>
  );
};
