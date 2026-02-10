import { useState } from "react";
import { FundWalletModal, useActiveWallet } from "fare-privy-core";
import { useFundWallet } from "@privy-io/react-auth";

export function FundModalComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [stepIdx, setStepIdx] = useState(0);
  const handleTransferNext = () => setStepIdx(1);

  const { walletAddress } = useActiveWallet();
  const { fundWallet } = useFundWallet();

  const handleDepositNext = () => {
    setIsOpen(true);
    fundWallet({ address: walletAddress });
  };

  return (
    <>
      <button className="wallet-btn" onClick={() => setIsOpen(true)}>
        Open Fund Wallet Modal
      </button>
      <FundWalletModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setStepIdx(0);
        }}
        stepIdx={stepIdx}
        setStepIdx={setStepIdx}
        onTransferNext={handleTransferNext}
        onDepositNext={handleDepositNext}
      />
    </>
  );
}
