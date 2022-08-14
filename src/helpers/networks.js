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

const apiKeys = {
  250: "Q15X46ZFREICQN4VZNW6SYGU9WKF2THK11",
  56: "P58NE9WU4EZ7JVACGEM7867BFB6HJQ55ED",
  1: "GIZN2AYIINNSQJYW7DQ576J5VIHQGVZMD5",
};
// TODO Add support for other chains
const chainExplorerTemplates = {
  transactionHistory: {
    1: ({ walletAddress, API_KEY }) =>
      `https://api.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${API_KEY}`,
    56: ({ walletAddress, API_KEY }) =>
      `https://api.bscscan.com/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${API_KEY}`,
    250: ({ walletAddress, API_KEY }) =>
      `https://api.ftmscan.com/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${API_KEY}`,
  },
  tokenTransfer: {
    1: ({ tokenAddress, walletAddress, API_KEY }) =>
      `https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=${tokenAddress}&address=${walletAddress}&page=1&offset=5&startblock=0&endblock=999999999&sort=asc&apikey=${API_KEY}`,
    56: ({ tokenAddress, walletAddress, API_KEY }) =>
      `https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=${tokenAddress}&address=${walletAddress}&page=1&offset=5&startblock=0&endblock=999999999&sort=asc&apikey=${API_KEY}`,
    250: ({ tokenAddress, walletAddress, API_KEY }) =>
      `https://api.ftmscan.com/api?module=account&action=tokentx&contractaddress=${tokenAddress}&address=${walletAddress}&page=1&offset=5&startblock=0&endblock=999999999&sort=asc&apikey=${API_KEY}`,
  },
};
const chainExplorer = (props) => {
  const { tokenAddress, walletAddress, func, chain } = props;
  const API_KEY = apiKeys[chain];
  const funcTofetch = chainExplorerTemplates[func][chain];
  if (!funcTofetch) {
    return [];
  } else {
    const url = funcTofetch({
      tokenAddress,
      walletAddress,
      API_KEY,
    });
    return fetch(url)
      .then((response) => response.json())
      .then((data) => data.result)
      .catch((error) => console.log(error));
  }
};
export const ERC20TransfersHistory = (props) =>
  chainExplorer({ func: "tokenTransfer", ...props });

export const TxHistory = (props) =>
  chainExplorer({ func: "transactionHistory", ...props });
