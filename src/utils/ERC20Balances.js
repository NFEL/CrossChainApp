import { useContractReads, erc20ABI, useAccount } from "wagmi";
import { tokenList, MultiCallABI } from "../Constants";

// const supportedChains = Object.values(chainList);

const tokenContractsChainSeparated = (chain, walletAddress) => {
  return {
    tokens: tokenList[chain],
    contracts: tokenList[chain].map((token) => {
      if (token.address != "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE") {
        return {
          addressOrName: token.address,
          contractInterface: erc20ABI,
          functionName: "balanceOf",
          args: [walletAddress],
          chainId: chain,
        };
      } else {
        //https:etherscan.io/address/0xca11bde05977b3631167028862be2a173976ca11#readContract#F9
        return {
          addressOrName: "0xca11bde05977b3631167028862be2a173976ca11",
          contractInterface: MultiCallABI,
          functionName: "getEthBalance",
          args: [walletAddress],
          chainId: chain,
        };
      }
    }),
  };
};

function Balances(address, chainId) {
  const { contracts, tokens } = tokenContractsChainSeparated(chainId, address);
  const { data: balances } = useContractReads({
    contracts,
    allowFailure: true,
    suspense: true,
    // watch: true,
    // cacheOnBlock: true,
  });
  const resBalances = [];
  if (balances) {
    for (let i = 0; i < balances.length; i++) {
      const balance = balances[i];
      if (balance != null) {
        if (Number(balance) > 0) {
          const token = tokens[i];
          resBalances.push({
            balance,
            chainId,
            ...token,
          });
        }
      }
    }
  }
  return resBalances;
}

function Profile(chainId) {
  const { address } = useAccount();
  const profileResult = [];
  Balances(address, chainId).forEach((blc) => profileResult.push(blc));

  // supportedChains.forEach((chain) => {
  //   try {
  //     // profileResult[chain] = Balances(address, chain.id);
  //     // profileResult Balances(address, chain.id);
  //     Balances(address, chain.id).forEach((blc) => profileResult.push(blc));
  //   } catch (error) {
  //     console.log(error)
  //   }
  // });
  return profileResult;
}

export const getUserBalances = (chainId) => {
  return Profile(chainId);
};
