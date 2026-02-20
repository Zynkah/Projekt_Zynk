import { FundModalComponent } from "../../components/FundModal";
import { PageWrapper } from "../../components/Pagewrapper";
import { FundWalletFeatures } from "../../data/features";
import { FundWalletCodeProps } from "../../data/props";
import { RecommendedUsage } from './CodeSnippets';
import { AdvancedUsage } from "./CodeSnippets";


export const FundWalletPage = () => {
  return (
    <PageWrapper
      title="Fund Wallet Modal"
      description="You can fully control the modal's images, navigation, and step logic from your app. The modal will call onClose when the user closes it."
      codeExample={<FundModalComponent />}
      features={FundWalletFeatures}
      props={FundWalletCodeProps}
      codeSnippet={<RecommendedUsage />}
      advancedCodeSnippet={<AdvancedUsage />}
    />
  );
};
