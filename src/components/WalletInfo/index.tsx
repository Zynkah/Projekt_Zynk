import "./styles.css";
import { WalletBalanceDisplay } from "../../hooks/useWalletBalance";
import { FundModalComponent } from "../FundModal";
import { SelectWalletModalComponent } from "../SelectWalletModal";
import { WalletOverviewComponent } from "../WalletOverviewModal";
import { QuickPlayComponent } from "../QuickPlayModal";

export const WalletInfo = () => {
  return (
    <div className="balance-container">
      <div className="balance-display-wrapper">
        <WalletBalanceDisplay />
      </div>
      <div className="balance-buttons-wrapper">
        <SelectWalletModalComponent />
        <WalletOverviewComponent />
        <FundModalComponent />
        <QuickPlayComponent />
      </div>
    </div>
  );
};
