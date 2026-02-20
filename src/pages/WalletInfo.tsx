import { PageWrapper } from "../components/Pagewrapper";
import { WalletBalanceDisplay } from "../hooks/useWalletBalance";


export const WalletInfoPage = () => {
  return (
    <PageWrapper title="Wallet Balance" description='' codeExample={<WalletBalanceDisplay />} features={[]} />
  );
};
