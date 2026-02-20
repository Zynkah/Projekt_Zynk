import { PrivyProvider } from "fare-privy-core";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <PrivyProvider
      appId="cmhkpstjx015mk40cs3gtro58"
      config={{
        appearance: {
          theme: "dark",
          accentColor: "#0066ff",
          walletChainType: "ethereum-and-solana",
        },
        loginMethods: ["wallet", "email", "sms"],
      }}
    >
      <Layout />
    </PrivyProvider>
  );
}

export default App;
