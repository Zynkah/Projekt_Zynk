import { SelectWalletModal, useConnectedWallets } from "fare-privy-core";
import { useState } from "react";
import dragIcon from "../assets/icons/drag-bar.svg";
import caretDownIcon from "../assets/icons/caret-down.svg";
import privyIcon from "../assets/icons/privy-icon.svg";
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
      <button className="wallet-btn" onClick={() => setWalletModalOpen(true)}>
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
            dragBar: dragIcon,
            privyIcon: privyIcon,
            caretDown: caretDownIcon,
            linkWallet: linkwallet,
          }}
          isMobileScreen={isMobileScreen}
        />
      )}
    </>
  );
};
