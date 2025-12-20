import { useIsAuthenticated } from "fare-privy-core";
import LoginPrompt from "../components/LoginPrompt";
import CasinoGame from "../components/CasinoGame";

export function ProtectedGame() {
  const { isAuthenticated } = useIsAuthenticated();

  if (!isAuthenticated) return <LoginPrompt />;
  return <CasinoGame />;
}
