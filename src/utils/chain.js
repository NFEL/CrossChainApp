import { chainList } from "../Constants";

export const supportedChains = Object.values(chainList);

export const getChainIdByName = (chainName) => {
    for (let chainId in chainList) {
        if (chainList[chainId].chain.toLowerCase() === chainName.toLowerCase()) return chainId;
    }
};
export const getChainNameById = (chainId) => chainList[Number(chainId)];
export const chainIds = chainList;