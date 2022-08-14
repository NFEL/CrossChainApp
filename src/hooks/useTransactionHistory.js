import { useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import { TxHistory } from "../helpers/networks";
// import { chainList } from "./../Constants";

export const useTransactionHistory = () => {
  const [transactionHistory, setTransactionHistory] = useState();
  const { address: walletAddress } = useAccount();
  const { chain } = useNetwork();
  const isInitialized = true;
  useEffect(() => {
    fetchTransactionHistory().then((result) => setTransactionHistory(result));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized, chain.id, walletAddress]);
  //TODO Make it for all supported chains
  const fetchTransactionHistory = async () => {
    const res = [];
    for (const chain of [1, 56, 250]) {
      const _res = await TxHistory({
        chain: chain,
        walletAddress,
      });
      res.push(_res);
    }
    return res.flat().sort((a, b) => b.timestamp - a.timestamp);
  };
  return {
    fetchERC20Transfers: fetchTransactionHistory,
    transactionHistory,
    chainId: chain.id,
  };
};
