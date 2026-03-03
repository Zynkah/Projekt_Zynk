import { PageWrapper } from "../../components/Pagewrapper";
import { WalletOverviewComponent } from "../../components/WalletOverviewModal";
import { WalletOverviewFeatures } from "../../data/features";
import { WalletOverviewProps } from "../../data/props";

export const WalletOverviewPage = () => {
  return (
    <PageWrapper
      title="Wallet Overview"
      description="Displays the active wallet's name and icon."
      codeExample={<WalletOverviewComponent />}
      features={WalletOverviewFeatures}
      props={WalletOverviewProps}
      codeSnippet={undefined}
      advancedCodeSnippet={undefined}
    />
  );
};
