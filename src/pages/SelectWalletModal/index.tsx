import { PageWrapper } from "../../components/Pagewrapper";
import { SelectWalletModalComponent } from "../../components/SelectWalletModal";
import { SelectWalletFeatures } from "../../data/features";
import { SelectWalletModalProps } from "../../data/props";

export const SelectWalletModal = () => {
  return (
    <PageWrapper
      title="Select Wallet Modal"
      description="Animated, responsive modal for selecting and linking wallets. You provide wallet data and icons."
      codeExample={<SelectWalletModalComponent />}
      features={SelectWalletFeatures}
      props={SelectWalletModalProps}
      codeSnippet={undefined}
      advancedCodeSnippet={undefined}
    />
  );
};
