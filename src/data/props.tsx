export const FundWalletCodeProps = [
  {
    id: 1,
    prop: "isOpen",
    type: "boolean",
    description:
      "Controls the visibility of the Fund Wallet Modal. Set to true to open the modal and false to close it.",
  },
  {
    id: 2,
    prop: "onClose",
    type: "() => void",
    description:
      "Callback function to handle the closing of the Fund Wallet Modal.",
  },
  {
    id: 3,
    prop: "images",
    type: "string[]",
    description: "Custom images for exchanges/cards.",
  },
  {
    id: 4,
    prop: "stepIdx",
    type: "number",
    description: "(Optional) Current step index (carousel).",
  },
  {
    id: 5,
    prop: "setStepIdx",
    type: "(step: number) => void",
    description: "(Optional) Handler to change step index",
  },
  {
    id: 6,
    prop: "onTransferNext",
    type: "() => void",
    description: "(Optional) Handler for transfer next action",
  },
  {
    id: 7,
    prop: "onDepositNext",
    type: "() => void",
    description:
      "(Recommended) Handler for deposit next action. Pass the fundWallet function from useFundWallet (see below).",
  },
];

export const WalletOverviewProps = [
  {
    id: 1,
    prop: "activeWallet",
    type: "{ meta: { name: string; icon: string } }",
    description:
      "Object containing metadata about the active wallet, including its name and icon URL.",
  },
  {
    id: 2,
    prop: "onClick",
    type: "() => void",
    description: "(Optional) Click handler for the component.",
  },
  {
    id: 3,
    prop: "fallbackIcon",
    type: "string",
    description:
      "URL of the fallback icon to display if the active wallet does not have an icon.",
  },
];
