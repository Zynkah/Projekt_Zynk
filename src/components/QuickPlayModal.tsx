import { useState } from "react";
import { QuickPlayModal } from "fare-privy-core";

export function QuickPlayComponent() {
  const [isVisible, setIsVisible] = useState(false);

  const handleApprove = async (formData: { amount: number; game: string }) => {
    // perform your app-specific quickplay setup/transaction logic
    await Promise.resolve(formData);
  };


  return (
    <>
      <button className="wallet-btn" onClick={() => setIsVisible(true)}>
        Open QuickPlay Modal
      </button>
      <QuickPlayModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        formData={{ amount: 10, game: "quickplay" }}
        onApprove={handleApprove}
        currencyName="ETH"
      />
    </>
  );
}
