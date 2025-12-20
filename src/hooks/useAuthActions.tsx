import { useLogin, useLogout, usePrivy } from "@privy-io/react-auth";

export const useAuthActions = () => {
  const { login } = useLogin();
  const { logout } = useLogout();
  const { ready, authenticated } = usePrivy();

  return {
    login,
    logout,
    isReady: ready,
    isAuthenticated: authenticated,
  };
};
