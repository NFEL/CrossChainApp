import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import "./index.css";
import "@rainbow-me/rainbowkit/styles.css";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import Home from "./components/QuickStart";

/** Get your free Moralis Account https://moralis.io/ */

import {
  RainbowKitProvider,
  connectorsForWallets,
  wallet,
  lightTheme,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { chainList } from "./Constants";
const supportedChains = Object.values(chainList);

const { chains, provider } = configureChains(supportedChains, [
  // TODO Make this env
  alchemyProvider({ alchemyId: "pv-xSVPKpdeM_NXPsyr1n8rhpxvTnIDx" }),
  publicProvider(),
]);

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [wallet.walletConnect({ chains }), wallet.metaMask({ chains })],
  },
  {
    groupName: "Others",
    wallets: [
      wallet.walletConnect({ chains }),
      wallet.rainbow({ chains }),
      wallet.brave({ chains, shimDisconnect: true }),
      wallet.trust({ chains }),
      wallet.ledger({ chains }),
      wallet.coinbase({ chains, appName: "My RainbowKit App" }),
    ],
  },
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const Disclaimer = ({ Text, Link }) => (
  <Text>
    By connecting your wallet, you agree to the{" "}
    <Link href="https://termsofservice.xyz">Terms of Service</Link> and
    acknowledge you have read and understand the protocol{" "}
    <Link href="https://disclaimer.xyz">Disclaimer</Link>
  </Text>
);

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const Application = () => {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  //Validate
  if (!APP_ID || !SERVER_URL)
    throw new Error(
      "Missing Moralis Application ID or Server URL. Make sure to set your .env file.",
    );
  if (isServerInfo)
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <App isServerInfo />
      </MoralisProvider>
    );
  else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Home />
      </div>
    );
  }
};

ReactDOM.render(
  <StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        showRecentTransactions={true} // https://www.rainbowkit.com/docs/recent-transactions
        initialChain={56}
        theme={{
          lightMode: lightTheme(),
          darkMode: darkTheme(),
        }}
        appInfo={{
          appName: "RainbowKit Demo",
          disclaimer: Disclaimer,
        }}
        chains={chains}
      >
        <Application />
      </RainbowKitProvider>
    </WagmiConfig>
  </StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
