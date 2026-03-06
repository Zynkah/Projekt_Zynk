import { Routes, Route } from "react-router-dom";
import GameDashboard from "./pages/GameDashboard";
import { SelectWalletModal } from "./pages/SelectWalletModal";
import { WalletInfoPage } from "./pages/WalletInfo";
import { WalletOverviewPage } from "./pages/WalletOverview";
import { FundWalletPage } from "./pages/FundWalletModal/index";
import { QuickPlayComponent } from "./components/QuickPlayModal";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GameDashboard />} />
      <Route path="/game-dashboard" element={<GameDashboard />} />
      <Route path="/wallet-info" element={<WalletInfoPage />} />
      <Route path="/select-wallet" element={<SelectWalletModal />} />
      <Route path="/wallet-overview" element={<WalletOverviewPage />} />
      <Route path="/fund-wallet" element={<FundWalletPage />} />
      <Route path="/quickplay" element={<QuickPlayComponent />} />
    </Routes>
  );
};
