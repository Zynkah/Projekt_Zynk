export const FundWalletFeatures = [
  "Animated card carousel",
  "Transfer funds via exchange or card",
  "Uses useWalletBalance for live balances",
  "Fully customizable images, navigation, and step control",
  "Minimal required props",
];

export const WalletOverviewFeatures = [
  "Displays active wallet with icon and name",
  "Fallback icon if wallet has no icon",
  "Option click handler for custom actions",
];

export const SelectWalletFeatures = [
  "Fully modular component structure with dedicated, focused sub-components:",
  "SelectWalletModalContent - Main content container and orchestration",
  "SelectWalletModalHeader - Header with drag bar support (rendered once inside content container)",
  "SelectWalletItemList - Individual wallet item with accordion and embedded wallets",
  "LinkWallet - Separate component for wallet linking functionality",
];

export const QuickplayFeatures = [
  "Uses your own onApprove logic for setup/transactions",
  "Approve button is enabled only when the currenlty active wallet is Privy",
  "Clear instructional guide for non-privy active wallets (Connect Privy Wallet label+helper text)",
  "OPtional currencyName display override",
];
