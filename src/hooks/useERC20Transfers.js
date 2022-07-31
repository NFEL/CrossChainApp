import { useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import { ERC20TransfersHistory } from "../utils/ERC20Transfers";

export const useERC20Transfers = () => {
  // const { account } = useMoralisWeb3Api();
  // const { isInitialized, account: walletAddress, chainId } = useMoralis();
  const [ERC20Transfers, setERC20Transfers] = useState();
  const { address: walletAddress } = useAccount();
  const { chain } = useNetwork();
  const isInitialized = true;
  // const chainId =
  // console.log({ isInitialized, chain })
  useEffect(() => {
    // if (isInitialized)
    fetchERC20Transfers().then((result) => setERC20Transfers(result));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized, chain.id, walletAddress]);

  const fetchERC20Transfers = async () => {
    return await ERC20TransfersHistory({
      chain: chain.id,
      walletAddress,
      tokenAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    }).then((result) => result.result);
  };
  return { fetchERC20Transfers, ERC20Transfers, chainId: chain.id };
};

// import { useEffect, useState } from "react";
// // import { useMoralis } from "react-moralis";
// import { useAccount, useNetwork } from "wagmi";

// export const useERC20Transfers = () => {
//   const { account: walletAddress } = useAccount();
//   const { chain:chainId } = useNetwork();

//   const isInitialized = true;
//   const [ERC20Transfers, setERC20Transfers] = useState();

//   useEffect(() => {
//     if (isInitialized)
//       fetchERC20Transfers().then((result) => setERC20Transfers(result));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isInitialized, chainId, walletAddress]);

//   const fetchERC20Transfers = async () => {
//     return await account
//       .getTokenTransfers({ address: walletAddress, chain: chainId })
//       .then((result) => result.result);
//   };
//   return { fetchERC20Transfers, ERC20Transfers, chainId };
// };
