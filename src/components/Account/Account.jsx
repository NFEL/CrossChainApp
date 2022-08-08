import "@rainbow-me/rainbowkit/styles.css";

import { ConnectButton } from "@rainbow-me/rainbowkit";

function Account() {
  return (
    <>
      <ConnectButton
        accountStatus={{
          smallScreen: "avatar",
          largeScreen: "full",
        }}
        chainStatus="icon"
        showBalance={{
          smallScreen: false,
          largeScreen: true,
        }}
      />
    </>
  );
}

export default Account;
