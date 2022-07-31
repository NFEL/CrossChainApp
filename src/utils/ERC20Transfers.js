const apiKeys = {
  56: "P58NE9WU4EZ7JVACGEM7867BFB6HJQ55ED",
  1: "GIZN2AYIINNSQJYW7DQ576J5VIHQGVZMD5",
};

const chainExplorerTemplates = {
  transactionHistory: {
    1: ({ walletAddress, API_KEY }) =>
      `https://api.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${API_KEY}`,
    56: ({ walletAddress, API_KEY }) =>
      `https://api.bscscan.com/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${API_KEY}`,
  },
  tokenTransfer: {
    1: ({ tokenAddress, walletAddress, API_KEY }) =>
      `https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=${tokenAddress}&address=${walletAddress}&page=1&offset=5&startblock=0&endblock=999999999&sort=asc&apikey=${API_KEY}`,
    56: ({ tokenAddress, walletAddress, API_KEY }) =>
      `https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=${tokenAddress}&address=${walletAddress}&page=1&offset=5&startblock=0&endblock=999999999&sort=asc&apikey=${API_KEY}`,
  },
};
const chainExplorer = (props) => {
  const { tokenAddress, walletAddress, func, chain } = props;
  console.log({ props });
  const API_KEY = apiKeys[chain];
  const url = chainExplorerTemplates[func][chain]({
    tokenAddress,
    walletAddress,
    API_KEY,
  });
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};
export const ERC20TransfersHistory = (props) =>
  chainExplorer({ func: "tokenTransfer", ...props });
// console.log(chainExplorer({
//     func: "tokenTransfer",
//     chain: "1",
//     walletAddress: "0x0cbA4AB300d1A0173291Bc3df254657d3560798B",
//     tokenAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F"
// }))
