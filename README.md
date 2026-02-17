# 📦 fare-privy-core

**A React authentication + wallet management core for Privy-powered Web3 apps** — optimized for casino, gaming, and onchain experiences.

`fare-privy-core` streamlines building secure auth and wallet flows by wrapping Privy’s authentication and wallet primitives in focused React hooks and state logic — without imposing opinionated UI components.([GitHub][1])

---

## 🚀 Features

* 🔐 **Privy Authentication Integration**
  Full Privy login/logout support for Web2-style onboarding into your dApp.([GitHub][1])

* 🪙 **Wallet Management**
  Expose user wallets (embedded and external) with convenient hooks.([GitHub][1])

* 🔄 **Multi-Chain Ready**
  Built with both Ethereum and Solana workflows in mind.([GitHub][1])

* 📊 **Balance Fetching Utilities**
  Consistent balance access across wallets with easy hooks.([GitHub][1])

* 🧠 **Focused, Tree-Shakable Hooks**
  Import only what you use — keeps bundle size minimal.([GitHub][1])

* 🎨 **Themeable (Casino-Ready)**
  Customize colors, logos, and appearance for your brand.([GitHub][1])

* ⚡ **TypeScript Support**
  Fully typed with declarations for a better developer experience.([GitHub][1])

---

## 📦 Installation

```bash
npm install fare-privy-core @privy-io/react-auth styled-components@^5.3.0 valtio@^1.12.0
# or
pnpm add fare-privy-core @privy-io/react-auth styled-components@^5.3.0 valtio@^1.12.0
```

> ⚠️ **Peer Dependencies**
> — `@privy-io/react-auth` must be installed to integrate Privy auth.([GitHub][1])
> — **Styled Components v5** is required (v6 incompatible).([GitHub][1])
> — **Valtio v1** for wallet state.([GitHub][1])

---

## 🧠 Quick Start

Wrap your React app with the provider:

```tsx
import { PrivyProvider } from "fare-privy-core";

function App() {
  return (
    <PrivyProvider
      appId="YOUR_PRIVY_APP_ID"
      config={{
        walletChainType: "ethereum-and-solana"
      }}
      theme={{
        accentColor: "#0066FF",
        darkMode: true
      }}
    >
      <YourApp />
    </PrivyProvider>
  );
}
```

---

## 🪝 Core Hooks

Use the ready-to-import hooks to manage auth and wallets:

### 🔑 Authentication

```tsx
import { useAuthActions, useIsAuthenticated } from "fare-privy-core";

function LoginBtn() {
  const { login } = useAuthActions();
  return <button onClick={login}>Login</button>;
}
```

### 👛 Wallet Info

```tsx
import { useConnectedWallets, useWalletBalance } from "fare-privy-core";

function WalletDisplay() {
  const { primaryWallet } = useConnectedWallets();
  const balance = useWalletBalance(primaryWallet);
  return (
    <div>
      <p>Address: {primaryWallet?.address}</p>
      <p>Balance: {balance?.formatted}</p>
    </div>
  );
}
```

---

## 💼 Wallet State Management

Switch or inspect wallet state using Valtio:

```tsx
import { switchWalletState } from "fare-privy-core";
import { useSnapshot } from "valtio";

function MyWalletModal() {
  const snap = useSnapshot(switchWalletState);
  return snap.isWalletModalOpen ? <WalletModal /> : null;
}
```

---

## 🎨 Theming

You can theme the UI (used by hooks/modals if applicable):

```tsx
<PrivyProvider
  theme={{
    accentColor: "#FF6B35",
    logo: "/logo.png",
    darkMode: false
  }}
>
  <App />
</PrivyProvider>
```

---

## 🧭 Philosophy

`fare-privy-core` is **headless** — it doesn’t ship UI components. Instead, it:

✅ Simplifies Privy auth & wallet state
✅ Keeps bundle footprint small
✅ Gives full control over your UI
✅ Works with any design system or component library([GitHub][1])

---

## 📘 Examples

You can combine this core with your UI library to create:

* Casino login + wallet flows
* Web3 dashboards with balance hooks
* Cross-chain wallet connectors
* Custom branded auth experiences

---

## 📦 Contributing

Feel free to open issues, suggest improvements or extend hooks into your UI library.

---

## ⚖️ License

MIT

---

If you want, I can also generate a **demo app example**, **API reference**, or **TS types docs** to include in the repo.

[1]: https://github.com/fareplay-labs/privy-lib?utm_source=chatgpt.com "fareplay-labs/privy-lib"

