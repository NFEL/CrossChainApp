import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
// import { useAccount } from "wagmi";
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
      fromTokenAddress: params.fromToken.address, // The token you want to swap
      toTokenAddress: params.toToken.address, // The token you want to receive
      amount: Moralis.Units.Token(
        params.fromAmount,
        params.fromToken.decimals,
      ).toString(),
    });

  async function trySwap(params) {
    // const { fromToken, fromAmount, chain } = params;
    console.log(params);
    alert("not yet implemented! ");

    // https://83bhvyizqwpv.usemoralis.com:2053/server/functions/oneInch_quote
    // {"chain":"bsc","fromTokenAddress":"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","toTokenAddress":"0xe9e7cea3dedca5984780bafc599bd69add087d56","amount":"1000000000000000","_ApplicationId":"J2WcuA4AFsnToKMvXyPwL34w25aq0wsbcCxapyel","_ClientVersion":"js0.0.176","_InstallationId":"4c15c1d3-830a-45f8-b805-e56b266e217a","_SessionToken":"r:37e814798c49ab7729eb8b402363f275"}
    // {"result":{"status":200,"data":{"success":true,"result":{"fromToken":{"symbol":"BNB","name":"BNB","decimals":18,"address":"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","logoURI":"https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c_1.png","tags":["native"]},"toToken":{"symbol":"BUSD","name":"BUSD Token","decimals":18,"address":"0xe9e7cea3dedca5984780bafc599bd69add087d56","logoURI":"https://tokens.1inch.io/0x4fabb145d64652a948d72533023f6e7a623c7c53.png","tags":["tokens"]},"toTokenAmount":"290715427287692957","fromTokenAmount":"1000000000000000","protocols":[[[{"name":"CHEESESWAP","part":100,"fromTokenAddress":"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","toTokenAddress":"0xe9e7cea3dedca5984780bafc599bd69add087d56"}]]],"estimatedGas":252364}}}}

    // {"chain":"bsc","fromTokenAddress":"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","toTokenAddress":"0xe9e7cea3dedca5984780bafc599bd69add087d56","amount":"1000000000000000","fromAddress":"0xb49f17514d6f340d7bcdffc47526c9a3713697e0","slippage":1,"_ApplicationId":"J2WcuA4AFsnToKMvXyPwL34w25aq0wsbcCxapyel","_ClientVersion":"js0.0.176","_InstallationId":"4c15c1d3-830a-45f8-b805-e56b266e217a","_SessionToken":"r:37e814798c49ab7729eb8b402363f275"}
    // https://83bhvyizqwpv.usemoralis.com:2053/server/functions/oneInch_swap

    // const amount = Moralis.Units.Token(
    //   fromAmount,
    //   fromToken.decimals,
    // ).toString();
    // if (fromToken.address !== "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee") {
    //   await Moralis.Plugins.oneInch
    //     .hasAllowance({
    //       chain, // The blockchain you want to use (eth/bsc/polygon)
    //       fromTokenAddress: fromToken.address, // The token you want to swap
    //       fromAddress: account, // Your wallet address
    //       amount,
    //     })
    //     .then(async (allowance) => {
    //       console.log(allowance);
    //       if (!allowance) {
    //         await Moralis.Plugins.oneInch.approve({
    //           chain, // The blockchain you want to use (eth/bsc/polygon)
    //           tokenAddress: fromToken.address, // The token you want to swap
    //           fromAddress: account, // Your wallet address
    //         });
    //       }
    //     })
    //     .catch((e) => alert(e.message));
    // }

    // await doSwap(params)
    //   .then((receipt) => {
    //     if (receipt.statusCode !== 400) {
    //       alert("Swap Complete");
    //     }
    //     console.log(receipt);
    //   })
    //   .catch((e) => alert(e.message));
  }

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
