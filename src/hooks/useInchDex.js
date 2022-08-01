import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
// import { usePrepareSendTransaction } from "wagmi";
const useInchDex = (chain) => {
  const { Moralis } = useMoralis();
  // const { address: account } = useAccount();
  const [tokenList, setTokenlist] = useState();

  useEffect(() => {
    if (!Moralis?.["Plugins"]?.["oneInch"]) return null;
    Moralis.Plugins.oneInch
      .getSupportedTokens({ chain })
      .then((tokens) => setTokenlist(tokens.tokens));
  }, [Moralis, Moralis.Plugins, chain]);

  const getQuote = async (params) =>
    await Moralis.Plugins.oneInch.quote({
      chain: params.chain, // The blockchain  you want to use (eth/bsc/polygon)
      fromAddress: params.walletAddress,
      fromTokenAddress: params.fromToken.address, // The token you want to swap
      toTokenAddress: params.toToken.address, // The token you want to receive
      amount: Moralis.Units.Token(
        params.fromAmount,
        params.fromToken.decimals,
      ).toString(),
    });

  const trySwap = async (params) => {
    const amount = Moralis.Units.Token(
      params.fromAmount,
      params.fromToken.decimals,
    ).toString();
    if (
      params.fromToken.address !== "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
    ) {
      const { allowance, approveTrx } = await Moralis.Plugins.oneInch
        .hasAllowance({
          chain: params.chain, // The blockchain you want to use (eth/bsc/polygon)
          fromTokenAddress: params.fromToken.address, // The token you want to swap
          fromAddress: params.walletAddress, // Your wallet address
          amount,
        })
        .then(async (allowance) => {
          if (!allowance) {
            return {
              allowance,
              approveTrx: {
                to: params.fromToken.address,
                // approve infinity to "0x11111112542d85b3ef69ae05771c2dccff4faa26",
                data: "0x095ea7b300000000000000000000000011111112542d85b3ef69ae05771c2dccff4faa26ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                value: 0,
                from: params.walletAddress,
              },
            };
          } else {
            return { allowance: true, approveTrx: null };
          }
        })
        .catch((e) => alert(e.message));
      if (!allowance) return approveTrx;
    }
    const inchRes = await fetch(
      `${process.env.REACT_APP_MORALIS_SERVER_URL}/functions/oneInch_swap`,
      {
        method: "POST",
        body: JSON.stringify({
          chain: params.chain,
          fromTokenAddress: params.fromToken.address,
          toTokenAddress: params.toToken.address,
          fromAddress: params.walletAddress,
          amount,
          slippage: 1,
          _ApplicationId: process.env.REACT_APP_MORALIS_APPLICATION_ID,
        }),
      },
    ).then((res) => res.json());
    const tx = inchRes.result.data.result.data.tx;
    delete tx.gas;
    return tx;
    // const trx = usePrepareSendTransaction({
    //   request: tx
    // })
    // console.log(trx)

    // await doSwap(params)
    //   .then((receipt) => {
    //     if (receipt.statusCode !== 400) {
    //       alert("Swap Complete");
    //     }
    //     console.log(receipt);
    //   })
    //   .catch((e) => alert(e.message));
  };

  // async function doSwap(params) {

  //   return await Moralis.Plugins.oneInch.swap({
  //     chain: params.chain, // The blockchain you want to use (eth/bsc/polygon)
  //     fromTokenAddress: params.fromToken.address, // The token you want to swap
  //     toTokenAddress: params.toToken.address, // The token you want to receive
  //     amount: Moralis.Units.Token(
  //       params.fromAmount,
  //       params.fromToken.decimals,
  //     ).toString(),
  //     fromAddress: account, // Your wallet address
  //     slippage: 1,
  //   });
  // }

  return { getQuote, trySwap, tokenList };
};

export default useInchDex;
