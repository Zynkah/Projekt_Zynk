import {
  SEightSpaceIndent,
  SFourSpaceIndent,
  SSixSpaceIndent,
  STwoSpaceIndent,
} from "../../components/CodeBlocks/Indents";

import {
  SConst,
  SImport,
  SOnClick,
  SUseState,
} from "../../components/CodeBlocks/TextColors";

import {
  SBlueText,
  SOrangeText,
  SPurpleText,
  SRecommendedUsage,
  SRedText,
} from "../../components/Pagewrapper/styles";

const CodeSnippetWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SRecommendedUsage>
      <pre>
        <code>{children}</code>
      </pre>
    </SRecommendedUsage>
  );
};

const ImportUsage = () => {
  return (
    <>
      <SImport /> <SOrangeText>React</SOrangeText>, &#123; useState &#125; from
      "react"; <br />
      <SImport /> &#123;<SOrangeText> FundWalletModal </SOrangeText>&#125; from
      "fare-privy-core"; <br />
      <SImport /> &#123; useFundWallet &#125; from "@privy-io/react-auth";{" "}
      <br />
      <br />
    </>
  );
};

const FunctionWrapper = () => {
  return (
    <>
      <SRedText>export function</SRedText>{" "}
      <SOrangeText>FundWalletModalDemo</SOrangeText>() &#123; <br />
      <STwoSpaceIndent />
      <SConst /> [isOpen, setIsOpen] = <SUseState />(
      <SBlueText>false</SBlueText>);
      <br />
      <STwoSpaceIndent />
      <SConst /> &#123; fundWallet &#125; ={" "}
      <SPurpleText>useFundWallet</SPurpleText>();
      <br />
    </>
  );
};

const ReturnWrapper = () => {
  return (
    <>
      <STwoSpaceIndent />
      <SRedText>return</SRedText> (
      <br />
      <SFourSpaceIndent />
    </>
  );
};

export const RecommendedUsage = () => {
  return (
    <CodeSnippetWrapper>
      <ImportUsage />
      <FunctionWrapper />
      <ReturnWrapper />
      &#60;&#62;
      <br />
      <SSixSpaceIndent />
      &#60;button <SOnClick />
      &#123;() =&#62; <SPurpleText>setIsOpen</SPurpleText> (
      <SBlueText>true</SBlueText>
      )&#125;&#62;Open Fund Wallet Modal&#60;/button&#62;
      <br />
      <SSixSpaceIndent />
      &#60;
      <SOrangeText>FundWalletModal</SOrangeText> <SBlueText>isOpen</SBlueText>
      =&#123;isOpen&#125; <SBlueText>onClose</SBlueText>=&#123;() =&#62;{" "}
      <SPurpleText>setIsOpen</SPurpleText>(<SBlueText>false</SBlueText>
      )&#125;
      <br />
      <SSixSpaceIndent />
      <SBlueText>onDepositNext=</SBlueText>&#123;fundWallet&#125; /&#62; <br />
      <SFourSpaceIndent />
      &#60;/&#62;
      <br />
      <STwoSpaceIndent />
      );
      <br />
      &#125;
    </CodeSnippetWrapper>
  );
};

export const AdvancedUsage = () => {
  return (
    <CodeSnippetWrapper>
      <ImportUsage />
      <br />
      <SConst /> customImages = [<br />
      <STwoSpaceIndent />
      '/custom/coinbase.svg', <br />
      <STwoSpaceIndent />
      '/custom/binance.svg', <br />
      <STwoSpaceIndent />
      '/custom/kraken.svg', <br />
      <STwoSpaceIndent />
      '/custom/card.svg', <br />
      ]; <br />
      <br />
      <FunctionWrapper />
      <STwoSpaceIndent />
      <SConst /> [stepIdx, setStepIdx] = <SUseState />(<SBlueText>0</SBlueText>
      );
      <br />
      <STwoSpaceIndent />
      <SConst /> handleTransferNext = () =&#62;{" "}
      <SPurpleText>setStepIdx</SPurpleText>(<SBlueText>1</SBlueText>);
      <br />
      <ReturnWrapper />
      &#60;&#62;
      <br />
      <SSixSpaceIndent />
      &#60;button <SOnClick />
      &#123;() =&#62; <SPurpleText>setIsOpen</SPurpleText>(
      <SBlueText>true</SBlueText>)&#125;&#62;Open Fund Wallet
      Modal&#60;/button&#62;
      <br />
      <SSixSpaceIndent />
      &#60;<SOrangeText>FundWalletModal</SOrangeText> <SOnClick />
      &#123;() =&#62; <SPurpleText>setIsOpen</SPurpleText>(
      <SBlueText>true</SBlueText>)&#125;&#62;Open Fund Wallet
      Modal&#60;/button&#62;
      <br />
      <SEightSpaceIndent />
      <SBlueText>isOpen</SBlueText>
      =&#123;isOpen&#125;
      <br />
      <SEightSpaceIndent />
      <SBlueText>onClose</SBlueText>=&#123;() =&#62; &#123;{" "}
      <SPurpleText>setIsOpen</SPurpleText>(<SBlueText>false</SBlueText>);{" "}
      <SPurpleText>setStepIdx</SPurpleText>(<SBlueText>0</SBlueText>);
      &#125;&#125;
      <br />
      <SEightSpaceIndent />
      <SBlueText>images</SBlueText>=&#123;customImages&#125;
      <br />
      <SEightSpaceIndent />
      <SBlueText>stepIdx</SBlueText>=&#123;stepIdx&#125;
      <br />
      <SEightSpaceIndent />
      <SBlueText>setStepIdx</SBlueText>=&#123;setStepIdx&#125;
      <br />
      <SEightSpaceIndent />
      <SBlueText>onTransferNext</SBlueText>=&#123;handleTransferNext&#125;
      <br />
      <SEightSpaceIndent />
      <SBlueText>onDepositNext</SBlueText>=&#123;fundWallet&#125; <br />
      <SSixSpaceIndent />
      /&#62;
      <br />
      <SFourSpaceIndent />
      &#60;/&#62;
      <br />
      <STwoSpaceIndent />
      );
      <br />
      &#125;
    </CodeSnippetWrapper>
  );
};
