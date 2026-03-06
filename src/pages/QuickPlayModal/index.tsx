import { PageWrapper } from "../../components/Pagewrapper";
import { QuickPlayComponent } from "../../components/QuickPlayModal";
import { QuickplayFeatures } from "../../data/features";
import { QuickplayModalPorps } from "../../data/props";

export const QuickplayPage = () => {
  return (
    <PageWrapper
      title="QuickPlay Modal"
      description="A controlled modal for enabling quickplay setup with a consumer-provided approval flow.

"
      codeExample={<QuickPlayComponent />}
      features={QuickplayFeatures}
      props={QuickplayModalPorps}
      codeSnippet={undefined}
      advancedCodeSnippet={undefined}
    />
  );
};
