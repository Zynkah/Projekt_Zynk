import { SelectWalletModal, useConnectedWallets } from "fare-privy-core";
import { useState } from "react";
import linkwallet from "../assets/icons/link-wallet.png";
import { usePrivy } from "@privy-io/react-auth";

export const SelectWalletModalComponent = () => {
  const [isWalletModalOpen, setWalletModalOpen] = useState(false);
  const { linkWallet } = usePrivy();

  const { connectedWallets, embeddedWallet } = useConnectedWallets();
  const wallets = connectedWallets || [];

  // Default to embeddedWallet's walletClientType if available, else empty string
  const [appWalletClientType, setAppWalletClientType] = useState<string>(
    embeddedWallet?.walletClientType || ""
  );

  const linkWalletToUser = async () => {
    try {
      await linkWallet();
      // Optionally, show a success message or refresh wallet state
    } catch (err) {
      // Handle error
      console.error("Failed to link wallet:", err);
    }
  };

  const embeddedWalletLinks =
    embeddedWallet && Array.isArray(embeddedWallet)
      ? embeddedWallet
      : embeddedWallet
      ? [embeddedWallet]
      : [];

  // Simple check for mobile screen width; adjust logic as needed
  const isMobileScreen = window.innerWidth <= 768;

  return (
    <>
      <button onClick={() => setWalletModalOpen(true)}>
        Open Switch Wallet Modal
      </button>
      {isWalletModalOpen && (
        <SelectWalletModal
          isOpen={isWalletModalOpen}
          onClose={() => setWalletModalOpen(false)}
          wallets={wallets} // Array of wallet objects
          appWalletClientType={appWalletClientType}
          setAppWalletClientType={setAppWalletClientType}
          linkWalletToUser={linkWalletToUser}
          embeddedWalletLinks={embeddedWalletLinks}
          icons={{
            dragBar: "/icons/drag-bar.svg",
            privyIcon: "/icons/privy.svg",
            caretDown: "/icons/caret-down.svg",
            linkWallet: linkwallet,
          }}
          isMobileScreen={isMobileScreen}
        />
      )}
    </>
  );
};
