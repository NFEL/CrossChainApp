import { chainList } from "../Constants";

export const nativeAddress = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

export const getNativeByChain = (chain) =>
  chainList[chain]?.currencySymbol || "NATIVE";

export const getChainById = (chain) =>
  chainList[chain]?.chainId || chainList[parseInt(chain, 16)]?.chainId || null;

export const getExplorer = (chain) => chainList[chain]?.explorers[0].url;

export const getWrappedNative = (chain) =>
  chainList[chain]?.wrapped.address || null;

export const supportedChains = Object.values(chainList);
export const supportedChainIds = Object.keys(chainList);

export const getChainIdByName = (chainName) => {
  for (let chainId in chainList) {
    if (chainList[chainId].chain.toLowerCase() === chainName.toLowerCase())
      return chainId;
  }
};
export const getChainNameById = (chainId) => chainList[Number(chainId)].chain;

// export const chainIds = {};
// Object.keys(chainList).forEach((chainId) => chainIds[chainId] = chainList[chainId].chain)

export const IsNative = (address) =>
  address.toLowerCase() === nativeAddress.toLowerCase();
