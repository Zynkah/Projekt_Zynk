import "./styles.css";
import { WalletBalanceDisplay } from "../../hooks/useWalletBalance";
import { FundModalComponent } from "../FundModal";
import { SelectWalletModalComponent } from "../SelectWalletModal";
import { WalletOverviewComponent } from "../WalletOverviewModal";

export const WalletInfo = () => {
  return (
    <div className="balance-info">
      <WalletBalanceDisplay />
      <div className="balance-buttons-wrapper ">
        <SelectWalletModalComponent />
        <WalletOverviewComponent />
        <FundModalComponent />
      </div>
    </div>
  );
};
