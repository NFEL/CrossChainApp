export const chainList = {"1": {"name": "Ethereum Mainnet", "chain": "ETH", "icon": "ethereum", "rpcUrls": {"infura": "https://mainnet.infura.io/v3/${INFURA_API_KEY}", "wss": "wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}", "default": "https://api.mycryptoapi.com/eth", "public": "https://cloudflare-eth.com"}, "rpc": ["https://mainnet.infura.io/v3/${INFURA_API_KEY}", "wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}", "https://api.mycryptoapi.com/eth", "https://cloudflare-eth.com"], "faucets": [], "nativeCurrency": {"name": "Ether", "symbol": "ETH", "decimals": 18}, "infoURL": "https://ethereum.org", "shortName": "eth", "chainId": 1, "networkId": 1, "slip44": 60, "ens": {"registry": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"}, "explorers": [{"name": "etherscan", "url": "https://etherscan.io", "standard": "EIP3091"}], "id": 1, "multicall": {"address": "0xcA11bde05977b3631167028862bE2a173976CA11"}}, "4": {"name": "Rinkeby", "title": "Ethereum Testnet Rinkeby", "chain": "ETH", "network": "testnet", "rpcUrls": {"default": "https://rinkeby.infura.io/v3/"}, "rpc": ["https://rinkeby.infura.io/v3/${INFURA_API_KEY}", "wss://rinkeby.infura.io/ws/v3/${INFURA_API_KEY}"], "faucets": ["http://fauceth.komputing.org?chain=4&address=${ADDRESS}", "https://faucet.rinkeby.io"], "nativeCurrency": {"name": "Rinkeby Ether", "symbol": "RIN", "decimals": 18}, "infoURL": "https://www.rinkeby.io", "shortName": "rin", "chainId": 4, "networkId": 4, "ens": {"registry": "0xe7410170f87102df0055eb195163a03b7f2bff4a"}, "explorers": [{"name": "etherscan-rinkeby", "url": "https://rinkeby.etherscan.io", "standard": "EIP3091"}], "id": 4, "multicall": {"address": "0xcA11bde05977b3631167028862bE2a173976CA11"}}, "5": {"name": "G\\u00f6rli", "title": "Ethereum Testnet G\\u00f6rli", "chain": "ETH", "network": "testnet", "rpcUrls": {"public": "https://goerli.infura.io/v3", "default": "https://rpc.goerli.mudit.blog/"}, "rpc": ["https://goerli.infura.io/v3", "https://rpc.goerli.mudit.blog/"], "faucets": ["http://fauceth.komputing.org?chain=5&address=${ADDRESS}", "https://goerli-faucet.slock.it?address=${ADDRESS}", "https://faucet.goerli.mudit.blog"], "nativeCurrency": {"name": "G\\u00f6rli Ether", "symbol": "GOR", "decimals": 18}, "infoURL": "https://goerli.net/#about", "shortName": "gor", "chainId": 5, "networkId": 5, "ens": {"registry": "0x112234455c3a32fd11230c42e7bccd4a84e02010"}, "explorers": [{"name": "etherscan-goerli", "url": "https://goerli.etherscan.io", "standard": "EIP3091"}], "id": 5, "multicall": {"address": "0xcA11bde05977b3631167028862bE2a173976CA11"}}, "10": {"name": "Optimism", "chain": "ETH", "rpcUrls": {"default": "https://mainnet.optimism.io/"}, "rpc": ["https://mainnet.optimism.io/"], "faucets": [], "nativeCurrency": {"name": "Ether", "symbol": "ETH", "decimals": 18}, "infoURL": "https://optimism.io", "shortName": "oeth", "chainId": 10, "networkId": 10, "explorers": [{"name": "etherscan", "url": "https://optimistic.etherscan.io", "standard": "EIP3091"}], "id": 10, "multicall": {"address": "0xcA11bde05977b3631167028862bE2a173976CA11"}}, "42": {"name": "Kovan", "title": "Ethereum Testnet Kovan", "chain": "ETH", "network": "testnet", "rpcUrls": {"default": "https://kovan.poa.network", "infura": "https://kovan.infura.io/v3/${INFURA_API_KEY}", "wss": "wss://kovan.infura.io/ws/v3/${INFURA_API_KEY}", "ws": "ws://kovan.poa.network:8546"}, "rpc": ["https://kovan.poa.network", "http://kovan.poa.network:8545", "https://kovan.infura.io/v3/${INFURA_API_KEY}", "wss://kovan.infura.io/ws/v3/${INFURA_API_KEY}", "ws://kovan.poa.network:8546"], "faucets": ["http://fauceth.komputing.org?chain=42&address=${ADDRESS}", "https://faucet.kovan.network", "https://gitter.im/kovan-testnet/faucet"], "nativeCurrency": {"name": "Kovan Ether", "symbol": "KOV", "decimals": 18}, "explorers": [{"name": "etherscan", "url": "https://kovan.etherscan.io", "standard": "EIP3091"}], "infoURL": "https://kovan-testnet.github.io/website", "shortName": "kov", "chainId": 42, "networkId": 42, "id": 42, "multicall": {"address": "0xcA11bde05977b3631167028862bE2a173976CA11"}}, "56": {"name": "Binance Smart Chain Mainnet", "chain": "BSC", "rpcUrls": {"default": "https://bsc-dataseed1.binance.org"}, "rpc": ["https://bsc-dataseed1.binance.org", "https://bsc-dataseed2.binance.org", "https://bsc-dataseed3.binance.org", "https://bsc-dataseed4.binance.org", "https://bsc-dataseed1.defibit.io", "https://bsc-dataseed2.defibit.io", "https://bsc-dataseed3.defibit.io", "https://bsc-dataseed4.defibit.io", "https://bsc-dataseed1.ninicoin.io", "https://bsc-dataseed2.ninicoin.io", "https://bsc-dataseed3.ninicoin.io", "https://bsc-dataseed4.ninicoin.io", "wss://bsc-ws-node.nariox.org"], "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/"], "nativeCurrency": {"name": "Binance Chain Native Token", "symbol": "BNB", "decimals": 18}, "infoURL": "https://www.binance.org", "shortName": "bnb", "chainId": 56, "networkId": 56, "slip44": 714, "explorers": [{"name": "bscscan", "url": "https://bscscan.com", "standard": "EIP3091"}], "id": 56, "multicall": {"address": "0xcA11bde05977b3631167028862bE2a173976CA11"}}, "100": {"name": "Gnosis Chain", "chain": "GNO", "icon": "gnosis", "rpcUrls": {"default": "https://rpc.gnosischain.com"}, "rpc": ["https://rpc.gnosischain.com", "https://rpc.ankr.com/gnosis", "https://gnosischain-rpc.gateway.pokt.network", "https://gnosis-mainnet.public.blastapi.io", "wss://rpc.gnosischain.com/wss"], "faucets": ["https://faucet.gimlu.com/gnosis", "https://stakely.io/faucet/gnosis-chain-xdai", "https://faucet.prussia.dev/xdai"], "nativeCurrency": {"name": "xDAI", "symbol": "xDAI", "decimals": 18}, "infoURL": "https://developers.gnosischain.com", "shortName": "gno", "chainId": 100, "networkId": 100, "slip44": 700, "explorers": [{"name": "blockscout", "url": "https://blockscout.com/xdai/mainnet", "icon": "blockscout", "standard": "EIP3091"}], "id": 100, "multicall": {"address": "0xcA11bde05977b3631167028862bE2a173976CA11"}}, "128": {"name": "Huobi ECO Chain Mainnet", "chain": "Heco", "rpcUrls": {"default": "https://http-mainnet.hecochain.com"}, "rpc": ["https://http-mainnet.hecochain.com", "wss://ws-mainnet.hecochain.com"], "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/"], "nativeCurrency": {"name": "Huobi ECO Chain Native Token", "symbol": "HT", "decimals": 18}, "infoURL": "https://www.hecochain.com", "shortName": "heco", "chainId": 128, "networkId": 128, "slip44": 1010, "explorers": [{"name": "hecoinfo", "url": "https://hecoinfo.com", "standard": "EIP3091"}], "id": 128, "multicall": {"address": "0xcA11bde05977b3631167028862bE2a173976CA11"}}, "137": {"name": "Polygon Mainnet", "chain": "Polygon", "rpcUrls": {"default": "https://polygon-rpc.com/"}, "rpc": ["https://polygon-rpc.com/", "https://rpc-mainnet.matic.network", "https://matic-mainnet.chainstacklabs.com", "https://rpc-mainnet.maticvigil.com", "https://rpc-mainnet.matic.quiknode.pro", "https://matic-mainnet-full-rpc.bwarelabs.com"], "faucets": [], "nativeCurrency": {"name": "MATIC", "symbol": "MATIC", "decimals": 18}, "infoURL": "https://polygon.technology/", "shortName": "MATIC", "chainId": 137, "networkId": 137, "slip44": 966, "explorers": [{"name": "polygonscan", "url": "https://polygonscan.com", "standard": "EIP3091"}], "id": 137, "multicall": {"address": "0xcA11bde05977b3631167028862bE2a173976CA11"}}, "250": {"name": "Fantom Opera", "chain": "FTM", "rpcUrls": {"default": "https://rpc.ftm.tools"}, "rpc": ["https://rpc.ftm.tools"], "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/"], "nativeCurrency": {"name": "Fantom", "symbol": "FTM", "decimals": 18}, "infoURL": "https://fantom.foundation", "shortName": "ftm", "chainId": 250, "networkId": 250, "icon": "fantom", "explorers": [{"name": "ftmscan", "url": "https://ftmscan.com", "icon": "ftmscan", "standard": "EIP3091"}], "id": 250, "multicall": {"address": "0xcA11bde05977b3631167028862bE2a173976CA11"}}, "42161": {"name": "Arbitrum One", "chainId": 42161, "shortName": "arb1", "chain": "ETH", "networkId": 42161, "nativeCurrency": {"name": "Ether", "symbol": "ETH", "decimals": 18}, "rpcUrls": {"default": "https://arb1.arbitrum.io/rpc"}, "rpc": ["https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://arb1.arbitrum.io/rpc"], "faucets": [], "explorers": [{"name": "Arbiscan", "url": "https://arbiscan.io", "standard": "EIP3091"}, {"name": "Arbitrum Explorer", "url": "https://explorer.arbitrum.io", "standard": "EIP3091"}], "infoURL": "https://arbitrum.io", "parent": {"type": "L2", "chain": "eip155-1", "bridges": [{"url": "https://bridge.arbitrum.io"}]}, "id": 42161, "multicall": {"address": "0xcA11bde05977b3631167028862bE2a173976CA11"}}, "42220": {"name": "Celo Mainnet", "chainId": 42220, "shortName": "CELO", "chain": "CELO", "networkId": 42220, "nativeCurrency": {"name": "CELO", "symbol": "CELO", "decimals": 18}, "rpcUrls": {"default": "https://forno.celo.org", "wss": "wss://forno.celo.org/ws"}, "rpc": ["https://forno.celo.org", "wss://forno.celo.org/ws"], "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/"], "infoURL": "https://docs.celo.org/", "explorers": [{"name": "blockscout", "url": "https://explorer.celo.org", "standard": "none"}], "id": 42220, "multicall": {"address": "0xcA11bde05977b3631167028862bE2a173976CA11"}}, "43114": {"name": "Avalanche C-Chain", "chain": "AVAX", "rpcUrls": {"default": "https://api.avax.network/ext/bc/C/rpc"}, "rpc": ["https://api.avax.network/ext/bc/C/rpc"], "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/"], "nativeCurrency": {"name": "Avalanche", "symbol": "AVAX", "decimals": 18}, "infoURL": "https://www.avax.network/", "shortName": "Avalanche", "chainId": 43114, "networkId": 43114, "slip44": 9005, "explorers": [{"name": "snowtrace", "url": "https://snowtrace.io", "standard": "EIP3091"}], "id": 43114, "multicall": {"address": "0xcA11bde05977b3631167028862bE2a173976CA11"}}}

export const tokenList = {
    "1": [
        {
            "address": "0xD692ac3245bb82319A31068D6B8412796eE85d2c",
            "symbol": "crHUSD",
            "decimals": 8,
            "name": "Cream HUSD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd692ac3245bb82319a31068d6b8412796ee85d2c.png"
        },
        {
            "address": "0x4b520c812E8430659FC9f12f6d0c39026C83588D",
            "symbol": "DG",
            "decimals": 18,
            "name": "Decentral Games",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4b520c812e8430659fc9f12f6d0c39026c83588d.png"
        },
        {
            "address": "0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC",
            "symbol": "KEEP",
            "decimals": 18,
            "name": "KEEP Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x85eee30c52b0b379b046fb0f85f4f3dc3009afec.png"
        },
        {
            "address": "0xaf9f549774ecEDbD0966C52f250aCc548D3F36E5",
            "symbol": "RFuel",
            "decimals": 18,
            "name": "Rio Fuel Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xaf9f549774ecedbd0966c52f250acc548d3f36e5.png"
        },
        {
            "address": "0x6399C842dD2bE3dE30BF99Bc7D1bBF6Fa3650E70",
            "symbol": "PREMIA",
            "decimals": 18,
            "name": "Premia",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6399c842dd2be3de30bf99bc7d1bbf6fa3650e70.png"
        },
        {
            "address": "0xf3AE5d769e153Ef72b4e3591aC004E89F48107a1",
            "symbol": "DPR",
            "decimals": 18,
            "name": "Deeper Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf3ae5d769e153ef72b4e3591ac004e89f48107a1.png"
        },
        {
            "address": "0x0aCe32f6E87Ac1457A5385f8eb0208F37263B415",
            "symbol": "HBT",
            "decimals": 10,
            "name": "Habitat Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0ace32f6e87ac1457a5385f8eb0208f37263b415.png"
        },
        {
            "address": "0x8b0E42F366bA502d787BB134478aDfAE966C8798",
            "symbol": "LABS",
            "decimals": 18,
            "name": "LABS Group",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8b0e42f366ba502d787bb134478adfae966c8798.png"
        },
        {
            "address": "0x556148562d5DdeB72545D7EC4B3eC8edc8F55Ba7",
            "symbol": "PRDX",
            "decimals": 18,
            "name": "Predix Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x556148562d5ddeb72545d7ec4b3ec8edc8f55ba7.png"
        },
        {
            "address": "0xCc80C051057B774cD75067Dc48f8987C4Eb97A5e",
            "symbol": "NEC",
            "decimals": 18,
            "name": "Ethfinex Nectar Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xcc80c051057b774cd75067dc48f8987c4eb97a5e.png"
        },
        {
            "address": "0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919",
            "symbol": "RAI",
            "decimals": 18,
            "name": "Rai Reflex Index",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x03ab458634910aad20ef5f1c8ee96f1d6ac54919.png"
        },
        {
            "address": "0x68037790A0229e9Ce6EaA8A99ea92964106C4703",
            "symbol": "PAR",
            "decimals": 18,
            "name": "PAR Stablecoin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x68037790a0229e9ce6eaa8a99ea92964106c4703.png"
        },
        {
            "address": "0x0fe629d1E84E171f8fF0C1Ded2Cc2221Caa48a3f",
            "symbol": "MASK",
            "decimals": 18,
            "name": "Mask",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0fe629d1e84e171f8ff0c1ded2cc2221caa48a3f.png"
        },
        {
            "address": "0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6",
            "symbol": "sBTC",
            "decimals": 18,
            "name": "Synth sBTC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6.png"
        },
        {
            "address": "0xe3818504c1B32bF1557b16C238B2E01Fd3149C17",
            "symbol": "PLR",
            "decimals": 18,
            "name": "Pillar",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe3818504c1b32bf1557b16c238b2e01fd3149c17.png"
        },
        {
            "address": "0x7Aaa323D7e398be4128c7042d197a2545f0f1fea",
            "symbol": "crOMG",
            "decimals": 8,
            "name": "Cream OMGToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7aaa323d7e398be4128c7042d197a2545f0f1fea.png"
        },
        {
            "address": "0x70D2b7C19352bB76e4409858FF5746e500f2B67c",
            "symbol": "UPI",
            "decimals": 18,
            "name": "Pawtocol Network UPI Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x70d2b7c19352bb76e4409858ff5746e500f2b67c.png"
        },
        {
            "address": "0xCC8Fa225D80b9c7D42F96e9570156c65D6cAAa25",
            "symbol": "SLP",
            "decimals": 0,
            "name": "Smooth Love Potion",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xcc8fa225d80b9c7d42f96e9570156c65d6caaa25.png"
        },
        {
            "address": "0x8B950f43fCAc4931D408F1fcdA55C6CB6cbF3096",
            "symbol": "crBBADGER",
            "decimals": 8,
            "name": "Cream Badger Sett Badger",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8b950f43fcac4931d408f1fcda55c6cb6cbf3096.png"
        },
        {
            "address": "0x0D97Fee619d955509e54B046c9992B6E9F5B0630",
            "symbol": "PONY",
            "decimals": 18,
            "name": "PONY Index",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0d97fee619d955509e54b046c9992b6e9f5b0630.png"
        },
        {
            "address": "0x40FD72257597aA14C7231A7B1aaa29Fce868F677",
            "symbol": "XOR",
            "decimals": 18,
            "name": "Sora Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x40fd72257597aa14c7231a7b1aaa29fce868f677.png"
        },
        {
            "address": "0x33349B282065b0284d756F0577FB39c158F935e6",
            "symbol": "MPL",
            "decimals": 18,
            "name": "Maple Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x33349b282065b0284d756f0577fb39c158f935e6.png"
        },
        {
            "address": "0x3DB6Ba6ab6F95efed1a6E794caD492fAAabF294D",
            "symbol": "LTO",
            "decimals": 8,
            "name": "LTO Network Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3db6ba6ab6f95efed1a6e794cad492faaabf294d.png"
        },
        {
            "address": "0xa5f2211B9b8170F694421f2046281775E8468044",
            "symbol": "THOR",
            "decimals": 18,
            "name": "THORSwap Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa5f2211b9b8170f694421f2046281775e8468044.png"
        },
        {
            "address": "0x389999216860AB8E0175387A0c90E5c52522C945",
            "symbol": "FEG",
            "decimals": 9,
            "name": "FEGtoken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x389999216860ab8e0175387a0c90e5c52522c945.png"
        },
        {
            "address": "0x3541A5C1b04AdABA0B83F161747815cd7B1516bC",
            "symbol": "KNIGHT",
            "decimals": 18,
            "name": "CitaDAO",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3541a5c1b04adaba0b83f161747815cd7b1516bc.png"
        },
        {
            "address": "0x72e364F2ABdC788b7E918bc238B21f109Cd634D7",
            "symbol": "MVI",
            "decimals": 18,
            "name": "Metaverse Index",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x72e364f2abdc788b7e918bc238b21f109cd634d7.png"
        },
        {
            "address": "0x0De05F6447ab4D22c8827449EE4bA2D5C288379B",
            "symbol": "OOKI",
            "decimals": 18,
            "name": "Ooki Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0de05f6447ab4d22c8827449ee4ba2d5c288379b.png"
        },
        {
            "address": "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
            "symbol": "FEI",
            "decimals": 18,
            "name": "Fei USD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x956f47f50a910163d8bf957cf5846d573e7f87ca.png"
        },
        {
            "address": "0xf3dcbc6D72a4E1892f7917b7C43b74131Df8480e",
            "symbol": "BDP",
            "decimals": 18,
            "name": "BDPToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf3dcbc6d72a4e1892f7917b7c43b74131df8480e.png"
        },
        {
            "address": "0xe5feeaC09D36B18b3FA757E5Cf3F8dA6B8e27F4C",
            "symbol": "NFTI",
            "decimals": 18,
            "name": "NFT INDEX",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe5feeac09d36b18b3fa757e5cf3f8da6b8e27f4c.png"
        },
        {
            "address": "0xcfcEcFe2bD2FED07A9145222E8a7ad9Cf1Ccd22A",
            "symbol": "ADS",
            "decimals": 11,
            "name": "Adshares",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xcfcecfe2bd2fed07a9145222e8a7ad9cf1ccd22a.png"
        },
        {
            "address": "0x940a2dB1B7008B6C776d4faaCa729d6d4A4AA551",
            "symbol": "DUSK",
            "decimals": 18,
            "name": "Dusk Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x940a2db1b7008b6c776d4faaca729d6d4a4aa551.png"
        },
        {
            "address": "0xf4d2888d29D722226FafA5d9B24F9164c092421E",
            "symbol": "LOOKS",
            "decimals": 18,
            "name": "LooksRare Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf4d2888d29d722226fafa5d9b24f9164c092421e.png"
        },
        {
            "address": "0x4FE5851C9af07df9e5AD8217aFAE1ea72737Ebda",
            "symbol": "OPT",
            "decimals": 18,
            "name": "Open Predict Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4fe5851c9af07df9e5ad8217afae1ea72737ebda.png"
        },
        {
            "address": "0x4f640F2529ee0cF119A2881485845FA8e61A782A",
            "symbol": "ORE",
            "decimals": 18,
            "name": "pTokens ORE",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4f640f2529ee0cf119a2881485845fa8e61a782a.png"
        },
        {
            "address": "0xB1A88c33091490218965787919fcc9862C1798eE",
            "symbol": "SHIBLI",
            "decimals": 9,
            "name": "Studio Shibli",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb1a88c33091490218965787919fcc9862c1798ee.png"
        },
        {
            "address": "0x63b4f3e3fa4e438698CE330e365E831F7cCD1eF4",
            "symbol": "CFi",
            "decimals": 18,
            "name": "CyberFi Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x63b4f3e3fa4e438698ce330e365e831f7ccd1ef4.png"
        },
        {
            "address": "0x1C5db575E2Ff833E46a2E9864C22F4B22E0B37C2",
            "symbol": "renZEC",
            "decimals": 8,
            "name": "renZEC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1c5db575e2ff833e46a2e9864c22f4b22e0b37c2.png"
        },
        {
            "address": "0x91dFbEE3965baAEE32784c2d546B7a0C62F268c9",
            "symbol": "BONDLY",
            "decimals": 18,
            "name": "Bondly",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x91dfbee3965baaee32784c2d546b7a0c62f268c9.png"
        },
        {
            "address": "0x15b7c0c907e4C6b9AdaAaabC300C08991D6CEA05",
            "symbol": "GEL",
            "decimals": 18,
            "name": "Gelato Network Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x15b7c0c907e4c6b9adaaaabc300c08991d6cea05.png"
        },
        {
            "address": "0xEA1ea0972fa092dd463f2968F9bB51Cc4c981D71",
            "symbol": "MOD",
            "decimals": 18,
            "name": "Modefi",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xea1ea0972fa092dd463f2968f9bb51cc4c981d71.png"
        },
        {
            "address": "0x0CDF9acd87E940837ff21BB40c9fd55F68bba059",
            "symbol": "MINT",
            "decimals": 18,
            "name": "Public Mint",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0cdf9acd87e940837ff21bb40c9fd55f68bba059.png"
        },
        {
            "address": "0x06A01a4d579479Dd5D884EBf61A31727A3d8D442",
            "symbol": "Skey",
            "decimals": 8,
            "name": "SmartKey",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x06a01a4d579479dd5d884ebf61a31727a3d8d442.png"
        },
        {
            "address": "0xBB0E17EF65F82Ab018d8EDd776e8DD940327B28b",
            "symbol": "AXS",
            "decimals": 18,
            "name": "Axie Infinity Shard",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xbb0e17ef65f82ab018d8edd776e8dd940327b28b.png"
        },
        {
            "address": "0x903bEF1736CDdf2A537176cf3C64579C3867A881",
            "symbol": "ICHI",
            "decimals": 9,
            "name": "ichi.farm",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x903bef1736cddf2a537176cf3c64579c3867a881.png"
        },
        {
            "address": "0x7475C42f8BF2c19F4EAF12fEaabaBA859fdC8914",
            "symbol": "ACCEL",
            "decimals": 18,
            "name": "ACCEL",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7475c42f8bf2c19f4eaf12feaababa859fdc8914_1.png"
        },
        {
            "address": "0x0adA190c81b814548ddC2F6AdC4a689ce7C1FE73",
            "symbol": "YAXIS",
            "decimals": 18,
            "name": "yAxis V2",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0ada190c81b814548ddc2f6adc4a689ce7c1fe73.png"
        },
        {
            "address": "0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D",
            "symbol": "LQTY",
            "decimals": 18,
            "name": "LQTY",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d.png"
        },
        {
            "address": "0x34612903Db071e888a4dADcaA416d3EE263a87b9",
            "symbol": "arte",
            "decimals": 18,
            "name": "ethart",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x34612903db071e888a4dadcaa416d3ee263a87b9.png"
        },
        {
            "address": "0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272",
            "symbol": "xSUSHI",
            "decimals": 18,
            "name": "SushiBar",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8798249c2e607446efb7ad49ec89dd1865ff4272.png"
        },
        {
            "address": "0xAC51066d7bEC65Dc4589368da368b212745d63E8",
            "symbol": "ALICE",
            "decimals": 6,
            "name": "ALICE",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xac51066d7bec65dc4589368da368b212745d63e8.png"
        },
        {
            "address": "0x45804880De22913dAFE09f4980848ECE6EcbAf78",
            "symbol": "PAXG",
            "decimals": 18,
            "name": "Paxos Gold",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x45804880de22913dafe09f4980848ece6ecbaf78.png"
        },
        {
            "address": "0xee573a945B01B788B9287CE062A0CFC15bE9fd86",
            "symbol": "XED",
            "decimals": 18,
            "name": "Exeedme",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xee573a945b01b788b9287ce062a0cfc15be9fd86.png"
        },
        {
            "address": "0xcbd55D4fFc43467142761A764763652b48b969ff",
            "symbol": "ASTRO",
            "decimals": 18,
            "name": "AstroTools.io",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xcbd55d4ffc43467142761a764763652b48b969ff.png"
        },
        {
            "address": "0xF5581dFeFD8Fb0e4aeC526bE659CFaB1f8c781dA",
            "symbol": "HOPR",
            "decimals": 18,
            "name": "HOPR Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf5581dfefd8fb0e4aec526be659cfab1f8c781da.png"
        },
        {
            "address": "0xB26631c6dda06aD89B93C71400D25692de89c068",
            "symbol": "MINDS",
            "decimals": 18,
            "name": "Minds",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb26631c6dda06ad89b93c71400d25692de89c068.png"
        },
        {
            "address": "0x138C2F1123cF3f82E4596d097c118eAc6684940B",
            "symbol": "ALPHA_1",
            "decimals": 18,
            "name": "Alpha",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x138c2f1123cf3f82e4596d097c118eac6684940b_1.png"
        },
        {
            "address": "0xae78736Cd615f374D3085123A210448E74Fc6393",
            "symbol": "rETH",
            "decimals": 18,
            "name": "Rocket Pool ETH",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xae78736cd615f374d3085123a210448e74fc6393.png"
        },
        {
            "address": "0x618679dF9EfCd19694BB1daa8D00718Eacfa2883",
            "symbol": "XYZ",
            "decimals": 18,
            "name": "XYZ Governance Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x618679df9efcd19694bb1daa8d00718eacfa2883_1.png"
        },
        {
            "address": "0xC08512927D12348F6620a698105e1BAac6EcD911",
            "symbol": "GYEN",
            "decimals": 6,
            "name": "GMO JPY",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc08512927d12348f6620a698105e1baac6ecd911.png"
        },
        {
            "address": "0xf04a8ac553FceDB5BA99A64799155826C136b0Be",
            "symbol": "FLIXX",
            "decimals": 18,
            "name": "Flixxo",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf04a8ac553fcedb5ba99a64799155826c136b0be.png"
        },
        {
            "address": "0x1d37986F252d0e349522EA6C3B98Cb935495E63E",
            "symbol": "CHART",
            "decimals": 18,
            "name": "ChartEx",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1d37986f252d0e349522ea6c3b98cb935495e63e.png"
        },
        {
            "address": "0x33D203FA03bb30b133De0fE2d6533C268bA286B6",
            "symbol": "MANDOX",
            "decimals": 9,
            "name": "Mandox",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x33d203fa03bb30b133de0fe2d6533c268ba286b6.png"
        },
        {
            "address": "0x8A9c4dfe8b9D8962B31e4e16F8321C44d48e246E",
            "symbol": "NCT",
            "decimals": 18,
            "name": "NameChangeToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8a9c4dfe8b9d8962b31e4e16f8321c44d48e246e.png"
        },
        {
            "address": "0x5732046A883704404F284Ce41FfADd5b007FD668",
            "symbol": "BLZ",
            "decimals": 18,
            "name": "Bluzelle",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5732046a883704404f284ce41ffadd5b007fd668.png"
        },
        {
            "address": "0x47252A63C723889814AeBcAC0683E615624ceC64",
            "symbol": "NIL",
            "decimals": 18,
            "name": "nil",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x47252a63c723889814aebcac0683e615624cec64.png"
        },
        {
            "address": "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
            "symbol": "stETH",
            "decimals": 18,
            "name": "stETH",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xae7ab96520de3a18e5e111b5eaab095312d7fe84.png"
        },
        {
            "address": "0xB705268213D593B8FD88d3FDEFF93AFF5CbDcfAE",
            "symbol": "IDEX",
            "decimals": 18,
            "name": "IDEX Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb705268213d593b8fd88d3fdeff93aff5cbdcfae.png"
        },
        {
            "address": "0x5228a22e72ccC52d415EcFd199F99D0665E7733b",
            "symbol": "pBTC",
            "decimals": 18,
            "name": "pTokens BTC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5228a22e72ccc52d415ecfd199f99d0665e7733b.png"
        },
        {
            "address": "0xB124541127A0A657f056D9Dd06188c4F1b0e5aab",
            "symbol": "aUNIv1",
            "decimals": 18,
            "name": "Aave Interest bearing Uniswap",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb124541127a0a657f056d9dd06188c4f1b0e5aab.png"
        },
        {
            "address": "0x944eeE930933BE5E23b690c8589021Ec8619a301",
            "symbol": "MUNCH",
            "decimals": 9,
            "name": "MUNCH Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x944eee930933be5e23b690c8589021ec8619a301.png"
        },
        {
            "address": "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
            "symbol": "SUSHI",
            "decimals": 18,
            "name": "SushiToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2.png"
        },
        {
            "address": "0x5c872500c00565505F3624AB435c222E558E9ff8",
            "symbol": "COT",
            "decimals": 18,
            "name": "CoTrader",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5c872500c00565505f3624ab435c222e558e9ff8.png"
        },
        {
            "address": "0x71010A9D003445aC60C4e6A7017c1E89A477B438",
            "symbol": "aREPv1",
            "decimals": 18,
            "name": "Aave Interest bearing REP",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x71010a9d003445ac60c4e6a7017c1e89a477b438.png"
        },
        {
            "address": "0x57B946008913B82E4dF85f501cbAeD910e58D26C",
            "symbol": "POND",
            "decimals": 18,
            "name": "Marlin POND",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x57b946008913b82e4df85f501cbaed910e58d26c.png"
        },
        {
            "address": "0xa1faa113cbE53436Df28FF0aEe54275c13B40975",
            "symbol": "ALPHA",
            "decimals": 18,
            "name": "AlphaToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa1faa113cbe53436df28ff0aee54275c13b40975_1.png"
        },
        {
            "address": "0xE1BA0FB44CCb0D11b80F92f4f8Ed94CA3fF51D00",
            "symbol": "aBATv1",
            "decimals": 18,
            "name": "Aave Interest bearing BAT",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe1ba0fb44ccb0d11b80f92f4f8ed94ca3ff51d00.png"
        },
        {
            "address": "0x3FA729B4548beCBAd4EaB6EF18413470e6D5324C",
            "symbol": "HH",
            "decimals": 18,
            "name": "Holyheld",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3fa729b4548becbad4eab6ef18413470e6d5324c.png"
        },
        {
            "address": "0x4E15361FD6b4BB609Fa63C81A2be19d873717870",
            "symbol": "FTM",
            "decimals": 18,
            "name": "Fantom Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4e15361fd6b4bb609fa63c81a2be19d873717870.png"
        },
        {
            "address": "0x8642A849D0dcb7a15a974794668ADcfbe4794B56",
            "symbol": "PROS",
            "decimals": 18,
            "name": "Prosper",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8642a849d0dcb7a15a974794668adcfbe4794b56.png"
        },
        {
            "address": "0x2791BfD60D232150Bff86b39B7146c0eaAA2BA81",
            "symbol": "BiFi",
            "decimals": 18,
            "name": "BiFi",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2791bfd60d232150bff86b39b7146c0eaaa2ba81.png"
        },
        {
            "address": "0xD7B7d3C0bdA57723Fb54ab95Fd8F9EA033AF37f2",
            "symbol": "PYLON",
            "decimals": 18,
            "name": "PYLON",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd7b7d3c0bda57723fb54ab95fd8f9ea033af37f2.png"
        },
        {
            "address": "0x79C75E2e8720B39e258F41c37cC4f309E0b0fF80",
            "symbol": "SOUL",
            "decimals": 8,
            "name": "Phantasma Stake",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x79c75e2e8720b39e258f41c37cc4f309e0b0ff80.png"
        },
        {
            "address": "0xd38BB40815d2B0c2d2c866e0c72c5728ffC76dd9",
            "symbol": "SIS",
            "decimals": 18,
            "name": "Symbiosis",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd38bb40815d2b0c2d2c866e0c72c5728ffc76dd9.png"
        },
        {
            "address": "0xA64dFe8D86963151E6496BEe513E366F6e42ED79",
            "symbol": "GOKU",
            "decimals": 9,
            "name": "Goku Inu",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa64dfe8d86963151e6496bee513e366f6e42ed79.png"
        },
        {
            "address": "0x38A2fDc11f526Ddd5a607C1F251C065f40fBF2f7",
            "symbol": "PHNX",
            "decimals": 18,
            "name": "PhoenixDAO",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x38a2fdc11f526ddd5a607c1f251c065f40fbf2f7.png"
        },
        {
            "address": "0x88ACDd2a6425c3FaAE4Bc9650Fd7E27e0Bebb7aB",
            "symbol": "MIST",
            "decimals": 18,
            "name": "Alchemist",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x88acdd2a6425c3faae4bc9650fd7e27e0bebb7ab.png"
        },
        {
            "address": "0xFeea0bDd3D07eb6FE305938878C0caDBFa169042",
            "symbol": "8PAY",
            "decimals": 18,
            "name": "8PAY Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xfeea0bdd3d07eb6fe305938878c0cadbfa169042.png"
        },
        {
            "address": "0xa693B19d2931d498c5B318dF961919BB4aee87a5",
            "symbol": "UST_1",
            "decimals": 6,
            "name": "UST (Wormhole)",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa693b19d2931d498c5b318df961919bb4aee87a5.png"
        },
        {
            "address": "0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074",
            "symbol": "MASK_NTWRK",
            "decimals": 18,
            "name": "Mask Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x69af81e73a73b40adf4f3d4223cd9b1ece623074.png"
        },
        {
            "address": "0x3D3D35bb9bEC23b06Ca00fe472b50E7A4c692C30",
            "symbol": "VIDYA",
            "decimals": 18,
            "name": "Vidya",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3d3d35bb9bec23b06ca00fe472b50e7a4c692c30.png"
        },
        {
            "address": "0x485d17A6f1B8780392d53D64751824253011A260",
            "symbol": "TIME",
            "decimals": 8,
            "name": "ChronoTech Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x485d17a6f1b8780392d53d64751824253011a260.png"
        },
        {
            "address": "0x30f271C9E86D2B7d00a6376Cd96A1cFBD5F0b9b3",
            "symbol": "DEC",
            "decimals": 18,
            "name": "Decentr",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x30f271c9e86d2b7d00a6376cd96a1cfbd5f0b9b3.png"
        },
        {
            "address": "0x054D64b73d3D8A21Af3D764eFd76bCaA774f3Bb2",
            "symbol": "PPAY",
            "decimals": 18,
            "name": "Plasma",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x054d64b73d3d8a21af3d764efd76bcaa774f3bb2.png"
        },
        {
            "address": "0x47110d43175f7f2C2425E7d15792acC5817EB44f",
            "symbol": "GMI",
            "decimals": 18,
            "name": "Bankless DeFi Innovation Index",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x47110d43175f7f2c2425e7d15792acc5817eb44f.png"
        },
        {
            "address": "0xfB7B4564402E5500dB5bB6d63Ae671302777C75a",
            "symbol": "DEXT",
            "decimals": 18,
            "name": "DEXTools",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x26ce25148832c04f3d7f26f32478a9fe55197166.png"
        },
        {
            "address": "0x6D0F5149c502faf215C89ab306ec3E50b15e2892",
            "symbol": "PRT",
            "decimals": 18,
            "name": "Portion Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6d0f5149c502faf215c89ab306ec3e50b15e2892.png"
        },
        {
            "address": "0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC",
            "symbol": "STORJ",
            "decimals": 8,
            "name": "Storj",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac.png"
        },
        {
            "address": "0x6251E725CD45Fb1AF99354035a414A2C0890B929",
            "symbol": "MXT",
            "decimals": 18,
            "name": "MixTrust",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6251e725cd45fb1af99354035a414a2c0890b929.png"
        },
        {
            "address": "0xA67E9F021B9d208F7e3365B2A155E3C55B27de71",
            "symbol": "KLEE",
            "decimals": 9,
            "name": "KleeKai",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa67e9f021b9d208f7e3365b2a155e3c55b27de71.png"
        },
        {
            "address": "0x87d73E916D7057945c9BcD8cdd94e42A6F47f776",
            "symbol": "NFTX",
            "decimals": 18,
            "name": "NFTX",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x87d73e916d7057945c9bcd8cdd94e42a6f47f776.png"
        },
        {
            "address": "0xEe9801669C6138E84bD50dEB500827b776777d28",
            "symbol": "O3",
            "decimals": 18,
            "name": "O3 Swap Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xee9801669c6138e84bd50deb500827b776777d28.png"
        },
        {
            "address": "0xa3d58c4E56fedCae3a7c43A725aeE9A71F0ece4e",
            "symbol": "MET",
            "decimals": 18,
            "name": "Metronome",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa3d58c4e56fedcae3a7c43a725aee9a71f0ece4e.png"
        },
        {
            "address": "0x22B243B96495C547598D9042B6f94B01C22B2e9E",
            "symbol": "crSWAG",
            "decimals": 8,
            "name": "Cream Swag Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x22b243b96495c547598d9042b6f94b01c22b2e9e.png"
        },
        {
            "address": "0xaaAEBE6Fe48E54f431b0C390CfaF0b017d09D42d",
            "symbol": "CEL",
            "decimals": 4,
            "name": "Celsius",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d.png"
        },
        {
            "address": "0x3A880652F47bFaa771908C07Dd8673A787dAEd3A",
            "symbol": "DDX",
            "decimals": 18,
            "name": "DerivaDAO",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3a880652f47bfaa771908c07dd8673a787daed3a.png"
        },
        {
            "address": "0xBBc2AE13b23d715c30720F079fcd9B4a74093505",
            "symbol": "ERN",
            "decimals": 18,
            "name": "@EthernityChain $ERN Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xbbc2ae13b23d715c30720f079fcd9b4a74093505.png"
        },
        {
            "address": "0x228619CCa194Fbe3Ebeb2f835eC1eA5080DaFbb2",
            "symbol": "crXSUSHI",
            "decimals": 8,
            "name": "Cream SushiBar",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x228619cca194fbe3ebeb2f835ec1ea5080dafbb2.png"
        },
        {
            "address": "0x5Cf04716BA20127F1E2297AdDCf4B5035000c9eb",
            "symbol": "NKN",
            "decimals": 18,
            "name": "NKN",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5cf04716ba20127f1e2297addcf4b5035000c9eb.png"
        },
        {
            "address": "0x737F98AC8cA59f2C68aD658E3C3d8C8963E40a4c",
            "symbol": "AMN",
            "decimals": 18,
            "name": "Amon",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x737f98ac8ca59f2c68ad658e3c3d8c8963e40a4c.png"
        },
        {
            "address": "0xfeF4185594457050cC9c23980d301908FE057Bb1",
            "symbol": "VIDT",
            "decimals": 18,
            "name": "VIDT Datalink",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xfef4185594457050cc9c23980d301908fe057bb1.png"
        },
        {
            "address": "0x31429d1856aD1377A8A0079410B297e1a9e214c2",
            "symbol": "ANGLE",
            "decimals": 18,
            "name": "ANGLE",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x31429d1856ad1377a8a0079410b297e1a9e214c2.png"
        },
        {
            "address": "0x6FCE4A401B6B80ACe52baAefE4421Bd188e76F6f",
            "symbol": "aMANAv1",
            "decimals": 18,
            "name": "Aave Interest bearing MANA",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6fce4a401b6b80ace52baaefe4421bd188e76f6f.png"
        },
        {
            "address": "0xdB25f211AB05b1c97D595516F45794528a807ad8",
            "symbol": "EURS",
            "decimals": 2,
            "name": "STASIS EURS",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdb25f211ab05b1c97d595516f45794528a807ad8.png"
        },
        {
            "address": "0x368B3a58B5f49392e5C9E4C998cb0bB966752E51",
            "symbol": "MIC",
            "decimals": 18,
            "name": "MIC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x368b3a58b5f49392e5c9e4c998cb0bb966752e51.png"
        },
        {
            "address": "0xEd0439EACf4c4965AE4613D77a5C2Efe10e5f183",
            "symbol": "SHROOM",
            "decimals": 18,
            "name": "shroom.finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xed0439eacf4c4965ae4613d77a5c2efe10e5f183.png"
        },
        {
            "address": "0x6fC13EACE26590B80cCCAB1ba5d51890577D83B2",
            "symbol": "UMB",
            "decimals": 18,
            "name": "Umbrella",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6fc13eace26590b80cccab1ba5d51890577d83b2.png"
        },
        {
            "address": "0xFbbE9b1142C699512545f47937Ee6fae0e4B0aA9",
            "symbol": "EDDA",
            "decimals": 18,
            "name": "EDDA",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xfbbe9b1142c699512545f47937ee6fae0e4b0aa9.png"
        },
        {
            "address": "0x26EA744E5B887E5205727f55dFBE8685e3b21951",
            "symbol": "yUSDCv3",
            "decimals": 6,
            "name": "iearn USDC v3",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x26ea744e5b887e5205727f55dfbe8685e3b21951.png"
        },
        {
            "address": "0x0563DCe613D559a47877fFD1593549fb9d3510D6",
            "symbol": "SUPERBID",
            "decimals": 18,
            "name": "SuperBid",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0563dce613d559a47877ffd1593549fb9d3510d6.png"
        },
        {
            "address": "0x2B4200A8D373d484993C37d63eE14AeE0096cd12",
            "symbol": "USDFL",
            "decimals": 18,
            "name": "USDFreeLiquidity",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2b4200a8d373d484993c37d63ee14aee0096cd12.png"
        },
        {
            "address": "0xA8b12Cc90AbF65191532a12bb5394A714A46d358",
            "symbol": "pBTC35A",
            "decimals": 18,
            "name": "POW BTC-35W/T",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa8b12cc90abf65191532a12bb5394a714a46d358.png"
        },
        {
            "address": "0xa704fCe7b309Ec09DF16e2F5Ab8cAf6Fe8A4BAA9",
            "symbol": "AGRI",
            "decimals": 18,
            "name": "AgriChain",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa704fce7b309ec09df16e2f5ab8caf6fe8a4baa9.png"
        },
        {
            "address": "0x8888801aF4d980682e47f1A9036e589479e835C5",
            "symbol": "MPH",
            "decimals": 18,
            "name": "88mph.app",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8888801af4d980682e47f1a9036e589479e835c5.png"
        },
        {
            "address": "0xa685a61171bb30d4072B338c80Cb7b2c865c873E",
            "symbol": "aMANA",
            "decimals": 18,
            "name": "Aave interest bearing MANA",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa685a61171bb30d4072b338c80cb7b2c865c873e.png"
        },
        {
            "address": "0x9aeB50f542050172359A0e1a25a9933Bc8c01259",
            "symbol": "OIN",
            "decimals": 8,
            "name": "oinfinance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9aeb50f542050172359a0e1a25a9933bc8c01259.png"
        },
        {
            "address": "0x6006FC2a849fEdABa8330ce36F5133DE01F96189",
            "symbol": "SHAKE",
            "decimals": 18,
            "name": "SHAKE token by SpaceSwap v2 ",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6006fc2a849fedaba8330ce36f5133de01f96189.png"
        },
        {
            "address": "0x1FF8CDB51219a8838b52E9cAc09b71e591BC998e",
            "symbol": "crBUSD",
            "decimals": 8,
            "name": "Cream Binance USD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1ff8cdb51219a8838b52e9cac09b71e591bc998e.png"
        },
        {
            "address": "0x33B4fE5e40E4903A0849cA97B3292eac3EB0aA36",
            "symbol": "HONEY",
            "decimals": 18,
            "name": "Honey",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x33b4fe5e40e4903a0849ca97b3292eac3eb0aa36.png"
        },
        {
            "address": "0xCbfef8fdd706cde6F208460f2Bf39Aa9c785F05D",
            "symbol": "KINE",
            "decimals": 18,
            "name": "Kine Governance Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xcbfef8fdd706cde6f208460f2bf39aa9c785f05d.png"
        },
        {
            "address": "0x0f2D719407FdBeFF09D87557AbB7232601FD9F29",
            "symbol": "SYN",
            "decimals": 18,
            "name": "Synapse",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0f2d719407fdbeff09d87557abb7232601fd9f29.png"
        },
        {
            "address": "0x39C6b3e42d6A679d7D776778Fe880BC9487C2EDA",
            "symbol": "aKNC",
            "decimals": 18,
            "name": "Aave interest bearing KNC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x39c6b3e42d6a679d7d776778fe880bc9487c2eda.png"
        },
        {
            "address": "0xF921ae2DAC5fa128DC0F6168Bf153ea0943d2D43",
            "symbol": "FIRE",
            "decimals": 8,
            "name": "Fire Protocol",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf921ae2dac5fa128dc0f6168bf153ea0943d2d43.png"
        },
        {
            "address": "0x0Ae055097C6d159879521C384F1D2123D1f195e6",
            "symbol": "STAKE",
            "decimals": 18,
            "name": "STAKE",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0ae055097c6d159879521c384f1d2123d1f195e6.png"
        },
        {
            "address": "0x582d872A1B094FC48F5DE31D3B73F2D9bE47def1",
            "symbol": "TONCOIN",
            "decimals": 9,
            "name": "Wrapped TON Coin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x582d872a1b094fc48f5de31d3b73f2d9be47def1.png"
        },
        {
            "address": "0x5B7533812759B45C2B44C19e320ba2cD2681b542",
            "symbol": "AGIX",
            "decimals": 8,
            "name": "SingularityNET Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5b7533812759b45c2b44c19e320ba2cd2681b542.png"
        },
        {
            "address": "0x7b3D36Eb606f873A75A6aB68f8c999848B04F935",
            "symbol": "LOOT",
            "decimals": 18,
            "name": "NFTLootBox.com",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7b3d36eb606f873a75a6ab68f8c999848b04f935.png"
        },
        {
            "address": "0x6e0daDE58D2d89eBBe7aFc384e3E4f15b70b14D8",
            "symbol": "QRX",
            "decimals": 18,
            "name": "QuiverX",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6e0dade58d2d89ebbe7afc384e3e4f15b70b14d8.png"
        },
        {
            "address": "0x7f1F2D3dFa99678675ECE1C243d3f7bC3746db5D",
            "symbol": "TAP",
            "decimals": 18,
            "name": "Tapmydata",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7f1f2d3dfa99678675ece1c243d3f7bc3746db5d.png"
        },
        {
            "address": "0x456D8f0D25A4e787eE60c401F8B963a465148f70",
            "symbol": "CAVA",
            "decimals": 9,
            "name": "Cavapoo",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x456d8f0d25a4e787ee60c401f8b963a465148f70.png"
        },
        {
            "address": "0xE48972fCd82a274411c01834e2f031D4377Fa2c0",
            "symbol": "2KEY",
            "decimals": 18,
            "name": "2key.network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe48972fcd82a274411c01834e2f031d4377fa2c0.png"
        },
        {
            "address": "0xcca0c9c383076649604eE31b20248BC04FdF61cA",
            "symbol": "BTMX",
            "decimals": 18,
            "name": "BitMax token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xcca0c9c383076649604ee31b20248bc04fdf61ca.png"
        },
        {
            "address": "0x62Dc4817588d53a056cBbD18231d91ffCcd34b2A",
            "symbol": "DHV",
            "decimals": 18,
            "name": "DeHive.finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x62dc4817588d53a056cbbd18231d91ffccd34b2a.png"
        },
        {
            "address": "0x6f259637dcD74C767781E37Bc6133cd6A68aa161",
            "symbol": "HT",
            "decimals": 18,
            "name": "HuobiToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6f259637dcd74c767781e37bc6133cd6a68aa161.png"
        },
        {
            "address": "0x34950Ff2b487d9E5282c5aB342d08A2f712eb79F",
            "symbol": "WOZX",
            "decimals": 18,
            "name": "EFFORCE IEO",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x34950ff2b487d9e5282c5ab342d08a2f712eb79f.png"
        },
        {
            "address": "0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723",
            "symbol": "LIT",
            "decimals": 18,
            "name": "Litentry",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb59490ab09a0f526cc7305822ac65f2ab12f9723.png"
        },
        {
            "address": "0x101cc05f4A51C0319f570d5E146a8C625198e636",
            "symbol": "aTUSD",
            "decimals": 18,
            "name": "Aave interest bearing TUSD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x101cc05f4a51c0319f570d5e146a8c625198e636.png"
        },
        {
            "address": "0xD6F0Bb2A45110f819e908a915237D652Ac7c5AA8",
            "symbol": "BUIDL_2",
            "decimals": 18,
            "name": "DFOHub",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd6f0bb2a45110f819e908a915237d652ac7c5aa8.png"
        },
        {
            "address": "0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC",
            "symbol": "HOP",
            "decimals": 18,
            "name": "Hop",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc5102fe9359fd9a28f877a67e36b0f050d81a3cc.png"
        },
        {
            "address": "0x3218A02F8F8B5c3894ce30EB255F10Bcba13E654",
            "symbol": "MEGA",
            "decimals": 18,
            "name": "MegaCryptoPolis $MEGA Token (MEGA)",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3218a02f8f8b5c3894ce30eb255f10bcba13e654.png"
        },
        {
            "address": "0x73968b9a57c6E53d41345FD57a6E6ae27d6CDB2F",
            "symbol": "SDT",
            "decimals": 18,
            "name": "Stake DAO Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f.png"
        },
        {
            "address": "0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF",
            "symbol": "IMX",
            "decimals": 18,
            "name": "Immutable X",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf57e7e7c23978c3caec3c3548e3d615c346e79ff.png"
        },
        {
            "address": "0xB1f66997A5760428D3a87D68b90BfE0aE64121cC",
            "symbol": "LUA",
            "decimals": 18,
            "name": "LuaToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb1f66997a5760428d3a87d68b90bfe0ae64121cc.png"
        },
        {
            "address": "0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9",
            "symbol": "DERI",
            "decimals": 18,
            "name": "Deri",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9.png"
        },
        {
            "address": "0xa665FED1b0C9dA00e91ca582f77dF36E325048c5",
            "symbol": "YFM",
            "decimals": 18,
            "name": "yfarm.finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa665fed1b0c9da00e91ca582f77df36e325048c5.png"
        },
        {
            "address": "0xc690F7C7FcfFA6a82b79faB7508c466FEfdfc8c5",
            "symbol": "LYM",
            "decimals": 18,
            "name": "Lympo tokens",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc690f7c7fcffa6a82b79fab7508c466fefdfc8c5.png"
        },
        {
            "address": "0xf418588522d5dd018b425E472991E52EBBeEEEEE",
            "symbol": "PUSH",
            "decimals": 18,
            "name": "Ethereum Push Notification Service",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf418588522d5dd018b425e472991e52ebbeeeeee.png"
        },
        {
            "address": "0x7DD9c5Cba05E151C895FDe1CF355C9A1D5DA6429",
            "symbol": "GLM",
            "decimals": 18,
            "name": "Golem Network Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7dd9c5cba05e151c895fde1cf355c9a1d5da6429.png"
        },
        {
            "address": "0x41A3Dba3D677E573636BA691a70ff2D606c29666",
            "symbol": "BLANK",
            "decimals": 18,
            "name": "GoBlank Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xaec7e1f531bb09115103c53ba76829910ec48966.png"
        },
        {
            "address": "0xDc5864eDe28BD4405aa04d93E05A0531797D9D59",
            "symbol": "FNT",
            "decimals": 6,
            "name": "Falcon",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdc5864ede28bd4405aa04d93e05a0531797d9d59.png"
        },
        {
            "address": "0xc68251421eDDa00a10815E273fA4b1191fAC651b",
            "symbol": "crPICKLE",
            "decimals": 8,
            "name": "Cream PickleToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc68251421edda00a10815e273fa4b1191fac651b.png"
        },
        {
            "address": "0x616ef40D55C0D2c506f4d6873Bda8090b79BF8fC",
            "symbol": "KTO",
            "decimals": 9,
            "name": "Kounotori",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x616ef40d55c0d2c506f4d6873bda8090b79bf8fc.png"
        },
        {
            "address": "0x7dE91B204C1C737bcEe6F000AAA6569Cf7061cb7",
            "symbol": "XRT",
            "decimals": 9,
            "name": "Robonomics",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7de91b204c1c737bcee6f000aaa6569cf7061cb7.png"
        },
        {
            "address": "0x761D38e5ddf6ccf6Cf7c55759d5210750B5D60F3",
            "symbol": "ELON",
            "decimals": 18,
            "name": "Dogelon",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3.png"
        },
        {
            "address": "0xaE697F994Fc5eBC000F8e22EbFfeE04612f98A0d",
            "symbol": "LGCY",
            "decimals": 18,
            "name": "LGCY Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xae697f994fc5ebc000f8e22ebffee04612f98a0d.png"
        },
        {
            "address": "0x892A6f9dF0147e5f079b0993F486F9acA3c87881",
            "symbol": "xFUND",
            "decimals": 9,
            "name": "unification.com/xfund",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x892a6f9df0147e5f079b0993f486f9aca3c87881.png"
        },
        {
            "address": "0x38e4adB44ef08F22F5B5b76A8f0c2d0dCbE7DcA1",
            "symbol": "CVP",
            "decimals": 18,
            "name": "Concentrated Voting Power",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x38e4adb44ef08f22f5b5b76a8f0c2d0dcbe7dca1.png"
        },
        {
            "address": "0x2AF5D2aD76741191D15Dfe7bF6aC92d4Bd912Ca3",
            "symbol": "LEO",
            "decimals": 18,
            "name": "Bitfinex LEO Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3.png"
        },
        {
            "address": "0x87DE305311D5788e8da38D19bb427645b09CB4e5",
            "symbol": "VRX",
            "decimals": 18,
            "name": "Verox",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x87de305311d5788e8da38d19bb427645b09cb4e5.png"
        },
        {
            "address": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
            "symbol": "cETH",
            "decimals": 8,
            "name": "Compound ETH",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5.png"
        },
        {
            "address": "0x7a5ce6abD131EA6B148a022CB76fc180ae3315A6",
            "symbol": "bALPHA",
            "decimals": 18,
            "name": "bAlpha",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7a5ce6abd131ea6b148a022cb76fc180ae3315a6.png"
        },
        {
            "address": "0x8f693ca8D21b157107184d29D398A8D082b38b76",
            "symbol": "DATA",
            "decimals": 18,
            "name": "Streamr",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8f693ca8d21b157107184d29d398a8d082b38b76.png"
        },
        {
            "address": "0x29CbD0510EEc0327992CD6006e63F9Fa8E7f33B7",
            "symbol": "TIDAL",
            "decimals": 18,
            "name": "Tidal Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x29cbd0510eec0327992cd6006e63f9fa8e7f33b7.png"
        },
        {
            "address": "0xD0Cd466b34A24fcB2f87676278AF2005Ca8A78c4",
            "symbol": "POP",
            "decimals": 18,
            "name": "Popcorn",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd0cd466b34a24fcb2f87676278af2005ca8a78c4.png"
        },
        {
            "address": "0xDe30da39c46104798bB5aA3fe8B9e0e1F348163F",
            "symbol": "GTC",
            "decimals": 18,
            "name": "Gitcoin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xde30da39c46104798bb5aa3fe8b9e0e1f348163f.png"
        },
        {
            "address": "0xfDC4a3FC36df16a78edCAf1B837d3ACAaeDB2CB4",
            "symbol": "SCIFI",
            "decimals": 18,
            "name": "ScifiToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xfdc4a3fc36df16a78edcaf1b837d3acaaedb2cb4.png"
        },
        {
            "address": "0x2d94AA3e47d9D5024503Ca8491fcE9A2fB4DA198",
            "symbol": "BANK",
            "decimals": 18,
            "name": "Bankless Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198.png"
        },
        {
            "address": "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",
            "symbol": "LDO",
            "decimals": 18,
            "name": "Lido DAO Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5a98fcbea516cf06857215779fd812ca3bef1b32.png"
        },
        {
            "address": "0x509A38b7a1cC0dcd83Aa9d06214663D9eC7c7F4a",
            "symbol": "BST",
            "decimals": 18,
            "name": "BlocksquareToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x509a38b7a1cc0dcd83aa9d06214663d9ec7c7f4a.png"
        },
        {
            "address": "0x2e2364966267B5D7D2cE6CD9A9B5bD19d9C7C6A9",
            "symbol": "VOICE",
            "decimals": 18,
            "name": "Voice Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2e2364966267b5d7d2ce6cd9a9b5bd19d9c7c6a9.png"
        },
        {
            "address": "0xec67005c4E498Ec7f55E092bd1d35cbC47C91892",
            "symbol": "MLN",
            "decimals": 18,
            "name": "Melon Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xec67005c4e498ec7f55e092bd1d35cbc47c91892.png"
        },
        {
            "address": "0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b",
            "symbol": "FUN",
            "decimals": 8,
            "name": "FunFair",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x419d0d8bdd9af5e606ae2232ed285aff190e711b.png"
        },
        {
            "address": "0x5165d24277cD063F5ac44Efd447B27025e888f37",
            "symbol": "aYFI",
            "decimals": 18,
            "name": "Aave interest bearing YFI",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5165d24277cd063f5ac44efd447b27025e888f37.png"
        },
        {
            "address": "0x87eDfFDe3E14c7a66c9b9724747a1C5696b742e6",
            "symbol": "SWAG",
            "decimals": 18,
            "name": "Swag Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x87edffde3e14c7a66c9b9724747a1c5696b742e6.png"
        },
        {
            "address": "0xe0B9a2C3E9f40CF74B2C7F591B2b0CCa055c3112",
            "symbol": "GS",
            "decimals": 18,
            "name": "Gen Shards",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe0b9a2c3e9f40cf74b2c7f591b2b0cca055c3112.png"
        },
        {
            "address": "0x841FB148863454A3b3570f515414759BE9091465",
            "symbol": "SHIH",
            "decimals": 18,
            "name": "Shih Tzu",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x841fb148863454a3b3570f515414759be9091465.png"
        },
        {
            "address": "0x321C2fE4446C7c963dc41Dd58879AF648838f98D",
            "symbol": "CTX",
            "decimals": 18,
            "name": "Cryptex",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x321c2fe4446c7c963dc41dd58879af648838f98d.png"
        },
        {
            "address": "0xfF20817765cB7f73d4bde2e66e067E58D11095C2",
            "symbol": "AMP",
            "decimals": 18,
            "name": "Amp",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xff20817765cb7f73d4bde2e66e067e58d11095c2.png"
        },
        {
            "address": "0xeb494890465f49C2b94457d9b61811392E5B1Fea",
            "symbol": "SLAB",
            "decimals": 9,
            "name": "SLINK LABS",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xeb494890465f49c2b94457d9b61811392e5b1fea.png"
        },
        {
            "address": "0x4946Fcea7C692606e8908002e55A582af44AC121",
            "symbol": "FOAM",
            "decimals": 18,
            "name": "FOAM Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4946fcea7c692606e8908002e55a582af44ac121.png"
        },
        {
            "address": "0x1cBb83EbcD552D5EBf8131eF8c9CD9d9BAB342bC",
            "symbol": "NFY",
            "decimals": 18,
            "name": "Non-Fungible Yearn",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1cbb83ebcd552d5ebf8131ef8c9cd9d9bab342bc.png"
        },
        {
            "address": "0x9Cb2f26A23b8d89973F08c957C4d7cdf75CD341c",
            "symbol": "DZAR",
            "decimals": 6,
            "name": "Digital Rand",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9cb2f26a23b8d89973f08c957c4d7cdf75cd341c.png"
        },
        {
            "address": "0xBbff34E47E559ef680067a6B1c980639EEb64D24",
            "symbol": "L2",
            "decimals": 18,
            "name": "Leverj Gluon",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xbbff34e47e559ef680067a6b1c980639eeb64d24.png"
        },
        {
            "address": "0x712DB54daA836B53Ef1EcBb9c6ba3b9Efb073F40",
            "symbol": "aENJv1",
            "decimals": 18,
            "name": "Aave Interest bearing ENJ",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x712db54daa836b53ef1ecbb9c6ba3b9efb073f40.png"
        },
        {
            "address": "0x7B0C06043468469967DBA22d1AF33d77d44056c8",
            "symbol": "MRPH",
            "decimals": 4,
            "name": "Morpheus Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7b0c06043468469967dba22d1af33d77d44056c8.png"
        },
        {
            "address": "0x725C263e32c72dDC3A19bEa12C5a0479a81eE688",
            "symbol": "BMI",
            "decimals": 18,
            "name": "Bridge Mutual",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x725c263e32c72ddc3a19bea12c5a0479a81ee688.png"
        },
        {
            "address": "0xA4Bdb11dc0a2bEC88d24A3aa1E6Bb17201112eBe",
            "symbol": "USDS",
            "decimals": 6,
            "name": "StableUSD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa4bdb11dc0a2bec88d24a3aa1e6bb17201112ebe.png"
        },
        {
            "address": "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd",
            "symbol": "GUSD",
            "decimals": 2,
            "name": "Gemini dollar",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x056fd409e1d7a124bd7017459dfea2f387b6d5cd.png"
        },
        {
            "address": "0x67c597624B17b16fb77959217360B7cD18284253",
            "symbol": "MARK",
            "decimals": 9,
            "name": "Benchmark",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x67c597624b17b16fb77959217360b7cd18284253.png"
        },
        {
            "address": "0xD23Ac27148aF6A2f339BD82D0e3CFF380b5093de",
            "symbol": "SI",
            "decimals": 18,
            "name": "SIREN",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd23ac27148af6a2f339bd82d0e3cff380b5093de.png"
        },
        {
            "address": "0x8a6f3BF52A26a21531514E23016eEAe8Ba7e7018",
            "symbol": "MXX",
            "decimals": 8,
            "name": "Multiplier",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8a6f3bf52a26a21531514e23016eeae8ba7e7018.png"
        },
        {
            "address": "0x4104b135DBC9609Fc1A9490E61369036497660c8",
            "symbol": "APW",
            "decimals": 18,
            "name": "APWine Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4104b135dbc9609fc1a9490e61369036497660c8.png"
        },
        {
            "address": "0xD9016A907Dc0ECfA3ca425ab20B6b785B42F2373",
            "symbol": "GMEE",
            "decimals": 18,
            "name": "GAMEE",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd9016a907dc0ecfa3ca425ab20b6b785b42f2373.png"
        },
        {
            "address": "0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206",
            "symbol": "NEXO",
            "decimals": 18,
            "name": "Nexo",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206.png"
        },
        {
            "address": "0x15874d65e649880c2614e7a480cb7c9A55787FF6",
            "symbol": "eMax",
            "decimals": 18,
            "name": "EthereumMax",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x15874d65e649880c2614e7a480cb7c9a55787ff6.png"
        },
        {
            "address": "0x48C3399719B582dD63eB5AADf12A40B4C3f52FA2",
            "symbol": "SWISE",
            "decimals": 18,
            "name": "StakeWise",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x48c3399719b582dd63eb5aadf12a40b4c3f52fa2.png"
        },
        {
            "address": "0xE6354ed5bC4b393a5Aad09f21c46E101e692d447",
            "symbol": "yUSDTv3",
            "decimals": 6,
            "name": "iearn USDT v3",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe6354ed5bc4b393a5aad09f21c46e101e692d447.png"
        },
        {
            "address": "0x4730fB1463A6F1F44AEB45F6c5c422427f37F4D0",
            "symbol": "FOUR",
            "decimals": 18,
            "name": "The 4th Pillar Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4730fb1463a6f1f44aeb45f6c5c422427f37f4d0.png"
        },
        {
            "address": "0xC48b4814fAEd1CCc885DD6fDe62A6474AeCbb19a",
            "symbol": "CMERGE",
            "decimals": 9,
            "name": "Coin Merge",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc48b4814faed1ccc885dd6fde62a6474aecbb19a.png"
        },
        {
            "address": "0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF",
            "symbol": "ALCX",
            "decimals": 18,
            "name": "Alchemix",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdbdb4d16eda451d0503b854cf79d55697f90c8df.png"
        },
        {
            "address": "0xC25EAE724f189Ba9030B2556a1533E7c8A732E14",
            "symbol": "crSNX",
            "decimals": 8,
            "name": "Cream Synthetix Network Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc25eae724f189ba9030b2556a1533e7c8a732e14.png"
        },
        {
            "address": "0x49184E6dAe8C8ecD89d8Bdc1B950c597b8167c90",
            "symbol": "LIBERTAS",
            "decimals": 2,
            "name": "LIBERTAS",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x49184e6dae8c8ecd89d8bdc1b950c597b8167c90.png"
        },
        {
            "address": "0x488E0369f9BC5C40C002eA7c1fe4fd01A198801c",
            "symbol": "GOF",
            "decimals": 18,
            "name": "Golff.finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x488e0369f9bc5c40c002ea7c1fe4fd01a198801c.png"
        },
        {
            "address": "0x0a50C93c762fDD6E56D86215C24AaAD43aB629aa",
            "symbol": "LGO",
            "decimals": 8,
            "name": "LGO Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0a50c93c762fdd6e56d86215c24aaad43ab629aa.png"
        },
        {
            "address": "0x6B4c7A5e3f0B99FCD83e9c089BDDD6c7FCe5c611",
            "symbol": "MM_2",
            "decimals": 18,
            "name": "Million",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6b4c7a5e3f0b99fcd83e9c089bddd6c7fce5c611.png"
        },
        {
            "address": "0x3597bfD533a99c9aa083587B074434E61Eb0A258",
            "symbol": "DENT",
            "decimals": 8,
            "name": "DENT",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3597bfd533a99c9aa083587b074434e61eb0a258.png"
        },
        {
            "address": "0x362bc847A3a9637d3af6624EeC853618a43ed7D2",
            "symbol": "PRQ",
            "decimals": 18,
            "name": "Parsiq Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x362bc847a3a9637d3af6624eec853618a43ed7d2.png"
        },
        {
            "address": "0x8a40c222996f9F3431f63Bf80244C36822060f12",
            "symbol": "FXF",
            "decimals": 18,
            "name": "Finxflo",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8a40c222996f9f3431f63bf80244c36822060f12.png"
        },
        {
            "address": "0xa92E7c82B11d10716aB534051B271D2f6aEf7Df5",
            "symbol": "ARA",
            "decimals": 18,
            "name": "Ara Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa92e7c82b11d10716ab534051b271d2f6aef7df5.png"
        },
        {
            "address": "0x72e9D9038cE484EE986FEa183f8d8Df93f9aDA13",
            "symbol": "SMARTCREDIT",
            "decimals": 18,
            "name": "SMARTCREDIT Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x72e9d9038ce484ee986fea183f8d8df93f9ada13.png"
        },
        {
            "address": "0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419",
            "symbol": "DIA",
            "decimals": 18,
            "name": "DIAToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x84ca8bc7997272c7cfb4d0cd3d55cd942b3c9419.png"
        },
        {
            "address": "0x2C974B2d0BA1716E644c1FC59982a89DDD2fF724",
            "symbol": "VIB",
            "decimals": 18,
            "name": "Viberate",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724.png"
        },
        {
            "address": "0x5B09A0371C1DA44A8E24D36Bf5DEb1141a84d875",
            "symbol": "MAD",
            "decimals": 18,
            "name": "MADToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5b09a0371c1da44a8e24d36bf5deb1141a84d875.png"
        },
        {
            "address": "0x44017598f2AF1bD733F9D87b5017b4E7c1B28DDE",
            "symbol": "stkATOM",
            "decimals": 6,
            "name": "pSTAKE Staked ATOM",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x44017598f2af1bd733f9d87b5017b4e7c1b28dde.png"
        },
        {
            "address": "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
            "symbol": "wstETH",
            "decimals": 18,
            "name": "Wrapped liquid staked Ether 2.0",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0.png"
        },
        {
            "address": "0x298d492e8c1d909D3F63Bc4A36C66c64ACB3d695",
            "symbol": "PBR",
            "decimals": 18,
            "name": "PolkaBridge",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x298d492e8c1d909d3f63bc4a36c66c64acb3d695.png"
        },
        {
            "address": "0x4C6eC08CF3fc987c6C4BEB03184D335A2dFc4042",
            "symbol": "PAINT",
            "decimals": 18,
            "name": "Paint",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4c6ec08cf3fc987c6c4beb03184d335a2dfc4042.png"
        },
        {
            "address": "0x630d98424eFe0Ea27fB1b3Ab7741907DFFEaAd78",
            "symbol": "PEAK",
            "decimals": 8,
            "name": "PEAKDEFI",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x630d98424efe0ea27fb1b3ab7741907dffeaad78.png"
        },
        {
            "address": "0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b",
            "symbol": "DPI",
            "decimals": 18,
            "name": "DefiPulse Index",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b.png"
        },
        {
            "address": "0xa1d65E8fB6e87b60FECCBc582F7f97804B725521",
            "symbol": "DXD",
            "decimals": 18,
            "name": "DXdao",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa1d65e8fb6e87b60feccbc582f7f97804b725521.png"
        },
        {
            "address": "0xfC98e825A2264D890F9a1e68ed50E1526abCcacD",
            "symbol": "MCO2",
            "decimals": 18,
            "name": "Moss Carbon Credit",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xfc98e825a2264d890f9a1e68ed50e1526abccacd.png"
        },
        {
            "address": "0xbE9375C6a420D2eEB258962efB95551A5b722803",
            "symbol": "STMX",
            "decimals": 18,
            "name": "Kyber StormX Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xbe9375c6a420d2eeb258962efb95551a5b722803.png"
        },
        {
            "address": "0xaDB2437e6F65682B85F814fBc12FeC0508A7B1D0",
            "symbol": "UNCX",
            "decimals": 18,
            "name": "UniCrypt",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xadb2437e6f65682b85f814fbc12fec0508a7b1d0.png"
        },
        {
            "address": "0x6Fb0855c404E09c47C3fBCA25f08d4E41f9F062f",
            "symbol": "aZRXv1",
            "decimals": 18,
            "name": "Aave Interest bearing ZRX",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6fb0855c404e09c47c3fbca25f08d4e41f9f062f.png"
        },
        {
            "address": "0x8254e26e453EB5aBd29B3c37AC9E8Da32E5d3299",
            "symbol": "RBX",
            "decimals": 18,
            "name": "RBX",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8254e26e453eb5abd29b3c37ac9e8da32e5d3299.png"
        },
        {
            "address": "0xa5DEf515cFd373D17830E7c1de1639cB3530a112",
            "symbol": "DEPO",
            "decimals": 18,
            "name": "DePo Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa5def515cfd373d17830e7c1de1639cb3530a112.png"
        },
        {
            "address": "0x25e1474170c4c0aA64fa98123bdc8dB49D7802fa",
            "symbol": "BID",
            "decimals": 18,
            "name": "Bidao",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x25e1474170c4c0aa64fa98123bdc8db49d7802fa.png"
        },
        {
            "address": "0xed0889F7E1c7C7267407222Be277e1f1Ef4d4892",
            "symbol": "MEL",
            "decimals": 18,
            "name": "Melalie",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xed0889f7e1c7c7267407222be277e1f1ef4d4892.png"
        },
        {
            "address": "0x0f71B8De197A1C84d31de0F1fA7926c365F052B3",
            "symbol": "ARCONA",
            "decimals": 18,
            "name": "Arcona Distribution Contract",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0f71b8de197a1c84d31de0f1fa7926c365f052b3.png"
        },
        {
            "address": "0xAEcc217a749c2405b5ebC9857a16d58Bdc1c367F",
            "symbol": "PAWTH",
            "decimals": 9,
            "name": "Pawthereum",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xaecc217a749c2405b5ebc9857a16d58bdc1c367f.png"
        },
        {
            "address": "0x2eDf094dB69d6Dcd487f1B3dB9febE2eeC0dd4c5",
            "symbol": "ZEE",
            "decimals": 18,
            "name": "ZeroSwapToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2edf094db69d6dcd487f1b3db9febe2eec0dd4c5.png"
        },
        {
            "address": "0x00a8b738E453fFd858a7edf03bcCfe20412f0Eb0",
            "symbol": "ALBT",
            "decimals": 18,
            "name": "AllianceBlock Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x00a8b738e453ffd858a7edf03bccfe20412f0eb0.png"
        },
        {
            "address": "0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec",
            "symbol": "REL",
            "decimals": 18,
            "name": "Relevant",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb6c4267c4877bb0d6b1685cfd85b0fbe82f105ec.png"
        },
        {
            "address": "0xD13c7342e1ef687C5ad21b27c2b65D772cAb5C8c",
            "symbol": "UOS",
            "decimals": 4,
            "name": "Ultra Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c.png"
        },
        {
            "address": "0xe89a6D0509faF730BD707bf868d9A2A744a363C7",
            "symbol": "crUNI",
            "decimals": 8,
            "name": "Cream Uniswap",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe89a6d0509faf730bd707bf868d9a2a744a363c7.png"
        },
        {
            "address": "0xc813EA5e3b48BEbeedb796ab42A30C5599b01740",
            "symbol": "NIOX",
            "decimals": 4,
            "name": "Autonio",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc813ea5e3b48bebeedb796ab42a30c5599b01740.png"
        },
        {
            "address": "0x431ad2ff6a9C365805eBaD47Ee021148d6f7DBe0",
            "symbol": "DF",
            "decimals": 18,
            "name": "dForce",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0.png"
        },
        {
            "address": "0x04Aa51bbcB46541455cCF1B8bef2ebc5d3787EC9",
            "symbol": "yBTC",
            "decimals": 8,
            "name": "iearn WBTC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x04aa51bbcb46541455ccf1b8bef2ebc5d3787ec9.png"
        },
        {
            "address": "0xFE3E6a25e6b192A42a44ecDDCd13796471735ACf",
            "symbol": "REEF",
            "decimals": 18,
            "name": "Reef.finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xfe3e6a25e6b192a42a44ecddcd13796471735acf.png"
        },
        {
            "address": "0x6F87D756DAf0503d08Eb8993686c7Fc01Dc44fB1",
            "symbol": "TRADE",
            "decimals": 18,
            "name": "UniTrade",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6f87d756daf0503d08eb8993686c7fc01dc44fb1.png"
        },
        {
            "address": "0x7D2D3688Df45Ce7C552E19c27e007673da9204B8",
            "symbol": "aLENDv1",
            "decimals": 18,
            "name": "Aave Interest bearing LEND",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7d2d3688df45ce7c552e19c27e007673da9204b8.png"
        },
        {
            "address": "0x037A54AaB062628C9Bbae1FDB1583c195585fe41",
            "symbol": "LCX",
            "decimals": 18,
            "name": "LCX",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x037a54aab062628c9bbae1fdb1583c195585fe41.png"
        },
        {
            "address": "0x4691937a7508860F876c9c0a2a617E7d9E945D4B",
            "symbol": "WOO",
            "decimals": 18,
            "name": "Wootrade Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4691937a7508860f876c9c0a2a617e7d9e945d4b.png"
        },
        {
            "address": "0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
            "symbol": "SAND",
            "decimals": 18,
            "name": "SAND",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3845badade8e6dff049820680d1f14bd3903a5d0.png"
        },
        {
            "address": "0x12f649A9E821F90BB143089a6e56846945892ffB",
            "symbol": "uDOO",
            "decimals": 18,
            "name": "uDOO",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x12f649a9e821f90bb143089a6e56846945892ffb.png"
        },
        {
            "address": "0x297D33e17e61C2Ddd812389C2105193f8348188a",
            "symbol": "$TRDL",
            "decimals": 18,
            "name": "Strudel Finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x297d33e17e61c2ddd812389c2105193f8348188a.png"
        },
        {
            "address": "0xFFC97d72E13E01096502Cb8Eb52dEe56f74DAD7B",
            "symbol": "aAAVE",
            "decimals": 18,
            "name": "Aave interest bearing AAVE",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xffc97d72e13e01096502cb8eb52dee56f74dad7b.png"
        },
        {
            "address": "0xeca82185adCE47f39c684352B0439f030f860318",
            "symbol": "PERL",
            "decimals": 18,
            "name": "Perlin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xeca82185adce47f39c684352b0439f030f860318.png"
        },
        {
            "address": "0x0327112423F3A68efdF1fcF402F6c5CB9f7C33fd",
            "symbol": "BTC++",
            "decimals": 18,
            "name": "PieDAO BTC++",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0327112423f3a68efdf1fcf402f6c5cb9f7c33fd.png"
        },
        {
            "address": "0xB1191F691A355b43542Bea9B8847bc73e7Abb137",
            "symbol": "KIRO",
            "decimals": 18,
            "name": "Kirobo",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb1191f691a355b43542bea9b8847bc73e7abb137.png"
        },
        {
            "address": "0x6710c63432A2De02954fc0f851db07146a6c0312",
            "symbol": "MFG",
            "decimals": 18,
            "name": "Smart MFG",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6710c63432a2de02954fc0f851db07146a6c0312.png"
        },
        {
            "address": "0xe047705117Eb07e712C3d684f5B18E74577e83aC",
            "symbol": "BCP",
            "decimals": 8,
            "name": "BitcashPay",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe047705117eb07e712c3d684f5b18e74577e83ac.png"
        },
        {
            "address": "0x875773784Af8135eA0ef43b5a374AaD105c5D39e",
            "symbol": "IDLE",
            "decimals": 18,
            "name": "Idle",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x875773784af8135ea0ef43b5a374aad105c5d39e.png"
        },
        {
            "address": "0xc221b7E65FfC80DE234bbB6667aBDd46593D34F0",
            "symbol": "wCFG",
            "decimals": 18,
            "name": "Wrapped Centrifuge",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc221b7e65ffc80de234bbb6667abdd46593d34f0.png"
        },
        {
            "address": "0xF406F7A9046793267bc276908778B29563323996",
            "symbol": "VISION",
            "decimals": 18,
            "name": "Vision Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf406f7a9046793267bc276908778b29563323996.png"
        },
        {
            "address": "0x374CB8C27130E2c9E04F44303f3c8351B9De61C1",
            "symbol": "BAO",
            "decimals": 18,
            "name": "BaoToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x374cb8c27130e2c9e04f44303f3c8351b9de61c1.png"
        },
        {
            "address": "0x2b915b505c017ABb1547aA5Ab355FbE69865cC6D",
            "symbol": "MAPS",
            "decimals": 6,
            "name": "Maps.me Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2b915b505c017abb1547aa5ab355fbe69865cc6d.png"
        },
        {
            "address": "0xC581b735A1688071A1746c968e0798D642EDE491",
            "symbol": "EURT",
            "decimals": 6,
            "name": "Euro Tether",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png"
        },
        {
            "address": "0x07150e919B4De5fD6a63DE1F9384828396f25fDC",
            "symbol": "BASE",
            "decimals": 9,
            "name": "Base Protocol",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x07150e919b4de5fd6a63de1f9384828396f25fdc.png"
        },
        {
            "address": "0x9cEB84f92A0561fa3Cc4132aB9c0b76A59787544",
            "symbol": "DOKI",
            "decimals": 18,
            "name": "DokiDokiFinance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9ceb84f92a0561fa3cc4132ab9c0b76a59787544.png"
        },
        {
            "address": "0x8E6cd950Ad6ba651F6DD608Dc70e5886B1AA6B24",
            "symbol": "STARL",
            "decimals": 18,
            "name": "StarLink",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8e6cd950ad6ba651f6dd608dc70e5886b1aa6b24.png"
        },
        {
            "address": "0x9BE89D2a4cd102D8Fecc6BF9dA793be995C22541",
            "symbol": "BBTC",
            "decimals": 8,
            "name": "Binance Wrapped BTC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9be89d2a4cd102d8fecc6bf9da793be995c22541.png"
        },
        {
            "address": "0xa52bfFAD02B1FE3f86A543a4e81962d3B3bB01A7",
            "symbol": "DUCKER",
            "decimals": 18,
            "name": "Duckereum",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa52bffad02b1fe3f86a543a4e81962d3b3bb01a7.png"
        },
        {
            "address": "0x88dF592F8eb5D7Bd38bFeF7dEb0fBc02cf3778a0",
            "symbol": "TRB",
            "decimals": 18,
            "name": "Tellor Tributes",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0ba45a8b5d5575935b8158a88c631e9f9c95a2e5.png"
        },
        {
            "address": "0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B",
            "symbol": "TRIBE",
            "decimals": 18,
            "name": "Tribe",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc7283b66eb1eb5fb86327f08e1b5816b0720212b.png"
        },
        {
            "address": "0x949D48EcA67b17269629c7194F4b727d4Ef9E5d6",
            "symbol": "MC",
            "decimals": 18,
            "name": "Merit Circle",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x949d48eca67b17269629c7194f4b727d4ef9e5d6.png"
        },
        {
            "address": "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
            "symbol": "UMA",
            "decimals": 18,
            "name": "UMA Voting Token v1",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x04fa0d235c4abf4bcf4787af4cf447de572ef828.png"
        },
        {
            "address": "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
            "symbol": "BUSD",
            "decimals": 18,
            "name": "Binance USD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4fabb145d64652a948d72533023f6e7a623c7c53.png"
        },
        {
            "address": "0x3E9BC21C9b189C09dF3eF1B824798658d5011937",
            "symbol": "LINA",
            "decimals": 18,
            "name": "Linear Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3e9bc21c9b189c09df3ef1b824798658d5011937.png"
        },
        {
            "address": "0x16c52CeeCE2ed57dAd87319D91B5e3637d50aFa4",
            "symbol": "TCAP",
            "decimals": 18,
            "name": "TCAP Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x16c52ceece2ed57dad87319d91b5e3637d50afa4.png"
        },
        {
            "address": "0x1735Db6AB5BAa19eA55d0AdcEeD7bcDc008B3136",
            "symbol": "URQA",
            "decimals": 18,
            "name": "UREEQA Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1735db6ab5baa19ea55d0adceed7bcdc008b3136.png"
        },
        {
            "address": "0xf29e46887FFAE92f1ff87DfE39713875Da541373",
            "symbol": "UNC",
            "decimals": 18,
            "name": "UniCrypt",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf29e46887ffae92f1ff87dfe39713875da541373.png"
        },
        {
            "address": "0x456AE45c0CE901E2e7c99c0718031cEc0A7A59Ff",
            "symbol": "VSN",
            "decimals": 18,
            "name": "Vision Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x456ae45c0ce901e2e7c99c0718031cec0a7a59ff.png"
        },
        {
            "address": "0x95a4492F028aa1fd432Ea71146b433E7B4446611",
            "symbol": "APY",
            "decimals": 18,
            "name": "APY Governance Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x95a4492f028aa1fd432ea71146b433e7b4446611.png"
        },
        {
            "address": "0xC0bA369c8Db6eB3924965e5c4FD0b4C1B91e305F",
            "symbol": "DUCK",
            "decimals": 18,
            "name": "DLP Duck Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc0ba369c8db6eb3924965e5c4fd0b4c1b91e305f.png"
        },
        {
            "address": "0x514910771AF9Ca656af840dff83E8264EcF986CA",
            "symbol": "LINK",
            "decimals": 18,
            "name": "Chain Link",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png"
        },
        {
            "address": "0x7FF4169a6B5122b664c51c95727d87750eC07c84",
            "symbol": "10SET",
            "decimals": 18,
            "name": "10Set Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7ff4169a6b5122b664c51c95727d87750ec07c84.png"
        },
        {
            "address": "0x0f51bb10119727a7e5eA3538074fb341F56B09Ad",
            "symbol": "DAO",
            "decimals": 18,
            "name": "DAO Maker",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0f51bb10119727a7e5ea3538074fb341f56b09ad.png"
        },
        {
            "address": "0x4de2573e27E648607B50e1Cfff921A33E4A34405",
            "symbol": "LST",
            "decimals": 18,
            "name": "Lendroid Support Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4de2573e27e648607b50e1cfff921a33e4a34405.png"
        },
        {
            "address": "0xADE00C28244d5CE17D72E40330B1c318cD12B7c3",
            "symbol": "ADX",
            "decimals": 18,
            "name": "AdEx Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xade00c28244d5ce17d72e40330b1c318cd12b7c3.png"
        },
        {
            "address": "0x12B19D3e2ccc14Da04FAe33e63652ce469b3F2FD",
            "symbol": "GRID",
            "decimals": 12,
            "name": "GRID",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd.png"
        },
        {
            "address": "0xE9A95d175a5f4C9369f3b74222402eB1b837693b",
            "symbol": "NOW",
            "decimals": 8,
            "name": "ChangeNOW",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe9a95d175a5f4c9369f3b74222402eb1b837693b.png"
        },
        {
            "address": "0x0258F474786DdFd37ABCE6df6BBb1Dd5dfC4434a",
            "symbol": "ORN",
            "decimals": 8,
            "name": "Orion Protocol",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0258f474786ddfd37abce6df6bbb1dd5dfc4434a.png"
        },
        {
            "address": "0x05079687D35b93538cbd59fe5596380cae9054A9",
            "symbol": "BTSG",
            "decimals": 18,
            "name": "BitSong",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x05079687d35b93538cbd59fe5596380cae9054a9.png"
        },
        {
            "address": "0xC53342fd7575f572b0fF4569e31941A5B821aC76",
            "symbol": "ETHV",
            "decimals": 18,
            "name": "ETH Volatility Index",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc53342fd7575f572b0ff4569e31941a5b821ac76.png"
        },
        {
            "address": "0x6c5bA91642F10282b576d91922Ae6448C9d52f4E",
            "symbol": "PHA",
            "decimals": 18,
            "name": "Phala",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6c5ba91642f10282b576d91922ae6448c9d52f4e.png"
        },
        {
            "address": "0x6A7Ef4998eB9d0f706238756949F311a59E05745",
            "symbol": "KEN",
            "decimals": 18,
            "name": "Kenysians Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6a7ef4998eb9d0f706238756949f311a59e05745.png"
        },
        {
            "address": "0xB9D7CB55f463405CDfBe4E90a6D2Df01C2B92BF1",
            "symbol": "aUNI",
            "decimals": 18,
            "name": "Aave interest bearing UNI",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb9d7cb55f463405cdfbe4e90a6d2df01c2b92bf1.png"
        },
        {
            "address": "0x1337DEF16F9B486fAEd0293eb623Dc8395dFE46a",
            "symbol": "ARMOR",
            "decimals": 18,
            "name": "Armor",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1337def16f9b486faed0293eb623dc8395dfe46a.png"
        },
        {
            "address": "0xdc9Ac3C20D1ed0B540dF9b1feDC10039Df13F99c",
            "symbol": "UTK",
            "decimals": 18,
            "name": "Utrust Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdc9ac3c20d1ed0b540df9b1fedc10039df13f99c.png"
        },
        {
            "address": "0x0488401c3F535193Fa8Df029d9fFe615A06E74E6",
            "symbol": "SRK",
            "decimals": 18,
            "name": "SparkPoint",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0488401c3f535193fa8df029d9ffe615a06e74e6.png"
        },
        {
            "address": "0x106538CC16F938776c7c180186975BCA23875287",
            "symbol": "BASv2",
            "decimals": 18,
            "name": "BASv2",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x106538cc16f938776c7c180186975bca23875287.png"
        },
        {
            "address": "0x70e8dE73cE538DA2bEEd35d14187F6959a8ecA96",
            "symbol": "XSGD",
            "decimals": 6,
            "name": "XSGD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x70e8de73ce538da2beed35d14187f6959a8eca96.png"
        },
        {
            "address": "0xA36FDBBAE3c9d55a1d67EE5821d53B50B63A1aB9",
            "symbol": "TEMP",
            "decimals": 18,
            "name": "Tempus",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa36fdbbae3c9d55a1d67ee5821d53b50b63a1ab9.png"
        },
        {
            "address": "0x2Ab6Bb8408ca3199B8Fa6C92d5b455F820Af03c4",
            "symbol": "TONE",
            "decimals": 18,
            "name": "TE-FOOD/TustChain",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2ab6bb8408ca3199b8fa6c92d5b455f820af03c4.png"
        },
        {
            "address": "0x48Fb253446873234F2fEBbF9BdeAA72d9d387f94",
            "symbol": "vBNT",
            "decimals": 18,
            "name": "Bancor Governance Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x48fb253446873234f2febbf9bdeaa72d9d387f94.png"
        },
        {
            "address": "0xa1d6Df714F91DeBF4e0802A542E13067f31b8262",
            "symbol": "RFOX",
            "decimals": 18,
            "name": "RFOX",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa1d6df714f91debf4e0802a542e13067f31b8262.png"
        },
        {
            "address": "0xDc49108ce5C57bc3408c3A5E95F3d864eC386Ed3",
            "symbol": "FOXy",
            "decimals": 18,
            "name": "FOX Yieldy",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdc49108ce5c57bc3408c3a5e95f3d864ec386ed3.png"
        },
        {
            "address": "0x4Cf89ca06ad997bC732Dc876ed2A7F26a9E7f361",
            "symbol": "MYST",
            "decimals": 18,
            "name": "Mysterium",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4cf89ca06ad997bc732dc876ed2a7f26a9e7f361.png"
        },
        {
            "address": "0xa06bC25B5805d5F8d82847D191Cb4Af5A3e873E0",
            "symbol": "aLINK",
            "decimals": 18,
            "name": "Aave interest bearing LINK",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa06bc25b5805d5f8d82847d191cb4af5a3e873e0.png"
        },
        {
            "address": "0xeF9Cd7882c067686691B6fF49e650b43AFBBCC6B",
            "symbol": "FNX",
            "decimals": 18,
            "name": "FinNexus",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xef9cd7882c067686691b6ff49e650b43afbbcc6b.png"
        },
        {
            "address": "0x17107f40d70f4470d20CB3f138a052cAE8EbD4bE",
            "symbol": "crRENBTC",
            "decimals": 8,
            "name": "Cream renBTC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x17107f40d70f4470d20cb3f138a052cae8ebd4be.png"
        },
        {
            "address": "0x739763a258640919981F9bA610AE65492455bE53",
            "symbol": "NDR",
            "decimals": 18,
            "name": "NodeRunners",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x739763a258640919981f9ba610ae65492455be53.png"
        },
        {
            "address": "0x1C9922314ED1415c95b9FD453c3818fd41867d0B",
            "symbol": "TOWER",
            "decimals": 18,
            "name": "TOWER",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1c9922314ed1415c95b9fd453c3818fd41867d0b.png"
        },
        {
            "address": "0xC477D038d5420C6A9e0b031712f61c5120090de9",
            "symbol": "BOSON",
            "decimals": 18,
            "name": "Boson Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc477d038d5420c6a9e0b031712f61c5120090de9.png"
        },
        {
            "address": "0x8564653879a18C560E7C0Ea0E084c516C62F5653",
            "symbol": "UBXT",
            "decimals": 18,
            "name": "UpBots",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8564653879a18c560e7c0ea0e084c516c62f5653.png"
        },
        {
            "address": "0x579CEa1889991f68aCc35Ff5c3dd0621fF29b0C9",
            "symbol": "IQ",
            "decimals": 18,
            "name": "Everipedia IQ",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x579cea1889991f68acc35ff5c3dd0621ff29b0c9.png"
        },
        {
            "address": "0x0000000000085d4780B73119b644AE5ecd22b376",
            "symbol": "TUSD",
            "decimals": 18,
            "name": "TrueUSD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0000000000085d4780b73119b644ae5ecd22b376.png"
        },
        {
            "address": "0xA3c4Dc4A9cE2a6B40B57F25F8b50DeCc2c64deC2",
            "symbol": "SNFT",
            "decimals": 18,
            "name": "SeedSwap Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa3c4dc4a9ce2a6b40b57f25f8b50decc2c64dec2.png"
        },
        {
            "address": "0x7865af71cf0b288b4E7F654f4F7851EB46a2B7F8",
            "symbol": "SNTVT",
            "decimals": 18,
            "name": "Sentivate",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7865af71cf0b288b4e7f654f4f7851eb46a2b7f8.png"
        },
        {
            "address": "0x1796ae0b0fa4862485106a0de9b654eFE301D0b2",
            "symbol": "PMON",
            "decimals": 18,
            "name": "Polkamon",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1796ae0b0fa4862485106a0de9b654efe301d0b2.png"
        },
        {
            "address": "0x178c820f862B14f316509ec36b13123DA19A6054",
            "symbol": "EWTB",
            "decimals": 18,
            "name": "Energy Web Token Bridged",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x178c820f862b14f316509ec36b13123da19a6054.png"
        },
        {
            "address": "0x9992eC3cF6A55b00978cdDF2b27BC6882d88D1eC",
            "symbol": "POLY",
            "decimals": 18,
            "name": "Polymath",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec.png"
        },
        {
            "address": "0xd084B83C305daFD76AE3E1b4E1F1fe2eCcCb3988",
            "symbol": "TVK",
            "decimals": 18,
            "name": "Terra Virtua Kolect",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd084b83c305dafd76ae3e1b4e1f1fe2ecccb3988.png"
        },
        {
            "address": "0x89bD2E7e388fAB44AE88BEf4e1AD12b4F1E0911c",
            "symbol": "NUX",
            "decimals": 18,
            "name": "NUX Peanut.trade",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x89bd2e7e388fab44ae88bef4e1ad12b4f1e0911c.png"
        },
        {
            "address": "0xb092b4601850E23903A42EaCBc9D8A0EeC26A4d5",
            "symbol": "crFRAX",
            "decimals": 8,
            "name": "Cream Frax",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb092b4601850e23903a42eacbc9d8a0eec26a4d5.png"
        },
        {
            "address": "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
            "symbol": "cUSDT",
            "decimals": 8,
            "name": "Compound USDT",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9.png"
        },
        {
            "address": "0xC0F9bD5Fa5698B6505F643900FFA515Ea5dF54A9",
            "symbol": "DONUT",
            "decimals": 18,
            "name": "DONUT",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9.png"
        },
        {
            "address": "0xCae72A7A0Fd9046cf6b165CA54c9e3a3872109E0",
            "symbol": "$ANRX",
            "decimals": 18,
            "name": "AnRKey X",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xcae72a7a0fd9046cf6b165ca54c9e3a3872109e0.png"
        },
        {
            "address": "0xCbaE0A83f4f9926997c8339545fb8eE32eDc6b76",
            "symbol": "crYFI",
            "decimals": 8,
            "name": "Cream YFI",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xcbae0a83f4f9926997c8339545fb8ee32edc6b76.png"
        },
        {
            "address": "0xBB1fA4FdEB3459733bF67EbC6f893003fA976a82",
            "symbol": "XPAT",
            "decimals": 18,
            "name": "Bitnation",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xbb1fa4fdeb3459733bf67ebc6f893003fa976a82.png"
        },
        {
            "address": "0x249e38Ea4102D0cf8264d3701f1a0E39C4f2DC3B",
            "symbol": "UFO",
            "decimals": 18,
            "name": "THE TRUTH",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x249e38ea4102d0cf8264d3701f1a0e39c4f2dc3b.png"
        },
        {
            "address": "0x3a4f40631a4f906c2BaD353Ed06De7A5D3fCb430",
            "symbol": "PLA",
            "decimals": 18,
            "name": "PlayDapp Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3a4f40631a4f906c2bad353ed06de7a5d3fcb430.png"
        },
        {
            "address": "0x4688a8b1F292FDaB17E9a90c8Bc379dC1DBd8713",
            "symbol": "COVER",
            "decimals": 18,
            "name": "Cover Protocol Governance Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4688a8b1f292fdab17e9a90c8bc379dc1dbd8713.png"
        },
        {
            "address": "0xF0939011a9bb95c3B791f0cb546377Ed2693a574",
            "symbol": "ZERO",
            "decimals": 18,
            "name": "Zero.Exchange Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf0939011a9bb95c3b791f0cb546377ed2693a574.png"
        },
        {
            "address": "0x3b484b82567a09e2588A13D54D032153f0c0aEe0",
            "symbol": "SOS",
            "decimals": 18,
            "name": "SOS",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3b484b82567a09e2588a13d54d032153f0c0aee0.png"
        },
        {
            "address": "0x7c8155909cd385F120A56eF90728dD50F9CcbE52",
            "symbol": "NII",
            "decimals": 15,
            "name": "Nahmii",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7c8155909cd385f120a56ef90728dd50f9ccbe52.png"
        },
        {
            "address": "0x2602278EE1882889B946eb11DC0E810075650983",
            "symbol": "VADER",
            "decimals": 18,
            "name": "Vader",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2602278ee1882889b946eb11dc0e810075650983.png"
        },
        {
            "address": "0xE17f017475a709De58E976081eB916081ff4c9d5",
            "symbol": "RMPL",
            "decimals": 9,
            "name": "RMPL",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe17f017475a709de58e976081eb916081ff4c9d5.png"
        },
        {
            "address": "0x33d63Ba1E57E54779F7dDAeaA7109349344cf5F1",
            "symbol": "DATA",
            "decimals": 18,
            "name": "DATA Economy Index",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x33d63ba1e57e54779f7ddaeaa7109349344cf5f1.png"
        },
        {
            "address": "0x625aE63000f46200499120B906716420bd059240",
            "symbol": "aSUSDv1",
            "decimals": 18,
            "name": "Aave Interest bearing SUSD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x625ae63000f46200499120b906716420bd059240.png"
        },
        {
            "address": "0x967da4048cD07aB37855c090aAF366e4ce1b9F48",
            "symbol": "OCEAN",
            "decimals": 18,
            "name": "OceanToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x967da4048cd07ab37855c090aaf366e4ce1b9f48.png"
        },
        {
            "address": "0x86ed939B500E121C0C5f493F399084Db596dAd20",
            "symbol": "SPC",
            "decimals": 18,
            "name": "SpaceChainV2",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x86ed939b500e121c0c5f493f399084db596dad20.png"
        },
        {
            "address": "0x1321f1f1aa541A56C31682c57b80ECfCCd9bB288",
            "symbol": "ARCX",
            "decimals": 18,
            "name": "ARCx Governance Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xed30dd7e50edf3581ad970efc5d9379ce2614adb.png"
        },
        {
            "address": "0xFC4B8ED459e00e5400be803A9BB3954234FD50e3",
            "symbol": "aWBTCv1",
            "decimals": 8,
            "name": "Aave Interest bearing WBTC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xfc4b8ed459e00e5400be803a9bb3954234fd50e3.png"
        },
        {
            "address": "0xc3dD23A0a854b4f9aE80670f528094E9Eb607CCb",
            "symbol": "TRND",
            "decimals": 18,
            "name": "Trendering",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc3dd23a0a854b4f9ae80670f528094e9eb607ccb.png"
        },
        {
            "address": "0xe87e15B9c7d989474Cb6d8c56b3DB4eFAD5b21E8",
            "symbol": "HOKK",
            "decimals": 18,
            "name": "Hokkaido Inu",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe87e15b9c7d989474cb6d8c56b3db4efad5b21e8.png"
        },
        {
            "address": "0x1Da87b114f35E1DC91F72bF57fc07A768Ad40Bb0",
            "symbol": "EQZ",
            "decimals": 18,
            "name": "Equalizer",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1da87b114f35e1dc91f72bf57fc07a768ad40bb0.png"
        },
        {
            "address": "0x9695e0114e12C0d3A3636fAb5A18e6b737529023",
            "symbol": "DFYN",
            "decimals": 18,
            "name": "DFYN Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9695e0114e12c0d3a3636fab5a18e6b737529023.png"
        },
        {
            "address": "0xF5DCe57282A584D2746FaF1593d3121Fcac444dC",
            "symbol": "cSAI",
            "decimals": 8,
            "name": "Compound Sai",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf5dce57282a584d2746faf1593d3121fcac444dc.png"
        },
        {
            "address": "0x6149C26Cd2f7b5CCdb32029aF817123F6E37Df5B",
            "symbol": "LPOOL",
            "decimals": 18,
            "name": "Launchpool token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6149c26cd2f7b5ccdb32029af817123f6e37df5b.png"
        },
        {
            "address": "0xc3D088842DcF02C13699F936BB83DFBBc6f721Ab",
            "symbol": "vETH",
            "decimals": 18,
            "name": "Voucher Ethereum",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc3d088842dcf02c13699f936bb83dfbbc6f721ab.png"
        },
        {
            "address": "0xDE5ed76E7c05eC5e4572CfC88d1ACEA165109E44",
            "symbol": "DEUS",
            "decimals": 18,
            "name": "DEUS",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xde5ed76e7c05ec5e4572cfc88d1acea165109e44.png"
        },
        {
            "address": "0xDf7FF54aAcAcbFf42dfe29DD6144A69b629f8C9e",
            "symbol": "aZRX",
            "decimals": 18,
            "name": "Aave interest bearing ZRX",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdf7ff54aacacbff42dfe29dd6144a69b629f8c9e.png"
        },
        {
            "address": "0xba3D9687Cf50fE253cd2e1cFeEdE1d6787344Ed5",
            "symbol": "aAAVEv1",
            "decimals": 18,
            "name": "Aave Interest bearing Aave Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xba3d9687cf50fe253cd2e1cfeede1d6787344ed5.png"
        },
        {
            "address": "0xCd2828fc4D8E8a0eDe91bB38CF64B1a81De65Bf6",
            "symbol": "ODDZ",
            "decimals": 18,
            "name": "OddzToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xcd2828fc4d8e8a0ede91bb38cf64b1a81de65bf6.png"
        },
        {
            "address": "0x1d0986Fb43985c88Ffa9aD959CC24e6a087C7e35",
            "symbol": "crALPHA",
            "decimals": 8,
            "name": "Cream AlphaToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1d0986fb43985c88ffa9ad959cc24e6a087c7e35.png"
        },
        {
            "address": "0x0f7F961648aE6Db43C75663aC7E5414Eb79b5704",
            "symbol": "XIO",
            "decimals": 18,
            "name": "XIO Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0f7f961648ae6db43c75663ac7e5414eb79b5704.png"
        },
        {
            "address": "0x41D5D79431A913C4aE7d69a668ecdfE5fF9DFB68",
            "symbol": "INV",
            "decimals": 18,
            "name": "Inverse DAO",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x41d5d79431a913c4ae7d69a668ecdfe5ff9dfb68.png"
        },
        {
            "address": "0x557B933a7C2c45672B610F8954A3deB39a51A8Ca",
            "symbol": "REVV",
            "decimals": 18,
            "name": "REVV",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x557b933a7c2c45672b610f8954a3deb39a51a8ca.png"
        },
        {
            "address": "0xaac41EC512808d64625576EDdd580e7Ea40ef8B2",
            "symbol": "GSWAP",
            "decimals": 18,
            "name": "gameswap.org",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xaac41ec512808d64625576eddd580e7ea40ef8b2.png"
        },
        {
            "address": "0xdb0aCC14396D108b3C5574483aCB817855C9dc8d",
            "symbol": "EMB",
            "decimals": 8,
            "name": "Emblem",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdb0acc14396d108b3c5574483acb817855c9dc8d.png"
        },
        {
            "address": "0x0b38210ea11411557c13457D4dA7dC6ea731B88a",
            "symbol": "API3",
            "decimals": 18,
            "name": "API3",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0b38210ea11411557c13457d4da7dc6ea731b88a.png"
        },
        {
            "address": "0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26",
            "symbol": "OGN",
            "decimals": 18,
            "name": "Origin Protocol",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8207c1ffc5b6804f6024322ccf34f29c3541ae26.png"
        },
        {
            "address": "0xc00e94Cb662C3520282E6f5717214004A7f26888",
            "symbol": "COMP",
            "decimals": 18,
            "name": "Compound",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc00e94cb662c3520282e6f5717214004a7f26888.png"
        },
        {
            "address": "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
            "symbol": "LUSD",
            "decimals": 18,
            "name": "LUSD Stablecoin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5f98805a4e8be255a32880fdec7f6728c6568ba0.png"
        },
        {
            "address": "0x7cA4408137eb639570F8E647d9bD7B7E8717514A",
            "symbol": "ALPA",
            "decimals": 18,
            "name": "AlpaToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7ca4408137eb639570f8e647d9bd7b7e8717514a.png"
        },
        {
            "address": "0xf16e81dce15B08F326220742020379B855B87DF9",
            "symbol": "ICE",
            "decimals": 18,
            "name": "IceToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf16e81dce15b08f326220742020379b855b87df9.png"
        },
        {
            "address": "0x196f4727526eA7FB1e17b2071B3d8eAA38486988",
            "symbol": "RSV",
            "decimals": 18,
            "name": "Reserve",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x196f4727526ea7fb1e17b2071b3d8eaa38486988.png"
        },
        {
            "address": "0xf4CD3d3Fda8d7Fd6C5a500203e38640A70Bf9577",
            "symbol": "Yf-DAI",
            "decimals": 18,
            "name": "YfDAI.finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf4cd3d3fda8d7fd6c5a500203e38640a70bf9577.png"
        },
        {
            "address": "0xEa319e87Cf06203DAe107Dd8E5672175e3Ee976c",
            "symbol": "SURF",
            "decimals": 18,
            "name": "SURF.Finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xea319e87cf06203dae107dd8e5672175e3ee976c.png"
        },
        {
            "address": "0x21BfBDa47A0B4B5b1248c767Ee49F7caA9B23697",
            "symbol": "OVR",
            "decimals": 18,
            "name": "OVR",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x21bfbda47a0b4b5b1248c767ee49f7caa9b23697.png"
        },
        {
            "address": "0x7deB5e830be29F91E298ba5FF1356BB7f8146998",
            "symbol": "aMKRv1",
            "decimals": 18,
            "name": "Aave Interest bearing MKR",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7deb5e830be29f91e298ba5ff1356bb7f8146998.png"
        },
        {
            "address": "0xFF75CEd57419bcaEBe5F05254983b013B0646eF5",
            "symbol": "COOK",
            "decimals": 18,
            "name": "Cook Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xff75ced57419bcaebe5f05254983b013b0646ef5.png"
        },
        {
            "address": "0x35A18000230DA775CAc24873d00Ff85BccdeD550",
            "symbol": "cUNI",
            "decimals": 8,
            "name": "Compound Uniswap",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x35a18000230da775cac24873d00ff85bccded550.png"
        },
        {
            "address": "0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c",
            "symbol": "ENJ",
            "decimals": 18,
            "name": "Enjin Coin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c.png"
        },
        {
            "address": "0x5afFE41805a9E57fEd3657d0e64D96aeA0B77885",
            "symbol": "OPIUM_LP_34b7",
            "decimals": 6,
            "name": "Opium USDT Protection v2/USDC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5affe41805a9e57fed3657d0e64d96aea0b77885.png"
        },
        {
            "address": "0x8E870D67F660D95d5be530380D0eC0bd388289E1",
            "symbol": "USDP",
            "decimals": 18,
            "name": "Pax Dollar",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8e870d67f660d95d5be530380d0ec0bd388289e1_1.png"
        },
        {
            "address": "0x83f798e925BcD4017Eb265844FDDAbb448f1707D",
            "symbol": "yUSDTv2",
            "decimals": 6,
            "name": "iearn USDT v2",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x83f798e925bcd4017eb265844fddabb448f1707d.png"
        },
        {
            "address": "0x32a7C02e79c4ea1008dD6564b35F131428673c41",
            "symbol": "CRU",
            "decimals": 18,
            "name": "CRUST",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x32a7c02e79c4ea1008dd6564b35f131428673c41.png"
        },
        {
            "address": "0x43Dfc4159D86F3A37A5A4B3D4580b888ad7d4DDd",
            "symbol": "DODO",
            "decimals": 18,
            "name": "DODO bird",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd.png"
        },
        {
            "address": "0xE7f58A92476056627f9FdB92286778aBd83b285F",
            "symbol": "DWEB",
            "decimals": 18,
            "name": "DecentraWeb",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe7f58a92476056627f9fdb92286778abd83b285f.png"
        },
        {
            "address": "0xe53EC727dbDEB9E2d5456c3be40cFF031AB40A55",
            "symbol": "SUPER",
            "decimals": 18,
            "name": "SuperFarm",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe53ec727dbdeb9e2d5456c3be40cff031ab40a55.png"
        },
        {
            "address": "0x27C70Cd1946795B66be9d954418546998b546634",
            "symbol": "LEASH",
            "decimals": 18,
            "name": "DOGE KILLER",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x27c70cd1946795b66be9d954418546998b546634.png"
        },
        {
            "address": "0x0E29e5AbbB5FD88e28b2d355774e73BD47dE3bcd",
            "symbol": "HAKKA",
            "decimals": 18,
            "name": "Hakka Finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0e29e5abbb5fd88e28b2d355774e73bd47de3bcd.png"
        },
        {
            "address": "0x514cdb9cd8A2fb2BdCf7A3b8DDd098CaF466E548",
            "symbol": "REDPANDA",
            "decimals": 9,
            "name": "Red Panda",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x514cdb9cd8a2fb2bdcf7a3b8ddd098caf466e548.png"
        },
        {
            "address": "0xfFffFffF2ba8F66D4e51811C5190992176930278",
            "symbol": "COMBO",
            "decimals": 18,
            "name": "Furucombo",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xffffffff2ba8f66d4e51811c5190992176930278.png"
        },
        {
            "address": "0x20c36f062a31865bED8a5B1e512D9a1A20AA333A",
            "symbol": "DFD",
            "decimals": 18,
            "name": "DefiDollar DAO",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x20c36f062a31865bed8a5b1e512d9a1a20aa333a.png"
        },
        {
            "address": "0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c",
            "symbol": "EUROC",
            "decimals": 6,
            "name": "Euro Coin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1abaea1f7c830bd89acc67ec4af516284b1bc33c.png"
        },
        {
            "address": "0x56A86d648c435DC707c8405B78e2Ae8eB4E60Ba4",
            "symbol": "STACK",
            "decimals": 18,
            "name": "StackOS",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x56a86d648c435dc707c8405b78e2ae8eb4e60ba4.png"
        },
        {
            "address": "0x260e63d91fCCC499606BAe3FE945c4ed1CF56A56",
            "symbol": "MOONS",
            "decimals": 18,
            "name": "MoonTools.io",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x260e63d91fccc499606bae3fe945c4ed1cf56a56.png"
        },
        {
            "address": "0xCA0e7269600d353F70b14Ad118A49575455C0f2f",
            "symbol": "AMLT",
            "decimals": 18,
            "name": "AMLT",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xca0e7269600d353f70b14ad118a49575455c0f2f.png"
        },
        {
            "address": "0x6595b8fD9C920C81500dCa94e53Cdc712513Fb1f",
            "symbol": "OLY",
            "decimals": 18,
            "name": "Olyseum",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6595b8fd9c920c81500dca94e53cdc712513fb1f.png"
        },
        {
            "address": "0xc770EEfAd204B5180dF6a14Ee197D99d808ee52d",
            "symbol": "FOX",
            "decimals": 18,
            "name": "FOX",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc770eefad204b5180df6a14ee197d99d808ee52d.png"
        },
        {
            "address": "0xeEAA40B28A2d1b0B08f6f97bB1DD4B75316c6107",
            "symbol": "GOVI",
            "decimals": 18,
            "name": "GOVI",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xeeaa40b28a2d1b0b08f6f97bb1dd4b75316c6107.png"
        },
        {
            "address": "0x491604c0FDF08347Dd1fa4Ee062a822A5DD06B5D",
            "symbol": "CTSI",
            "decimals": 18,
            "name": "Cartesi Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x491604c0fdf08347dd1fa4ee062a822a5dd06b5d.png"
        },
        {
            "address": "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
            "symbol": "SNX",
            "decimals": 18,
            "name": "Synthetix Network Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f.png"
        },
        {
            "address": "0x3593D125a4f7849a1B059E64F4517A86Dd60c95d",
            "symbol": "OMv2",
            "decimals": 18,
            "name": "MANTRA DAO",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3593d125a4f7849a1b059e64f4517a86dd60c95d.png"
        },
        {
            "address": "0x9248c485b0B80f76DA451f167A8db30F33C70907",
            "symbol": "DEBASE",
            "decimals": 18,
            "name": "Debase",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9248c485b0b80f76da451f167a8db30f33c70907.png"
        },
        {
            "address": "0x626E8036dEB333b408Be468F951bdB42433cBF18",
            "symbol": "AIOZ",
            "decimals": 18,
            "name": "AIOZ Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x626e8036deb333b408be468f951bdb42433cbf18.png"
        },
        {
            "address": "0x515d7E9D75E2b76DB60F8a051Cd890eBa23286Bc",
            "symbol": "GDAO",
            "decimals": 18,
            "name": "Governor",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x515d7e9d75e2b76db60f8a051cd890eba23286bc.png"
        },
        {
            "address": "0xBC19712FEB3a26080eBf6f2F7849b417FdD792CA",
            "symbol": "BORING",
            "decimals": 18,
            "name": "BoringDAO",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xbc19712feb3a26080ebf6f2f7849b417fdd792ca.png"
        },
        {
            "address": "0x86772b1409b61c639EaAc9Ba0AcfBb6E238e5F83",
            "symbol": "NDX",
            "decimals": 18,
            "name": "Indexed",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x86772b1409b61c639eaac9ba0acfbb6e238e5f83.png"
        },
        {
            "address": "0xb753428af26E81097e7fD17f40c88aaA3E04902c",
            "symbol": "SFI",
            "decimals": 18,
            "name": "Spice",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb753428af26e81097e7fd17f40c88aaa3e04902c.png"
        },
        {
            "address": "0xC2cB1040220768554cf699b0d863A3cd4324ce32",
            "symbol": "yDAIv3",
            "decimals": 18,
            "name": "iearn DAI v3",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc2cb1040220768554cf699b0d863a3cd4324ce32.png"
        },
        {
            "address": "0xBcca60bB61934080951369a648Fb03DF4F96263C",
            "symbol": "aUSDC",
            "decimals": 6,
            "name": "Aave interest bearing USDC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xbcca60bb61934080951369a648fb03df4f96263c.png"
        },
        {
            "address": "0x77777FeDdddFfC19Ff86DB637967013e6C6A116C",
            "symbol": "TORN",
            "decimals": 18,
            "name": "TornadoCash",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x77777feddddffc19ff86db637967013e6c6a116c.png"
        },
        {
            "address": "0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6",
            "symbol": "DCN",
            "decimals": 0,
            "name": "Dentacoin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x08d32b0da63e2c3bcf8019c9c5d849d7a9d791e6.png"
        },
        {
            "address": "0xA31B1767e09f842ECFd4bc471Fe44F830E3891AA",
            "symbol": "ROOBEE",
            "decimals": 18,
            "name": "ROOBEE",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa31b1767e09f842ecfd4bc471fe44f830e3891aa.png"
        },
        {
            "address": "0x0AF55d5fF28A3269d69B98680Fd034f115dd53Ac",
            "symbol": "BSL",
            "decimals": 8,
            "name": "BankSocial",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0af55d5ff28a3269d69b98680fd034f115dd53ac.png"
        },
        {
            "address": "0x44709a920fCcF795fbC57BAA433cc3dd53C44DbE",
            "symbol": "RADAR",
            "decimals": 18,
            "name": "DappRadar",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x44709a920fccf795fbc57baa433cc3dd53c44dbe.png"
        },
        {
            "address": "0xB9EefC4b0d472A44be93970254Df4f4016569d27",
            "symbol": "XDB",
            "decimals": 7,
            "name": "digitalbits",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb9eefc4b0d472a44be93970254df4f4016569d27.png"
        },
        {
            "address": "0x7121D00b4fA18F13Da6c2e30d19C04844E6AfDC8",
            "symbol": "LUFFY",
            "decimals": 9,
            "name": "LUFFY",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7121d00b4fa18f13da6c2e30d19c04844e6afdc8.png"
        },
        {
            "address": "0x70401dFD142A16dC7031c56E862Fc88Cb9537Ce0",
            "symbol": "BIRD",
            "decimals": 18,
            "name": "Bird.Money",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x70401dfd142a16dc7031c56e862fc88cb9537ce0.png"
        },
        {
            "address": "0x9E78b8274e1D6a76a0dBbf90418894DF27cBCEb5",
            "symbol": "UniFi",
            "decimals": 18,
            "name": "UniFi",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9e78b8274e1d6a76a0dbbf90418894df27cbceb5.png"
        },
        {
            "address": "0xf99d58e463A2E07e5692127302C20A191861b4D6",
            "symbol": "ANY",
            "decimals": 18,
            "name": "Anyswap",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf99d58e463a2e07e5692127302c20a191861b4d6.png"
        },
        {
            "address": "0x0fF6ffcFDa92c53F615a4A75D982f399C989366b",
            "symbol": "LAYER",
            "decimals": 18,
            "name": "Unilayer",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0ff6ffcfda92c53f615a4a75d982f399c989366b.png"
        },
        {
            "address": "0xf8C3527CC04340b208C854E985240c02F7B7793f",
            "symbol": "FRONT",
            "decimals": 18,
            "name": "Frontier Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf8c3527cc04340b208c854e985240c02f7b7793f.png"
        },
        {
            "address": "0x9baF8a5236d44AC410c0186Fe39178d5AAD0Bb87",
            "symbol": "crYCRV",
            "decimals": 8,
            "name": "Cream yCRV",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9baf8a5236d44ac410c0186fe39178d5aad0bb87.png"
        },
        {
            "address": "0x0000000000b3F879cb30FE243b4Dfee438691c04",
            "symbol": "GST2",
            "decimals": 2,
            "name": "Gastoken.io 2",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0000000000b3f879cb30fe243b4dfee438691c04.png"
        },
        {
            "address": "0x543Ff227F64Aa17eA132Bf9886cAb5DB55DCAddf",
            "symbol": "GEN",
            "decimals": 18,
            "name": "DAOStack",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x543ff227f64aa17ea132bf9886cab5db55dcaddf.png"
        },
        {
            "address": "0x408e41876cCCDC0F92210600ef50372656052a38",
            "symbol": "REN",
            "decimals": 18,
            "name": "Republic",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x408e41876cccdc0f92210600ef50372656052a38.png"
        },
        {
            "address": "0xEBd9D99A3982d547C5Bb4DB7E3b1F9F14b67Eb83",
            "symbol": "ID",
            "decimals": 18,
            "name": "Everest ID",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xebd9d99a3982d547c5bb4db7e3b1f9f14b67eb83.png"
        },
        {
            "address": "0x2e1E15C44Ffe4Df6a0cb7371CD00d5028e571d14",
            "symbol": "MTLX",
            "decimals": 18,
            "name": "Mettalex",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2e1e15c44ffe4df6a0cb7371cd00d5028e571d14.png"
        },
        {
            "address": "0x358AA737e033F34df7c54306960a38d09AaBd523",
            "symbol": "ARES",
            "decimals": 18,
            "name": "Ares Protocol",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x358aa737e033f34df7c54306960a38d09aabd523.png"
        },
        {
            "address": "0xA4EED63db85311E22dF4473f87CcfC3DaDCFA3E3",
            "symbol": "RBC",
            "decimals": 18,
            "name": "Rubic",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa4eed63db85311e22df4473f87ccfc3dadcfa3e3.png"
        },
        {
            "address": "0x48f07301E9E29c3C38a80ae8d9ae771F224f1054",
            "symbol": "XZAR",
            "decimals": 18,
            "name": "South African Tether",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x48f07301e9e29c3c38a80ae8d9ae771f224f1054.png"
        },
        {
            "address": "0x1F3f9D3068568F8040775be2e8C03C103C61f3aF",
            "symbol": "ARCH",
            "decimals": 18,
            "name": "Archer DAO Governance Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1f3f9d3068568f8040775be2e8c03c103c61f3af.png"
        },
        {
            "address": "0xfffffffFf15AbF397dA76f1dcc1A1604F45126DB",
            "symbol": "FSW",
            "decimals": 18,
            "name": "FalconSwap Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xfffffffff15abf397da76f1dcc1a1604f45126db.png"
        },
        {
            "address": "0x6c28AeF8977c9B773996d0e8376d2EE379446F2f",
            "symbol": "QUICK",
            "decimals": 18,
            "name": "Quickswap",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6c28aef8977c9b773996d0e8376d2ee379446f2f.png"
        },
        {
            "address": "0x1614F18Fc94f47967A3Fbe5FfcD46d4e7Da3D787",
            "symbol": "PAID",
            "decimals": 18,
            "name": "PAID Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1614f18fc94f47967a3fbe5ffcd46d4e7da3d787.png"
        },
        {
            "address": "0x7b123f53421b1bF8533339BFBdc7C98aA94163db",
            "symbol": "buidl_1",
            "decimals": 18,
            "name": "dfohub",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7b123f53421b1bf8533339bfbdc7c98aa94163db.png"
        },
        {
            "address": "0xFca59Cd816aB1eaD66534D82bc21E7515cE441CF",
            "symbol": "RARI",
            "decimals": 18,
            "name": "Rarible",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xfca59cd816ab1ead66534d82bc21e7515ce441cf.png"
        },
        {
            "address": "0x8eEF5a82E6Aa222a60F009ac18c24EE12dBf4b41",
            "symbol": "TXL",
            "decimals": 18,
            "name": "Tixl Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8eef5a82e6aa222a60f009ac18c24ee12dbf4b41.png"
        },
        {
            "address": "0x255Aa6DF07540Cb5d3d297f0D0D4D84cb52bc8e6",
            "symbol": "RDN",
            "decimals": 18,
            "name": "Raiden Network Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6.png"
        },
        {
            "address": "0xd2877702675e6cEb975b4A1dFf9fb7BAF4C91ea9",
            "symbol": "LUNA",
            "decimals": 18,
            "name": "Wrapped LUNA Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd2877702675e6ceb975b4a1dff9fb7baf4c91ea9.png"
        },
        {
            "address": "0x111111111117dC0aa78b770fA6A738034120C302",
            "symbol": "1INCH",
            "decimals": 18,
            "name": "1INCH Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x111111111117dc0aa78b770fa6a738034120c302.png"
        },
        {
            "address": "0xc834Fa996fA3BeC7aAD3693af486ae53D8aA8B50",
            "symbol": "CONV",
            "decimals": 18,
            "name": "Convergence",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc834fa996fa3bec7aad3693af486ae53d8aa8b50.png"
        },
        {
            "address": "0xEC213F83defB583af3A000B1c0ada660b1902A0F",
            "symbol": "PRE",
            "decimals": 18,
            "name": "Presearch",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xec213f83defb583af3a000b1c0ada660b1902a0f.png"
        },
        {
            "address": "0x72E5390EDb7727E3d4e3436451DADafF675dBCC0",
            "symbol": "HANU",
            "decimals": 12,
            "name": "Hanu Yokia",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x72e5390edb7727e3d4e3436451dadaff675dbcc0.png"
        },
        {
            "address": "0x8Ab7404063Ec4DBcfd4598215992DC3F8EC853d7",
            "symbol": "AKRO",
            "decimals": 18,
            "name": "Akropolis",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7.png"
        },
        {
            "address": "0x05Ec93c0365baAeAbF7AefFb0972ea7ECdD39CF1",
            "symbol": "aBAT",
            "decimals": 18,
            "name": "Aave interest bearing BAT",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x05ec93c0365baaeabf7aeffb0972ea7ecdd39cf1.png"
        },
        {
            "address": "0x19042021329FDdcFBea5f934FB5b2670C91F7D20",
            "symbol": "TMM",
            "decimals": 6,
            "name": "Take My Muffin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x19042021329fddcfbea5f934fb5b2670c91f7d20.png"
        },
        {
            "address": "0x0391D2021f89DC339F60Fff84546EA23E337750f",
            "symbol": "BOND",
            "decimals": 18,
            "name": "BarnBridge Governance Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0391d2021f89dc339f60fff84546ea23e337750f.png"
        },
        {
            "address": "0x8C543AED163909142695f2d2aCd0D55791a9Edb9",
            "symbol": "VLX",
            "decimals": 18,
            "name": "VLX",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8c543aed163909142695f2d2acd0d55791a9edb9.png"
        },
        {
            "address": "0xaA2C0cf54cB418eB24E7e09053B82C875C68bb88",
            "symbol": "SOON",
            "decimals": 18,
            "name": "RealT SOON Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xaa2c0cf54cb418eb24e7e09053b82c875c68bb88.png"
        },
        {
            "address": "0x92E187a03B6CD19CB6AF293ba17F2745Fd2357D5",
            "symbol": "DUCK_UNIT",
            "decimals": 18,
            "name": "Unit Protocol",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x92e187a03b6cd19cb6af293ba17f2745fd2357d5.png"
        },
        {
            "address": "0x15D4c048F83bd7e37d49eA4C83a07267Ec4203dA",
            "symbol": "GALA",
            "decimals": 8,
            "name": "Gala",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x15d4c048f83bd7e37d49ea4c83a07267ec4203da.png"
        },
        {
            "address": "0xABe580E7ee158dA464b51ee1a83Ac0289622e6be",
            "symbol": "XFT",
            "decimals": 18,
            "name": "Offshift",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xabe580e7ee158da464b51ee1a83ac0289622e6be.png"
        },
        {
            "address": "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
            "symbol": "sUSD",
            "decimals": 18,
            "name": "Synth sUSD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x57ab1ec28d129707052df4df418d58a2d46d5f51.png"
        },
        {
            "address": "0x50DE6856358Cc35f3A9a57eAAA34BD4cB707d2cd",
            "symbol": "RAZOR",
            "decimals": 18,
            "name": "RAZOR",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x50de6856358cc35f3a9a57eaaa34bd4cb707d2cd.png"
        },
        {
            "address": "0x4C2e59D098DF7b6cBaE0848d66DE2f8A4889b9C3",
            "symbol": "FODL",
            "decimals": 18,
            "name": "Fodl",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4c2e59d098df7b6cbae0848d66de2f8a4889b9c3.png"
        },
        {
            "address": "0x39fBBABf11738317a448031930706cd3e612e1B9",
            "symbol": "WXRP",
            "decimals": 18,
            "name": "Wrapped XRP",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x39fbbabf11738317a448031930706cd3e612e1b9_1.png"
        },
        {
            "address": "0x2BA8349123de45E931a8C8264c332E6e9CF593F9",
            "symbol": "BCMC",
            "decimals": 18,
            "name": "Blockchain Monster Coin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2ba8349123de45e931a8c8264c332e6e9cf593f9.png"
        },
        {
            "address": "0x850aAB69f0e0171A9a49dB8BE3E71351c8247Df4",
            "symbol": "KONO",
            "decimals": 18,
            "name": "Konomi",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x850aab69f0e0171a9a49db8be3e71351c8247df4.png"
        },
        {
            "address": "0xE5CAeF4Af8780E59Df925470b050Fb23C43CA68C",
            "symbol": "FRM",
            "decimals": 6,
            "name": "Ferrum Network Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe5caef4af8780e59df925470b050fb23c43ca68c.png"
        },
        {
            "address": "0x018fb5Af9d015Af25592a014C4266a84143De7a0",
            "symbol": "MP3",
            "decimals": 18,
            "name": "mp3",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x018fb5af9d015af25592a014c4266a84143de7a0.png"
        },
        {
            "address": "0x28dee01D53FED0Edf5f6E310BF8Ef9311513Ae40",
            "symbol": "XBP",
            "decimals": 18,
            "name": "BlitzPredict",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x28dee01d53fed0edf5f6e310bf8ef9311513ae40.png"
        },
        {
            "address": "0xC28E27870558cF22ADD83540d2126da2e4b464c2",
            "symbol": "SASHIMI",
            "decimals": 18,
            "name": "SashimiToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc28e27870558cf22add83540d2126da2e4b464c2.png"
        },
        {
            "address": "0xF2f9A7e93f845b3ce154EfbeB64fB9346FCCE509",
            "symbol": "POWER",
            "decimals": 18,
            "name": "UniPower",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf2f9a7e93f845b3ce154efbeb64fb9346fcce509.png"
        },
        {
            "address": "0xb9EF770B6A5e12E45983C5D80545258aA38F3B78",
            "symbol": "ZCN",
            "decimals": 10,
            "name": "0chain",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb9ef770b6a5e12e45983c5d80545258aa38f3b78.png"
        },
        {
            "address": "0x3C6ff50c9Ec362efa359317009428d52115fe643",
            "symbol": "PERX",
            "decimals": 18,
            "name": "PeerEx Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3c6ff50c9ec362efa359317009428d52115fe643.png"
        },
        {
            "address": "0x9D91BE44C06d373a8a226E1f3b146956083803eB",
            "symbol": "aKNCv1",
            "decimals": 18,
            "name": "Aave Interest bearing KNC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9d91be44c06d373a8a226e1f3b146956083803eb.png"
        },
        {
            "address": "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
            "symbol": "BAT",
            "decimals": 18,
            "name": "Basic Attention Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0d8775f648430679a709e98d2b0cb6250d2887ef.png"
        },
        {
            "address": "0xbC396689893D065F41bc2C6EcbeE5e0085233447",
            "symbol": "PERP",
            "decimals": 18,
            "name": "Perpetual",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xbc396689893d065f41bc2c6ecbee5e0085233447.png"
        },
        {
            "address": "0x028171bCA77440897B824Ca71D1c56caC55b68A3",
            "symbol": "aDAI",
            "decimals": 18,
            "name": "Aave interest bearing DAI",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x028171bca77440897b824ca71d1c56cac55b68a3.png"
        },
        {
            "address": "0x39795344CBCc76cC3Fb94B9D1b15C23c2070C66D",
            "symbol": "SHARE",
            "decimals": 9,
            "name": "Seigniorage Shares",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x39795344cbcc76cc3fb94b9d1b15c23c2070c66d.png"
        },
        {
            "address": "0x226f7b842E0F0120b7E194D05432b3fd14773a9D",
            "symbol": "UNN",
            "decimals": 18,
            "name": "UNION Protocol Governance Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x226f7b842e0f0120b7e194d05432b3fd14773a9d.png"
        },
        {
            "address": "0xD291E7a03283640FDc51b121aC401383A46cC623",
            "symbol": "RGT",
            "decimals": 18,
            "name": "Rari Governance Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd291e7a03283640fdc51b121ac401383a46cc623.png"
        },
        {
            "address": "0x1FbD3dF007eB8A7477A1Eab2c63483dCc24EfFD6",
            "symbol": "SCA",
            "decimals": 18,
            "name": "ScaleSwapToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1fbd3df007eb8a7477a1eab2c63483dcc24effd6.png"
        },
        {
            "address": "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
            "symbol": "STG",
            "decimals": 18,
            "name": "StargateToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xaf5191b0de278c7286d6c7cc6ab6bb8a73ba2cd6.png"
        },
        {
            "address": "0xA1AFFfE3F4D611d252010E3EAf6f4D77088b0cd7",
            "symbol": "RFI",
            "decimals": 9,
            "name": "reflect.finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa1afffe3f4d611d252010e3eaf6f4d77088b0cd7.png"
        },
        {
            "address": "0xBae5F2D8a1299E5c4963eaff3312399253f27Ccb",
            "symbol": "SOAR",
            "decimals": 9,
            "name": "SOAR.FI",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xbae5f2d8a1299e5c4963eaff3312399253f27ccb.png"
        },
        {
            "address": "0x817bbDbC3e8A1204f3691d14bB44992841e3dB35",
            "symbol": "CUDOS",
            "decimals": 18,
            "name": "CudosToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x817bbdbc3e8a1204f3691d14bb44992841e3db35.png"
        },
        {
            "address": "0xa462d0E6Bb788c7807B1B1C96992CE1f7069E195",
            "symbol": "EQMT",
            "decimals": 18,
            "name": "EQUUSMiningToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa462d0e6bb788c7807b1b1c96992ce1f7069e195.png"
        },
        {
            "address": "0x0d438F3b5175Bebc262bF23753C1E53d03432bDE",
            "symbol": "wNXM",
            "decimals": 18,
            "name": "Wrapped NXM",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0d438f3b5175bebc262bf23753c1e53d03432bde.png"
        },
        {
            "address": "0x9e70240d2A8a30a592d3F076441C4F303b26dE12",
            "symbol": "OCT",
            "decimals": 8,
            "name": "Wrapped OCT",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9e70240d2a8a30a592d3f076441c4f303b26de12.png"
        },
        {
            "address": "0x3431F91b3a388115F00C5Ba9FdB899851D005Fb5",
            "symbol": "GERO",
            "decimals": 18,
            "name": "GeroWallet",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3431f91b3a388115f00c5ba9fdb899851d005fb5.png"
        },
        {
            "address": "0x607F4C5BB672230e8672085532f7e901544a7375",
            "symbol": "RLC",
            "decimals": 9,
            "name": "iExec RLC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x607f4c5bb672230e8672085532f7e901544a7375.png"
        },
        {
            "address": "0xa4eF4b0B23C1fc81d3f9ecF93510e64f58A4A016",
            "symbol": "1MIL",
            "decimals": 18,
            "name": "1MILNFT",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa4ef4b0b23c1fc81d3f9ecf93510e64f58a4a016.png"
        },
        {
            "address": "0x3301Ee63Fb29F863f2333Bd4466acb46CD8323E6",
            "symbol": "AKITA",
            "decimals": 18,
            "name": "Akita Inu",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3301ee63fb29f863f2333bd4466acb46cd8323e6.png"
        },
        {
            "address": "0x3a3A65aAb0dd2A17E3F1947bA16138cd37d08c04",
            "symbol": "aETHv1",
            "decimals": 18,
            "name": "Aave Interest bearing ETH",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3a3a65aab0dd2a17e3f1947ba16138cd37d08c04.png"
        },
        {
            "address": "0xf9FBE825BFB2bF3E387af0Dc18caC8d87F29DEa8",
            "symbol": "BOTS",
            "decimals": 18,
            "name": "Bot Ocean",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf9fbe825bfb2bf3e387af0dc18cac8d87f29dea8.png"
        },
        {
            "address": "0x76c5449F4950f6338A393F53CdA8b53B0cd3Ca3a",
            "symbol": "BT",
            "decimals": 18,
            "name": "BT.Finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x76c5449f4950f6338a393f53cda8b53b0cd3ca3a.png"
        },
        {
            "address": "0x61107a409fFFe1965126aa456Af679719695C69C",
            "symbol": "UMI",
            "decimals": 18,
            "name": "UmiToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x61107a409fffe1965126aa456af679719695c69c.png"
        },
        {
            "address": "0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b",
            "symbol": "CRO",
            "decimals": 8,
            "name": "CRO",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b.png"
        },
        {
            "address": "0xff56Cc6b1E6dEd347aA0B7676C85AB0B3D08B0FA",
            "symbol": "ORBS",
            "decimals": 18,
            "name": "Orbs",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa.png"
        },
        {
            "address": "0xDF2C7238198Ad8B389666574f2d8bc411A4b7428",
            "symbol": "MFT",
            "decimals": 18,
            "name": "Mainframe",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdf2c7238198ad8b389666574f2d8bc411a4b7428.png"
        },
        {
            "address": "0xFbEEa1C75E4c4465CB2FCCc9c6d6afe984558E20",
            "symbol": "DDIM",
            "decimals": 18,
            "name": "DuckDaoDime",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xfbeea1c75e4c4465cb2fccc9c6d6afe984558e20.png"
        },
        {
            "address": "0xca1207647Ff814039530D7d35df0e1Dd2e91Fa84",
            "symbol": "DHT",
            "decimals": 18,
            "name": "dHedge DAO Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xca1207647ff814039530d7d35df0e1dd2e91fa84.png"
        },
        {
            "address": "0x3C6C553A95910F9FC81c98784736bd628636D296",
            "symbol": "crESD",
            "decimals": 8,
            "name": "Cream Empty Set Dollar",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3c6c553a95910f9fc81c98784736bd628636d296.png"
        },
        {
            "address": "0x309627af60F0926daa6041B8279484312f2bf060",
            "symbol": "USDB",
            "decimals": 18,
            "name": "USDB",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x309627af60f0926daa6041b8279484312f2bf060.png"
        },
        {
            "address": "0x9F9c8ec3534c3cE16F928381372BfbFBFb9F4D24",
            "symbol": "GLQ",
            "decimals": 18,
            "name": "GraphLinq",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9f9c8ec3534c3ce16f928381372bfbfbfb9f4d24.png"
        },
        {
            "address": "0xc666081073E8DfF8D3d1c2292A29aE1A2153eC09",
            "symbol": "DGTX",
            "decimals": 18,
            "name": "DigitexFutures",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc666081073e8dff8d3d1c2292a29ae1a2153ec09.png"
        },
        {
            "address": "0xF1cA9cb74685755965c7458528A36934Df52A3EF",
            "symbol": "AVINOC",
            "decimals": 18,
            "name": "AVINOC Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf1ca9cb74685755965c7458528a36934df52a3ef.png"
        },
        {
            "address": "0x853d955aCEf822Db058eb8505911ED77F175b99e",
            "symbol": "FRAX",
            "decimals": 18,
            "name": "Frax",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x853d955acef822db058eb8505911ed77f175b99e.png"
        },
        {
            "address": "0x7777777777697cFEECF846A76326dA79CC606517",
            "symbol": "SIG",
            "decimals": 18,
            "name": "xSigma",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7777777777697cfeecf846a76326da79cc606517.png"
        },
        {
            "address": "0x460ea730d204c822cE709f00A8E5959921715aDC",
            "symbol": "crBAC",
            "decimals": 8,
            "name": "Cream Basis Cash",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x460ea730d204c822ce709f00a8e5959921715adc.png"
        },
        {
            "address": "0xDB5C3C46E28B53a39C255AA39A411dD64e5fed9c",
            "symbol": "NCR",
            "decimals": 18,
            "name": "Neos Credits",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdb5c3c46e28b53a39c255aa39a411dd64e5fed9c.png"
        },
        {
            "address": "0x10633216E7E8281e33c86F02Bf8e565a635D9770",
            "symbol": "DVI",
            "decimals": 18,
            "name": "Dvision",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x10633216e7e8281e33c86f02bf8e565a635d9770.png"
        },
        {
            "address": "0x8D3E855f3f55109D473735aB76F753218400fe96",
            "symbol": "BUND",
            "decimals": 18,
            "name": "Bundles",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8d3e855f3f55109d473735ab76f753218400fe96.png"
        },
        {
            "address": "0x35f6B052C598d933D69A4EEC4D04c73A191fE6c2",
            "symbol": "aSNX",
            "decimals": 18,
            "name": "Aave interest bearing SNX",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x35f6b052c598d933d69a4eec4d04c73a191fe6c2.png"
        },
        {
            "address": "0xceb286C9604c542d3cc08b41AA6C9675B078A832",
            "symbol": "VTX",
            "decimals": 18,
            "name": "Vortex DeFi",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xceb286c9604c542d3cc08b41aa6c9675b078a832.png"
        },
        {
            "address": "0xE4CFE9eAa8Cdb0942A80B7bC68fD8Ab0F6D44903",
            "symbol": "XEND",
            "decimals": 18,
            "name": "XEND",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe4cfe9eaa8cdb0942a80b7bc68fd8ab0f6d44903.png"
        },
        {
            "address": "0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55",
            "symbol": "BAND",
            "decimals": 18,
            "name": "Band Protocol",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xba11d00c5f74255f56a5e366f4f77f5a186d7f55.png"
        },
        {
            "address": "0x7866E48C74CbFB8183cd1a929cd9b95a7a5CB4F4",
            "symbol": "KIT",
            "decimals": 18,
            "name": "DexKit",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7866e48c74cbfb8183cd1a929cd9b95a7a5cb4f4.png"
        },
        {
            "address": "0x8B86e0598616a8d4F1fdAE8b59E55FB5Bc33D0d6",
            "symbol": "crLEND",
            "decimals": 8,
            "name": "Cream EthLend Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8b86e0598616a8d4f1fdae8b59e55fb5bc33d0d6.png"
        },
        {
            "address": "0xBd2949F67DcdC549c6Ebe98696449Fa79D988A9F",
            "symbol": "eMTRG",
            "decimals": 18,
            "name": "Meter Governance mapped by Meter.io",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xbd2949f67dcdc549c6ebe98696449fa79d988a9f.png"
        },
        {
            "address": "0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d",
            "symbol": "PNK",
            "decimals": 18,
            "name": "Kleros",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d.png"
        },
        {
            "address": "0xEfc1C73A3D8728Dc4Cf2A18ac5705FE93E5914AC",
            "symbol": "METRIC",
            "decimals": 18,
            "name": "Metric.exchange",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xefc1c73a3d8728dc4cf2a18ac5705fe93e5914ac.png"
        },
        {
            "address": "0x28cb7e841ee97947a86B06fA4090C8451f64c0be",
            "symbol": "YFL",
            "decimals": 18,
            "name": "YFLink",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x28cb7e841ee97947a86b06fa4090c8451f64c0be.png"
        },
        {
            "address": "0xf1f955016EcbCd7321c7266BccFB96c68ea5E49b",
            "symbol": "RLY",
            "decimals": 18,
            "name": "Rally",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf1f955016ecbcd7321c7266bccfb96c68ea5e49b.png"
        },
        {
            "address": "0x3C4B6E6e1eA3D4863700D7F76b36B7f3D3f13E3d",
            "symbol": "VGX",
            "decimals": 8,
            "name": "Voyager Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3c4b6e6e1ea3d4863700d7f76b36b7f3d3f13e3d.png"
        },
        {
            "address": "0xa393473d64d2F9F026B60b6Df7859A689715d092",
            "symbol": "LTX",
            "decimals": 8,
            "name": "Lattice Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa393473d64d2f9f026b60b6df7859a689715d092.png"
        },
        {
            "address": "0x970B9bB2C0444F5E81e9d0eFb84C8ccdcdcAf84d",
            "symbol": "FUSE",
            "decimals": 18,
            "name": "Fuse Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d.png"
        },
        {
            "address": "0x661Ab0Ed68000491d98C796146bcF28c20d7c559",
            "symbol": "DOWS",
            "decimals": 18,
            "name": "Shadows Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x661ab0ed68000491d98c796146bcf28c20d7c559.png"
        },
        {
            "address": "0x8B39B70E39Aa811b69365398e0aACe9bee238AEb",
            "symbol": "PKF",
            "decimals": 18,
            "name": "PolkaFoundry",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8b39b70e39aa811b69365398e0aace9bee238aeb.png"
        },
        {
            "address": "0x76417E660DF3E5c90C0361674C192da152A806E4",
            "symbol": "zUSD",
            "decimals": 18,
            "name": "Zerogoki USD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x76417e660df3e5c90c0361674c192da152a806e4.png"
        },
        {
            "address": "0x2baEcDf43734F22FD5c152DB08E3C27233F0c7d2",
            "symbol": "OMv1",
            "decimals": 18,
            "name": "OM Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2baecdf43734f22fd5c152db08e3c27233f0c7d2.png"
        },
        {
            "address": "0x2ba592F78dB6436527729929AAf6c908497cB200",
            "symbol": "CREAM",
            "decimals": 18,
            "name": "Cream",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2ba592f78db6436527729929aaf6c908497cb200.png"
        },
        {
            "address": "0xD5d86FC8d5C0Ea1aC1Ac5Dfab6E529c9967a45E9",
            "symbol": "WRLD",
            "decimals": 18,
            "name": "NFT Worlds",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd5d86fc8d5c0ea1ac1ac5dfab6e529c9967a45e9.png"
        },
        {
            "address": "0x3449FC1Cd036255BA1EB19d65fF4BA2b8903A69a",
            "symbol": "BAC",
            "decimals": 18,
            "name": "BAC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a.png"
        },
        {
            "address": "0x090185f2135308BaD17527004364eBcC2D37e5F6",
            "symbol": "SPELL",
            "decimals": 18,
            "name": "Spell Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x090185f2135308bad17527004364ebcc2d37e5f6.png"
        },
        {
            "address": "0x28c5805B64d163588A909012a628b5a03c1041f9",
            "symbol": "CHOPPER",
            "decimals": 9,
            "name": "CHOPPER INU",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x28c5805b64d163588a909012a628b5a03c1041f9.png"
        },
        {
            "address": "0x191557728e4d8CAa4Ac94f86af842148c0FA8F7E",
            "symbol": "ECO",
            "decimals": 8,
            "name": "ECO TOKEN",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x191557728e4d8caa4ac94f86af842148c0fa8f7e.png"
        },
        {
            "address": "0x57700244B20f84799a31c6C96DadFF373ca9D6c5",
            "symbol": "TRUST",
            "decimals": 18,
            "name": "TRUST DAO",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x57700244b20f84799a31c6c96dadff373ca9d6c5.png"
        },
        {
            "address": "0x9E32b13ce7f2E80A01932B42553652E053D6ed8e",
            "symbol": "Metis",
            "decimals": 18,
            "name": "Metis Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9e32b13ce7f2e80a01932b42553652e053d6ed8e.png"
        },
        {
            "address": "0x0202Be363B8a4820f3F4DE7FaF5224fF05943AB1",
            "symbol": "UFT",
            "decimals": 18,
            "name": "UniLend Finance Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0202be363b8a4820f3f4de7faf5224ff05943ab1.png"
        },
        {
            "address": "0x3A9FfF453d50D4Ac52A6890647b823379ba36B9E",
            "symbol": "SHUF",
            "decimals": 18,
            "name": "Shuffle.Monster V3",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3a9fff453d50d4ac52a6890647b823379ba36b9e.png"
        },
        {
            "address": "0x5dbcF33D8c2E976c6b560249878e6F1491Bca25c",
            "symbol": "yUSD",
            "decimals": 18,
            "name": "yearn Curve.fi yDAI/yUSDC/yUSDT/yTUSD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5dbcf33d8c2e976c6b560249878e6f1491bca25c.png"
        },
        {
            "address": "0x656C00e1BcD96f256F224AD9112FF426Ef053733",
            "symbol": "EFI",
            "decimals": 18,
            "name": "Efinity Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x656c00e1bcd96f256f224ad9112ff426ef053733.png"
        },
        {
            "address": "0xeEEE2a622330E6d2036691e983DEe87330588603",
            "symbol": "ASKO",
            "decimals": 18,
            "name": "Askobar Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xeeee2a622330e6d2036691e983dee87330588603.png"
        },
        {
            "address": "0x038a68FF68c393373eC894015816e33Ad41BD564",
            "symbol": "GLCH",
            "decimals": 18,
            "name": "Glitch",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x038a68ff68c393373ec894015816e33ad41bd564.png"
        },
        {
            "address": "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C",
            "symbol": "BNT",
            "decimals": 18,
            "name": "Bancor",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c.png"
        },
        {
            "address": "0xa02120696c7B8fE16C09C749E4598819b2B0E915",
            "symbol": "WXT",
            "decimals": 18,
            "name": "Wirex Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa02120696c7b8fe16c09c749e4598819b2b0e915.png"
        },
        {
            "address": "0x1337DEF18C680aF1f9f45cBcab6309562975b1dD",
            "symbol": "arNXM",
            "decimals": 18,
            "name": "Armor NXM",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1337def18c680af1f9f45cbcab6309562975b1dd.png"
        },
        {
            "address": "0x990f341946A3fdB507aE7e52d17851B87168017c",
            "symbol": "STRONG",
            "decimals": 18,
            "name": "Strong",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x990f341946a3fdb507ae7e52d17851b87168017c.png"
        },
        {
            "address": "0x3383c5a8969Dc413bfdDc9656Eb80A1408E4bA20",
            "symbol": "wANATHA",
            "decimals": 18,
            "name": "Wrapped ANATHA",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3383c5a8969dc413bfddc9656eb80a1408e4ba20.png"
        },
        {
            "address": "0xcD62b1C403fa761BAadFC74C525ce2B51780b184",
            "symbol": "ANJ",
            "decimals": 18,
            "name": "Aragon Network Juror",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xcd62b1c403fa761baadfc74c525ce2b51780b184.png"
        },
        {
            "address": "0xDDdddd4301A082e62E84e43F474f044423921918",
            "symbol": "DVF",
            "decimals": 18,
            "name": "DeversiFi Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdddddd4301a082e62e84e43f474f044423921918.png"
        },
        {
            "address": "0xfA5047c9c78B8877af97BDcb85Db743fD7313d4a",
            "symbol": "ROOK",
            "decimals": 18,
            "name": "ROOK",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xfa5047c9c78b8877af97bdcb85db743fd7313d4a.png"
        },
        {
            "address": "0x26c8AFBBFE1EBaca03C2bB082E69D0476Bffe099",
            "symbol": "CELL",
            "decimals": 18,
            "name": "Cellframe Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x26c8afbbfe1ebaca03c2bb082e69d0476bffe099.png"
        },
        {
            "address": "0x4d224452801ACEd8B2F0aebE155379bb5D594381",
            "symbol": "APE",
            "decimals": 18,
            "name": "ApeCoin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4d224452801aced8b2f0aebe155379bb5d594381.png"
        },
        {
            "address": "0xCF3C8Be2e2C42331Da80EF210e9B1b307C03d36A",
            "symbol": "BEPRO",
            "decimals": 18,
            "name": "BetProtocolToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xcf3c8be2e2c42331da80ef210e9b1b307c03d36a.png"
        },
        {
            "address": "0x7f280daC515121DcdA3EaC69eB4C13a52392CACE",
            "symbol": "FNC",
            "decimals": 18,
            "name": "Fancy Games",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7f280dac515121dcda3eac69eb4c13a52392cace.png"
        },
        {
            "address": "0x1b40183EFB4Dd766f11bDa7A7c3AD8982e998421",
            "symbol": "VSP",
            "decimals": 18,
            "name": "VesperToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1b40183efb4dd766f11bda7a7c3ad8982e998421.png"
        },
        {
            "address": "0x8b3FF1ed4F36C2c2be675AFb13CC3AA5d73685a5",
            "symbol": "crCEL",
            "decimals": 8,
            "name": "Cream Celsius",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8b3ff1ed4f36c2c2be675afb13cc3aa5d73685a5.png"
        },
        {
            "address": "0x232FB065D9d24c34708eeDbF03724f2e95ABE768",
            "symbol": "SHEESHA",
            "decimals": 18,
            "name": "Sheesha Finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x232fb065d9d24c34708eedbf03724f2e95abe768.png"
        },
        {
            "address": "0x72630B1e3B42874bf335020Ba0249e3E9e47Bafc",
            "symbol": "EPAN",
            "decimals": 18,
            "name": "Paypolitan Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x72630b1e3b42874bf335020ba0249e3e9e47bafc.png"
        },
        {
            "address": "0xad32A8e6220741182940c5aBF610bDE99E737b2D",
            "symbol": "DOUGH",
            "decimals": 18,
            "name": "PieDAO DOUGH v2",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xad32a8e6220741182940c5abf610bde99e737b2d.png"
        },
        {
            "address": "0x16CC8367055aE7e9157DBcB9d86Fd6CE82522b31",
            "symbol": "VXL",
            "decimals": 18,
            "name": "Voxel X Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x16cc8367055ae7e9157dbcb9d86fd6ce82522b31.png"
        },
        {
            "address": "0x0000000000004946c0e9F43F4Dee607b0eF1fA1c",
            "symbol": "CHI",
            "decimals": 0,
            "name": "Chi Gastoken by 1inch",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0000000000004946c0e9f43f4dee607b0ef1fa1c.png"
        },
        {
            "address": "0xcaDC0acd4B445166f12d2C07EAc6E2544FbE2Eef",
            "symbol": "CADC",
            "decimals": 18,
            "name": "CAD Coin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xcadc0acd4b445166f12d2c07eac6e2544fbe2eef.png"
        },
        {
            "address": "0xbb1EE07d6c7BAeB702949904080eb61f5D5e7732",
            "symbol": "DINU",
            "decimals": 18,
            "name": "Dogey-Inu",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xbb1ee07d6c7baeb702949904080eb61f5d5e7732.png"
        },
        {
            "address": "0x08d967bb0134F2d07f7cfb6E246680c53927DD30",
            "symbol": "MATH",
            "decimals": 18,
            "name": "MATH Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x08d967bb0134f2d07f7cfb6e246680c53927dd30.png"
        },
        {
            "address": "0x0954906da0Bf32d5479e25f46056d22f08464cab",
            "symbol": "INDEX",
            "decimals": 18,
            "name": "Index",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0954906da0bf32d5479e25f46056d22f08464cab.png"
        },
        {
            "address": "0xB8BAa0e4287890a5F79863aB62b7F175ceCbD433",
            "symbol": "SWRV",
            "decimals": 18,
            "name": "Swerve DAO Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb8baa0e4287890a5f79863ab62b7f175cecbd433.png"
        },
        {
            "address": "0x92D6C1e31e14520e676a687F0a93788B716BEff5",
            "symbol": "DYDX",
            "decimals": 18,
            "name": "dYdX",
            "chain_id": 1,
            "logo": "https://assets.coingecko.com/coins/images/17500/large/hjnIm9bV.jpg?1628009360"
        },
        {
            "address": "0xF970b8E36e23F7fC3FD752EeA86f8Be8D83375A6",
            "symbol": "RCN",
            "decimals": 18,
            "name": "Ripio",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6.png"
        },
        {
            "address": "0xE1c7E30C42C24582888C758984f6e382096786bd",
            "symbol": "XCUR",
            "decimals": 8,
            "name": "Curate",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe1c7e30c42c24582888c758984f6e382096786bd.png"
        },
        {
            "address": "0x1cEB5cB57C4D4E2b2433641b95Dd330A33185A44",
            "symbol": "KP3R",
            "decimals": 18,
            "name": "Keep3rV1",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44.png"
        },
        {
            "address": "0xA64BD6C70Cb9051F6A9ba1F163Fdc07E0DfB5F84",
            "symbol": "aLINKv1",
            "decimals": 18,
            "name": "Aave Interest bearing LINK",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa64bd6c70cb9051f6a9ba1f163fdc07e0dfb5f84.png"
        },
        {
            "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            "symbol": "WETH",
            "decimals": 18,
            "name": "Wrapped Ether",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png"
        },
        {
            "address": "0x123151402076fc819B7564510989e475c9cD93CA",
            "symbol": "wDGLD",
            "decimals": 8,
            "name": "wrapped-DGLD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x123151402076fc819b7564510989e475c9cd93ca.png"
        },
        {
            "address": "0xE796d6ca1ceb1b022EcE5296226BF784110031Cd",
            "symbol": "BLES",
            "decimals": 18,
            "name": "Blind Boxes Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe796d6ca1ceb1b022ece5296226bf784110031cd.png"
        },
        {
            "address": "0xF047d4bE569FB770dB143A6A90Ef203FC1295922",
            "symbol": "crTBTC",
            "decimals": 8,
            "name": "Cream tBTC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf047d4be569fb770db143a6a90ef203fc1295922.png"
        },
        {
            "address": "0x476c5E26a75bd202a9683ffD34359C0CC15be0fF",
            "symbol": "SRM",
            "decimals": 6,
            "name": "Serum",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x476c5e26a75bd202a9683ffd34359c0cc15be0ff.png"
        },
        {
            "address": "0x16980b3B4a3f9D89E33311B5aa8f80303E5ca4F8",
            "symbol": "KEX",
            "decimals": 6,
            "name": "KIRA Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x16980b3b4a3f9d89e33311b5aa8f80303e5ca4f8.png"
        },
        {
            "address": "0x0C10bF8FcB7Bf5412187A595ab97a3609160b5c6",
            "symbol": "USDD",
            "decimals": 18,
            "name": "Decentralized USD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0c10bf8fcb7bf5412187a595ab97a3609160b5c6.png"
        },
        {
            "address": "0x4b4D2e899658FB59b1D518b68fe836B100ee8958",
            "symbol": "MIS",
            "decimals": 18,
            "name": "MIS",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4b4d2e899658fb59b1d518b68fe836b100ee8958.png"
        },
        {
            "address": "0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811",
            "symbol": "aUSDT",
            "decimals": 6,
            "name": "Aave interest bearing USDT",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3ed3b47dd13ec9a98b44e6204a523e766b225811.png"
        },
        {
            "address": "0xfb5453340C03db5aDe474b27E68B6a9c6b2823Eb",
            "symbol": "ROBOT",
            "decimals": 18,
            "name": "MetaFactory",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xfb5453340c03db5ade474b27e68b6a9c6b2823eb.png"
        },
        {
            "address": "0x539F3615C1dBAfa0D008d87504667458acBd16Fa",
            "symbol": "FERA",
            "decimals": 18,
            "name": "FERA",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x539f3615c1dbafa0d008d87504667458acbd16fa.png"
        },
        {
            "address": "0x677ddbd918637E5F2c79e164D402454dE7dA8619",
            "symbol": "VUSD",
            "decimals": 18,
            "name": "VUSD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x677ddbd918637e5f2c79e164d402454de7da8619.png"
        },
        {
            "address": "0xa7DE087329BFcda5639247F96140f9DAbe3DeED1",
            "symbol": "STA",
            "decimals": 18,
            "name": "Statera",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa7de087329bfcda5639247f96140f9dabe3deed1.png"
        },
        {
            "address": "0xAE1eaAE3F627AAca434127644371b67B18444051",
            "symbol": "YOP",
            "decimals": 8,
            "name": "YOP",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xae1eaae3f627aaca434127644371b67b18444051.png"
        },
        {
            "address": "0xa117000000f279D81A1D3cc75430fAA017FA5A2e",
            "symbol": "ANT",
            "decimals": 18,
            "name": "Aragon Network Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa117000000f279d81a1d3cc75430faa017fa5a2e.png"
        },
        {
            "address": "0x56d811088235F11C8920698a204A5010a788f4b3",
            "symbol": "BZRX",
            "decimals": 18,
            "name": "bZx Protocol Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x56d811088235f11c8920698a204a5010a788f4b3.png"
        },
        {
            "address": "0x95172ccBe8344fecD73D0a30F54123652981BD6F",
            "symbol": "LOCK",
            "decimals": 18,
            "name": "Meridian Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x95172ccbe8344fecd73d0a30f54123652981bd6f.png"
        },
        {
            "address": "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
            "symbol": "MKR",
            "decimals": 18,
            "name": "Maker",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2.png"
        },
        {
            "address": "0xCb5f72d37685C3D5aD0bB5F982443BC8FcdF570E",
            "symbol": "ROOT",
            "decimals": 18,
            "name": "RootKit",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xcb5f72d37685c3d5ad0bb5f982443bc8fcdf570e.png"
        },
        {
            "address": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
            "symbol": "cUSDC",
            "decimals": 8,
            "name": "Compound USD Coin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x39aa39c021dfbae8fac545936693ac917d5e7563.png"
        },
        {
            "address": "0x9Ed8e7C9604790F7Ec589F99b94361d8AAB64E5E",
            "symbol": "UNISTAKE",
            "decimals": 18,
            "name": "Unistake",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9ed8e7c9604790f7ec589f99b94361d8aab64e5e.png"
        },
        {
            "address": "0x2590F1fD14Ef8Bb0A46C7A889c4CBc146510f9C3",
            "symbol": "iBTCV",
            "decimals": 18,
            "name": "Inverse BTC Volatility Index",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2590f1fd14ef8bb0a46c7a889c4cbc146510f9c3.png"
        },
        {
            "address": "0x7eaF9C89037e4814DC0d9952Ac7F888C784548DB",
            "symbol": "ROYA",
            "decimals": 18,
            "name": "Royale",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7eaf9c89037e4814dc0d9952ac7f888c784548db.png"
        },
        {
            "address": "0xD9c2D319Cd7e6177336b0a9c93c21cb48d84Fb54",
            "symbol": "HAPI",
            "decimals": 18,
            "name": "HAPI",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd9c2d319cd7e6177336b0a9c93c21cb48d84fb54.png"
        },
        {
            "address": "0x25555933a8246Ab67cbf907CE3d1949884E82B55",
            "symbol": "crSUSD",
            "decimals": 8,
            "name": "Cream Synth sUSD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x25555933a8246ab67cbf907ce3d1949884e82b55.png"
        },
        {
            "address": "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
            "symbol": "LRC",
            "decimals": 18,
            "name": "Loopring",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xbbbbca6a901c926f240b89eacb641d8aec7aeafd.png"
        },
        {
            "address": "0x888888435FDe8e7d4c54cAb67f206e4199454c60",
            "symbol": "DFX",
            "decimals": 18,
            "name": "DFX Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x888888435fde8e7d4c54cab67f206e4199454c60.png"
        },
        {
            "address": "0xA89ac6e529aCf391CfbBD377F3aC9D93eae9664e",
            "symbol": "KP4R",
            "decimals": 18,
            "name": "Keep4r",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa89ac6e529acf391cfbbd377f3ac9d93eae9664e.png"
        },
        {
            "address": "0xC28e931814725BbEB9e670676FaBBCb694Fe7DF2",
            "symbol": "EQUAD",
            "decimals": 18,
            "name": "Quadrant Protocol",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc28e931814725bbeb9e670676fabbcb694fe7df2.png"
        },
        {
            "address": "0xa8B61CfF52564758A204F841E636265bEBC8db9B",
            "symbol": "YIELD",
            "decimals": 18,
            "name": "Yield Protocol",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa8b61cff52564758a204f841e636265bebc8db9b.png"
        },
        {
            "address": "0xf293d23BF2CDc05411Ca0edDD588eb1977e8dcd4",
            "symbol": "SYLO",
            "decimals": 18,
            "name": "Sylo",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf293d23bf2cdc05411ca0eddd588eb1977e8dcd4.png"
        },
        {
            "address": "0xC52C326331E9Ce41F04484d3B5E5648158028804",
            "symbol": "ZCX",
            "decimals": 18,
            "name": "ZEN Exchange Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc52c326331e9ce41f04484d3b5e5648158028804.png"
        },
        {
            "address": "0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671",
            "symbol": "NMR",
            "decimals": 18,
            "name": "Numeraire",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1776e1f26f98b1a5df9cd347953a26dd3cb46671.png"
        },
        {
            "address": "0xaA7a9CA87d3694B5755f213B5D04094b8d0F0A6F",
            "symbol": "TRAC",
            "decimals": 18,
            "name": "Trace",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f.png"
        },
        {
            "address": "0x20945cA1df56D237fD40036d47E866C7DcCD2114",
            "symbol": "Nsure",
            "decimals": 18,
            "name": "Nsure Network Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x20945ca1df56d237fd40036d47e866c7dccd2114.png"
        },
        {
            "address": "0x4EE15f44c6F0d8d1136c83EfD2e8E4AC768954c6",
            "symbol": "crYYCRV",
            "decimals": 8,
            "name": "Cream yyCRV",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4ee15f44c6f0d8d1136c83efd2e8e4ac768954c6.png"
        },
        {
            "address": "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
            "symbol": "YFI",
            "decimals": 18,
            "name": "yearn.finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e.png"
        },
        {
            "address": "0xf55BbE0255f7f4E70f63837Ff72A577fbDDbE924",
            "symbol": "crBOND",
            "decimals": 8,
            "name": "Cream BarnBridge Governance Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf55bbe0255f7f4e70f63837ff72a577fbddbe924.png"
        },
        {
            "address": "0x92B767185fB3B04F881e3aC8e5B0662a027A1D9f",
            "symbol": "crDAI",
            "decimals": 8,
            "name": "Cream Dai Stablecoin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x92b767185fb3b04f881e3ac8e5b0662a027a1d9f.png"
        },
        {
            "address": "0x674C6Ad92Fd080e4004b2312b45f796a192D27a0",
            "symbol": "USDN",
            "decimals": 18,
            "name": "Neutrino",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x674c6ad92fd080e4004b2312b45f796a192d27a0.png"
        },
        {
            "address": "0x5F64Ab1544D28732F0A24F4713c2C8ec0dA089f0",
            "symbol": "DEXTF",
            "decimals": 18,
            "name": "DEXTF Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5f64ab1544d28732f0a24f4713c2c8ec0da089f0.png"
        },
        {
            "address": "0x5adc961D6AC3f7062D2eA45FEFB8D8167d44b190",
            "symbol": "DTH",
            "decimals": 18,
            "name": "Dether",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190.png"
        },
        {
            "address": "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
            "symbol": "UNI",
            "decimals": 18,
            "name": "Uniswap",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png"
        },
        {
            "address": "0x607C794cDa77efB21F8848B7910ecf27451Ae842",
            "symbol": "PIE",
            "decimals": 18,
            "name": "DeFiPIE Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x607c794cda77efb21f8848b7910ecf27451ae842.png"
        },
        {
            "address": "0x7968bc6a03017eA2de509AAA816F163Db0f35148",
            "symbol": "HGET",
            "decimals": 6,
            "name": "Hedget",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7968bc6a03017ea2de509aaa816f163db0f35148.png"
        },
        {
            "address": "0x3D658390460295FB963f54dC0899cfb1c30776Df",
            "symbol": "Coval",
            "decimals": 8,
            "name": "CircuitsOfValue",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3d658390460295fb963f54dc0899cfb1c30776df.png"
        },
        {
            "address": "0x8F6A193C8B3c949E1046f1547C3A3f0836944E4b",
            "symbol": "xINCHa",
            "decimals": 18,
            "name": "xINCH",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8f6a193c8b3c949e1046f1547c3a3f0836944e4b.png"
        },
        {
            "address": "0x8A9C67fee641579dEbA04928c4BC45F66e26343A",
            "symbol": "JRT",
            "decimals": 18,
            "name": "Jarvis Reward Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8a9c67fee641579deba04928c4bc45f66e26343a.png"
        },
        {
            "address": "0x14Da7b27b2E0FedEfe0a664118b0c9bc68e2E9AF",
            "symbol": "BCUG",
            "decimals": 18,
            "name": "Blockchain Cuties Universe Governance Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x14da7b27b2e0fedefe0a664118b0c9bc68e2e9af.png"
        },
        {
            "address": "0x1A5F9352Af8aF974bFC03399e3767DF6370d82e4",
            "symbol": "OWL",
            "decimals": 18,
            "name": "OWL Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1a5f9352af8af974bfc03399e3767df6370d82e4.png"
        },
        {
            "address": "0x7815bDa662050D84718B988735218CFfd32f75ea",
            "symbol": "YEL",
            "decimals": 18,
            "name": "YEL Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7815bda662050d84718b988735218cffd32f75ea.png"
        },
        {
            "address": "0x1681bcB589b3cFCF0c0616B0cE9b19b240643dc1",
            "symbol": "ISLE",
            "decimals": 9,
            "name": "Island",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1681bcb589b3cfcf0c0616b0ce9b19b240643dc1.png"
        },
        {
            "address": "0x0A913beaD80F321E7Ac35285Ee10d9d922659cB7",
            "symbol": "DOS",
            "decimals": 18,
            "name": "DOS Network Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0a913bead80f321e7ac35285ee10d9d922659cb7.png"
        },
        {
            "address": "0x0AaCfbeC6a24756c20D41914F2caba817C0d8521",
            "symbol": "YAM",
            "decimals": 18,
            "name": "YAM",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0aacfbec6a24756c20d41914f2caba817c0d8521.png"
        },
        {
            "address": "0x63f88A2298a5c4AEE3c216Aa6D926B184a4b2437",
            "symbol": "GAME",
            "decimals": 18,
            "name": "GAME Credits",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x63f88a2298a5c4aee3c216aa6d926b184a4b2437.png"
        },
        {
            "address": "0xef58b2d5A1b8D3cDE67b8aB054dC5C831E9Bc025",
            "symbol": "crSRM",
            "decimals": 8,
            "name": "Cream Serum",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xef58b2d5a1b8d3cde67b8ab054dc5c831e9bc025.png"
        },
        {
            "address": "0xfAd45E47083e4607302aa43c65fB3106F1cd7607",
            "symbol": "HOGE",
            "decimals": 9,
            "name": "hoge.finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xfad45e47083e4607302aa43c65fb3106f1cd7607.png"
        },
        {
            "address": "0x44564d0bd94343f72E3C8a0D22308B7Fa71DB0Bb",
            "symbol": "BASK",
            "decimals": 18,
            "name": "BasketDAO Gov",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x44564d0bd94343f72e3c8a0d22308b7fa71db0bb.png"
        },
        {
            "address": "0x0AbdAce70D3790235af448C88547603b945604ea",
            "symbol": "DNT",
            "decimals": 18,
            "name": "district0x Network Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0abdace70d3790235af448c88547603b945604ea.png"
        },
        {
            "address": "0x45f24BaEef268BB6d63AEe5129015d69702BCDfa",
            "symbol": "YFV",
            "decimals": 18,
            "name": "YFValue",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x45f24baeef268bb6d63aee5129015d69702bcdfa.png"
        },
        {
            "address": "0x00D1793D7C3aAE506257Ba985b34C76AaF642557",
            "symbol": "TACO",
            "decimals": 18,
            "name": "Tacos",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x00d1793d7c3aae506257ba985b34c76aaf642557.png"
        },
        {
            "address": "0xf50a07e4FF052A14f3f608DA8936D8AE0Ed5bE50",
            "symbol": "FLOKIPUP",
            "decimals": 9,
            "name": "Floki Pup",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf50a07e4ff052a14f3f608da8936d8ae0ed5be50.png"
        },
        {
            "address": "0x744d70FDBE2Ba4CF95131626614a1763DF805B9E",
            "symbol": "SNT",
            "decimals": 18,
            "name": "Status",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x744d70fdbe2ba4cf95131626614a1763df805b9e.png"
        },
        {
            "address": "0x4fE83213D56308330EC302a8BD641f1d0113A4Cc",
            "symbol": "NU",
            "decimals": 18,
            "name": "NuCypher",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4fe83213d56308330ec302a8bd641f1d0113a4cc.png"
        },
        {
            "address": "0x51B0bcBEFf204B39Ce792D1E16767Fe6F7631970",
            "symbol": "BTCV",
            "decimals": 18,
            "name": "BTC Volatility Index",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x51b0bcbeff204b39ce792d1e16767fe6f7631970.png"
        },
        {
            "address": "0x12e51E77DAAA58aA0E9247db7510Ea4B46F9bEAd",
            "symbol": "aYFIv1",
            "decimals": 18,
            "name": "Aave Interest bearing YFI",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x12e51e77daaa58aa0e9247db7510ea4b46f9bead.png"
        },
        {
            "address": "0xA9B1Eb5908CfC3cdf91F9B8B3a74108598009096",
            "symbol": "Auction",
            "decimals": 18,
            "name": "Bounce Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa9b1eb5908cfc3cdf91f9b8b3a74108598009096.png"
        },
        {
            "address": "0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42",
            "symbol": "MCB",
            "decimals": 18,
            "name": "MCDEX Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4e352cf164e64adcbad318c3a1e222e9eba4ce42.png"
        },
        {
            "address": "0x8037b1B69d6fA63a9cc053c25f7e168e6e6d857A",
            "symbol": "P4C",
            "decimals": 18,
            "name": "Parts of Four Coin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8037b1b69d6fa63a9cc053c25f7e168e6e6d857a.png"
        },
        {
            "address": "0x340D2bdE5Eb28c1eed91B2f790723E3B160613B7",
            "symbol": "VEE",
            "decimals": 18,
            "name": "BLOCKv",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x340d2bde5eb28c1eed91b2f790723e3b160613b7.png"
        },
        {
            "address": "0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17",
            "symbol": "DYP",
            "decimals": 18,
            "name": "DeFiYieldProtocol",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17.png"
        },
        {
            "address": "0x4a220E6096B25EADb88358cb44068A3248254675",
            "symbol": "QNT",
            "decimals": 18,
            "name": "Quant",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4a220e6096b25eadb88358cb44068a3248254675.png"
        },
        {
            "address": "0xCC12AbE4ff81c9378D670De1b57F8e0Dd228D77a",
            "symbol": "aREN",
            "decimals": 18,
            "name": "Aave Interest bearing REN",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xcc12abe4ff81c9378d670de1b57f8e0dd228d77a.png"
        },
        {
            "address": "0x62359Ed7505Efc61FF1D56fEF82158CcaffA23D7",
            "symbol": "CORE",
            "decimals": 18,
            "name": "cVault.finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x62359ed7505efc61ff1d56fef82158ccaffa23d7.png"
        },
        {
            "address": "0x196c81385Bc536467433014042788Eb707703934",
            "symbol": "CTASK",
            "decimals": 18,
            "name": "CTASK Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x196c81385bc536467433014042788eb707703934.png"
        },
        {
            "address": "0xB6Ca7399B4F9CA56FC27cBfF44F4d2e4Eef1fc81",
            "symbol": "MUSE",
            "decimals": 18,
            "name": "Muse",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb6ca7399b4f9ca56fc27cbff44f4d2e4eef1fc81.png"
        },
        {
            "address": "0x3Da932456D082CBa208FEB0B096d49b202Bf89c8",
            "symbol": "DEGOV2",
            "decimals": 18,
            "name": "dego.finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3da932456d082cba208feb0b096d49b202bf89c8.png"
        },
        {
            "address": "0x8a854288a5976036A725879164Ca3e91d30c6A1B",
            "symbol": "GET",
            "decimals": 18,
            "name": "GET",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8a854288a5976036a725879164ca3e91d30c6a1b.png"
        },
        {
            "address": "0x808507121B80c02388fAd14726482e061B8da827",
            "symbol": "PENDLE",
            "decimals": 18,
            "name": "Pendle",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x808507121b80c02388fad14726482e061b8da827.png"
        },
        {
            "address": "0x1fDaB294EDA5112B7d066ED8F2E4E562D5bCc664",
            "symbol": "SPICE",
            "decimals": 18,
            "name": "Spice",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1fdab294eda5112b7d066ed8f2e4e562d5bcc664.png"
        },
        {
            "address": "0xDDD6A0ECc3c6F6C102E5eA3d8Af7B801d1a77aC8",
            "symbol": "UNIX",
            "decimals": 18,
            "name": "UniX Gaming",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xddd6a0ecc3c6f6c102e5ea3d8af7b801d1a77ac8.png"
        },
        {
            "address": "0xf009f5531dE69067435e32c4b9D36077F4C4A673",
            "symbol": "UNV",
            "decimals": 18,
            "name": "Unvest",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf009f5531de69067435e32c4b9d36077f4c4a673.png"
        },
        {
            "address": "0x821144518dfE9e7b44fCF4d0824e15e8390d4637",
            "symbol": "ATIS",
            "decimals": 18,
            "name": "ATIS Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x821144518dfe9e7b44fcf4d0824e15e8390d4637.png"
        },
        {
            "address": "0xD533a949740bb3306d119CC777fa900bA034cd52",
            "symbol": "CRV",
            "decimals": 18,
            "name": "Curve DAO Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd533a949740bb3306d119cc777fa900ba034cd52.png"
        },
        {
            "address": "0x6Ee0f7BB50a54AB5253dA0667B0Dc2ee526C30a8",
            "symbol": "aBUSDv1",
            "decimals": 18,
            "name": "Aave Interest bearing Binance USD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6ee0f7bb50a54ab5253da0667b0dc2ee526c30a8.png"
        },
        {
            "address": "0x6810e776880C02933D47DB1b9fc05908e5386b96",
            "symbol": "GNO",
            "decimals": 18,
            "name": "Gnosis",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6810e776880c02933d47db1b9fc05908e5386b96.png"
        },
        {
            "address": "0xaD6A626aE2B43DCb1B39430Ce496d2FA0365BA9C",
            "symbol": "DEFI+S",
            "decimals": 18,
            "name": "PieDAO DEFI Small Cap",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xad6a626ae2b43dcb1b39430ce496d2fa0365ba9c.png"
        },
        {
            "address": "0x0DDe6F6e345bfd23f3F419F0DFe04E93143b44FB",
            "symbol": "SOTA",
            "decimals": 18,
            "name": "SOTA",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0dde6f6e345bfd23f3f419f0dfe04e93143b44fb.png"
        },
        {
            "address": "0xf14b9ADF84812bA463799357f4dc716b4384010B",
            "symbol": "PP",
            "decimals": 8,
            "name": "Pension Plan",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf14b9adf84812ba463799357f4dc716b4384010b.png"
        },
        {
            "address": "0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2",
            "symbol": "MTA",
            "decimals": 18,
            "name": "Meta",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2.png"
        },
        {
            "address": "0xbc4171f45EF0EF66E76F979dF021a34B46DCc81d",
            "symbol": "DORA",
            "decimals": 18,
            "name": "Dorayaki",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xbc4171f45ef0ef66e76f979df021a34b46dcc81d.png"
        },
        {
            "address": "0x9506d37f70eB4C3d79C398d326C871aBBf10521d",
            "symbol": "MLT",
            "decimals": 18,
            "name": "Media Licensing Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9506d37f70eb4c3d79c398d326c871abbf10521d.png"
        },
        {
            "address": "0x9bA00D6856a4eDF4665BcA2C2309936572473B7E",
            "symbol": "aUSDCv1",
            "decimals": 6,
            "name": "Aave Interest bearing USDC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9ba00d6856a4edf4665bca2c2309936572473b7e.png"
        },
        {
            "address": "0xa42F266684ac2aD6ecb00df95b1c76EFbb6f136c",
            "symbol": "CATE",
            "decimals": 18,
            "name": "Cash Tech",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa42f266684ac2ad6ecb00df95b1c76efbb6f136c.png"
        },
        {
            "address": "0xF063fE1aB7a291c5d06a86e14730b00BF24cB589",
            "symbol": "SALE",
            "decimals": 18,
            "name": "DxSale.Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf063fe1ab7a291c5d06a86e14730b00bf24cb589.png"
        },
        {
            "address": "0x58b6A8A3302369DAEc383334672404Ee733aB239",
            "symbol": "LPT",
            "decimals": 18,
            "name": "Livepeer Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x58b6a8a3302369daec383334672404ee733ab239.png"
        },
        {
            "address": "0x0c7D5ae016f806603CB1782bEa29AC69471CAb9c",
            "symbol": "BFC",
            "decimals": 18,
            "name": "Bifrost",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0c7d5ae016f806603cb1782bea29ac69471cab9c.png"
        },
        {
            "address": "0xc50EF449171a51FbeAFd7c562b064B6471C36caA",
            "symbol": "ZINU",
            "decimals": 9,
            "name": "Zombie Inu",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc50ef449171a51fbeafd7c562b064b6471c36caa.png"
        },
        {
            "address": "0xfc05987bd2be489ACCF0f509E44B0145d68240f7",
            "symbol": "ESS",
            "decimals": 18,
            "name": "ESSENTIA",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xfc05987bd2be489accf0f509e44b0145d68240f7.png"
        },
        {
            "address": "0x328C4c80BC7aCa0834Db37e6600A6c49E12Da4DE",
            "symbol": "aSNXv1",
            "decimals": 18,
            "name": "Aave Interest bearing SNX",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x328c4c80bc7aca0834db37e6600a6c49e12da4de.png"
        },
        {
            "address": "0x7ea9C63E216D5565c3940A2B3d150e59C2907Db3",
            "symbol": "crBBTC",
            "decimals": 8,
            "name": "Cream Binance Wrapped BTC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7ea9c63e216d5565c3940a2b3d150e59c2907db3.png"
        },
        {
            "address": "0x3472A5A71965499acd81997a54BBA8D852C6E53d",
            "symbol": "BADGER",
            "decimals": 18,
            "name": "Badger",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3472a5a71965499acd81997a54bba8d852c6e53d.png"
        },
        {
            "address": "0x8eB24319393716668D768dCEC29356ae9CfFe285",
            "symbol": "AGI",
            "decimals": 8,
            "name": "SingularityNET Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8eb24319393716668d768dcec29356ae9cffe285.png"
        },
        {
            "address": "0xdfe691F37b6264a90Ff507EB359C45d55037951C",
            "symbol": "KARMA",
            "decimals": 4,
            "name": "Karma",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdfe691f37b6264a90ff507eb359c45d55037951c.png"
        },
        {
            "address": "0x99295f1141d58A99e939F7bE6BBe734916a875B8",
            "symbol": "LPL",
            "decimals": 18,
            "name": "LinkPool",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x99295f1141d58a99e939f7be6bbe734916a875b8.png"
        },
        {
            "address": "0x035dF12E0F3ac6671126525f1015E47D79dFEDDF",
            "symbol": "0xMR",
            "decimals": 18,
            "name": "0xMonero",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x035df12e0f3ac6671126525f1015e47d79dfeddf.png"
        },
        {
            "address": "0xa150Db9b1Fa65b44799d4dD949D922c0a33Ee606",
            "symbol": "DRC_1",
            "decimals": 0,
            "name": "Digital Reserve Currency",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa150db9b1fa65b44799d4dd949d922c0a33ee606.png"
        },
        {
            "address": "0x43044f861ec040DB59A7e324c40507adDb673142",
            "symbol": "CAP",
            "decimals": 18,
            "name": "Cap",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x43044f861ec040db59a7e324c40507addb673142.png"
        },
        {
            "address": "0x632806BF5c8f062932Dd121244c9fbe7becb8B48",
            "symbol": "PDI",
            "decimals": 18,
            "name": "Phuture DeFi Index",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x632806bf5c8f062932dd121244c9fbe7becb8b48.png"
        },
        {
            "address": "0x6b785a0322126826d8226d77e173d75DAfb84d11",
            "symbol": "VLT",
            "decimals": 18,
            "name": "Bankroll Vault",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6b785a0322126826d8226d77e173d75dafb84d11.png"
        },
        {
            "address": "0xf911a7ec46a2c6fa49193212fe4a2a9B95851c27",
            "symbol": "XAMP",
            "decimals": 9,
            "name": "Antiample",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf911a7ec46a2c6fa49193212fe4a2a9b95851c27.png"
        },
        {
            "address": "0x9b53E429B0baDd98ef7F01F03702986c516a5715",
            "symbol": "HY",
            "decimals": 18,
            "name": "hybrix hydra",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9b53e429b0badd98ef7f01f03702986c516a5715.png"
        },
        {
            "address": "0x8CE9137d39326AD0cD6491fb5CC0CbA0e089b6A9",
            "symbol": "SXP",
            "decimals": 18,
            "name": "Swipe",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9.png"
        },
        {
            "address": "0x33D0568941C0C64ff7e0FB4fbA0B11BD37deEd9f",
            "symbol": "RAMP",
            "decimals": 18,
            "name": "RAMP DEFI",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x33d0568941c0c64ff7e0fb4fba0b11bd37deed9f.png"
        },
        {
            "address": "0x1456688345527bE1f37E9e627DA0837D6f08C925",
            "symbol": "USDP_2",
            "decimals": 18,
            "name": "USDP Stablecoin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1456688345527be1f37e9e627da0837d6f08c925.png"
        },
        {
            "address": "0x53C8395465A84955c95159814461466053DedEDE",
            "symbol": "DG",
            "decimals": 18,
            "name": "DeGate Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x53c8395465a84955c95159814461466053dedede.png"
        },
        {
            "address": "0x01e0E2e61f554eCAaeC0cC933E739Ad90f24a86d",
            "symbol": "GTON",
            "decimals": 18,
            "name": "Graviton",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x01e0e2e61f554ecaaec0cc933e739ad90f24a86d_1.png"
        },
        {
            "address": "0x9D47894f8BECB68B9cF3428d256311Affe8B068B",
            "symbol": "$ROPE",
            "decimals": 18,
            "name": "$ROPE",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9d47894f8becb68b9cf3428d256311affe8b068b.png"
        },
        {
            "address": "0xD8912C10681D8B21Fd3742244f44658dBA12264E",
            "symbol": "PLU",
            "decimals": 18,
            "name": "Pluton",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd8912c10681d8b21fd3742244f44658dba12264e.png"
        },
        {
            "address": "0xDC59ac4FeFa32293A95889Dc396682858d52e5Db",
            "symbol": "BEAN",
            "decimals": 6,
            "name": "Bean",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdc59ac4fefa32293a95889dc396682858d52e5db.png"
        },
        {
            "address": "0xeEeEEb57642040bE42185f49C52F7E9B38f8eeeE",
            "symbol": "ELK",
            "decimals": 18,
            "name": "Elk",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xeeeeeb57642040be42185f49c52f7e9b38f8eeee.png"
        },
        {
            "address": "0x24E89bDf2f65326b94E36978A7EDeAc63623DAFA",
            "symbol": "TKING",
            "decimals": 18,
            "name": "Tiger King",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x24e89bdf2f65326b94e36978a7edeac63623dafa.png"
        },
        {
            "address": "0xC57d533c50bC22247d49a368880fb49a1caA39F7",
            "symbol": "PTF",
            "decimals": 18,
            "name": "PowerTrade Fuel Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc57d533c50bc22247d49a368880fb49a1caa39f7.png"
        },
        {
            "address": "0x2F109021aFe75B949429fe30523Ee7C0D5B27207",
            "symbol": "OCC",
            "decimals": 18,
            "name": "OCC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2f109021afe75b949429fe30523ee7c0d5b27207.png"
        },
        {
            "address": "0xbf2179859fc6D5BEE9Bf9158632Dc51678a4100e",
            "symbol": "ELF",
            "decimals": 18,
            "name": "Aelf",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xbf2179859fc6d5bee9bf9158632dc51678a4100e.png"
        },
        {
            "address": "0xB4272071eCAdd69d933AdcD19cA99fe80664fc08",
            "symbol": "XCHF",
            "decimals": 18,
            "name": "CryptoFranc",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb4272071ecadd69d933adcd19ca99fe80664fc08.png"
        },
        {
            "address": "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
            "symbol": "OMG",
            "decimals": 18,
            "name": "OmiseGO",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd26114cd6ee289accf82350c8d8487fedb8a0c07.png"
        },
        {
            "address": "0xa0246c9032bC3A600820415aE600c6388619A14D",
            "symbol": "FARM",
            "decimals": 18,
            "name": "FARM Reward Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa0246c9032bc3a600820415ae600c6388619a14d.png"
        },
        {
            "address": "0xECbF566944250ddE88322581024E611419715f7A",
            "symbol": "xBTC",
            "decimals": 9,
            "name": "xBTC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xecbf566944250dde88322581024e611419715f7a.png"
        },
        {
            "address": "0xB4EFd85c19999D84251304bDA99E90B92300Bd93",
            "symbol": "RPL",
            "decimals": 18,
            "name": "Rocket Pool",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb4efd85c19999d84251304bda99e90b92300bd93.png"
        },
        {
            "address": "0x3832d2F059E55934220881F831bE501D180671A7",
            "symbol": "renDOGE",
            "decimals": 8,
            "name": "renDOGE",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3832d2f059e55934220881f831be501d180671a7.png"
        },
        {
            "address": "0x5CAc718A3AE330d361e39244BF9e67AB17514CE8",
            "symbol": "COT",
            "decimals": 18,
            "name": "CosplayToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5cac718a3ae330d361e39244bf9e67ab17514ce8.png"
        },
        {
            "address": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
            "symbol": "AAVE",
            "decimals": 18,
            "name": "Aave Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.png"
        },
        {
            "address": "0x126c121f99e1E211dF2e5f8De2d96Fa36647c855",
            "symbol": "DEGEN",
            "decimals": 18,
            "name": "DEGEN Index",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x126c121f99e1e211df2e5f8de2d96fa36647c855.png"
        },
        {
            "address": "0x73374Ea518De7adDD4c2B624C0e8B113955ee041",
            "symbol": "JGN",
            "decimals": 18,
            "name": "Juggernaut DeFi",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x73374ea518de7addd4c2b624c0e8b113955ee041.png"
        },
        {
            "address": "0x7C5A0CE9267ED19B22F8cae653F198e3E8daf098",
            "symbol": "SAN",
            "decimals": 18,
            "name": "Santiment",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098.png"
        },
        {
            "address": "0xcE4Fe9b4b8Ff61949DCfeB7e03bc9FAca59D2Eb3",
            "symbol": "crBAL",
            "decimals": 8,
            "name": "Cream Balancer",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xce4fe9b4b8ff61949dcfeb7e03bc9faca59d2eb3.png"
        },
        {
            "address": "0xB56A1f3310578f23120182Fb2e58c087EFE6e147",
            "symbol": "ACYC",
            "decimals": 18,
            "name": "AllCoinsYieldCapital",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb56a1f3310578f23120182fb2e58c087efe6e147.png"
        },
        {
            "address": "0xDd1Ad9A21Ce722C151A836373baBe42c868cE9a4",
            "symbol": "UBI",
            "decimals": 18,
            "name": "Universal Basic Income",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdd1ad9a21ce722c151a836373babe42c868ce9a4.png"
        },
        {
            "address": "0x8185Bc4757572Da2a610f887561c32298f1A5748",
            "symbol": "ALN",
            "decimals": 18,
            "name": "Aluna",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8185bc4757572da2a610f887561c32298f1a5748.png"
        },
        {
            "address": "0x31c8EAcBFFdD875c74b94b077895Bd78CF1E64A3",
            "symbol": "RAD",
            "decimals": 18,
            "name": "Radicle",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x31c8eacbffdd875c74b94b077895bd78cf1e64a3.png"
        },
        {
            "address": "0x9A0aBA393aac4dFbFf4333B06c407458002C6183",
            "symbol": "AC",
            "decimals": 18,
            "name": "ACoconut",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9a0aba393aac4dfbff4333b06c407458002c6183.png"
        },
        {
            "address": "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359",
            "symbol": "SAI",
            "decimals": 18,
            "name": "Sai Stablecoin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359.png"
        },
        {
            "address": "0xCFEAead4947f0705A14ec42aC3D44129E1Ef3eD5",
            "symbol": "NOTE",
            "decimals": 8,
            "name": "Notional",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xcfeaead4947f0705a14ec42ac3d44129e1ef3ed5.png"
        },
        {
            "address": "0x80c8C3dCfB854f9542567c8Dac3f44D709eBc1de",
            "symbol": "MILK2",
            "decimals": 18,
            "name": "MilkyWay Token by SpaceSwap v2",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x80c8c3dcfb854f9542567c8dac3f44d709ebc1de.png"
        },
        {
            "address": "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
            "symbol": "ZRX",
            "decimals": 18,
            "name": "0x Protocol",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe41d2489571d322189246dafa5ebde1f4699f498.png"
        },
        {
            "address": "0x05D3606d5c81EB9b7B18530995eC9B29da05FaBa",
            "symbol": "TOMOE",
            "decimals": 18,
            "name": "TomoChain",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x05d3606d5c81eb9b7b18530995ec9b29da05faba.png"
        },
        {
            "address": "0xFc979087305A826c2B2a0056cFAbA50aad3E6439",
            "symbol": "DAFI",
            "decimals": 18,
            "name": "DAFI Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xfc979087305a826c2b2a0056cfaba50aad3e6439.png"
        },
        {
            "address": "0xf680429328caaaCabee69b7A9FdB21a71419c063",
            "symbol": "BFLY",
            "decimals": 18,
            "name": "Butterfly Protocol Governance Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf680429328caaacabee69b7a9fdb21a71419c063.png"
        },
        {
            "address": "0x16de59092dAE5CcF4A1E6439D611fd0653f0Bd01",
            "symbol": "yDAIv2",
            "decimals": 18,
            "name": "iearn DAIv2",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x16de59092dae5ccf4a1e6439d611fd0653f0bd01.png"
        },
        {
            "address": "0xdF574c24545E5FfEcb9a659c229253D4111d87e1",
            "symbol": "HUSD",
            "decimals": 8,
            "name": "HUSD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdf574c24545e5ffecb9a659c229253d4111d87e1.png"
        },
        {
            "address": "0x50026ad58b338Cf3eccC2b422dEB8Faa725F377F",
            "symbol": "STEP",
            "decimals": 8,
            "name": "1Step.finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x50026ad58b338cf3eccc2b422deb8faa725f377f.png"
        },
        {
            "address": "0x42d6622deCe394b54999Fbd73D108123806f6a18",
            "symbol": "SPANK",
            "decimals": 18,
            "name": "SPANK",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x42d6622dece394b54999fbd73d108123806f6a18.png"
        },
        {
            "address": "0xaC0104Cca91D167873B8601d2e71EB3D4D8c33e0",
            "symbol": "CWS",
            "decimals": 18,
            "name": "Crowns",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xac0104cca91d167873b8601d2e71eb3d4d8c33e0.png"
        },
        {
            "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            "symbol": "USDT",
            "decimals": 6,
            "name": "Tether USD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png"
        },
        {
            "address": "0x7C07F7aBe10CE8e33DC6C5aD68FE033085256A84",
            "symbol": "icETH",
            "decimals": 18,
            "name": "Interest Compounding ETH Index",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7c07f7abe10ce8e33dc6c5ad68fe033085256a84.png"
        },
        {
            "address": "0xD8E3FB3b08eBA982F2754988d70D57eDc0055ae6",
            "symbol": "ZORA",
            "decimals": 9,
            "name": "Zoracles",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd8e3fb3b08eba982f2754988d70d57edc0055ae6.png"
        },
        {
            "address": "0x3aFfCCa64c2A6f4e3B6Bd9c64CD2C969EFd1ECBe",
            "symbol": "DSLA",
            "decimals": 18,
            "name": "DSLA",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe.png"
        },
        {
            "address": "0xcD91538B91B4ba7797D39a2f66E63810b50A33d0",
            "symbol": "STABLEx",
            "decimals": 18,
            "name": "ARC STABLEx",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xcd91538b91b4ba7797d39a2f66e63810b50a33d0.png"
        },
        {
            "address": "0x3C03b4EC9477809072FF9CC9292C9B25d4A8e6c6",
            "symbol": "CVR",
            "decimals": 18,
            "name": "PolkaCover",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3c03b4ec9477809072ff9cc9292c9b25d4a8e6c6.png"
        },
        {
            "address": "0x6f40d4A6237C257fff2dB00FA0510DeEECd303eb",
            "symbol": "INST",
            "decimals": 18,
            "name": "Instadapp",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6f40d4a6237c257fff2db00fa0510deeecd303eb.png"
        },
        {
            "address": "0x6468e79A80C0eaB0F9A2B574c8d5bC374Af59414",
            "symbol": "eXRD",
            "decimals": 18,
            "name": "E-RADIX",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6468e79a80c0eab0f9a2b574c8d5bc374af59414.png"
        },
        {
            "address": "0x10Be9a8dAe441d276a5027936c3aADEd2d82bC15",
            "symbol": "UMX",
            "decimals": 18,
            "name": "unimex network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x10be9a8dae441d276a5027936c3aaded2d82bc15.png"
        },
        {
            "address": "0xfC1E690f61EFd961294b3e1Ce3313fBD8aa4f85d",
            "symbol": "aDAIv1",
            "decimals": 18,
            "name": "Aave Interest bearing DAI",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xfc1e690f61efd961294b3e1ce3313fbd8aa4f85d.png"
        },
        {
            "address": "0xD56daC73A4d6766464b38ec6D91eB45Ce7457c44",
            "symbol": "PAN",
            "decimals": 18,
            "name": "Panvala pan",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd56dac73a4d6766464b38ec6d91eb45ce7457c44.png"
        },
        {
            "address": "0x5F0E628B693018f639D10e4A4F59BD4d8B2B6B44",
            "symbol": "WHITE",
            "decimals": 18,
            "name": "Whiteheart Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5f0e628b693018f639d10e4a4f59bd4d8b2b6b44.png"
        },
        {
            "address": "0x3506424F91fD33084466F402d5D97f05F8e3b4AF",
            "symbol": "CHZ",
            "decimals": 18,
            "name": "chiliZ",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3506424f91fd33084466f402d5d97f05f8e3b4af.png"
        },
        {
            "address": "0xA9536B9c75A9E0faE3B56a96AC8EdF76AbC91978",
            "symbol": "DFI",
            "decimals": 18,
            "name": "Amun DeFi Index",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa9536b9c75a9e0fae3b56a96ac8edf76abc91978.png"
        },
        {
            "address": "0x474021845C4643113458ea4414bdb7fB74A01A77",
            "symbol": "UNO",
            "decimals": 18,
            "name": "UnoRe",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x474021845c4643113458ea4414bdb7fb74a01a77.png"
        },
        {
            "address": "0x6C5024Cd4F8A59110119C56f8933403A539555EB",
            "symbol": "aSUSD",
            "decimals": 18,
            "name": "Aave interest bearing SUSD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6c5024cd4f8a59110119c56f8933403a539555eb.png"
        },
        {
            "address": "0x7BEF710a5759d197EC0Bf621c3Df802C2D60D848",
            "symbol": "SHOPX",
            "decimals": 18,
            "name": "SPLYT SHOPX",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7bef710a5759d197ec0bf621c3df802c2d60d848.png"
        },
        {
            "address": "0x69A95185ee2a045CDC4bCd1b1Df10710395e4e23",
            "symbol": "POOLZ",
            "decimals": 18,
            "name": "$Poolz Finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x69a95185ee2a045cdc4bcd1b1df10710395e4e23.png"
        },
        {
            "address": "0x8CB924583681cbFE487A62140a994A49F833c244",
            "symbol": "SWAPP",
            "decimals": 18,
            "name": "Swapp Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8cb924583681cbfe487a62140a994a49f833c244.png"
        },
        {
            "address": "0xa283aA7CfBB27EF0cfBcb2493dD9F4330E0fd304",
            "symbol": "MM_1",
            "decimals": 18,
            "name": "MMToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa283aa7cfbb27ef0cfbcb2493dd9f4330e0fd304.png"
        },
        {
            "address": "0xCC4304A31d09258b0029eA7FE63d032f52e44EFe",
            "symbol": "SWAP",
            "decimals": 18,
            "name": "TrustSwap Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xcc4304a31d09258b0029ea7fe63d032f52e44efe.png"
        },
        {
            "address": "0x0316EB71485b0Ab14103307bf65a021042c6d380",
            "symbol": "HBTC",
            "decimals": 18,
            "name": "Huobi BTC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0316eb71485b0ab14103307bf65a021042c6d380.png"
        },
        {
            "address": "0x2A8e1E676Ec238d8A992307B495b45B3fEAa5e86",
            "symbol": "OUSD",
            "decimals": 18,
            "name": "Origin Dollar",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2a8e1e676ec238d8a992307b495b45b3feaa5e86.png"
        },
        {
            "address": "0x3e780920601D61cEdb860fe9c4a90c9EA6A35E78",
            "symbol": "BOOST",
            "decimals": 18,
            "name": "Boosted Finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3e780920601d61cedb860fe9c4a90c9ea6a35e78.png"
        },
        {
            "address": "0x798D1bE841a82a273720CE31c822C61a67a601C3",
            "symbol": "DIGG",
            "decimals": 9,
            "name": "Digg",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x798d1be841a82a273720ce31c822c61a67a601c3.png"
        },
        {
            "address": "0x888888888889C00c67689029D7856AAC1065eC11",
            "symbol": "OPIUM",
            "decimals": 18,
            "name": "Opium Governance Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x888888888889c00c67689029d7856aac1065ec11.png"
        },
        {
            "address": "0x3A707d56D538e85B783E8CE12B346e7fB6511F90",
            "symbol": "iETHV",
            "decimals": 18,
            "name": "Inverse ETH Volatility Index",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3a707d56d538e85b783e8ce12b346e7fb6511f90.png"
        },
        {
            "address": "0xc4De189Abf94c57f396bD4c52ab13b954FebEfD8",
            "symbol": "B20",
            "decimals": 18,
            "name": "B.20",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc4de189abf94c57f396bd4c52ab13b954febefd8.png"
        },
        {
            "address": "0xb78B3320493a4EFaa1028130C5Ba26f0B6085Ef8",
            "symbol": "DRC_2",
            "decimals": 18,
            "name": "Dracula Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb78b3320493a4efaa1028130c5ba26f0b6085ef8.png"
        },
        {
            "address": "0xe1030B48b2033314979143766d7dC1F40ef8CE11",
            "symbol": "PEEPS",
            "decimals": 18,
            "name": "The People\u2019s Coin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe1030b48b2033314979143766d7dc1f40ef8ce11.png"
        },
        {
            "address": "0xE94B97b6b43639E238c851A7e693F50033EfD75C",
            "symbol": "RNBW",
            "decimals": 18,
            "name": "Rainbow Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe94b97b6b43639e238c851a7e693f50033efd75c.png"
        },
        {
            "address": "0x36F3FD68E7325a35EB768F1AedaAe9EA0689d723",
            "symbol": "ESD",
            "decimals": 18,
            "name": "Empty Set Dollar",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x36f3fd68e7325a35eb768f1aedaae9ea0689d723.png"
        },
        {
            "address": "0x4c11249814f11b9346808179Cf06e71ac328c1b5",
            "symbol": "ORAI",
            "decimals": 18,
            "name": "Oraichain Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4c11249814f11b9346808179cf06e71ac328c1b5.png"
        },
        {
            "address": "0x1a7e4e63778B4f12a199C062f3eFdD288afCBce8",
            "symbol": "agEUR",
            "decimals": 18,
            "name": "agEUR",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1a7e4e63778b4f12a199c062f3efdd288afcbce8.png"
        },
        {
            "address": "0xA0CF46eb152656C7090e769916eb44a138aaa406",
            "symbol": "SPH",
            "decimals": 18,
            "name": "Spheroid",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa0cf46eb152656c7090e769916eb44a138aaa406.png"
        },
        {
            "address": "0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a",
            "symbol": "TKN",
            "decimals": 8,
            "name": "Monolith",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xaaaf91d9b90df800df4f55c205fd6989c977e73a.png"
        },
        {
            "address": "0xc5bDdf9843308380375a611c18B50Fb9341f502A",
            "symbol": "yveCRV-DAO",
            "decimals": 18,
            "name": "veCRV-DAO yVault",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc5bddf9843308380375a611c18b50fb9341f502a.png"
        },
        {
            "address": "0x89Ab32156e46F46D02ade3FEcbe5Fc4243B9AAeD",
            "symbol": "PNT",
            "decimals": 18,
            "name": "pNetwork Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x89ab32156e46f46d02ade3fecbe5fc4243b9aaed.png"
        },
        {
            "address": "0x7a2Bc711E19ba6aff6cE8246C546E8c4B4944DFD",
            "symbol": "WAXE",
            "decimals": 8,
            "name": "WAX Economic Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7a2bc711e19ba6aff6ce8246c546e8c4b4944dfd.png"
        },
        {
            "address": "0x767FE9EDC9E0dF98E07454847909b5E959D7ca0E",
            "symbol": "ILV",
            "decimals": 18,
            "name": "Illuvium",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x767fe9edc9e0df98e07454847909b5e959d7ca0e.png"
        },
        {
            "address": "0x1DE5e000C41C8d35b9f1f4985C23988f05831057",
            "symbol": "BNF",
            "decimals": 18,
            "name": "BonFi",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1de5e000c41c8d35b9f1f4985c23988f05831057.png"
        },
        {
            "address": "0x15B543e986b8c34074DFc9901136d9355a537e7E",
            "symbol": "STC",
            "decimals": 18,
            "name": "Student Coin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x15b543e986b8c34074dfc9901136d9355a537e7e.png"
        },
        {
            "address": "0x9ff58f4fFB29fA2266Ab25e75e2A8b3503311656",
            "symbol": "aWBTC",
            "decimals": 8,
            "name": "Aave interest bearing WBTC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9ff58f4ffb29fa2266ab25e75e2a8b3503311656.png"
        },
        {
            "address": "0x0000000000095413afC295d19EDeb1Ad7B71c952",
            "symbol": "LON",
            "decimals": 18,
            "name": "Tokenlon",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0000000000095413afc295d19edeb1ad7b71c952.png"
        },
        {
            "address": "0x000000000000d0151E748d25b766e77efe2A6c83",
            "symbol": "XDEX",
            "decimals": 18,
            "name": "XDEFI Governance Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x000000000000d0151e748d25b766e77efe2a6c83.png"
        },
        {
            "address": "0xde4EE8057785A7e8e800Db58F9784845A5C2Cbd6",
            "symbol": "DEXE",
            "decimals": 18,
            "name": "Dexe",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xde4ee8057785a7e8e800db58f9784845a5c2cbd6.png"
        },
        {
            "address": "0x903560b1CcE601794C584F58898dA8a8b789Fc5d",
            "symbol": "crKP3R",
            "decimals": 8,
            "name": "Cream Keep3rV1",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x903560b1cce601794c584f58898da8a8b789fc5d.png"
        },
        {
            "address": "0x467Bccd9d29f223BcE8043b84E8C8B282827790F",
            "symbol": "TEL",
            "decimals": 2,
            "name": "Telcoin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x467bccd9d29f223bce8043b84e8c8b282827790f.png"
        },
        {
            "address": "0x1E4EDE388cbc9F4b5c79681B7f94d36a11ABEBC9",
            "symbol": "X2Y2",
            "decimals": 18,
            "name": "X2Y2Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1e4ede388cbc9f4b5c79681b7f94d36a11abebc9.png"
        },
        {
            "address": "0x73d7c860998CA3c01Ce8c808F5577d94d545d1b4",
            "symbol": "IXS",
            "decimals": 18,
            "name": "Ixs Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x73d7c860998ca3c01ce8c808f5577d94d545d1b4.png"
        },
        {
            "address": "0x2aF1dF3AB0ab157e1E2Ad8F88A7D04fbea0c7dc6",
            "symbol": "BED",
            "decimals": 18,
            "name": "Bankless BED Index",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2af1df3ab0ab157e1e2ad8f88a7d04fbea0c7dc6.png"
        },
        {
            "address": "0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb",
            "symbol": "sETH",
            "decimals": 18,
            "name": "Synth sETH",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb.png"
        },
        {
            "address": "0x41e5560054824eA6B0732E656E3Ad64E20e94E45",
            "symbol": "CVC",
            "decimals": 8,
            "name": "Civic",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x41e5560054824ea6b0732e656e3ad64e20e94e45.png"
        },
        {
            "address": "0x3F382DbD960E3a9bbCeaE22651E88158d2791550",
            "symbol": "GHST",
            "decimals": 18,
            "name": "Aavegotchi GHST Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3f382dbd960e3a9bbceae22651e88158d2791550.png"
        },
        {
            "address": "0xe88f8313e61A97cEc1871EE37fBbe2a8bf3ed1E4",
            "symbol": "VAL",
            "decimals": 18,
            "name": "Sora Validator Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe88f8313e61a97cec1871ee37fbbe2a8bf3ed1e4.png"
        },
        {
            "address": "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03",
            "symbol": "LEND",
            "decimals": 18,
            "name": "EthLend",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x80fb784b7ed66730e8b1dbd9820afd29931aab03.png"
        },
        {
            "address": "0xd6aD7a6750A7593E092a9B218d66C0A814a3436e",
            "symbol": "yUSDCv2",
            "decimals": 6,
            "name": "iearn USDC v2",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd6ad7a6750a7593e092a9b218d66c0a814a3436e.png"
        },
        {
            "address": "0x3505F494c3f0fed0B594E01Fa41Dd3967645ca39",
            "symbol": "SWM",
            "decimals": 18,
            "name": "SWARM",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3505f494c3f0fed0b594e01fa41dd3967645ca39.png"
        },
        {
            "address": "0xfb40e79E56cc7D406707B66C4Fd175E07EB2Ae3C",
            "symbol": "ROTTS",
            "decimals": 9,
            "name": "ROTTSCHILD.com",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xfb40e79e56cc7d406707b66c4fd175e07eb2ae3c.png"
        },
        {
            "address": "0x7F3EDcdD180Dbe4819Bd98FeE8929b5cEdB3AdEB",
            "symbol": "XTK",
            "decimals": 18,
            "name": "xToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7f3edcdd180dbe4819bd98fee8929b5cedb3adeb.png"
        },
        {
            "address": "0x3d6F0DEa3AC3C607B3998e6Ce14b6350721752d9",
            "symbol": "CARDS",
            "decimals": 18,
            "name": "CARD.STARTER",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3d6f0dea3ac3c607b3998e6ce14b6350721752d9.png"
        },
        {
            "address": "0x159751323A9E0415DD3d6D42a1212fe9F4a0848C",
            "symbol": "INFI",
            "decimals": 18,
            "name": "INFI",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x159751323a9e0415dd3d6d42a1212fe9f4a0848c.png"
        },
        {
            "address": "0x106552C11272420aAd5d7e94f8AcAb9095A6c952",
            "symbol": "KEANU",
            "decimals": 9,
            "name": "Keanu Inu",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x106552c11272420aad5d7e94f8acab9095a6c952.png"
        },
        {
            "address": "0x6fB3e0A217407EFFf7Ca062D46c26E5d60a14d69",
            "symbol": "IOTX",
            "decimals": 18,
            "name": "IoTeX Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6fb3e0a217407efff7ca062d46c26e5d60a14d69.png"
        },
        {
            "address": "0x10a3da2BB0Fae4D591476fd97D6636fd172923a8",
            "symbol": "crHEGIC",
            "decimals": 8,
            "name": "Cream FTX Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x10a3da2bb0fae4d591476fd97d6636fd172923a8.png"
        },
        {
            "address": "0xc944E90C64B2c07662A292be6244BDf05Cda44a7",
            "symbol": "GRT",
            "decimals": 18,
            "name": "Graph Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc944e90c64b2c07662a292be6244bdf05cda44a7.png"
        },
        {
            "address": "0xB6eD7644C69416d67B522e20bC294A9a9B405B31",
            "symbol": "0xBTC",
            "decimals": 8,
            "name": "0xBitcoin Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb6ed7644c69416d67b522e20bc294a9a9b405b31.png"
        },
        {
            "address": "0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9",
            "symbol": "alUSD",
            "decimals": 18,
            "name": "Alchemix USD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xbc6da0fe9ad5f3b0d58160288917aa56653660e9.png"
        },
        {
            "address": "0xf65B5C5104c4faFD4b709d9D60a185eAE063276c",
            "symbol": "TRU_Truebit",
            "decimals": 18,
            "name": "Truebit",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf65b5c5104c4fafd4b709d9d60a185eae063276c.png"
        },
        {
            "address": "0xDcB01cc464238396E213a6fDd933E36796eAfF9f",
            "symbol": "YLD",
            "decimals": 18,
            "name": "Yield",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdcb01cc464238396e213a6fdd933e36796eaff9f.png"
        },
        {
            "address": "0x4C25Bdf026Ea05F32713F00f73Ca55857Fbf6342",
            "symbol": "FONT",
            "decimals": 18,
            "name": "Font",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4c25bdf026ea05f32713f00f73ca55857fbf6342.png"
        },
        {
            "address": "0xBC86727E770de68B1060C91f6BB6945c73e10388",
            "symbol": "XNK",
            "decimals": 18,
            "name": "Ink Protocol",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xbc86727e770de68b1060c91f6bb6945c73e10388.png"
        },
        {
            "address": "0x9B99CcA871Be05119B2012fd4474731dd653FEBe",
            "symbol": "MATTER",
            "decimals": 18,
            "name": "Antimatter.Finance Governance Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f_1.png"
        },
        {
            "address": "0x0c3685559Af6F3d20C501b1076A8056A0A14426a",
            "symbol": "miniSAITAMA",
            "decimals": 9,
            "name": "mini SAITAMA",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0c3685559af6f3d20c501b1076a8056a0a14426a.png"
        },
        {
            "address": "0xF32aa187d5Bc16A2C02A6aFb7Df1459d0D107574",
            "symbol": "Inu",
            "decimals": 18,
            "name": "Hachiko Inu",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf32aa187d5bc16a2c02a6afb7df1459d0d107574.png"
        },
        {
            "address": "0x68a3637bA6E75c0f66B61A42639c4e9fCD3D4824",
            "symbol": "MOON",
            "decimals": 18,
            "name": "MoonToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x68a3637ba6e75c0f66b61a42639c4e9fcd3d4824.png"
        },
        {
            "address": "0xb1f871Ae9462F1b2C6826E88A7827e76f86751d4",
            "symbol": "GNYerc20",
            "decimals": 18,
            "name": "GNYerc20",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb1f871ae9462f1b2c6826e88a7827e76f86751d4.png"
        },
        {
            "address": "0x20F7A3DdF244dc9299975b4Da1C39F8D5D75f05A",
            "symbol": "SPN",
            "decimals": 6,
            "name": "Sapien Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x20f7a3ddf244dc9299975b4da1c39f8d5d75f05a.png"
        },
        {
            "address": "0x5166E09628b696285E3A151e84FB977736a83575",
            "symbol": "VOL",
            "decimals": 18,
            "name": "Volatility Protocol Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5166e09628b696285e3a151e84fb977736a83575.png"
        },
        {
            "address": "0x1559FA1b8F28238FD5D76D9f434ad86FD20D1559",
            "symbol": "EDEN",
            "decimals": 18,
            "name": "Eden",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1559fa1b8f28238fd5d76d9f434ad86fd20d1559.png"
        },
        {
            "address": "0x030bA81f1c18d280636F32af80b9AAd02Cf0854e",
            "symbol": "aWETH",
            "decimals": 18,
            "name": "Aave interest bearing WETH",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x030ba81f1c18d280636f32af80b9aad02cf0854e.png"
        },
        {
            "address": "0x945Facb997494CC2570096c74b5F66A3507330a1",
            "symbol": "mBTC",
            "decimals": 18,
            "name": "mStable BTC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x945facb997494cc2570096c74b5f66a3507330a1.png"
        },
        {
            "address": "0xF433089366899D83a9f26A773D59ec7eCF30355e",
            "symbol": "MTL",
            "decimals": 8,
            "name": "Metal",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf433089366899d83a9f26a773d59ec7ecf30355e.png"
        },
        {
            "address": "0xEC681F28f4561c2a9534799AA38E0d36A83Cf478",
            "symbol": "YVS",
            "decimals": 18,
            "name": "YVS.Finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xec681f28f4561c2a9534799aa38e0d36a83cf478.png"
        },
        {
            "address": "0x6Bba316c48b49BD1eAc44573c5c871ff02958469",
            "symbol": "GAS",
            "decimals": 18,
            "name": "Gas DAO",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6bba316c48b49bd1eac44573c5c871ff02958469.png"
        },
        {
            "address": "0xB6ff96B8A8d214544Ca0dBc9B33f7AD6503eFD32",
            "symbol": "SYNC",
            "decimals": 18,
            "name": "SYNC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb6ff96b8a8d214544ca0dbc9b33f7ad6503efd32.png"
        },
        {
            "address": "0x916c5DE09cF63f6602d1e1793FB41F6437814A62",
            "symbol": "JACY",
            "decimals": 9,
            "name": "JACY",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x916c5de09cf63f6602d1e1793fb41f6437814a62.png"
        },
        {
            "address": "0x147faF8De9d8D8DAAE129B187F0D02D819126750",
            "symbol": "GEO",
            "decimals": 18,
            "name": "GeoDB Coin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x147faf8de9d8d8daae129b187f0d02d819126750.png"
        },
        {
            "address": "0x9fa69536d1cda4A04cFB50688294de75B505a9aE",
            "symbol": "DERC",
            "decimals": 18,
            "name": "DeRace Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9fa69536d1cda4a04cfb50688294de75b505a9ae.png"
        },
        {
            "address": "0xDDB3422497E61e13543BeA06989C0789117555c5",
            "symbol": "COTI",
            "decimals": 18,
            "name": "COTI Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xddb3422497e61e13543bea06989c0789117555c5.png"
        },
        {
            "address": "0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD",
            "symbol": "ETH2x-FLI",
            "decimals": 18,
            "name": "ETH 2x Flexible Leverage Index",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xaa6e8127831c9de45ae56bb1b0d4d4da6e5665bd.png"
        },
        {
            "address": "0xcAaa93712BDAc37f736C323C93D4D5fDEFCc31CC",
            "symbol": "CRD",
            "decimals": 18,
            "name": "CryptalDash",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xcaaa93712bdac37f736c323c93d4d5fdefcc31cc.png"
        },
        {
            "address": "0x3225E3C669B39C7c8B3e204a8614bB218c5e31BC",
            "symbol": "crAAVE",
            "decimals": 8,
            "name": "Cream AAVE Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3225e3c669b39c7c8b3e204a8614bb218c5e31bc.png"
        },
        {
            "address": "0x10FDBD1e48eE2fD9336a482D746138AE19e649Db",
            "symbol": "crFTT",
            "decimals": 8,
            "name": "Cream FTX Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x10fdbd1e48ee2fd9336a482d746138ae19e649db.png"
        },
        {
            "address": "0x85759961b116f1D36fD697855c57A6ae40793D9B",
            "symbol": "cr1INCH",
            "decimals": 8,
            "name": "Cream 1INCH Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x85759961b116f1d36fd697855c57a6ae40793d9b.png"
        },
        {
            "address": "0x544c42fBB96B39B21DF61cf322b5EDC285EE7429",
            "symbol": "INSUR",
            "decimals": 18,
            "name": "InsurAce",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x544c42fbb96b39b21df61cf322b5edc285ee7429.png"
        },
        {
            "address": "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
            "symbol": "3Crv",
            "decimals": 18,
            "name": "Curve.fi DAI/USDC/USDT",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6c3f90f043a72fa612cbac8115ee7e52bde6e490.png"
        },
        {
            "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            "symbol": "USDC",
            "decimals": 6,
            "name": "USD Coin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png"
        },
        {
            "address": "0xFe459828c90c0BA4bC8b42F5C5D44F316700B430",
            "symbol": "BBS",
            "decimals": 18,
            "name": "BBS",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xfe459828c90c0ba4bc8b42f5c5d44f316700b430.png"
        },
        {
            "address": "0x66a0f676479Cee1d7373f3DC2e2952778BfF5bd6",
            "symbol": "WISE",
            "decimals": 18,
            "name": "Wise Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x66a0f676479cee1d7373f3dc2e2952778bff5bd6.png"
        },
        {
            "address": "0x797AAB1ce7c01eB727ab980762bA88e7133d2157",
            "symbol": "crUSDT",
            "decimals": 8,
            "name": "Cream USDT",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x797aab1ce7c01eb727ab980762ba88e7133d2157.png"
        },
        {
            "address": "0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e",
            "symbol": "POOL",
            "decimals": 18,
            "name": "PoolTogether",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0cec1a9154ff802e7934fc916ed7ca50bde6844e.png"
        },
        {
            "address": "0x9aF15D7B8776fa296019979E70a5BE53c714A7ec",
            "symbol": "EVN",
            "decimals": 18,
            "name": "Evn Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9af15d7b8776fa296019979e70a5be53c714a7ec.png"
        },
        {
            "address": "0x3B9BE07d622aCcAEd78f479BC0EDabFd6397E320",
            "symbol": "LSS",
            "decimals": 18,
            "name": "Lossless Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3b9be07d622accaed78f479bc0edabfd6397e320.png"
        },
        {
            "address": "0x64aa3364F17a4D01c6f1751Fd97C2BD3D7e7f1D5",
            "symbol": "OHM",
            "decimals": 9,
            "name": "Olympus",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5.png"
        },
        {
            "address": "0xaea46A60368A7bD060eec7DF8CBa43b7EF41Ad85",
            "symbol": "FET",
            "decimals": 18,
            "name": "Fetch",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xaea46a60368a7bd060eec7df8cba43b7ef41ad85.png"
        },
        {
            "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
            "symbol": "WBTC",
            "decimals": 8,
            "name": "Wrapped BTC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png"
        },
        {
            "address": "0xE95A203B1a91a908F9B9CE46459d101078c2c3cb",
            "symbol": "aETHc",
            "decimals": 18,
            "name": "Ankr Eth2 Reward Bearing Bond",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe95a203b1a91a908f9b9ce46459d101078c2c3cb.png"
        },
        {
            "address": "0x8f8221aFbB33998d8584A2B05749bA73c37a938a",
            "symbol": "REQ",
            "decimals": 18,
            "name": "Request",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8f8221afbb33998d8584a2b05749ba73c37a938a.png"
        },
        {
            "address": "0xEEF9f339514298C6A857EfCfC1A762aF84438dEE",
            "symbol": "HEZ",
            "decimals": 18,
            "name": "Hermez Network Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xeef9f339514298c6a857efcfc1a762af84438dee.png"
        },
        {
            "address": "0x910524678C0B1B23FFB9285a81f99C29C11CBaEd",
            "symbol": "AZUKI",
            "decimals": 18,
            "name": "DokiDokiAzuki",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x910524678c0b1b23ffb9285a81f99c29c11cbaed.png"
        },
        {
            "address": "0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202",
            "symbol": "KNC",
            "decimals": 18,
            "name": "Kyber Network Crystal v2",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202.png"
        },
        {
            "address": "0xDC349913d53b446485E98b76800b6254f43Df695",
            "symbol": "BEZOGE",
            "decimals": 9,
            "name": "Bezoge Earth",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdc349913d53b446485e98b76800b6254f43df695.png"
        },
        {
            "address": "0xeFF039C3c1D668f408d09dD7B63008622a77532C",
            "symbol": "crWNXM",
            "decimals": 8,
            "name": "Cream Wrapped NXM",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xeff039c3c1d668f408d09dd7b63008622a77532c.png"
        },
        {
            "address": "0xb20043F149817bff5322F1b928e89aBFC65A9925",
            "symbol": "EXRT",
            "decimals": 8,
            "name": "EXRT",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb20043f149817bff5322f1b928e89abfc65a9925.png"
        },
        {
            "address": "0xf0f9D895aCa5c8678f706FB8216fa22957685A13",
            "symbol": "CULT",
            "decimals": 18,
            "name": "Cult DAO",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf0f9d895aca5c8678f706fb8216fa22957685a13.png"
        },
        {
            "address": "0x06AF07097C9Eeb7fD685c692751D5C66dB49c215",
            "symbol": "CHAI",
            "decimals": 18,
            "name": "Chai Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x06af07097c9eeb7fd685c692751d5c66db49c215.png"
        },
        {
            "address": "0xe4815AE53B124e7263F08dcDBBB757d41Ed658c6",
            "symbol": "ZKS",
            "decimals": 18,
            "name": "Zks",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe4815ae53b124e7263f08dcdbbb757d41ed658c6.png"
        },
        {
            "address": "0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4",
            "symbol": "ROUTE",
            "decimals": 18,
            "name": "Route",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4.png"
        },
        {
            "address": "0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb",
            "symbol": "DEPAY",
            "decimals": 18,
            "name": "DePay",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa0bed124a09ac2bd941b10349d8d224fe3c955eb.png"
        },
        {
            "address": "0xef3A930e1FfFFAcd2fc13434aC81bD278B0ecC8d",
            "symbol": "FIS",
            "decimals": 18,
            "name": "StaFi",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xef3a930e1ffffacd2fc13434ac81bd278b0ecc8d.png"
        },
        {
            "address": "0x50D1c9771902476076eCFc8B2A83Ad6b9355a4c9",
            "symbol": "FTX Token",
            "decimals": 18,
            "name": "FTT",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9.png"
        },
        {
            "address": "0xF4d861575ecC9493420A3f5a14F85B13f0b50EB3",
            "symbol": "FCL",
            "decimals": 18,
            "name": "Fractal Protocol Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf4d861575ecc9493420a3f5a14f85b13f0b50eb3.png"
        },
        {
            "address": "0xBa21Ef4c9f433Ede00badEFcC2754B8E74bd538A",
            "symbol": "SWFL",
            "decimals": 18,
            "name": "Swapfolio",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xba21ef4c9f433ede00badefcc2754b8e74bd538a.png"
        },
        {
            "address": "0xf8e386EDa857484f5a12e4B5DAa9984E06E73705",
            "symbol": "IND",
            "decimals": 18,
            "name": "Indorse",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf8e386eda857484f5a12e4b5daa9984e06e73705.png"
        },
        {
            "address": "0x8400D94A5cb0fa0D041a3788e395285d61c9ee5e",
            "symbol": "UBT",
            "decimals": 8,
            "name": "UniBright",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e.png"
        },
        {
            "address": "0xba100000625a3754423978a60c9317c58a424e3D",
            "symbol": "BAL",
            "decimals": 18,
            "name": "Balancer",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xba100000625a3754423978a60c9317c58a424e3d.png"
        },
        {
            "address": "0x2163383C1F4E74fE36c50E6154C7F18d9Fd06d6f",
            "symbol": "TIC",
            "decimals": 18,
            "name": "ElasticSwap Tic Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2163383c1f4e74fe36c50e6154c7f18d9fd06d6f.png"
        },
        {
            "address": "0x338286C0BC081891A4Bda39C7667ae150bf5D206",
            "symbol": "crSUSHI",
            "decimals": 8,
            "name": "Cream SushiToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x338286c0bc081891a4bda39c7667ae150bf5d206.png"
        },
        {
            "address": "0x4C19596f5aAfF459fA38B0f7eD92F11AE6543784",
            "symbol": "TRU",
            "decimals": 8,
            "name": "TrustToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4c19596f5aaff459fa38b0f7ed92f11ae6543784.png"
        },
        {
            "address": "0xc7Fd8Dcee4697ceef5a2fd4608a7BD6A94C77480",
            "symbol": "crCRV",
            "decimals": 8,
            "name": "Cream CRV",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc7fd8dcee4697ceef5a2fd4608a7bd6a94c77480.png"
        },
        {
            "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
            "symbol": "DAI",
            "decimals": 18,
            "name": "Dai Stablecoin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png"
        },
        {
            "address": "0xE0aD1806Fd3E7edF6FF52Fdb822432e847411033",
            "symbol": "ONX",
            "decimals": 18,
            "name": "OnX.finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe0ad1806fd3e7edf6ff52fdb822432e847411033.png"
        },
        {
            "address": "0x18aAA7115705e8be94bfFEBDE57Af9BFc265B998",
            "symbol": "AUDIO",
            "decimals": 18,
            "name": "Audius",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x18aaa7115705e8be94bffebde57af9bfc265b998.png"
        },
        {
            "address": "0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa",
            "symbol": "tBTC",
            "decimals": 18,
            "name": "tBTC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8daebade922df735c38c80c7ebd708af50815faa.png"
        },
        {
            "address": "0x2216e873ea4282EbEf7A02aC5aeA220bE6391A7C",
            "symbol": "SMOL",
            "decimals": 18,
            "name": "smol",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2216e873ea4282ebef7a02ac5aea220be6391a7c.png"
        },
        {
            "address": "0xD478161C952357F05f0292B56012Cd8457F1cfbF",
            "symbol": "POLK",
            "decimals": 18,
            "name": "Polkamarkets",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd478161c952357f05f0292b56012cd8457f1cfbf.png"
        },
        {
            "address": "0xD5525D397898e5502075Ea5E830d8914f6F0affe",
            "symbol": "MEME",
            "decimals": 8,
            "name": "MEME",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd5525d397898e5502075ea5e830d8914f6f0affe.png"
        },
        {
            "address": "0x5218E472cFCFE0b64A064F055B43b4cdC9EfD3A6",
            "symbol": "eRSDL",
            "decimals": 18,
            "name": "UnFederalReserveToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5218e472cfcfe0b64a064f055b43b4cdc9efd3a6.png"
        },
        {
            "address": "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
            "symbol": "MANA",
            "decimals": 18,
            "name": "Mana",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0f5d2fb29fb7d3cfee444a200298f468908cc942.png"
        },
        {
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
            "symbol": "ETH",
            "decimals": 18,
            "name": "Ethereum",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png"
        },
        {
            "address": "0xd15eCDCF5Ea68e3995b2D0527A0aE0a3258302F8",
            "symbol": "MCX",
            "decimals": 18,
            "name": "MachiX Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd15ecdcf5ea68e3995b2d0527a0ae0a3258302f8.png"
        },
        {
            "address": "0x21011BC93d9E515B9511A817A1eD1D6d468f49Fc",
            "symbol": "crCOVER",
            "decimals": 8,
            "name": "Cream Cover Protocol Governance Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x21011bc93d9e515b9511a817a1ed1d6d468f49fc.png"
        },
        {
            "address": "0x27702a26126e0B3702af63Ee09aC4d1A084EF628",
            "symbol": "ALEPH",
            "decimals": 18,
            "name": "aleph.im v2",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x27702a26126e0b3702af63ee09ac4d1a084ef628.png"
        },
        {
            "address": "0x55296f69f40Ea6d20E478533C15A6B08B654E758",
            "symbol": "XYO",
            "decimals": 18,
            "name": "XY Oracle",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x55296f69f40ea6d20e478533c15a6b08b654e758.png"
        },
        {
            "address": "0x71fc860F7D3A592A4a98740e39dB31d25db65ae8",
            "symbol": "aUSDTv1",
            "decimals": 6,
            "name": "Aave Interest bearing USDT",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x71fc860f7d3a592a4a98740e39db31d25db65ae8.png"
        },
        {
            "address": "0x06F3C323f0238c72BF35011071f2b5B7F43A054c",
            "symbol": "MASQ",
            "decimals": 18,
            "name": "MASQ",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x06f3c323f0238c72bf35011071f2b5b7f43a054c.png"
        },
        {
            "address": "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
            "symbol": "renBTC",
            "decimals": 8,
            "name": "renBTC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xeb4c2781e4eba804ce9a9803c67d0893436bb27d.png"
        },
        {
            "address": "0xb056c38f6b7Dc4064367403E26424CD2c60655e1",
            "symbol": "CEEK",
            "decimals": 18,
            "name": "CEEK VR",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb056c38f6b7dc4064367403e26424cd2c60655e1.png"
        },
        {
            "address": "0x19D1666f543D42ef17F66E376944A22aEa1a8E46",
            "symbol": "crCOMP",
            "decimals": 8,
            "name": "Cream Compound",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x19d1666f543d42ef17f66e376944a22aea1a8e46.png"
        },
        {
            "address": "0x2Db6c82CE72C8d7D770ba1b5F5Ed0b6E075066d6",
            "symbol": "crAMP",
            "decimals": 8,
            "name": "Cream Amp",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2db6c82ce72c8d7d770ba1b5f5ed0b6e075066d6.png"
        },
        {
            "address": "0x5D8d9F5b96f4438195BE9b99eee6118Ed4304286",
            "symbol": "COVER_v1",
            "decimals": 18,
            "name": "Cover Protocol",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5d8d9f5b96f4438195be9b99eee6118ed4304286.png"
        },
        {
            "address": "0x220B71671b649c03714dA9c621285943f3cbcDC6",
            "symbol": "DIS",
            "decimals": 18,
            "name": "TosDis",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x220b71671b649c03714da9c621285943f3cbcdc6.png"
        },
        {
            "address": "0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E",
            "symbol": "FLOKI",
            "decimals": 9,
            "name": "FLOKI",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xcf0c122c6b73ff809c693db761e7baebe62b6a2e.png"
        },
        {
            "address": "0x2e9d63788249371f1DFC918a52f8d799F4a38C94",
            "symbol": "TOKE",
            "decimals": 18,
            "name": "Tokemak",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2e9d63788249371f1dfc918a52f8d799f4a38c94.png"
        },
        {
            "address": "0xbEa98c05eEAe2f3bC8c3565Db7551Eb738c8CCAb",
            "symbol": "GYSR",
            "decimals": 18,
            "name": "Geyser",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xbea98c05eeae2f3bc8c3565db7551eb738c8ccab_1.png"
        },
        {
            "address": "0x1fE24F25b1Cf609B9c4e7E12D802e3640dFA5e43",
            "symbol": "CGG",
            "decimals": 18,
            "name": "ChainGuardians Governance Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1fe24f25b1cf609b9c4e7e12d802e3640dfa5e43.png"
        },
        {
            "address": "0x0B498ff89709d3838a063f1dFA463091F9801c2b",
            "symbol": "BTC2x-FLI",
            "decimals": 18,
            "name": "BTC 2x Flexible Leverage Index",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0b498ff89709d3838a063f1dfa463091f9801c2b.png"
        },
        {
            "address": "0x6243d8CEA23066d098a15582d81a598b4e8391F4",
            "symbol": "FLX",
            "decimals": 18,
            "name": "Flex Ungovernance Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6243d8cea23066d098a15582d81a598b4e8391f4.png"
        },
        {
            "address": "0x68d57c9a1C35f63E2c83eE8e49A64e9d70528D25",
            "symbol": "SRN",
            "decimals": 18,
            "name": "Sirin Labs",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25.png"
        },
        {
            "address": "0xAB2A7B5876D707e0126B3A75EF7781c77c8877EE",
            "symbol": "QUAD",
            "decimals": 18,
            "name": "Quadency Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xab2a7b5876d707e0126b3a75ef7781c77c8877ee.png"
        },
        {
            "address": "0xEd40834A13129509A89be39a9bE9C0E96A0DDd71",
            "symbol": "WARP",
            "decimals": 18,
            "name": "Warp Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xed40834a13129509a89be39a9be9c0e96a0ddd71.png"
        },
        {
            "address": "0x0E8d6b471e332F140e7d9dbB99E5E3822F728DA6",
            "symbol": "ABYSS",
            "decimals": 18,
            "name": "Abyss",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6.png"
        },
        {
            "address": "0xD46bA6D942050d489DBd938a2C909A5d5039A161",
            "symbol": "AMPL",
            "decimals": 9,
            "name": "Ampleforth",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd46ba6d942050d489dbd938a2c909a5d5039a161.png"
        },
        {
            "address": "0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39",
            "symbol": "HEX",
            "decimals": 8,
            "name": "HEX",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2b591e99afe9f32eaa6214f7b7629768c40eeb39.png"
        },
        {
            "address": "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
            "symbol": "FXS",
            "decimals": 18,
            "name": "Frax Share",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0.png"
        },
        {
            "address": "0x6226caA1857AFBc6DFB6ca66071Eb241228031A1",
            "symbol": "LAR",
            "decimals": 18,
            "name": "Linkart",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6226caa1857afbc6dfb6ca66071eb241228031a1.png"
        },
        {
            "address": "0x595832F8FC6BF59c85C527fEC3740A1b7a361269",
            "symbol": "POWR",
            "decimals": 6,
            "name": "Power Ledger",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x595832f8fc6bf59c85c527fec3740a1b7a361269.png"
        },
        {
            "address": "0x275f5Ad03be0Fa221B4C6649B8AeE09a42D9412A",
            "symbol": "MONA",
            "decimals": 18,
            "name": "Monavale",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x275f5ad03be0fa221b4c6649b8aee09a42d9412a.png"
        },
        {
            "address": "0x5cAf454Ba92e6F2c929DF14667Ee360eD9fD5b26",
            "symbol": "DEV",
            "decimals": 18,
            "name": "Dev",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5caf454ba92e6f2c929df14667ee360ed9fd5b26.png"
        },
        {
            "address": "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
            "symbol": "MATIC",
            "decimals": 18,
            "name": "Matic Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png"
        },
        {
            "address": "0xa58a4f5c4Bb043d2CC1E170613B74e767c94189B",
            "symbol": "UTU",
            "decimals": 18,
            "name": "UTU Coin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa58a4f5c4bb043d2cc1e170613b74e767c94189b.png"
        },
        {
            "address": "0x853Bb55c1f469902F088A629db8C8803A9BE3857",
            "symbol": "one1INCH",
            "decimals": 18,
            "name": "Stable 1INCH",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x853bb55c1f469902f088a629db8c8803a9be3857.png"
        },
        {
            "address": "0xD85AD783cc94bd04196a13DC042A3054a9B52210",
            "symbol": "HAKA",
            "decimals": 18,
            "name": "TribeOne",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd85ad783cc94bd04196a13dc042a3054a9b52210.png"
        },
        {
            "address": "0xfe9A29aB92522D14Fc65880d817214261D8479AE",
            "symbol": "SNOW",
            "decimals": 18,
            "name": "SnowSwap",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xfe9a29ab92522d14fc65880d817214261d8479ae.png"
        },
        {
            "address": "0x459086F2376525BdCebA5bDDA135e4E9d3FeF5bf",
            "symbol": "renBCH",
            "decimals": 8,
            "name": "renBCH",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x459086f2376525bdceba5bdda135e4e9d3fef5bf.png"
        },
        {
            "address": "0x0ab87046fBb341D058F17CBC4c1133F25a20a52f",
            "symbol": "gOHM",
            "decimals": 18,
            "name": "Governance OHM",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x0ab87046fbb341d058f17cbc4c1133f25a20a52f.png"
        },
        {
            "address": "0x7659CE147D0e714454073a5dd7003544234b6Aa0",
            "symbol": "XCAD",
            "decimals": 18,
            "name": "XCAD Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7659ce147d0e714454073a5dd7003544234b6aa0.png"
        },
        {
            "address": "0xac3211a5025414Af2866FF09c23FC18bc97e79b1",
            "symbol": "DOV",
            "decimals": 18,
            "name": "DOVU",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xac3211a5025414af2866ff09c23fc18bc97e79b1.png"
        },
        {
            "address": "0xdacD69347dE42baBfAEcD09dC88958378780FB62",
            "symbol": "ATRI",
            "decimals": 0,
            "name": "AtariToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdacd69347de42babfaecd09dc88958378780fb62.png"
        },
        {
            "address": "0x23B608675a2B2fB1890d3ABBd85c5775c51691d5",
            "symbol": "SOCKS",
            "decimals": 18,
            "name": "Unisocks Edition 0",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x23b608675a2b2fb1890d3abbd85c5775c51691d5.png"
        },
        {
            "address": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
            "symbol": "cDAI",
            "decimals": 8,
            "name": "Compound Dai",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5d3a536e4d6dbd6114cc1ead35777bab948e3643.png"
        },
        {
            "address": "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
            "symbol": "cWBTC",
            "decimals": 8,
            "name": "Compound Wrapped BTC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc11b1268c1a384e55c48c2391d8d480264a3a7f4.png"
        },
        {
            "address": "0x814e0908b12A99FeCf5BC101bB5d0b8B5cDf7d26",
            "symbol": "MDT_1",
            "decimals": 18,
            "name": "Measurable Data Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x814e0908b12a99fecf5bc101bb5d0b8b5cdf7d26.png"
        },
        {
            "address": "0xB1e9157c2Fdcc5a856C8DA8b2d89b6C32b3c1229",
            "symbol": "ZEFU",
            "decimals": 18,
            "name": "Zenfuse Trading Platform Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb1e9157c2fdcc5a856c8da8b2d89b6c32b3c1229.png"
        },
        {
            "address": "0x197070723CE0D3810a0E47F06E935c30a480D4Fc",
            "symbol": "crWBTC",
            "decimals": 8,
            "name": "Cream Wrapped BTC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x197070723ce0d3810a0e47f06e935c30a480d4fc.png"
        },
        {
            "address": "0x2aECCB42482cc64E087b6D2e5Da39f5A7A7001f8",
            "symbol": "RULER",
            "decimals": 18,
            "name": "Ruler Protocol",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2aeccb42482cc64e087b6d2e5da39f5a7a7001f8.png"
        },
        {
            "address": "0x525eF76138Bf76118d786DbedeaE5F87aaBf4a81",
            "symbol": "NFTI",
            "decimals": 18,
            "name": "Scalara NFT Index",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x525ef76138bf76118d786dbedeae5f87aabf4a81.png"
        },
        {
            "address": "0x960b236A07cf122663c4303350609A66A7B288C0",
            "symbol": "ANTv1",
            "decimals": 18,
            "name": "Aragon Network Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x960b236a07cf122663c4303350609a66a7b288c0.png"
        },
        {
            "address": "0x1BeEF31946fbbb40B877a72E4ae04a8D1A5Cee06",
            "symbol": "PAR",
            "decimals": 18,
            "name": "Parachute",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1beef31946fbbb40b877a72e4ae04a8d1a5cee06.png"
        },
        {
            "address": "0x37fE0f067FA808fFBDd12891C0858532CFE7361d",
            "symbol": "CIV",
            "decimals": 18,
            "name": "Civilization",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x37fe0f067fa808ffbdd12891c0858532cfe7361d.png"
        },
        {
            "address": "0xF1290473E210b2108A85237fbCd7b6eb42Cc654F",
            "symbol": "HEDG",
            "decimals": 18,
            "name": "Hedge Trade",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf1290473e210b2108a85237fbcd7b6eb42cc654f.png"
        },
        {
            "address": "0xdd974D5C2e2928deA5F71b9825b8b646686BD200",
            "symbol": "KNCL",
            "decimals": 18,
            "name": "KyberNetwork Legacy",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdd974d5c2e2928dea5f71b9825b8b646686bd200.png"
        },
        {
            "address": "0xd559f20296FF4895da39b5bd9ADd54b442596a61",
            "symbol": "FTX",
            "decimals": 18,
            "name": "FintruX",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd559f20296ff4895da39b5bd9add54b442596a61.png"
        },
        {
            "address": "0x6e9730EcFfBed43fD876A264C982e254ef05a0DE",
            "symbol": "NORD",
            "decimals": 18,
            "name": "Nord Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6e9730ecffbed43fd876a264c982e254ef05a0de.png"
        },
        {
            "address": "0x299698B4B44BD6d023981A7317798dEe12860834",
            "symbol": "NFP",
            "decimals": 9,
            "name": "New Frontier Presents",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x299698b4b44bd6d023981a7317798dee12860834.png"
        },
        {
            "address": "0xA68Dd8cB83097765263AdAD881Af6eeD479c4a33",
            "symbol": "WTF",
            "decimals": 18,
            "name": "fees.wtf",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa68dd8cb83097765263adad881af6eed479c4a33.png"
        },
        {
            "address": "0x09a3EcAFa817268f77BE1283176B946C4ff2E608",
            "symbol": "MIR",
            "decimals": 18,
            "name": "Wrapped MIR Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x09a3ecafa817268f77be1283176b946c4ff2e608.png"
        },
        {
            "address": "0x72F020f8f3E8fd9382705723Cd26380f8D0c66Bb",
            "symbol": "PLOT",
            "decimals": 18,
            "name": "PLOT",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x72f020f8f3e8fd9382705723cd26380f8d0c66bb.png"
        },
        {
            "address": "0xCa3FE04C7Ee111F0bbb02C328c699226aCf9Fd33",
            "symbol": "SEEN",
            "decimals": 18,
            "name": "seen.haus",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xca3fe04c7ee111f0bbb02c328c699226acf9fd33.png"
        },
        {
            "address": "0x59089279987DD76fC65Bf94Cb40E186b96e03cB3",
            "symbol": "crOGN",
            "decimals": 8,
            "name": "Cream OriginToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x59089279987dd76fc65bf94cb40e186b96e03cb3.png"
        },
        {
            "address": "0x28A06c02287e657ec3F8e151A13C36A1D43814b0",
            "symbol": "BAG",
            "decimals": 18,
            "name": "BAG",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x28a06c02287e657ec3f8e151a13c36a1d43814b0.png"
        },
        {
            "address": "0xF411903cbC70a74d22900a5DE66A2dda66507255",
            "symbol": "VRA",
            "decimals": 18,
            "name": "VERA",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf411903cbc70a74d22900a5de66a2dda66507255.png"
        },
        {
            "address": "0x5BC25f649fc4e26069dDF4cF4010F9f706c23831",
            "symbol": "DUSD",
            "decimals": 18,
            "name": "DefiDollar",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5bc25f649fc4e26069ddf4cf4010f9f706c23831.png"
        },
        {
            "address": "0x90DE74265a416e1393A450752175AED98fe11517",
            "symbol": "UDT",
            "decimals": 18,
            "name": "Unlock Discount Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x90de74265a416e1393a450752175aed98fe11517.png"
        },
        {
            "address": "0x77FbA179C79De5B7653F68b5039Af940AdA60ce0",
            "symbol": "FORTH",
            "decimals": 18,
            "name": "Ampleforth Governance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x77fba179c79de5b7653f68b5039af940ada60ce0.png"
        },
        {
            "address": "0xD7EFB00d12C2c13131FD319336Fdf952525dA2af",
            "symbol": "XPR",
            "decimals": 4,
            "name": "Proton",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd7efb00d12c2c13131fd319336fdf952525da2af.png"
        },
        {
            "address": "0xAcfa209Fb73bF3Dd5bBfb1101B9Bc999C49062a5",
            "symbol": "BCDT",
            "decimals": 18,
            "name": "Blockchain Certified Data Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5.png"
        },
        {
            "address": "0xDea67845A51E24461D5fED8084E69B426AF3D5Db",
            "symbol": "HTRE",
            "decimals": 18,
            "name": "HodlTree",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdea67845a51e24461d5fed8084e69b426af3d5db.png"
        },
        {
            "address": "0x5c147e74D63B1D31AA3Fd78Eb229B65161983B2b",
            "symbol": "WFLOW",
            "decimals": 18,
            "name": "Wrapped Flow",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5c147e74d63b1d31aa3fd78eb229b65161983b2b.png"
        },
        {
            "address": "0x4B1E80cAC91e2216EEb63e29B957eB91Ae9C2Be8",
            "symbol": "JUP",
            "decimals": 18,
            "name": "Jupiter",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4b1e80cac91e2216eeb63e29b957eb91ae9c2be8.png"
        },
        {
            "address": "0x7697B462A7c4Ff5F8b55BDBC2F4076c2aF9cF51A",
            "symbol": "SARCO",
            "decimals": 18,
            "name": "Sarcophagus",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7697b462a7c4ff5f8b55bdbc2f4076c2af9cf51a.png"
        },
        {
            "address": "0xAaAAAA20D9E0e2461697782ef11675f668207961",
            "symbol": "AURORA",
            "decimals": 18,
            "name": "Aurora",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xaaaaaa20d9e0e2461697782ef11675f668207961.png"
        },
        {
            "address": "0x3155BA85D5F96b2d030a4966AF206230e46849cb",
            "symbol": "RUNE",
            "decimals": 18,
            "name": "THORChain ETH.RUNE",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3155ba85d5f96b2d030a4966af206230e46849cb.png"
        },
        {
            "address": "0x69948cC03f478B95283F7dbf1CE764d0fc7EC54C",
            "symbol": "aRENv1",
            "decimals": 18,
            "name": "Aave Interest bearing REN",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x69948cc03f478b95283f7dbf1ce764d0fc7ec54c.png"
        },
        {
            "address": "0xc713e5E149D5D0715DcD1c156a020976e7E56B88",
            "symbol": "aMKR",
            "decimals": 18,
            "name": "Aave interest bearing MKR",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc713e5e149d5d0715dcd1c156a020976e7e56b88.png"
        },
        {
            "address": "0xc719d010B63E5bbF2C0551872CD5316ED26AcD83",
            "symbol": "DIP_Insurance",
            "decimals": 18,
            "name": "Decentralized Insurance Protocol",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc719d010b63e5bbf2c0551872cd5316ed26acd83.png"
        },
        {
            "address": "0xAa4e3edb11AFa93c41db59842b29de64b72E355B",
            "symbol": "MFI",
            "decimals": 18,
            "name": "MarginSwap",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xaa4e3edb11afa93c41db59842b29de64b72e355b.png"
        },
        {
            "address": "0x83e6f1E41cdd28eAcEB20Cb649155049Fac3D5Aa",
            "symbol": "POLS",
            "decimals": 18,
            "name": "PolkastarterToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa.png"
        },
        {
            "address": "0xC4C2614E694cF534D407Ee49F8E44D125E4681c4",
            "symbol": "CHAIN",
            "decimals": 18,
            "name": "Chain Games",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc4c2614e694cf534d407ee49f8e44d125e4681c4.png"
        },
        {
            "address": "0x9469D013805bFfB7D3DEBe5E7839237e535ec483",
            "symbol": "RING",
            "decimals": 18,
            "name": "Darwinia Network Native Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9469d013805bffb7d3debe5e7839237e535ec483.png"
        },
        {
            "address": "0xd9b312D77Bc7BEd9B9CecB56636300bED4Fe5Ce9",
            "symbol": "GAINS",
            "decimals": 18,
            "name": "Gains",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd9b312d77bc7bed9b9cecb56636300bed4fe5ce9.png"
        },
        {
            "address": "0xBD2F0Cd039E0BFcf88901C98c0bFAc5ab27566e3",
            "symbol": "DSD",
            "decimals": 18,
            "name": "Dynamic Set Dollar",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xbd2f0cd039e0bfcf88901c98c0bfac5ab27566e3.png"
        },
        {
            "address": "0x697256CAA3cCaFD62BB6d3Aa1C7C5671786A5fD9",
            "symbol": "crLINK",
            "decimals": 8,
            "name": "Cream ChainLink Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x697256caa3ccafd62bb6d3aa1c7c5671786a5fd9.png"
        },
        {
            "address": "0xB987D48Ed8f2C468D52D6405624EADBa5e76d723",
            "symbol": "STBZ",
            "decimals": 18,
            "name": "Stabilize Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb987d48ed8f2c468d52d6405624eadba5e76d723.png"
        },
        {
            "address": "0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B",
            "symbol": "CVX",
            "decimals": 18,
            "name": "Convex Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b.png"
        },
        {
            "address": "0x6De037ef9aD2725EB40118Bb1702EBb27e4Aeb24",
            "symbol": "RNDR",
            "decimals": 18,
            "name": "Render Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24.png"
        },
        {
            "address": "0x75D12E4F91Df721faFCae4c6cD1d5280381370AC",
            "symbol": "MYOBU",
            "decimals": 9,
            "name": "My\u014dbu",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x75d12e4f91df721fafcae4c6cd1d5280381370ac.png"
        },
        {
            "address": "0x33840024177A7DacA3468912363BeD8b425015c5",
            "symbol": "EBOX",
            "decimals": 18,
            "name": "ethbox Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x33840024177a7daca3468912363bed8b425015c5.png"
        },
        {
            "address": "0x4f5fa8f2d12e5eB780f6082Dd656C565C48E0f24",
            "symbol": "GUM",
            "decimals": 18,
            "name": "GourmetGalaxy",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4f5fa8f2d12e5eb780f6082dd656c565c48e0f24.png"
        },
        {
            "address": "0x90B831fa3Bebf58E9744A14D638E25B4eE06f9Bc",
            "symbol": "MIMO",
            "decimals": 18,
            "name": "MIMO Parallel Governance Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x90b831fa3bebf58e9744a14d638e25b4ee06f9bc.png"
        },
        {
            "address": "0x5d60d8d7eF6d37E16EBABc324de3bE57f135e0BC",
            "symbol": "MYB",
            "decimals": 18,
            "name": "MyBit",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc.png"
        },
        {
            "address": "0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83",
            "symbol": "YFII",
            "decimals": 18,
            "name": "YFII.finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa1d0e215a23d7030842fc67ce582a6afa3ccab83.png"
        },
        {
            "address": "0xb4bebD34f6DaaFd808f73De0d10235a92Fbb6c3D",
            "symbol": "YETI",
            "decimals": 18,
            "name": "Yearn Ecosystem Token Index",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb4bebd34f6daafd808f73de0d10235a92fbb6c3d.png"
        },
        {
            "address": "0x221657776846890989a759BA2973e427DfF5C9bB",
            "symbol": "REPv2",
            "decimals": 18,
            "name": "Reputation V2",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x221657776846890989a759ba2973e427dff5c9bb.png"
        },
        {
            "address": "0x3623387773010d9214B10C551d6e7fc375D31F58",
            "symbol": "crMTA",
            "decimals": 8,
            "name": "Cream Meta",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x3623387773010d9214b10c551d6e7fc375d31f58.png"
        },
        {
            "address": "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
            "symbol": "ENS",
            "decimals": 18,
            "name": "Ethereum Name Service",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc18360217d8f7ab5e7c516566761ea12ce7f9d72.png"
        },
        {
            "address": "0x07baC35846e5eD502aA91AdF6A9e7aA210F2DcbE",
            "symbol": "erowan",
            "decimals": 18,
            "name": "erowan",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x07bac35846e5ed502aa91adf6a9e7aa210f2dcbe.png"
        },
        {
            "address": "0x69fa8e7F6bf1ca1fB0de61e1366f7412b827CC51",
            "symbol": "NRCH",
            "decimals": 9,
            "name": "EnreachDAO",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x69fa8e7f6bf1ca1fb0de61e1366f7412b827cc51.png"
        },
        {
            "address": "0xF94b5C5651c888d928439aB6514B93944eEE6F48",
            "symbol": "YLD_APP",
            "decimals": 18,
            "name": "Yield",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf94b5c5651c888d928439ab6514b93944eee6f48.png"
        },
        {
            "address": "0xA8b919680258d369114910511cc87595aec0be6D",
            "symbol": "LYXe",
            "decimals": 18,
            "name": "LUKSO Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa8b919680258d369114910511cc87595aec0be6d.png"
        },
        {
            "address": "0xED30Dd7E50EdF3581AD970eFC5D9379Ce2614AdB",
            "symbol": "ARCX_OLD",
            "decimals": 18,
            "name": "ARC Governance Token (Old)",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xed30dd7e50edf3581ad970efc5d9379ce2614adb.png"
        },
        {
            "address": "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
            "symbol": "MIM",
            "decimals": 18,
            "name": "Magic Internet Money",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3.png"
        },
        {
            "address": "0x65883978aDA0e707c3b2BE2A6825b1C4BDF76A90",
            "symbol": "crAKRO",
            "decimals": 8,
            "name": "Cream Akropolis",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x65883978ada0e707c3b2be2a6825b1c4bdf76a90.png"
        },
        {
            "address": "0x584bC13c7D411c00c01A62e8019472dE68768430",
            "symbol": "HEGIC",
            "decimals": 18,
            "name": "Hegic",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x584bc13c7d411c00c01a62e8019472de68768430.png"
        },
        {
            "address": "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
            "symbol": "yCurve",
            "decimals": 18,
            "name": "Curve.fi iearn pool token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8.png"
        },
        {
            "address": "0xD06527D5e56A3495252A528C4987003b712860eE",
            "symbol": "crETH",
            "decimals": 8,
            "name": "Cream Ether",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd06527d5e56a3495252a528c4987003b712860ee.png"
        },
        {
            "address": "0xEB58343b36C7528F23CAAe63a150240241310049",
            "symbol": "NBU",
            "decimals": 18,
            "name": "Nimbus",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xeb58343b36c7528f23caae63a150240241310049.png"
        },
        {
            "address": "0xCdF7028ceAB81fA0C6971208e83fa7872994beE5",
            "symbol": "T",
            "decimals": 18,
            "name": "Threshold Network Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xcdf7028ceab81fa0c6971208e83fa7872994bee5.png"
        },
        {
            "address": "0x6c6EE5e31d828De241282B9606C8e98Ea48526E2",
            "symbol": "HOT",
            "decimals": 18,
            "name": "HoloToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6c6ee5e31d828de241282b9606c8e98ea48526e2.png"
        },
        {
            "address": "0x00c83aeCC790e8a4453e5dD3B0B4b3680501a7A7",
            "symbol": "SKL",
            "decimals": 18,
            "name": "SKALE",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7.png"
        },
        {
            "address": "0x2A537Fa9FFaea8C1A41D3C2B68a9cb791529366D",
            "symbol": "crDPI",
            "decimals": 8,
            "name": "Cream DefiPulse Index",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x2a537fa9ffaea8c1a41d3c2b68a9cb791529366d.png"
        },
        {
            "address": "0xaC6Df26a590F08dcC95D5a4705ae8abbc88509Ef",
            "symbol": "aENJ",
            "decimals": 18,
            "name": "Aave interest bearing ENJ",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xac6df26a590f08dcc95d5a4705ae8abbc88509ef.png"
        },
        {
            "address": "0x9B02dD390a603Add5c07f9fd9175b7DABE8D63B7",
            "symbol": "SPI_Shopping",
            "decimals": 18,
            "name": "Shopping.io",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x9b02dd390a603add5c07f9fd9175b7dabe8d63b7.png"
        },
        {
            "address": "0x6c972b70c533E2E045F333Ee28b9fFb8D717bE69",
            "symbol": "FRY",
            "decimals": 18,
            "name": "Foundry Logistics Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6c972b70c533e2e045f333ee28b9ffb8d717be69.png"
        },
        {
            "address": "0xa4Cf2aFD3B165975afFFBf7e487CDd40C894Ab6B",
            "symbol": "SHIBAKEN",
            "decimals": 0,
            "name": "ShibaKen.Finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa4cf2afd3b165975afffbf7e487cdd40c894ab6b.png"
        },
        {
            "address": "0x738865301A9b7Dd80Dc3666dD48cF034ec42bdDa",
            "symbol": "AGRS",
            "decimals": 8,
            "name": "Agoras Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x738865301a9b7dd80dc3666dd48cf034ec42bdda.png"
        },
        {
            "address": "0xcAfE001067cDEF266AfB7Eb5A286dCFD277f3dE5",
            "symbol": "PSP",
            "decimals": 18,
            "name": "ParaSwap",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xcafe001067cdef266afb7eb5a286dcfd277f3de5.png"
        },
        {
            "address": "0x69e8b9528CABDA89fe846C67675B5D73d463a916",
            "symbol": "OPEN",
            "decimals": 18,
            "name": "BBB",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x69e8b9528cabda89fe846c67675b5d73d463a916.png"
        },
        {
            "address": "0xaeF4F02E31CdbF007f8D98da4aE365188A0E9eCC",
            "symbol": "TFT",
            "decimals": 8,
            "name": "The Famous Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xaef4f02e31cdbf007f8d98da4ae365188a0e9ecc.png"
        },
        {
            "address": "0x24A6A37576377F63f194Caa5F518a60f45b42921",
            "symbol": "BANK",
            "decimals": 18,
            "name": "Float Bank",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x24a6a37576377f63f194caa5f518a60f45b42921.png"
        },
        {
            "address": "0x301C755bA0fcA00B1923768Fffb3Df7f4E63aF31",
            "symbol": "GDC",
            "decimals": 18,
            "name": "Global Digital Content",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x301c755ba0fca00b1923768fffb3df7f4e63af31.png"
        },
        {
            "address": "0xA361718326c15715591c299427c62086F69923D9",
            "symbol": "aBUSD",
            "decimals": 18,
            "name": "Aave interest bearing BUSD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa361718326c15715591c299427c62086f69923d9.png"
        },
        {
            "address": "0xe2f2a5C287993345a840Db3B0845fbC70f5935a5",
            "symbol": "mUSD",
            "decimals": 18,
            "name": "mStable USD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe2f2a5c287993345a840db3b0845fbc70f5935a5.png"
        },
        {
            "address": "0x182F4c4C97cd1c24E1Df8FC4c053E5C47bf53Bef",
            "symbol": "TANGO",
            "decimals": 18,
            "name": "keyTango Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x182f4c4c97cd1c24e1df8fc4c053e5c47bf53bef.png"
        },
        {
            "address": "0x7240aC91f01233BaAf8b064248E80feaA5912BA3",
            "symbol": "OCTO",
            "decimals": 18,
            "name": "Octo.fi",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x7240ac91f01233baaf8b064248e80feaa5912ba3.png"
        },
        {
            "address": "0x5a666c7d92E5fA7Edcb6390E4efD6d0CDd69cF37",
            "symbol": "MARSH",
            "decimals": 18,
            "name": "UnmarshalToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5a666c7d92e5fa7edcb6390e4efd6d0cdd69cf37.png"
        },
        {
            "address": "0xA2b4C0Af19cC16a6CfAcCe81F192B024d625817D",
            "symbol": "KISHU",
            "decimals": 9,
            "name": "Kishu Inu",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa2b4c0af19cc16a6cfacce81f192b024d625817d.png"
        },
        {
            "address": "0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30",
            "symbol": "INJ",
            "decimals": 18,
            "name": "Injective Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe28b3b32b6c345a34ff64674606124dd5aceca30.png"
        },
        {
            "address": "0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4",
            "symbol": "ANKR",
            "decimals": 18,
            "name": "Ankr Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x8290333cef9e6d528dd5618fb97a76f268f3edd4.png"
        },
        {
            "address": "0xDEf1CA1fb7FBcDC777520aa7f396b4E015F497aB",
            "symbol": "COW",
            "decimals": 18,
            "name": "CoW Protocol Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xdef1ca1fb7fbcdc777520aa7f396b4e015f497ab.png"
        },
        {
            "address": "0x67B6D479c7bB412C54e03dCA8E1Bc6740ce6b99C",
            "symbol": "KYL",
            "decimals": 18,
            "name": "Kylin Network",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c.png"
        },
        {
            "address": "0x27054b13b1B798B345b591a4d22e6562d47eA75a",
            "symbol": "AST",
            "decimals": 4,
            "name": "AirSwap",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x27054b13b1b798b345b591a4d22e6562d47ea75a.png"
        },
        {
            "address": "0x1c48f86ae57291F7686349F12601910BD8D470bb",
            "symbol": "USDK",
            "decimals": 18,
            "name": "USDK",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1c48f86ae57291f7686349f12601910bd8d470bb.png"
        },
        {
            "address": "0x4DA9b813057D04BAef4e5800E36083717b4a0341",
            "symbol": "aTUSDv1",
            "decimals": 18,
            "name": "Aave Interest bearing TUSD",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4da9b813057d04baef4e5800e36083717b4a0341.png"
        },
        {
            "address": "0x4156D3342D5c385a87D264F90653733592000581",
            "symbol": "SALT",
            "decimals": 8,
            "name": "Salt",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x4156d3342d5c385a87d264f90653733592000581.png"
        },
        {
            "address": "0x66C0DDEd8433c9EA86C8cf91237B14e10b4d70B7",
            "symbol": "Mars",
            "decimals": 18,
            "name": "MarsToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x66c0dded8433c9ea86c8cf91237b14e10b4d70b7.png"
        },
        {
            "address": "0x6B9f031D718dDed0d681c20cB754F97b3BB81b78",
            "symbol": "GEEQ",
            "decimals": 18,
            "name": "Geeq",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x6b9f031d718dded0d681c20cb754f97b3bb81b78.png"
        },
        {
            "address": "0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
            "symbol": "UST",
            "decimals": 18,
            "name": "Wrapped UST Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xa47c8bf37f92abed4a126bda807a7b7498661acd.png"
        },
        {
            "address": "0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5",
            "symbol": "PICKLE",
            "decimals": 18,
            "name": "PickleToken",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x429881672b9ae42b8eba0e26cd9c73711b891ca5.png"
        },
        {
            "address": "0xd4c435F5B09F855C3317c8524Cb1F586E42795fa",
            "symbol": "CND",
            "decimals": 18,
            "name": "Cindicator",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xd4c435f5b09f855c3317c8524cb1f586e42795fa.png"
        },
        {
            "address": "0x26607aC599266b21d13c7aCF7942c7701a8b699c",
            "symbol": "PIPT",
            "decimals": 18,
            "name": "Power Index Pool Token",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x26607ac599266b21d13c7acf7942c7701a8b699c.png"
        },
        {
            "address": "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
            "symbol": "SHIB",
            "decimals": 18,
            "name": "SHIBA INU",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce.png"
        },
        {
            "address": "0xE6C3502997f97F9BDe34CB165fBce191065E068f",
            "symbol": "KBTC",
            "decimals": 18,
            "name": "KBTC",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xe6c3502997f97f9bde34cb165fbce191065e068f.png"
        },
        {
            "address": "0x44fbeBd2F576670a6C33f6Fc0B00aA8c5753b322",
            "symbol": "crUSDC",
            "decimals": 8,
            "name": "Cream USD Coin",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x44fbebd2f576670a6c33f6fc0b00aa8c5753b322.png"
        },
        {
            "address": "0x00000000441378008EA67F4284A57932B1c000a5",
            "symbol": "TGBP",
            "decimals": 18,
            "name": "TrueGBP",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x00000000441378008ea67f4284a57932b1c000a5.png"
        },
        {
            "address": "0xF5238462E7235c7B62811567E63Dd17d12C2EAA0",
            "symbol": "CGT",
            "decimals": 8,
            "name": "CACHE Gold",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xf5238462e7235c7b62811567e63dd17d12c2eaa0.png"
        },
        {
            "address": "0xB4d930279552397bbA2ee473229f89Ec245bc365",
            "symbol": "MAHA",
            "decimals": 18,
            "name": "MahaDAO",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb4d930279552397bba2ee473229f89ec245bc365.png"
        },
        {
            "address": "0xB9d99C33eA2d86EC5eC6b8A4dD816EBBA64404AF",
            "symbol": "K21",
            "decimals": 18,
            "name": "k21.kanon.art",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xb9d99c33ea2d86ec5ec6b8a4dd816ebba64404af.png"
        },
        {
            "address": "0x5Dc02Ea99285E17656b8350722694c35154DB1E8",
            "symbol": "BOND_finance",
            "decimals": 8,
            "name": "bonded.finance",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x5dc02ea99285e17656b8350722694c35154db1e8.png"
        },
        {
            "address": "0xc12d099be31567add4e4e4d0D45691C3F58f5663",
            "symbol": "AUC",
            "decimals": 18,
            "name": "Auctus",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0xc12d099be31567add4e4e4d0d45691c3f58f5663.png"
        },
        {
            "address": "0x1F8A626883d7724DBd59eF51CBD4BF1Cf2016D13",
            "symbol": "STAK",
            "decimals": 18,
            "name": "Jigstack",
            "chain_id": 1,
            "logo": "https://tokens.1inch.io/0x1f8a626883d7724dbd59ef51cbd4bf1cf2016d13.png"
        }
    ],
    "4": [],
    "5": [],
    "10": [
        {
            "address": "0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6",
            "symbol": "LINK",
            "decimals": 18,
            "name": "Chainlink",
            "chain_id": 10,
            "logo": "https://tokens.1inch.io/0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6.png"
        },
        {
            "address": "0x7FB688CCf682d58f86D7e38e03f9D22e7705448B",
            "symbol": "RAI",
            "decimals": 18,
            "name": "Rai Reflex Index",
            "chain_id": 10,
            "logo": "https://tokens.1inch.io/0x7fb688ccf682d58f86d7e38e03f9d22e7705448b.png"
        },
        {
            "address": "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
            "symbol": "WBTC",
            "decimals": 8,
            "name": "Wrapped Bitcoin",
            "chain_id": 10,
            "logo": "https://ethereum-optimism.github.io/logos/WBTC.svg"
        },
        {
            "address": "0xE405de8F52ba7559f9df3C368500B6E6ae6Cee49",
            "symbol": "sETH",
            "decimals": 18,
            "name": "Synth sETH",
            "chain_id": 10,
            "logo": "https://tokens.1inch.io/0xe405de8f52ba7559f9df3c368500b6e6ae6cee49.png"
        },
        {
            "address": "0x4200000000000000000000000000000000000042",
            "symbol": "OP",
            "decimals": 18,
            "name": "Optimism",
            "chain_id": 10,
            "logo": "https://tokens.1inch.io/0x4200000000000000000000000000000000000042.png"
        },
        {
            "address": "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
            "symbol": "LYRA",
            "decimals": 18,
            "name": "Lyra Token",
            "chain_id": 10,
            "logo": "https://tokens.1inch.io/0x50c5725949a6f0c72e6c4a641f24049a917db0cb.png"
        },
        {
            "address": "0x217D47011b23BB961eB6D93cA9945B7501a5BB11",
            "symbol": "THALES",
            "decimals": 18,
            "name": "Optimistic Thales Token",
            "chain_id": 10,
            "logo": "https://tokens.1inch.io/0x217d47011b23bb961eb6d93ca9945b7501a5bb11.png"
        },
        {
            "address": "0x61BAADcF22d2565B0F471b291C475db5555e0b76",
            "symbol": "AELIN",
            "decimals": 18,
            "name": "Aelin Token",
            "chain_id": 10,
            "logo": "https://tokens.1inch.io/0x61baadcf22d2565b0f471b291c475db5555e0b76.png"
        },
        {
            "address": "0xeEeEEb57642040bE42185f49C52F7E9B38f8eeeE",
            "symbol": "ELK",
            "decimals": 18,
            "name": "Elk",
            "chain_id": 10,
            "logo": "https://tokens.1inch.io/0xeeeeeb57642040be42185f49c52f7e9b38f8eeee.png"
        },
        {
            "address": "0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9",
            "symbol": "sUSD",
            "decimals": 18,
            "name": "Synth sUSD",
            "chain_id": 10,
            "logo": "https://tokens.1inch.io/0x57ab1ec28d129707052df4df418d58a2d46d5f51.png"
        },
        {
            "address": "0x9e1028F5F1D5eDE59748FFceE5532509976840E0",
            "symbol": "PERP",
            "decimals": 18,
            "name": "Perpetual",
            "chain_id": 10,
            "logo": "https://tokens.1inch.io/0x9e1028f5f1d5ede59748ffcee5532509976840e0.png"
        },
        {
            "address": "0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4",
            "symbol": "SNX",
            "decimals": 18,
            "name": "Synthetix",
            "chain_id": 10,
            "logo": "https://ethereum-optimism.github.io/logos/SNX.svg"
        },
        {
            "address": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
            "symbol": "DAI",
            "decimals": 18,
            "name": "Dai stable coin",
            "chain_id": 10,
            "logo": "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.svg?v=010"
        },
        {
            "address": "0x3c8B650257cFb5f272f799F5e2b4e65093a11a05",
            "symbol": "VELO",
            "decimals": 18,
            "name": "Velodrome",
            "chain_id": 10,
            "logo": "https://tokens.1inch.io/0x3c8b650257cfb5f272f799f5e2b4e65093a11a05.png"
        },
        {
            "address": "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
            "symbol": "USDC",
            "decimals": 6,
            "name": "USD Coin",
            "chain_id": 10,
            "logo": "https://tokens.1inch.io/0x7f5c764cbc14f9669b88837ca1490cca17c31607.png"
        },
        {
            "address": "0x4200000000000000000000000000000000000006",
            "symbol": "WETH",
            "decimals": 18,
            "name": "Wrapped Ether",
            "chain_id": 10,
            "logo": "https://tokens.1inch.io/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png"
        },
        {
            "address": "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
            "symbol": "USDT",
            "decimals": 6,
            "name": "Tether USD",
            "chain_id": 10,
            "logo": "https://tokens.1inch.io/0x94b008aa00579c1307b0ef2c499ad98a8ce58e58.png"
        },
        {
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
            "symbol": "ETH",
            "decimals": 18,
            "name": "Ethereum",
            "chain_id": 10,
            "logo": "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png"
        },
        {
            "address": "0xF98dCd95217E15E05d8638da4c91125E59590B07",
            "symbol": "KROM",
            "decimals": 18,
            "name": "Kromatika",
            "chain_id": 10,
            "logo": "https://tokens.1inch.io/0xf98dcd95217e15e05d8638da4c91125e59590b07.png"
        }
    ],
    "42": [],
    "56": [
        {
            "address": "0x0F9E4D49f25de22c2202aF916B681FBB3790497B",
            "symbol": "PERL",
            "decimals": 18,
            "name": "Perlin",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x0f9e4d49f25de22c2202af916b681fbb3790497b.png"
        },
        {
            "address": "0x762539b45A1dCcE3D36d080F74d1AED37844b878",
            "symbol": "LINA",
            "decimals": 18,
            "name": "Linear Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x3e9bc21c9b189c09df3ef1b824798658d5011937.png"
        },
        {
            "address": "0x2A1d286ed5edAD78BeFD6E0d8BEb38791e8cD69d",
            "symbol": "CLIMB",
            "decimals": 8,
            "name": "Climb Token Finance",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x2a1d286ed5edad78befd6e0d8beb38791e8cd69d.png"
        },
        {
            "address": "0x0Eb3a705fc54725037CC9e008bDede697f62F335",
            "symbol": "ATOM",
            "decimals": 18,
            "name": "Cosmos Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x0eb3a705fc54725037cc9e008bdede697f62f335.png"
        },
        {
            "address": "0x334b3eCB4DCa3593BCCC3c7EBD1A1C1d1780FBF1",
            "symbol": "vDAI",
            "decimals": 8,
            "name": "Venus DAI",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1.png"
        },
        {
            "address": "0x843D4a358471547f51534e3e51fae91cb4Dc3F28",
            "symbol": "lowb",
            "decimals": 18,
            "name": "loser coin",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x843d4a358471547f51534e3e51fae91cb4dc3f28.png"
        },
        {
            "address": "0xDFcF44e9a6D99717FC04AddD57Fb667286Bb7DC0",
            "symbol": "INCOME",
            "decimals": 18,
            "name": "Income",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xdfcf44e9a6d99717fc04addd57fb667286bb7dc0.png"
        },
        {
            "address": "0x7c1608C004F20c3520f70b924E2BfeF092dA0043",
            "symbol": "CZF",
            "decimals": 18,
            "name": "CZFarm",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x7c1608c004f20c3520f70b924e2bfef092da0043.png"
        },
        {
            "address": "0x444A0E0c139Cac67e8f9be945C6Dfe01A2766ED1",
            "symbol": "GST",
            "decimals": 18,
            "name": "Gemstone Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x444a0e0c139cac67e8f9be945c6dfe01a2766ed1.png"
        },
        {
            "address": "0xE2e7329499E8DDb1f2b04EE4B35a8d7f6881e4ea",
            "symbol": "$ANRX",
            "decimals": 18,
            "name": "pTokens $ANRX",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xe2e7329499e8ddb1f2b04ee4b35a8d7f6881e4ea.png"
        },
        {
            "address": "0xbcf39F0EDDa668C58371E519AF37CA705f2bFcbd",
            "symbol": "pCWS",
            "decimals": 18,
            "name": "PolyCrowns",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xbcf39f0edda668c58371e519af37ca705f2bfcbd.png"
        },
        {
            "address": "0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377",
            "symbol": "MBOX",
            "decimals": 18,
            "name": "Mobox",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377.png"
        },
        {
            "address": "0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830",
            "symbol": "BRY",
            "decimals": 18,
            "name": "Berry Tributes",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xf859bf77cbe8699013d6dbc7c2b926aaf307f830.png"
        },
        {
            "address": "0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0",
            "symbol": "WATCH",
            "decimals": 18,
            "name": "yieldwatch",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0.png"
        },
        {
            "address": "0x3019BF2a2eF8040C242C9a4c5c4BD4C81678b2A1",
            "symbol": "GMT",
            "decimals": 8,
            "name": "Green Metaverse Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1_1.png"
        },
        {
            "address": "0x27Ae27110350B98d564b9A3eeD31bAeBc82d878d",
            "symbol": "CUMMIES",
            "decimals": 18,
            "name": "CumRocket",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x27ae27110350b98d564b9a3eed31baebc82d878d.png"
        },
        {
            "address": "0xa184088a740c695E156F91f5cC086a06bb78b827",
            "symbol": "AUTO",
            "decimals": 18,
            "name": "AUTOv2",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xa184088a740c695e156f91f5cc086a06bb78b827.png"
        },
        {
            "address": "0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f",
            "symbol": "BURGER",
            "decimals": 18,
            "name": "Burger Swap",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xae9269f27437f0fcbc232d39ec814844a51d6b8f.png"
        },
        {
            "address": "0x6F817a0cE8F7640Add3bC0c1C2298635043c2423",
            "symbol": "anyETH",
            "decimals": 18,
            "name": "ANY Ethereum",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x6f817a0ce8f7640add3bc0c1c2298635043c2423.png"
        },
        {
            "address": "0x1F7216fdB338247512Ec99715587bb97BBf96eae",
            "symbol": "bBADGER",
            "decimals": 18,
            "name": "Badger Sett Badger",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x1f7216fdb338247512ec99715587bb97bbf96eae.png"
        },
        {
            "address": "0x475bFaa1848591ae0E6aB69600f48d828f61a80E",
            "symbol": "DOME",
            "decimals": 18,
            "name": "Everdome",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x475bfaa1848591ae0e6ab69600f48d828f61a80e.png"
        },
        {
            "address": "0x57457B5D725D85A70a3625D6a71818304e773618",
            "symbol": "PETN",
            "decimals": 18,
            "name": "Pylon Eco Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x57457b5d725d85a70a3625d6a71818304e773618.png"
        },
        {
            "address": "0xecA88125a5ADbe82614ffC12D0DB554E2e2867C8",
            "symbol": "vUSDC",
            "decimals": 8,
            "name": "Venus USDC",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xeca88125a5adbe82614ffc12d0db554e2e2867c8.png"
        },
        {
            "address": "0xDc0f0a5719c39764b011eDd02811BD228296887C",
            "symbol": "DOS",
            "decimals": 18,
            "name": "DOS Network Token BEP20",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x0a913bead80f321e7ac35285ee10d9d922659cb7.png"
        },
        {
            "address": "0x7D89c67d3c4E72E8c5c64BE201dC225F99d16aCa",
            "symbol": "RVZ",
            "decimals": 9,
            "name": "Revoluzion",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x7d89c67d3c4e72e8c5c64be201dc225f99d16aca.png"
        },
        {
            "address": "0x78650B139471520656b9E7aA7A5e9276814a38e9",
            "symbol": "BTCST",
            "decimals": 17,
            "name": "StandardBTCHashrateToken",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x78650b139471520656b9e7aa7a5e9276814a38e9.png"
        },
        {
            "address": "0xE9C803F48dFFE50180Bd5B01dC04DA939E3445Fc",
            "symbol": "VLX",
            "decimals": 18,
            "name": "Velas",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xe9c803f48dffe50180bd5b01dc04da939e3445fc.png"
        },
        {
            "address": "0xe7c9C6bc87B86f9E5b57072F907EE6460B593924",
            "symbol": "TOWER",
            "decimals": 18,
            "name": "TOWER",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xe7c9c6bc87b86f9e5b57072f907ee6460b593924.png"
        },
        {
            "address": "0x181dE8C57C4F25eBA9Fd27757BBd11Cc66a55d31",
            "symbol": "BELUGA",
            "decimals": 18,
            "name": "BelugaToken",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x181de8c57c4f25eba9fd27757bbd11cc66a55d31.png"
        },
        {
            "address": "0xAD90c05BC51672eEdfeE36E58b3ff1A78bbC146d",
            "symbol": "XSPACE",
            "decimals": 9,
            "name": "XSPACE",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xad90c05bc51672eedfee36e58b3ff1a78bbc146d.png"
        },
        {
            "address": "0x35e869B7456462b81cdB5e6e42434bD27f3F788c",
            "symbol": "MDO",
            "decimals": 18,
            "name": "Midas Dollar",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x35e869b7456462b81cdb5e6e42434bd27f3f788c.png"
        },
        {
            "address": "0x47c1C7B9D7941A7265D123DCfb100D8FB5348213",
            "symbol": "YVS",
            "decimals": 18,
            "name": "YVS.Finance on BSC",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xec681f28f4561c2a9534799aa38e0d36a83cf478.png"
        },
        {
            "address": "0x58730ae0FAA10d73b0cDdb5e7b87C3594f7a20CB",
            "symbol": "ERC20",
            "decimals": 18,
            "name": "ERC20",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x58730ae0faa10d73b0cddb5e7b87c3594f7a20cb.png"
        },
        {
            "address": "0x994517e000aa3F117E7Ad61B0e2336C76B4Fd94a",
            "symbol": "MTDR",
            "decimals": 18,
            "name": "Matador Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x994517e000aa3f117e7ad61b0e2336c76b4fd94a.png"
        },
        {
            "address": "0x4477b28E8b797eBaebd2539bb24290Fdfcc27807",
            "symbol": "$RFG",
            "decimals": 9,
            "name": "Refugees Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x4477b28e8b797ebaebd2539bb24290fdfcc27807.png"
        },
        {
            "address": "0x5eF5994fA33FF4eB6c82d51ee1DC145c546065Bd",
            "symbol": "ALLOY",
            "decimals": 18,
            "name": "HyperAlloy",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x5ef5994fa33ff4eb6c82d51ee1dc145c546065bd.png"
        },
        {
            "address": "0x1Fa4a73a3F0133f0025378af00236f3aBDEE5D63",
            "symbol": "NEAR",
            "decimals": 18,
            "name": "NEAR Protocol",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x1fa4a73a3f0133f0025378af00236f3abdee5d63.png"
        },
        {
            "address": "0x246475dF8703BE0C2bA2f8d0fb7248D95Cc1Ba26",
            "symbol": "PAPR",
            "decimals": 18,
            "name": "PAPR",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x246475df8703be0c2ba2f8d0fb7248d95cc1ba26.png"
        },
        {
            "address": "0x5b17b4d5e4009B5C43e3e3d63A5229F794cBA389",
            "symbol": "ACSI",
            "decimals": 18,
            "name": "ACryptoS(I)",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x5b17b4d5e4009b5c43e3e3d63a5229f794cba389.png"
        },
        {
            "address": "0x92a42Db88Ed0F02c71D439e55962Ca7CAB0168b5",
            "symbol": "TRDG",
            "decimals": 9,
            "name": "Tardigrades.Finance",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x92a42db88ed0f02c71d439e55962ca7cab0168b5.png"
        },
        {
            "address": "0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B",
            "symbol": "BETH",
            "decimals": 18,
            "name": "Binance Beacon ETH",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x250632378e573c6be1ac2f97fcdf00515d0aa91b.png"
        },
        {
            "address": "0xFd7B3A77848f1C2D67E05E54d78d174a0C850335",
            "symbol": "ONT",
            "decimals": 18,
            "name": "Ontology Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xfd7b3a77848f1c2d67e05e54d78d174a0c850335.png"
        },
        {
            "address": "0xf0443834B7b21104b7102Edbe8F9ec06204Cd395",
            "symbol": "TAO",
            "decimals": 9,
            "name": "Friction Finance",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xf0443834b7b21104b7102edbe8f9ec06204cd395.png"
        },
        {
            "address": "0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C",
            "symbol": "PURSE",
            "decimals": 18,
            "name": "PURSE TOKEN",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x29a63f4b209c29b4dc47f06ffa896f32667dad2c.png"
        },
        {
            "address": "0xf7686F43591302Cd9B4b9c4FE1291473Fae7D9C9",
            "symbol": "LSS",
            "decimals": 18,
            "name": "Chainport.io-Peg Lossless Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xf7686f43591302cd9b4b9c4fe1291473fae7d9c9.png"
        },
        {
            "address": "0x86c3E4FfAcdB3AF628ef985a518cd6ee22A22b28",
            "symbol": "OCTA",
            "decimals": 9,
            "name": "Octans",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x86c3e4ffacdb3af628ef985a518cd6ee22a22b28.png"
        },
        {
            "address": "0x57A5297F2cB2c0AaC9D554660acd6D385Ab50c6B",
            "symbol": "vLTC",
            "decimals": 8,
            "name": "Venus LTC",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b.png"
        },
        {
            "address": "0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787",
            "symbol": "ZIL",
            "decimals": 12,
            "name": "Zilliqa",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xb86abcb37c3a4b64f74f59301aff131a1becc787_1.png"
        },
        {
            "address": "0x55d398326f99059fF775485246999027B3197955",
            "symbol": "USDT",
            "decimals": 18,
            "name": "Tether USD",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png"
        },
        {
            "address": "0xbA8A6Ef5f15ED18e7184f44a775060a6bF91d8d0",
            "symbol": "SHAKE",
            "decimals": 18,
            "name": "SHAKE token by SpaceSwap v2",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x6006fc2a849fedaba8330ce36f5133de01f96189.png"
        },
        {
            "address": "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7",
            "symbol": "VAI",
            "decimals": 18,
            "name": "VAI Stablecoin",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x4bd17003473389a42daf6a0a729f6fdb328bbbd7.png"
        },
        {
            "address": "0xEe9801669C6138E84bD50dEB500827b776777d28",
            "symbol": "O3",
            "decimals": 18,
            "name": "O3 Swap Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xee9801669c6138e84bd50deb500827b776777d28.png"
        },
        {
            "address": "0xb93ba7DC61ECFced69067151FC00C41cA369A797",
            "symbol": "WENMOON",
            "decimals": 7,
            "name": "WenMoon Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xb93ba7dc61ecfced69067151fc00c41ca369a797.png"
        },
        {
            "address": "0xCcbf1C9E8b4f2cDF3Bfba1098b8f56f97d219D53",
            "symbol": "ccCLO",
            "decimals": 18,
            "name": "Callisto Network Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xccbf1c9e8b4f2cdf3bfba1098b8f56f97d219d53_2.png"
        },
        {
            "address": "0xA57ac35CE91Ee92CaEfAA8dc04140C8e232c2E50",
            "symbol": "PIT",
            "decimals": 9,
            "name": "Pitbull",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xa57ac35ce91ee92caefaa8dc04140c8e232c2e50.png"
        },
        {
            "address": "0xc9132C76060F6b319764Ea075973a650A1a53bC9",
            "symbol": "DDIM",
            "decimals": 18,
            "name": "DuckDaoDime",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xfbeea1c75e4c4465cb2fccc9c6d6afe984558e20.png"
        },
        {
            "address": "0x81859801b01764D4f0Fa5E64729f5a6C3b91435b",
            "symbol": "BFI",
            "decimals": 18,
            "name": "bearn.fi",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x81859801b01764d4f0fa5e64729f5a6c3b91435b.png"
        },
        {
            "address": "0x3d6545b08693daE087E957cb1180ee38B9e3c25E",
            "symbol": "ETC",
            "decimals": 18,
            "name": "Ethereum Classic",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x3d6545b08693dae087e957cb1180ee38b9e3c25e.png"
        },
        {
            "address": "0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e",
            "symbol": "REEF",
            "decimals": 18,
            "name": "Reef.finance",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xfe3e6a25e6b192a42a44ecddcd13796471735acf.png"
        },
        {
            "address": "0x411Ec510c85C9e56271bF4E10364Ffa909E685D9",
            "symbol": "MOWA",
            "decimals": 18,
            "name": "Moniwar",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x411ec510c85c9e56271bf4e10364ffa909e685d9.png"
        },
        {
            "address": "0x4F47A0d15c1E53F3d94c069C7D16977c29F9CB6B",
            "symbol": "Ramen",
            "decimals": 18,
            "name": "Ramen Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x4f47a0d15c1e53f3d94c069c7d16977c29f9cb6b.png"
        },
        {
            "address": "0x26A5dFab467d4f58fB266648CAe769503CEC9580",
            "symbol": "xMARK",
            "decimals": 9,
            "name": "Standard on xDai on BSC",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x26a5dfab467d4f58fb266648cae769503cec9580.png"
        },
        {
            "address": "0xe20B9e246db5a0d21BF9209E4858Bc9A3ff7A034",
            "symbol": "wBAN",
            "decimals": 18,
            "name": "Wrapped Banano",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xe20b9e246db5a0d21bf9209e4858bc9a3ff7a034.png"
        },
        {
            "address": "0x375483CfA7Fc18F6b455E005D835A8335FbdbB1f",
            "symbol": "ECP",
            "decimals": 9,
            "name": "Eclipse",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x375483cfa7fc18f6b455e005d835a8335fbdbb1f.png"
        },
        {
            "address": "0xF68C9Df95a18B2A5a5fa1124d79EEEffBaD0B6Fa",
            "symbol": "ANY",
            "decimals": 18,
            "name": "Anyswap-BEP20",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xf99d58e463a2e07e5692127302c20a191861b4d6.png"
        },
        {
            "address": "0x0864c156b3C5F69824564dEC60c629aE6401bf2a",
            "symbol": "DATA",
            "decimals": 18,
            "name": "Streamr",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x0864c156b3c5f69824564dec60c629ae6401bf2a.png"
        },
        {
            "address": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
            "symbol": "ETH",
            "decimals": 18,
            "name": "Ethereum Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x2170ed0880ac9a755fd29b2688956bd959f933f8.png"
        },
        {
            "address": "0x6D949f9297A522c0f97C232CC209a67Bd7CfA471",
            "symbol": "MRAT",
            "decimals": 9,
            "name": "Moon Rat Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x6d949f9297a522c0f97c232cc209a67bd7cfa471.png"
        },
        {
            "address": "0x2eD9a5C8C13b93955103B9a7C167B67Ef4d568a3",
            "symbol": "MASK",
            "decimals": 18,
            "name": "Mask Network",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x2ed9a5c8c13b93955103b9a7c167b67ef4d568a3.png"
        },
        {
            "address": "0x5A41F637C3f7553dBa6dDC2D3cA92641096577ea",
            "symbol": "JulD",
            "decimals": 18,
            "name": "JulSwap",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x5a41f637c3f7553dba6ddc2d3ca92641096577ea.png"
        },
        {
            "address": "0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F",
            "symbol": "blink",
            "decimals": 6,
            "name": "BLinkToken",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x63870a18b6e42b01ef1ad8a2302ef50b7132054f.png"
        },
        {
            "address": "0x04F73A09e2eb410205BE256054794fB452f0D245",
            "symbol": "SALE",
            "decimals": 18,
            "name": "DxSale.Network",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x04f73a09e2eb410205be256054794fb452f0d245.png"
        },
        {
            "address": "0x7af173F350D916358AF3e218Bdf2178494Beb748",
            "symbol": "TRADE",
            "decimals": 18,
            "name": "UniTrade",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x7af173f350d916358af3e218bdf2178494beb748.png"
        },
        {
            "address": "0x1dDcaa4Ed761428ae348BEfC6718BCb12e63bFaa",
            "symbol": "deUSDC",
            "decimals": 6,
            "name": "deBridge USD Coin",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa_2.png"
        },
        {
            "address": "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
            "symbol": "DAI",
            "decimals": 18,
            "name": "Dai Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png"
        },
        {
            "address": "0x69083b64988933E8B4783E8302b9bBf90163280E",
            "symbol": "PFY",
            "decimals": 9,
            "name": "Portify",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x69083b64988933e8b4783e8302b9bbf90163280e.png"
        },
        {
            "address": "0xeBC76079Da0c245faE7225b58a57A54809b40618",
            "symbol": "BPAY",
            "decimals": 9,
            "name": "BNBPay",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xebc76079da0c245fae7225b58a57a54809b40618.png"
        },
        {
            "address": "0x547CBE0f0c25085e7015Aa6939b28402EB0CcDAC",
            "symbol": "XBN",
            "decimals": 18,
            "name": "Elastic BNB",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x547cbe0f0c25085e7015aa6939b28402eb0ccdac.png"
        },
        {
            "address": "0xc74cD0042c837Ce59210857504eBb0859E06aA22",
            "symbol": "SAFUYIELD",
            "decimals": 9,
            "name": "SafuYield Protocol",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xc74cd0042c837ce59210857504ebb0859e06aa22.png"
        },
        {
            "address": "0x90C97F71E18723b0Cf0dfa30ee176Ab653E89F40",
            "symbol": "FRAX",
            "decimals": 18,
            "name": "Frax",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x90c97f71e18723b0cf0dfa30ee176ab653e89f40.png"
        },
        {
            "address": "0x1311b352467d2B5c296881BaDEA82850bcd8f886",
            "symbol": "TOOLS",
            "decimals": 18,
            "name": "TOOLS",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x1311b352467d2b5c296881badea82850bcd8f886.png"
        },
        {
            "address": "0x1610bc33319e9398de5f57B33a5b184c806aD217",
            "symbol": "vDOT",
            "decimals": 8,
            "name": "Venus DOT",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x1610bc33319e9398de5f57b33a5b184c806ad217.png"
        },
        {
            "address": "0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C",
            "symbol": "SWTH",
            "decimals": 8,
            "name": "Switcheo Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c.png"
        },
        {
            "address": "0x4DA996C5Fe84755C80e108cf96Fe705174c5e36A",
            "symbol": "WOW",
            "decimals": 18,
            "name": "WOWswap",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x4da996c5fe84755c80e108cf96fe705174c5e36a.png"
        },
        {
            "address": "0x4a68C250486a116DC8D6A0C5B0677dE07cc09C5D",
            "symbol": "POODL",
            "decimals": 9,
            "name": "Poodl",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x56a980328aee33aabb540a02e002c8323326bf36.png"
        },
        {
            "address": "0x95EE03e1e2C5c4877f9A298F1C0D6c98698FAB7B",
            "symbol": "DUET",
            "decimals": 18,
            "name": "Duet Governance Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x95ee03e1e2c5c4877f9a298f1c0d6c98698fab7b.png"
        },
        {
            "address": "0x50D809c74e0B8e49e7B4c65BB3109AbE3Ff4C1C1",
            "symbol": "CUB",
            "decimals": 18,
            "name": "Cub Finance",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x50d809c74e0b8e49e7b4c65bb3109abe3ff4c1c1.png"
        },
        {
            "address": "0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B",
            "symbol": "UNFI",
            "decimals": 18,
            "name": "UNFI",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x728c5bac3c3e370e372fc4671f9ef6916b814d8b.png"
        },
        {
            "address": "0x32dFFc3fE8E3EF3571bF8a72c0d0015C5373f41D",
            "symbol": "JULb",
            "decimals": 18,
            "name": "JULb",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x32dffc3fe8e3ef3571bf8a72c0d0015c5373f41d.png"
        },
        {
            "address": "0xacb2d47827C9813AE26De80965845D80935afd0B",
            "symbol": "MCRN",
            "decimals": 18,
            "name": "MacaronSwap Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xacb2d47827c9813ae26de80965845d80935afd0b.png"
        },
        {
            "address": "0x4B0F1812e5Df2A09796481Ff14017e6005508003",
            "symbol": "TWT",
            "decimals": 18,
            "name": "Trust Wallet",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x4b0f1812e5df2a09796481ff14017e6005508003.png"
        },
        {
            "address": "0x4090e535F2e251F5F88518998B18b54d26B3b07c",
            "symbol": "TYPH",
            "decimals": 18,
            "name": "Typhoon",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x4090e535f2e251f5f88518998b18b54d26b3b07c.png"
        },
        {
            "address": "0x3192CCDdf1CDcE4Ff055EbC80f3F0231b86A7E30",
            "symbol": "INSUR",
            "decimals": 18,
            "name": "Bsc-Peg INSUR Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x3192ccddf1cdce4ff055ebc80f3f0231b86a7e30.png"
        },
        {
            "address": "0x1FFD0b47127fdd4097E54521C9E2c7f0D66AafC5",
            "symbol": "TXL",
            "decimals": 18,
            "name": "Tixl Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5.png"
        },
        {
            "address": "0xD1102332a213E21faF78B69C03572031F3552c33",
            "symbol": "BTD",
            "decimals": 18,
            "name": "Bolt Dollar",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xd1102332a213e21faf78b69c03572031f3552c33.png"
        },
        {
            "address": "0x23396cF899Ca06c4472205fC903bDB4de249D6fC",
            "symbol": "UST",
            "decimals": 18,
            "name": "Wrapped UST Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xa47c8bf37f92abed4a126bda807a7b7498661acd.png"
        },
        {
            "address": "0x531780FAcE85306877D7e1F05d713D1B50a37F7A",
            "symbol": "BSHARE",
            "decimals": 18,
            "name": "BSHARE",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x531780face85306877d7e1f05d713d1b50a37f7a.png"
        },
        {
            "address": "0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A",
            "symbol": "Fuel",
            "decimals": 18,
            "name": "Fuel Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a.png"
        },
        {
            "address": "0x18b426813731C144108c6D7FAf5EdE71a258fD9A",
            "symbol": "OLYMPUS",
            "decimals": 9,
            "name": "OLYMPUS",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x18b426813731c144108c6d7faf5ede71a258fd9a.png"
        },
        {
            "address": "0x3Da932456D082CBa208FEB0B096d49b202Bf89c8",
            "symbol": "DEGOV2",
            "decimals": 18,
            "name": "dego.finance",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x3da932456d082cba208feb0b096d49b202bf89c8.png"
        },
        {
            "address": "0xF750A26EB0aCf95556e8529E72eD530f3b60f348",
            "symbol": "GNT",
            "decimals": 18,
            "name": "GreenTrust",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xf750a26eb0acf95556e8529e72ed530f3b60f348.png"
        },
        {
            "address": "0xeDa21B525Ac789EaB1a08ef2404dd8505FfB973D",
            "symbol": "HPS",
            "decimals": 18,
            "name": "HappinessToken",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xeda21b525ac789eab1a08ef2404dd8505ffb973d.png"
        },
        {
            "address": "0x05B339B0A346bF01f851ddE47a5d485c34FE220c",
            "symbol": "NAUT",
            "decimals": 8,
            "name": "Astronaut",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x05b339b0a346bf01f851dde47a5d485c34fe220c.png"
        },
        {
            "address": "0x6679eB24F59dFe111864AEc72B443d1Da666B360",
            "symbol": "ARV",
            "decimals": 8,
            "name": "ARIVA",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x6679eb24f59dfe111864aec72b443d1da666b360.png"
        },
        {
            "address": "0x9096B4309224d751FCB43d7eB178dcFFc122aD15",
            "symbol": "LGX",
            "decimals": 18,
            "name": "Legion Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x9096b4309224d751fcb43d7eb178dcffc122ad15.png"
        },
        {
            "address": "0x52d86850bc8207b520340B7E39cDaF22561b9E56",
            "symbol": "SWIRL",
            "decimals": 18,
            "name": "Swirl.Cash",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x52d86850bc8207b520340b7e39cdaf22561b9e56.png"
        },
        {
            "address": "0x0e0e877894a101Ad8711AE3A0194Fa44Ca837a79",
            "symbol": "MOONMOON",
            "decimals": 9,
            "name": "MoonMoon",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x0e0e877894a101ad8711ae3a0194fa44ca837a79.png"
        },
        {
            "address": "0xb7F8Cd00C5A06c0537E2aBfF0b58033d02e5E094",
            "symbol": "PAX",
            "decimals": 18,
            "name": "Paxos Standard",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x8e870d67f660d95d5be530380d0ec0bd388289e1.png"
        },
        {
            "address": "0x0d9319565be7f53CeFE84Ad201Be3f40feAE2740",
            "symbol": "sBDO",
            "decimals": 18,
            "name": "bDollar Share",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x0d9319565be7f53cefe84ad201be3f40feae2740.png"
        },
        {
            "address": "0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096",
            "symbol": "NRV",
            "decimals": 18,
            "name": "Nerve",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x42f6f551ae042cbe50c739158b4f0cac0edb9096.png"
        },
        {
            "address": "0x4691937a7508860F876c9c0a2a617E7d9E945D4B",
            "symbol": "WOO",
            "decimals": 18,
            "name": "Wootrade Network",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x4691937a7508860f876c9c0a2a617e7d9e945d4b.png"
        },
        {
            "address": "0x2fF0B946A6782190C4Fe5D4971CFE79F0b6E4df2",
            "symbol": "MYST",
            "decimals": 18,
            "name": "Mysterium",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x2ff0b946a6782190c4fe5d4971cfe79f0b6e4df2.png"
        },
        {
            "address": "0xEE738a9e5FB78c24D26ceCD30389ED977C38D0Ca",
            "symbol": "FSAFE",
            "decimals": 9,
            "name": "Fair Safe",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xee738a9e5fb78c24d26cecd30389ed977c38d0ca.png"
        },
        {
            "address": "0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e",
            "symbol": "YFI",
            "decimals": 18,
            "name": "yearn.finance",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e.png"
        },
        {
            "address": "0x0255af6c9f86F6B0543357baCefA262A2664f80F",
            "symbol": "DARA",
            "decimals": 18,
            "name": "Immutable",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x0255af6c9f86f6b0543357bacefa262a2664f80f.png"
        },
        {
            "address": "0xfb5B838b6cfEEdC2873aB27866079AC55363D37E",
            "symbol": "FLOKI",
            "decimals": 9,
            "name": "FLOKI",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xfb5b838b6cfeedc2873ab27866079ac55363d37e.png"
        },
        {
            "address": "0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf",
            "symbol": "BCH",
            "decimals": 18,
            "name": "Bitcoin Cash Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x8ff795a6f4d97e7887c79bea79aba5cc76444adf.png"
        },
        {
            "address": "0x5857c96DaE9cF8511B08Cb07f85753C472D36Ea3",
            "symbol": "FUSE",
            "decimals": 18,
            "name": "Fuse Token on BSC",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d.png"
        },
        {
            "address": "0x90DF11a8ccE420675e73922419e3f4f3Fe13CCCb",
            "symbol": "STM",
            "decimals": 18,
            "name": "Streamity",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x0e22734e078d6e399bcee40a549db591c4ea46cb.png"
        },
        {
            "address": "0x99c6e435eC259A7E8d65E1955C9423DB624bA54C",
            "symbol": "FMT",
            "decimals": 18,
            "name": "Finminity",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x99c6e435ec259a7e8d65e1955c9423db624ba54c.png"
        },
        {
            "address": "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
            "symbol": "CAKE",
            "decimals": 18,
            "name": "PancakeSwap Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.png"
        },
        {
            "address": "0x14b1166aB53A237c8cEaeE2BBc4BbCa200cb7da8",
            "symbol": "bSRK",
            "decimals": 18,
            "name": "SparkPoint",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x14b1166ab53a237c8ceaee2bbc4bbca200cb7da8.png"
        },
        {
            "address": "0x232FB065D9d24c34708eeDbF03724f2e95ABE768",
            "symbol": "SHEESHA",
            "decimals": 18,
            "name": "Sheesha Finance",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x232fb065d9d24c34708eedbf03724f2e95abe768.png"
        },
        {
            "address": "0x31b9773f225408129a90788EF013Bd449e283865",
            "symbol": "PORN",
            "decimals": 9,
            "name": "Porn",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x31b9773f225408129a90788ef013bd449e283865.png"
        },
        {
            "address": "0xAcABD3f9b8F76fFd2724604185Fa5AFA5dF25aC6",
            "symbol": "MSS",
            "decimals": 18,
            "name": "Monster Slayer Share",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6.png"
        },
        {
            "address": "0xFAd8E46123D7b4e77496491769C167FF894d2ACB",
            "symbol": "FOX",
            "decimals": 9,
            "name": "Fox Finance",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xfad8e46123d7b4e77496491769c167ff894d2acb.png"
        },
        {
            "address": "0x52419258E3fa44DEAc7E670eaDD4c892B480A805",
            "symbol": "STARSHIP",
            "decimals": 9,
            "name": "StarShip",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x52419258e3fa44deac7e670eadd4c892b480a805.png"
        },
        {
            "address": "0xE9db02A654b74ca04734B26ef3B2a79808d43404",
            "symbol": "OKBOOMER",
            "decimals": 9,
            "name": "OKBoomer",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xe9db02a654b74ca04734b26ef3b2a79808d43404.png"
        },
        {
            "address": "0xD7B729ef857Aa773f47D37088A1181bB3fbF0099",
            "symbol": "BOG",
            "decimals": 18,
            "name": "Bogged Finance",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xd7b729ef857aa773f47d37088a1181bb3fbf0099.png"
        },
        {
            "address": "0xA72a0564d0e887123112e6A4DC1abA7611Ad861d",
            "symbol": "FEB",
            "decimals": 0,
            "name": "FEB Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xa72a0564d0e887123112e6a4dc1aba7611ad861d.png"
        },
        {
            "address": "0x4518231a8FDF6ac553B9BBD51Bbb86825B583263",
            "symbol": "MLT",
            "decimals": 18,
            "name": "Media Licensing Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x4518231a8fdf6ac553b9bbd51bbb86825b583263.png"
        },
        {
            "address": "0xe1DB3d1eE5CfE5C6333BE96e6421f9Bd5b85c987",
            "symbol": "SAFESPACE",
            "decimals": 9,
            "name": "SAFESPACE",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xe1db3d1ee5cfe5c6333be96e6421f9bd5b85c987.png"
        },
        {
            "address": "0x6db3972c6a5535708e7A4F7Ad52F24d178D9A93e",
            "symbol": "DRIVENx",
            "decimals": 18,
            "name": "DVX",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x6db3972c6a5535708e7a4f7ad52f24d178d9a93e.png"
        },
        {
            "address": "0x1D1eb8E8293222e1a29d2C0E4cE6C0Acfd89AaaC",
            "symbol": "HAKKA",
            "decimals": 18,
            "name": "Hakka Finance on xDai on BSC",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x1d1eb8e8293222e1a29d2c0e4ce6c0acfd89aaac.png"
        },
        {
            "address": "0x13958e1eb63dFB8540Eaf6ed7DcbBc1A60FD52AF",
            "symbol": "FREN",
            "decimals": 18,
            "name": "Frenchie",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x13958e1eb63dfb8540eaf6ed7dcbbc1a60fd52af.png"
        },
        {
            "address": "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD",
            "symbol": "LINK",
            "decimals": 18,
            "name": "ChainLink Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png"
        },
        {
            "address": "0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51",
            "symbol": "BUNNY",
            "decimals": 18,
            "name": "Bunny Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51.png"
        },
        {
            "address": "0x810EE35443639348aDbbC467b33310d2AB43c168",
            "symbol": "CYC",
            "decimals": 18,
            "name": "Cyclone Protocol",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x810ee35443639348adbbc467b33310d2ab43c168.png"
        },
        {
            "address": "0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2",
            "symbol": "DODO",
            "decimals": 18,
            "name": "DODO bird",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd.png"
        },
        {
            "address": "0x2A9718defF471f3Bb91FA0ECEAB14154F150a385",
            "symbol": "ElonGate",
            "decimals": 9,
            "name": "ElonGate",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x2a9718deff471f3bb91fa0eceab14154f150a385.png"
        },
        {
            "address": "0x182c763a4b2Fbd18C9B5f2D18102a0dDd9D5DF26",
            "symbol": "HOGL",
            "decimals": 18,
            "name": "HOGL Finance",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x182c763a4b2fbd18c9b5f2d18102a0ddd9d5df26.png"
        },
        {
            "address": "0x0000000000004946c0e9F43F4Dee607b0eF1fA1c",
            "symbol": "CHI",
            "decimals": 0,
            "name": "Chi Gastoken by 1inch",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x0000000000004946c0e9f43f4dee607b0ef1fa1c.png"
        },
        {
            "address": "0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b",
            "symbol": "FRONT",
            "decimals": 18,
            "name": "Frontier Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xf8c3527cc04340b208c854e985240c02f7b7793f.png"
        },
        {
            "address": "0x016c8dA9D916905a00eF26a2e7dC2EE67B6020cF",
            "symbol": "PRNTR",
            "decimals": 18,
            "name": "PRNTR",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x016c8da9d916905a00ef26a2e7dc2ee67b6020cf.png"
        },
        {
            "address": "0xAcD7B3D9c10e97d0efA418903C0c7669E702E4C0",
            "symbol": "ELE",
            "decimals": 18,
            "name": "Eleven.finance",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xacd7b3d9c10e97d0efa418903c0c7669e702e4c0.png"
        },
        {
            "address": "0xcfcEcFe2bD2FED07A9145222E8a7ad9Cf1Ccd22A",
            "symbol": "ADS",
            "decimals": 11,
            "name": "Adshares",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xcfcecfe2bd2fed07a9145222e8a7ad9cf1ccd22a.png"
        },
        {
            "address": "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE",
            "symbol": "XRP",
            "decimals": 18,
            "name": "XRP Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe.png"
        },
        {
            "address": "0xA8c2B8eec3d368C0253ad3dae65a5F2BBB89c929",
            "symbol": "CTK",
            "decimals": 6,
            "name": "CertiK Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929.png"
        },
        {
            "address": "0xE7Cb24F449973D5B3520E5b93D88B405903c75Fb",
            "symbol": "BNBTC",
            "decimals": 8,
            "name": "BNbitcoin Token - minable bitcoin on BSC",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xe7cb24f449973d5b3520e5b93d88b405903c75fb.png"
        },
        {
            "address": "0xF606bd19b1E61574ED625d9ea96C841D4E247A32",
            "symbol": "GUARD",
            "decimals": 18,
            "name": "Guardian",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xf606bd19b1e61574ed625d9ea96c841d4e247a32.png"
        },
        {
            "address": "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47",
            "symbol": "ADA",
            "decimals": 18,
            "name": "Cardano Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47.png"
        },
        {
            "address": "0x4131b87F74415190425ccD873048C708F8005823",
            "symbol": "bMXX",
            "decimals": 18,
            "name": "Multiplier",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x4131b87f74415190425ccd873048c708f8005823.png"
        },
        {
            "address": "0x6855f7bb6287F94ddcC8915E37e73a3c9fEe5CF3",
            "symbol": "STACK",
            "decimals": 18,
            "name": "StackOS",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x6855f7bb6287f94ddcc8915e37e73a3c9fee5cf3.png"
        },
        {
            "address": "0x4a080377f83D669D7bB83B3184a8A5E61B500608",
            "symbol": "XEND",
            "decimals": 18,
            "name": "XEND",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x4a080377f83d669d7bb83b3184a8a5e61b500608.png"
        },
        {
            "address": "0x2d871631058827b703535228fb9Ab5F35cf19E76",
            "symbol": "deFRAX",
            "decimals": 18,
            "name": "deBridge Frax",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x2d871631058827b703535228fb9ab5f35cf19e76.png"
        },
        {
            "address": "0x31D0a7AdA4d4c131Eb612DB48861211F63e57610",
            "symbol": "START",
            "decimals": 18,
            "name": "BSCstarter",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x31d0a7ada4d4c131eb612db48861211f63e57610.png"
        },
        {
            "address": "0xc7091AA18598b87588e37501b6Ce865263CD67Ce",
            "symbol": "CCAKE",
            "decimals": 18,
            "name": "CheesecakeSwap Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xc7091aa18598b87588e37501b6ce865263cd67ce.png"
        },
        {
            "address": "0xd17479997F34dd9156Deef8F95A52D81D265be9c",
            "symbol": "USDD",
            "decimals": 18,
            "name": "Decentralized USD",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xd17479997f34dd9156deef8f95a52d81d265be9c.png"
        },
        {
            "address": "0x5cd50Aae14E14B3fdF3fF13c7A40e8cf5ae8b0A5",
            "symbol": "zSEED",
            "decimals": 18,
            "name": "zSeedToken",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x5cd50aae14e14b3fdf3ff13c7a40e8cf5ae8b0a5.png"
        },
        {
            "address": "0x4E7Ae924FD9a5D60b56BE486b2900efE0c6a9CA7",
            "symbol": "LOT",
            "decimals": 9,
            "name": "Lottery Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x4e7ae924fd9a5d60b56be486b2900efe0c6a9ca7.png"
        },
        {
            "address": "0x380624A4a7e69dB1cA07deEcF764025FC224D056",
            "symbol": "SAFEBTC",
            "decimals": 9,
            "name": "SafeBTC",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x380624a4a7e69db1ca07deecf764025fc224d056.png"
        },
        {
            "address": "0xFB981ED9A92377CA4d75D924b9CA06df163924fd",
            "symbol": "SA",
            "decimals": 18,
            "name": "Superalgos",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xfb981ed9a92377ca4d75d924b9ca06df163924fd.png"
        },
        {
            "address": "0xf307910A4c7bbc79691fD374889b36d8531B08e3",
            "symbol": "ANKR",
            "decimals": 18,
            "name": "Ankr",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x8290333cef9e6d528dd5618fb97a76f268f3edd4.png"
        },
        {
            "address": "0xa9c41A46a6B3531d28d5c32F6633dd2fF05dFB90",
            "symbol": "WEX",
            "decimals": 18,
            "name": "WaultSwap",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90.png"
        },
        {
            "address": "0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153",
            "symbol": "FIL",
            "decimals": 18,
            "name": "Filecoin",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153.png"
        },
        {
            "address": "0xCa3F508B8e4Dd382eE878A314789373D80A5190A",
            "symbol": "BIFI",
            "decimals": 18,
            "name": "beefy.finance",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xca3f508b8e4dd382ee878a314789373d80a5190a.png"
        },
        {
            "address": "0x74B3abB94e9e1ECc25Bd77d6872949B4a9B2aACF",
            "symbol": "DFX",
            "decimals": 18,
            "name": "DeFireX on BSC",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x74b3abb94e9e1ecc25bd77d6872949b4a9b2aacf.png"
        },
        {
            "address": "0x9f589e3eabe42ebC94A44727b3f3531C0c877809",
            "symbol": "TKO",
            "decimals": 18,
            "name": "Tokocrypto Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x9f589e3eabe42ebc94a44727b3f3531c0c877809.png"
        },
        {
            "address": "0x039471b9e8a86B977aaeb5eC4182Cf3866f436B0",
            "symbol": "TREE",
            "decimals": 18,
            "name": "OakTree Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x039471b9e8a86b977aaeb5ec4182cf3866f436b0.png"
        },
        {
            "address": "0x1c213179C2c08906fB759878860652a61727Ed14",
            "symbol": "ZD",
            "decimals": 18,
            "name": "ZD",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x1c213179c2c08906fb759878860652a61727ed14.png"
        },
        {
            "address": "0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe",
            "symbol": "EGLD",
            "decimals": 18,
            "name": "Elrond",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe.png"
        },
        {
            "address": "0x3aabCf53A1930A42E18D938C019E83Ebee50a849",
            "symbol": "SPG",
            "decimals": 9,
            "name": "SPONGE",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x3aabcf53a1930a42e18d938c019e83ebee50a849.png"
        },
        {
            "address": "0xd72aA9e1cDDC2F6D6e0444580002170fbA1f8eED",
            "symbol": "MDA",
            "decimals": 18,
            "name": "Moeda Loyalty Points",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xd72aa9e1cddc2f6d6e0444580002170fba1f8eed.png"
        },
        {
            "address": "0x233d91A0713155003fc4DcE0AFa871b508B3B715",
            "symbol": "DITTO",
            "decimals": 9,
            "name": "Ditto",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x233d91a0713155003fc4dce0afa871b508b3b715.png"
        },
        {
            "address": "0x95c78222B3D6e262426483D42CfA53685A67Ab9D",
            "symbol": "vBUSD",
            "decimals": 8,
            "name": "Venus BUSD",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x95c78222b3d6e262426483d42cfa53685a67ab9d.png"
        },
        {
            "address": "0xAEf0a177c8c329CBC8508292Bb7E06c00786BBfC",
            "symbol": "PULI",
            "decimals": 9,
            "name": "PULI INU",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xaef0a177c8c329cbc8508292bb7e06c00786bbfc.png"
        },
        {
            "address": "0x07af67b392B7A202fAD8E0FBc64C34F33102165B",
            "symbol": "AQUAGOAT",
            "decimals": 9,
            "name": "Aquagoat",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x07af67b392b7a202fad8e0fbc64c34f33102165b.png"
        },
        {
            "address": "0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4",
            "symbol": "BHC",
            "decimals": 18,
            "name": "Billion Happiness",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4.png"
        },
        {
            "address": "0x566cedD201F67E542A6851A2959c1a449a041945",
            "symbol": "pOPIUM",
            "decimals": 18,
            "name": "pTokens OPIUM",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x566cedd201f67e542a6851a2959c1a449a041945.png"
        },
        {
            "address": "0xf0E406c49C63AbF358030A299C0E00118C4C6BA5",
            "symbol": "NVT",
            "decimals": 8,
            "name": "NerveNetwork",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xf0e406c49c63abf358030a299c0e00118c4c6ba5.png"
        },
        {
            "address": "0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc",
            "symbol": "Warden",
            "decimals": 18,
            "name": "WardenSwap Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x0feadcc3824e7f3c12f40e324a60c23ca51627fc.png"
        },
        {
            "address": "0x7f479d78380Ad00341fdD7322fE8AEf766e29e5A",
            "symbol": "WHIRL",
            "decimals": 18,
            "name": "Whirl Finance",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x7f479d78380ad00341fdd7322fe8aef766e29e5a.png"
        },
        {
            "address": "0x4EF285c8cbe52267c022c39da98b97ca4b7e2fF9",
            "symbol": "ORE",
            "decimals": 18,
            "name": "pTokens ORE [via ChainPort.io]",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x4ef285c8cbe52267c022c39da98b97ca4b7e2ff9.png"
        },
        {
            "address": "0xECa41281c24451168a37211F0bc2b8645AF45092",
            "symbol": "TPT",
            "decimals": 4,
            "name": "TokenPocket Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xeca41281c24451168a37211f0bc2b8645af45092.png"
        },
        {
            "address": "0x039cB485212f996A9DBb85A9a75d898F94d38dA6",
            "symbol": "DEXE",
            "decimals": 18,
            "name": "DeXe",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x039cb485212f996a9dbb85a9a75d898f94d38da6.png"
        },
        {
            "address": "0x7B0409A3A3f79bAa284035d48E1DFd581d7d7654",
            "symbol": "RUPEE",
            "decimals": 18,
            "name": "Rupee Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x7b0409a3a3f79baa284035d48e1dfd581d7d7654.png"
        },
        {
            "address": "0x857B222Fc79e1cBBf8Ca5f78CB133d1b7CF34BBd",
            "symbol": "LTO",
            "decimals": 18,
            "name": "LTO Network",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x3db6ba6ab6f95efed1a6e794cad492faaabf294d.png"
        },
        {
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
            "symbol": "BNB",
            "decimals": 18,
            "name": "BNB",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c_1.png"
        },
        {
            "address": "0xC1165227519FfD22Fdc77Ceb1037b9b284eeF068",
            "symbol": "BNSD",
            "decimals": 18,
            "name": "bns.finance",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xc1165227519ffd22fdc77ceb1037b9b284eef068.png"
        },
        {
            "address": "0x5A3010d4d8D3B5fB49f8B6E57FB9E48063f16700",
            "symbol": "BSCPAD",
            "decimals": 18,
            "name": "BSCPAD.com",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700.png"
        },
        {
            "address": "0x9000Cac49C3841926Baac5b2E13c87D43e51B6a4",
            "symbol": "POR",
            "decimals": 18,
            "name": "Portuma",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x9000cac49c3841926baac5b2e13c87d43e51b6a4.png"
        },
        {
            "address": "0xfEbe8C1eD424DbF688551D4E2267e7A53698F0aa",
            "symbol": "VINU",
            "decimals": 18,
            "name": "Vita Inu",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xfebe8c1ed424dbf688551d4e2267e7a53698f0aa.png"
        },
        {
            "address": "0xE64F5Cb844946C1F102Bd25bBD87a5aB4aE89Fbe",
            "symbol": "bROOBEE",
            "decimals": 18,
            "name": "ROOBEE",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xa31b1767e09f842ecfd4bc471fe44f830e3891aa.png"
        },
        {
            "address": "0x84e9a6F9D240FdD33801f7135908BfA16866939A",
            "symbol": "GMEE",
            "decimals": 18,
            "name": "GAMEE",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x84e9a6f9d240fdd33801f7135908bfa16866939a.png"
        },
        {
            "address": "0x69b14e8D3CEBfDD8196Bfe530954A0C226E5008E",
            "symbol": "SpacePi",
            "decimals": 9,
            "name": "SpacePi Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x69b14e8d3cebfdd8196bfe530954a0c226e5008e.png"
        },
        {
            "address": "0x5BCcFbd33873A5498F8406146868eDdd5E998962",
            "symbol": "PDO",
            "decimals": 18,
            "name": "pDollar",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x5bccfbd33873a5498f8406146868eddd5e998962.png"
        },
        {
            "address": "0xc2e1acef50aE55661855E8dcB72adB182A3cC259",
            "symbol": "BTS",
            "decimals": 18,
            "name": "Bolt Share",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xc2e1acef50ae55661855e8dcb72adb182a3cc259.png"
        },
        {
            "address": "0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95",
            "symbol": "BANANA",
            "decimals": 18,
            "name": "ApeSwapFinance Banana",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95.png"
        },
        {
            "address": "0xaDD8A06fd58761A5047426e160B2B88AD3B9D464",
            "symbol": "CHS",
            "decimals": 18,
            "name": "cheesemaker.farm",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xadd8a06fd58761a5047426e160b2b88ad3b9d464.png"
        },
        {
            "address": "0x1bA8D3C4c219B124d351F603060663BD1bcd9bbF",
            "symbol": "TORN",
            "decimals": 18,
            "name": "TornadoCash",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x1ba8d3c4c219b124d351f603060663bd1bcd9bbf.png"
        },
        {
            "address": "0x51BA0b044d96C3aBfcA52B64D733603CCC4F0d4D",
            "symbol": "SUPER",
            "decimals": 18,
            "name": "SUPER-ERC20",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x51ba0b044d96c3abfca52b64d733603ccc4f0d4d.png"
        },
        {
            "address": "0x0288D3E353fE2299F11eA2c2e1696b4A648eCC07",
            "symbol": "ZEFI",
            "decimals": 18,
            "name": "ZCore Finance",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x0288d3e353fe2299f11ea2c2e1696b4a648ecc07.png"
        },
        {
            "address": "0x90e767A68a7d707B74D569C8E79f9bBb79b98a8b",
            "symbol": "FAT",
            "decimals": 18,
            "name": "Fatfi Protocol",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x90e767a68a7d707b74d569c8e79f9bbb79b98a8b.png"
        },
        {
            "address": "0xA5F249F401bA8931899a364d8E2699b5FA1D87a9",
            "symbol": "MAIN",
            "decimals": 18,
            "name": "MAIN",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xa5f249f401ba8931899a364d8e2699b5fa1d87a9_1.png"
        },
        {
            "address": "0xBb238FcE6E2eE90781cD160C9C6eAf3a4CfAD801",
            "symbol": "BAGEL",
            "decimals": 18,
            "name": "BAGEL",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xbb238fce6e2ee90781cd160c9c6eaf3a4cfad801.png"
        },
        {
            "address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
            "symbol": "WBNB",
            "decimals": 18,
            "name": "Wrapped BNB",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c_1.png"
        },
        {
            "address": "0x972207A639CC1B374B893cc33Fa251b55CEB7c07",
            "symbol": "vBETH",
            "decimals": 8,
            "name": "Venus BETH",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x972207a639cc1b374b893cc33fa251b55ceb7c07.png"
        },
        {
            "address": "0xf79037F6f6bE66832DE4E7516be52826BC3cBcc4",
            "symbol": "HARD",
            "decimals": 6,
            "name": "HARD",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xf79037f6f6be66832de4e7516be52826bc3cbcc4.png"
        },
        {
            "address": "0x7Cb2f28505E733F60C0db208AfaA321c792F6Cf4",
            "symbol": "OPERAND",
            "decimals": 8,
            "name": "Operand",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x7cb2f28505e733f60c0db208afaa321c792f6cf4.png"
        },
        {
            "address": "0x94F559aE621F1c810F31a6a620Ad7376776fe09E",
            "symbol": "SOUP",
            "decimals": 18,
            "name": "Soup",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x94f559ae621f1c810f31a6a620ad7376776fe09e.png"
        },
        {
            "address": "0x851F7a700c5d67DB59612b871338a85526752c25",
            "symbol": "ARGON",
            "decimals": 18,
            "name": "ArgonToken",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x851f7a700c5d67db59612b871338a85526752c25.png"
        },
        {
            "address": "0xdA20C8a5c3B1AB48e31ba6e43f0F2830E50218D8",
            "symbol": "BINGUS",
            "decimals": 9,
            "name": "Bingus Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xda20c8a5c3b1ab48e31ba6e43f0f2830e50218d8.png"
        },
        {
            "address": "0x8f0FB159380176D324542b3a7933F0C2Fd0c2bbf",
            "symbol": "TFT",
            "decimals": 7,
            "name": "TFT on BSC",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x8f0fb159380176d324542b3a7933f0c2fd0c2bbf.png"
        },
        {
            "address": "0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6",
            "symbol": "EOS",
            "decimals": 18,
            "name": "EOS Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x56b6fb708fc5732dec1afc8d8556423a2edccbd6.png"
        },
        {
            "address": "0x67d012F731c23F0313CEA1186d0121779c77fcFE",
            "symbol": "SOUL",
            "decimals": 8,
            "name": "APOyield SOULS",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x67d012f731c23f0313cea1186d0121779c77fcfe.png"
        },
        {
            "address": "0x57bb0f40479D7Dd0caa67f2A579273A8e9c038Ee",
            "symbol": "RUGBUST",
            "decimals": 18,
            "name": "Rug Busters ",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x57bb0f40479d7dd0caa67f2a579273a8e9c038ee.png"
        },
        {
            "address": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
            "symbol": "USDC",
            "decimals": 18,
            "name": "USD Coin",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png"
        },
        {
            "address": "0x111111111117dC0aa78b770fA6A738034120C302",
            "symbol": "1INCH",
            "decimals": 18,
            "name": "1INCH Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x111111111117dc0aa78b770fa6a738034120c302.png"
        },
        {
            "address": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
            "symbol": "BTCB",
            "decimals": 18,
            "name": "BTCB Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c.png"
        },
        {
            "address": "0x3045d1A840364c3657b8Df6c6F86a4359c23472B",
            "symbol": "ORI",
            "decimals": 18,
            "name": "Orica",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x3045d1a840364c3657b8df6c6f86a4359c23472b_1.png"
        },
        {
            "address": "0x2caCe984Dab08bd192A7fD044276060CB955dD9C",
            "symbol": "ACCEL",
            "decimals": 18,
            "name": "ACCEL",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x2cace984dab08bd192a7fd044276060cb955dd9c.png"
        },
        {
            "address": "0x4e6415a5727ea08aAE4580057187923aeC331227",
            "symbol": "FINE",
            "decimals": 18,
            "name": "Refinable",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x4e6415a5727ea08aae4580057187923aec331227.png"
        },
        {
            "address": "0x882C173bC7Ff3b7786CA16dfeD3DFFfb9Ee7847B",
            "symbol": "vBTC",
            "decimals": 8,
            "name": "Venus BTC",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b.png"
        },
        {
            "address": "0x8C784C49097Dcc637b93232e15810D53871992BF",
            "symbol": "MSC",
            "decimals": 18,
            "name": "Monster Slayer Cash",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x8c784c49097dcc637b93232e15810d53871992bf.png"
        },
        {
            "address": "0x75D107De2217FFe2cD574A1b3297C70C8FAfD159",
            "symbol": "TRY",
            "decimals": 18,
            "name": "TryHards",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x75d107de2217ffe2cd574a1b3297c70c8fafd159.png"
        },
        {
            "address": "0xfe56d5892BDffC7BF58f2E84BE1b2C32D21C308b",
            "symbol": "KNC",
            "decimals": 18,
            "name": "Kyber Network Crystal",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202.png"
        },
        {
            "address": "0xf16e81dce15B08F326220742020379B855B87DF9",
            "symbol": "ICE",
            "decimals": 18,
            "name": "IceToken",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xf16e81dce15b08f326220742020379b855b87df9.png"
        },
        {
            "address": "0x347E430b7Cd1235E216be58ffA13394e5009E6e2",
            "symbol": "GAIA",
            "decimals": 18,
            "name": "GAIA Everworld",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x347e430b7cd1235e216be58ffa13394e5009e6e2.png"
        },
        {
            "address": "0x3C45A24d36Ab6fc1925533C1F57bC7e1b6fbA8a4",
            "symbol": "ROOM",
            "decimals": 18,
            "name": "OptionRoom Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x3c45a24d36ab6fc1925533c1f57bc7e1b6fba8a4.png"
        },
        {
            "address": "0xeBd49b26169e1b52c04cFd19FCf289405dF55F80",
            "symbol": "ORBS",
            "decimals": 18,
            "name": "Orbs",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xebd49b26169e1b52c04cfd19fcf289405df55f80.png"
        },
        {
            "address": "0x477bC8d23c634C154061869478bce96BE6045D12",
            "symbol": "SFUND",
            "decimals": 18,
            "name": "SeedifyFund",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x477bc8d23c634c154061869478bce96be6045d12.png"
        },
        {
            "address": "0xD3b71117E6C1558c1553305b44988cd944e97300",
            "symbol": "YEL",
            "decimals": 18,
            "name": "YEL Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xd3b71117e6c1558c1553305b44988cd944e97300.png"
        },
        {
            "address": "0x7b65B489fE53fCE1F6548Db886C08aD73111DDd8",
            "symbol": "IRON",
            "decimals": 18,
            "name": "IRON Stablecoin",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x7b65b489fe53fce1f6548db886c08ad73111ddd8.png"
        },
        {
            "address": "0x04C747b40Be4D535fC83D09939fb0f626F32800B",
            "symbol": "ITAM",
            "decimals": 18,
            "name": "ITAM",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x04c747b40be4d535fc83d09939fb0f626f32800b.png"
        },
        {
            "address": "0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F",
            "symbol": "ALPACA",
            "decimals": 18,
            "name": "AlpacaToken",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x8f0528ce5ef7b51152a59745befdd91d97091d2f.png"
        },
        {
            "address": "0x7Ee7F14427cC41D6dB17829eb57Dc74A26796b9D",
            "symbol": "MOONRISE",
            "decimals": 9,
            "name": "MoonRise",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x7ee7f14427cc41d6db17829eb57dc74a26796b9d.png"
        },
        {
            "address": "0x8519EA49c997f50cefFa444d240fB655e89248Aa",
            "symbol": "RAMP",
            "decimals": 18,
            "name": "RAMP DEFI",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x8519ea49c997f50ceffa444d240fb655e89248aa.png"
        },
        {
            "address": "0x2FA5dAF6Fe0708fBD63b1A7D1592577284f52256",
            "symbol": "MARSH",
            "decimals": 18,
            "name": "UnmarshalToken",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x5a666c7d92e5fa7edcb6390e4efd6d0cdd69cf37.png"
        },
        {
            "address": "0x9678E42ceBEb63F23197D726B29b1CB20d0064E5",
            "symbol": "IOTX",
            "decimals": 18,
            "name": "IoTeX Network",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x9678e42cebeb63f23197d726b29b1cb20d0064e5.png"
        },
        {
            "address": "0x522348779DCb2911539e76A1042aA922F9C47Ee3",
            "symbol": "BOMB",
            "decimals": 18,
            "name": "bomb.money",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x522348779dcb2911539e76a1042aa922f9c47ee3.png"
        },
        {
            "address": "0x4ef29F3B804C316bA8bA464A765C601Fc092a2e9",
            "symbol": "QA",
            "decimals": 18,
            "name": "Quantum Assets Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x4ef29f3b804c316ba8ba464a765c601fc092a2e9.png"
        },
        {
            "address": "0x67d66e8Ec1Fd25d98B3Ccd3B19B7dc4b4b7fC493",
            "symbol": "FEED",
            "decimals": 18,
            "name": "Feeder.finance",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x67d66e8ec1fd25d98b3ccd3b19b7dc4b4b7fc493.png"
        },
        {
            "address": "0x045c4324039dA91c52C55DF5D785385Aab073DcF",
            "symbol": "bCFX",
            "decimals": 18,
            "name": "BSC Conflux",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x045c4324039da91c52c55df5d785385aab073dcf.png"
        },
        {
            "address": "0x4338665CBB7B2485A8855A139b75D5e34AB0DB94",
            "symbol": "LTC",
            "decimals": 18,
            "name": "Litecoin Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x4338665cbb7b2485a8855a139b75d5e34ab0db94.png"
        },
        {
            "address": "0xA07c5b74C9B40447a954e1466938b865b6BBea36",
            "symbol": "vBNB",
            "decimals": 8,
            "name": "Venus BNB",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xa07c5b74c9b40447a954e1466938b865b6bbea36.png"
        },
        {
            "address": "0x5F0388EBc2B94FA8E123F404b79cCF5f40b29176",
            "symbol": "vBCH",
            "decimals": 8,
            "name": "Venus BCH",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x5f0388ebc2b94fa8e123f404b79ccf5f40b29176.png"
        },
        {
            "address": "0x3C00F8FCc8791fa78DAA4A480095Ec7D475781e2",
            "symbol": "SAFESTAR",
            "decimals": 9,
            "name": "SafeStar",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x3c00f8fcc8791fa78daa4a480095ec7d475781e2.png"
        },
        {
            "address": "0xd2DdFba7bb12f6e70c2AAB6B6bf9EdaEf42ed22F",
            "symbol": "UBU",
            "decimals": 18,
            "name": "UBUToken",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xd2ddfba7bb12f6e70c2aab6b6bf9edaef42ed22f.png"
        },
        {
            "address": "0x94BaBBE728D9411612Ee41b20241a6FA251b26Ce",
            "symbol": "GFCE",
            "decimals": 9,
            "name": "GFORCE",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x94babbe728d9411612ee41b20241a6fa251b26ce.png"
        },
        {
            "address": "0x64D5BaF5ac030e2b7c435aDD967f787ae94D0205",
            "symbol": "GTON",
            "decimals": 18,
            "name": "Graviton",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x01e0e2e61f554ecaaec0cc933e739ad90f24a86d_1.png"
        },
        {
            "address": "0x96Dd399F9c3AFda1F194182F71600F1B65946501",
            "symbol": "COS",
            "decimals": 18,
            "name": "Contentos",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x96dd399f9c3afda1f194182f71600f1b65946501.png"
        },
        {
            "address": "0xb5389A679151C4b8621b1098C6E0961A3CFEe8d4",
            "symbol": "LAUNCH",
            "decimals": 18,
            "name": "Super Launcher",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xb5389a679151c4b8621b1098c6e0961a3cfee8d4.png"
        },
        {
            "address": "0x4A5a34212404f30C5aB7eB61b078fA4A55AdC5a5",
            "symbol": "MILK2",
            "decimals": 18,
            "name": "MilkyWay Token by SpaceSwap v2",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x80c8c3dcfb854f9542567c8dac3f44d709ebc1de.png"
        },
        {
            "address": "0xBf5140A22578168FD562DCcF235E5D43A02ce9B1",
            "symbol": "UNI",
            "decimals": 18,
            "name": "Uniswap",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png"
        },
        {
            "address": "0x5621b5A3f4a8008c4CCDd1b942B121c8B1944F1f",
            "symbol": "XED",
            "decimals": 18,
            "name": "Exeedme",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x5621b5a3f4a8008c4ccdd1b942b121c8b1944f1f.png"
        },
        {
            "address": "0xCA0a9Df6a8cAD800046C1DDc5755810718b65C44",
            "symbol": "TCT",
            "decimals": 18,
            "name": "Token Club",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xca0a9df6a8cad800046c1ddc5755810718b65c44.png"
        },
        {
            "address": "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63",
            "symbol": "XVS",
            "decimals": 18,
            "name": "Venus",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63.png"
        },
        {
            "address": "0x833F307aC507D47309fD8CDD1F835BeF8D702a93",
            "symbol": "REVV",
            "decimals": 18,
            "name": "REVV",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x833f307ac507d47309fd8cdd1f835bef8d702a93.png"
        },
        {
            "address": "0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb",
            "symbol": "SFP",
            "decimals": 18,
            "name": "SafePal Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb.png"
        },
        {
            "address": "0x7e52a123Ed6DB6Ac872A875552935fBbD2544c86",
            "symbol": "SYL",
            "decimals": 6,
            "name": "SYL",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x7e52a123ed6db6ac872a875552935fbbd2544c86.png"
        },
        {
            "address": "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402",
            "symbol": "DOT",
            "decimals": 18,
            "name": "DOT",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x7083609fce4d1d8dc0c979aab8c869ea2c873402.png"
        },
        {
            "address": "0x09a6c44c3947B69E2B45F4D51b67E6a39ACfB506",
            "symbol": "UNCX",
            "decimals": 18,
            "name": "UniCrypt on xDai on BSC",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x09a6c44c3947b69e2b45f4d51b67e6a39acfb506.png"
        },
        {
            "address": "0x00f97C17f4Dc4F3BFD2DD9cE5E67f3A339A8a261",
            "symbol": "SHIELD",
            "decimals": 18,
            "name": "Shield Protocol",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x00f97c17f4dc4f3bfd2dd9ce5e67f3a339a8a261.png"
        },
        {
            "address": "0xa2B726B1145A4773F68593CF171187d8EBe4d495",
            "symbol": "INJ",
            "decimals": 18,
            "name": "Injective Protocol",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xe28b3b32b6c345a34ff64674606124dd5aceca30.png"
        },
        {
            "address": "0xA7f552078dcC247C2684336020c03648500C6d9F",
            "symbol": "EPS",
            "decimals": 18,
            "name": "Ellipsis",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xa7f552078dcc247c2684336020c03648500c6d9f.png"
        },
        {
            "address": "0xC3387E4285e9F80A7cFDf02B4ac6cdF2476A528A",
            "symbol": "ROCK",
            "decimals": 18,
            "name": "Bedrock",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xc3387e4285e9f80a7cfdf02b4ac6cdf2476a528a.png"
        },
        {
            "address": "0x8F49733210700D38098d7375C221c7d02F700cc8",
            "symbol": "PALLA",
            "decimals": 18,
            "name": "Pallapay",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x8f49733210700d38098d7375c221c7d02f700cc8.png"
        },
        {
            "address": "0x4d4e595d643dc61EA7FCbF12e4b1AAA39f9975B8",
            "symbol": "PET",
            "decimals": 18,
            "name": "Pet Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x4d4e595d643dc61ea7fcbf12e4b1aaa39f9975b8.png"
        },
        {
            "address": "0x965b0Df5BDA0E7a0649324D78f03D5F7F2De086a",
            "symbol": "COOK",
            "decimals": 18,
            "name": "Poly-Peg COOK",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x965b0df5bda0e7a0649324d78f03d5f7f2de086a.png"
        },
        {
            "address": "0x2f7b4C618Dc8E0bBA648E54cDADce3D8361f9816",
            "symbol": "NFTL",
            "decimals": 18,
            "name": "NFTL Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x2f7b4c618dc8e0bba648e54cdadce3d8361f9816.png"
        },
        {
            "address": "0x98936Bde1CF1BFf1e7a8012Cee5e2583851f2067",
            "symbol": "ANN",
            "decimals": 18,
            "name": "Annex",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x98936bde1cf1bff1e7a8012cee5e2583851f2067.png"
        },
        {
            "address": "0x97a30C692eCe9C317235d48287d23d358170FC40",
            "symbol": "CRX",
            "decimals": 18,
            "name": "CryptEx Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x97a30c692ece9c317235d48287d23d358170fc40.png"
        },
        {
            "address": "0x1fD991fb6c3102873ba68a4e6e6a87B3a5c10271",
            "symbol": "ATL",
            "decimals": 18,
            "name": "Atlantis",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x1fd991fb6c3102873ba68a4e6e6a87b3a5c10271.png"
        },
        {
            "address": "0x016CF83732f1468150D87dCC5BdF67730B3934D3",
            "symbol": "AIRT",
            "decimals": 18,
            "name": "AirNFT Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x016cf83732f1468150d87dcc5bdf67730b3934d3.png"
        },
        {
            "address": "0xB0F2939A1c0e43683E5954c9Fe142F7df9F8D967",
            "symbol": "GEN",
            "decimals": 18,
            "name": "Gen Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xb0f2939a1c0e43683e5954c9fe142f7df9f8d967.png"
        },
        {
            "address": "0x3A50d6daacc82f17A2434184fE904fC45542A734",
            "symbol": "FUSII",
            "decimals": 18,
            "name": "Fusible | Fusible.io",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x4c924a1fe185c6c6f870bc6bf1762b832208d748.png"
        },
        {
            "address": "0xa1faa113cbE53436Df28FF0aEe54275c13B40975",
            "symbol": "ALPHA",
            "decimals": 18,
            "name": "AlphaToken",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xa1faa113cbe53436df28ff0aee54275c13b40975_1.png"
        },
        {
            "address": "0xebAFFc2d2EA7c66fb848c48124b753F93A0A90ec",
            "symbol": "ASIA",
            "decimals": 18,
            "name": "ASIA COIN",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xebaffc2d2ea7c66fb848c48124b753f93a0a90ec.png"
        },
        {
            "address": "0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f",
            "symbol": "BELT",
            "decimals": 18,
            "name": "BELT Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xe0e514c71282b6f4e823703a39374cf58dc3ea4f.png"
        },
        {
            "address": "0xd632Bd021a07AF70592CE1E18717Ab9aA126DECB",
            "symbol": "bKANGAL",
            "decimals": 18,
            "name": "Kangal",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xd632bd021a07af70592ce1e18717ab9aa126decb.png"
        },
        {
            "address": "0x49277cC5be56b519901E561096bfD416277b4F6d",
            "symbol": "OCT",
            "decimals": 8,
            "name": "Octree Finance",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x49277cc5be56b519901e561096bfd416277b4f6d.png"
        },
        {
            "address": "0x54261774905f3e6E9718f2ABb10ed6555cae308a",
            "symbol": "anyBTC",
            "decimals": 8,
            "name": "ANY Bitcoin",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x54261774905f3e6e9718f2abb10ed6555cae308a.png"
        },
        {
            "address": "0x85c128eE1feEb39A59490c720A9C563554B51D33",
            "symbol": "KEY",
            "decimals": 18,
            "name": "MoMo KEY",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x85c128ee1feeb39a59490c720a9c563554b51d33.png"
        },
        {
            "address": "0xa477a79a118A84A0d371A53c8F46f8CE883EC1dD",
            "symbol": "BBS",
            "decimals": 18,
            "name": "BBS [via ChainPort.io]",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xa477a79a118a84a0d371a53c8f46f8ce883ec1dd.png"
        },
        {
            "address": "0xce5347fdd503f25f8428151A274544A5bD1Bd8cA",
            "symbol": "UNIF",
            "decimals": 9,
            "name": "Unified",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xce5347fdd503f25f8428151a274544a5bd1bd8ca.png"
        },
        {
            "address": "0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5",
            "symbol": "SFM",
            "decimals": 9,
            "name": "SafeMoon",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x42981d0bfbaf196529376ee702f2a9eb9092fcb5.png"
        },
        {
            "address": "0x3Fcca8648651E5b974DD6d3e50F61567779772A8",
            "symbol": "POTS",
            "decimals": 18,
            "name": "Moonpot",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x3fcca8648651e5b974dd6d3e50f61567779772a8.png"
        },
        {
            "address": "0x58d372A8db7696C0C066F25c9eAF2AF6F147B726",
            "symbol": "TSUGA",
            "decimals": 18,
            "name": "Tsukiverse: Galactic Adventures",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x58d372a8db7696c0c066f25c9eaf2af6f147b726.png"
        },
        {
            "address": "0xc10358f062663448a3489fC258139944534592ac",
            "symbol": "BCMC",
            "decimals": 18,
            "name": "Blockchain Monster Coin",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xc10358f062663448a3489fc258139944534592ac.png"
        },
        {
            "address": "0x99e92123eB77Bc8f999316f622e5222498438784",
            "symbol": "GMT_1",
            "decimals": 18,
            "name": "Gambit",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x99e92123eb77bc8f999316f622e5222498438784.png"
        },
        {
            "address": "0xffEecbf8D7267757c2dc3d13D730E97E15BfdF7F",
            "symbol": "BORING",
            "decimals": 18,
            "name": "BoringDAO",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xffeecbf8d7267757c2dc3d13d730e97e15bfdf7f.png"
        },
        {
            "address": "0x5986D5c77c65e5801a5cAa4fAE80089f870A71dA",
            "symbol": "bDIGG",
            "decimals": 18,
            "name": "Badger Sett Digg",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x5986d5c77c65e5801a5caa4fae80089f870a71da.png"
        },
        {
            "address": "0xe5a09784b16E1065C37dF14c6e2f06fDcE317a1b",
            "symbol": "KaiInu",
            "decimals": 9,
            "name": "Kai Inu",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xe5a09784b16e1065c37df14c6e2f06fdce317a1b.png"
        },
        {
            "address": "0xA719b8aB7EA7AF0DDb4358719a34631bb79d15Dc",
            "symbol": "FRM",
            "decimals": 18,
            "name": "Ferrum Network Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xa719b8ab7ea7af0ddb4358719a34631bb79d15dc.png"
        },
        {
            "address": "0x55671114d774ee99D653D6C12460c780a67f1D18",
            "symbol": "PACOCA",
            "decimals": 18,
            "name": "Pacoca",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x55671114d774ee99d653d6c12460c780a67f1d18.png"
        },
        {
            "address": "0x8893D5fA71389673C5c4b9b3cb4EE1ba71207556",
            "symbol": "NUTS",
            "decimals": 18,
            "name": "Squirrel Finance",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x8893d5fa71389673c5c4b9b3cb4ee1ba71207556.png"
        },
        {
            "address": "0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723",
            "symbol": "LIT",
            "decimals": 18,
            "name": "Litentry",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xb59490ab09a0f526cc7305822ac65f2ab12f9723.png"
        },
        {
            "address": "0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6",
            "symbol": "EGG",
            "decimals": 18,
            "name": "Goose Golden Egg",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xf952fc3ca7325cc27d15885d37117676d25bfda6.png"
        },
        {
            "address": "0xd32d01A43c869EdcD1117C640fBDcfCFD97d9d65",
            "symbol": "NMX",
            "decimals": 18,
            "name": "Nominex",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xd32d01a43c869edcd1117c640fbdcfcfd97d9d65.png"
        },
        {
            "address": "0xf508fCD89b8bd15579dc79A6827cB4686A3592c8",
            "symbol": "vETH",
            "decimals": 8,
            "name": "Venus ETH",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xf508fcd89b8bd15579dc79a6827cb4686a3592c8.png"
        },
        {
            "address": "0xaCE3574B8b054E074473a9Bd002e5dC6dd3dfF1B",
            "symbol": "RBX",
            "decimals": 18,
            "name": "RBX",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xace3574b8b054e074473a9bd002e5dc6dd3dff1b.png"
        },
        {
            "address": "0x431e0cD023a32532BF3969CddFc002c00E98429d",
            "symbol": "XCAD",
            "decimals": 18,
            "name": "Chainport.io-Peg XCAD Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x431e0cd023a32532bf3969cddfc002c00e98429d.png"
        },
        {
            "address": "0xc4DaA5a9f2B832eD0f9Bc579662883cD53EA9d61",
            "symbol": "BRICK",
            "decimals": 18,
            "name": "BrickChain",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xc4daa5a9f2b832ed0f9bc579662883cd53ea9d61.png"
        },
        {
            "address": "0x2849b1aE7E04A3D9Bc288673A92477CF63F28aF4",
            "symbol": "SALT",
            "decimals": 18,
            "name": "Salt Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x2849b1ae7e04a3d9bc288673a92477cf63f28af4.png"
        },
        {
            "address": "0x3a5325F0E5Ee4da06a285E988f052D4e45Aa64b4",
            "symbol": "POLAR",
            "decimals": 18,
            "name": "Polaris",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x1c545e9943cfd1b41e60a7917465911fa00fc28c.png"
        },
        {
            "address": "0xC13B7a43223BB9Bf4B69BD68Ab20ca1B79d81C75",
            "symbol": "JGN",
            "decimals": 18,
            "name": "Juggernaut DeFi",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75.png"
        },
        {
            "address": "0x766AFcf83Fd5eaf884B3d529b432CA27A6d84617",
            "symbol": "BLID",
            "decimals": 18,
            "name": "Bolide",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x766afcf83fd5eaf884b3d529b432ca27a6d84617.png"
        },
        {
            "address": "0xe3E1FabEaBD48491bD6902B0c32FDEee8D2Ff12b",
            "symbol": "UNICORN",
            "decimals": 18,
            "name": "UNICORN Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xe3e1fabeabd48491bd6902b0c32fdeee8d2ff12b.png"
        },
        {
            "address": "0x6421531AF54C7B14Ea805719035EBf1e3661c44A",
            "symbol": "bLEO",
            "decimals": 3,
            "name": "BEP20 LEO",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x6421531af54c7b14ea805719035ebf1e3661c44a.png"
        },
        {
            "address": "0xe87e15B9c7d989474Cb6d8c56b3DB4eFAD5b21E8",
            "symbol": "HOKK",
            "decimals": 18,
            "name": "Hokkaido Inu",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xe87e15b9c7d989474cb6d8c56b3db4efad5b21e8.png"
        },
        {
            "address": "0xb7fda7374362F66a50665b991aA7Ee77b2c6abBE",
            "symbol": "TCUB",
            "decimals": 9,
            "name": "TCUB www.tiger-king.org",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xb7fda7374362f66a50665b991aa7ee77b2c6abbe.png"
        },
        {
            "address": "0xB2BD0749DBE21f623d9BABa856D3B0f0e1BFEc9C",
            "symbol": "DUSK",
            "decimals": 18,
            "name": "Dusk Network",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x940a2db1b7008b6c776d4faaca729d6d4a4aa551.png"
        },
        {
            "address": "0x8D3E3A57c5F140B5f9Feb0d43D37A347ee01c851",
            "symbol": "CMERGE",
            "decimals": 9,
            "name": "Coin Merge",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x8d3e3a57c5f140b5f9feb0d43d37a347ee01c851.png"
        },
        {
            "address": "0x1Ba42e5193dfA8B03D15dd1B86a3113bbBEF8Eeb",
            "symbol": "ZEC",
            "decimals": 18,
            "name": "Zcash Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb.png"
        },
        {
            "address": "0xB248a295732e0225acd3337607cc01068e3b9c10",
            "symbol": "vXRP",
            "decimals": 8,
            "name": "Venus XRP",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xb248a295732e0225acd3337607cc01068e3b9c10.png"
        },
        {
            "address": "0x747D74dB20cc422F39ab54EDB2A3Ce21f3C98AF1",
            "symbol": "CGU",
            "decimals": 8,
            "name": "Crypto Gaming United",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x747d74db20cc422f39ab54edb2a3ce21f3c98af1.png"
        },
        {
            "address": "0x658A109C5900BC6d2357c87549B651670E5b0539",
            "symbol": "FOR",
            "decimals": 18,
            "name": "The Force Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x658a109c5900bc6d2357c87549b651670e5b0539.png"
        },
        {
            "address": "0xbcb24AFb019BE7E93EA9C43B7E22Bb55D5B7f45D",
            "symbol": "BSCS",
            "decimals": 18,
            "name": "BSCS Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xbcb24afb019be7e93ea9c43b7e22bb55d5b7f45d.png"
        },
        {
            "address": "0xBbEB90cFb6FAFa1F69AA130B7341089AbeEF5811",
            "symbol": "UBXT",
            "decimals": 18,
            "name": "UpBots",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xbbeb90cfb6fafa1f69aa130b7341089abeef5811.png"
        },
        {
            "address": "0x050787DE0cF5Da03D9387b344334D51cAE5DD0Fd",
            "symbol": "PEKC",
            "decimals": 9,
            "name": "PEACOCKCOIN",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x050787de0cf5da03d9387b344334d51cae5dd0fd.png"
        },
        {
            "address": "0x0231f91e02DebD20345Ae8AB7D71A41f8E140cE7",
            "symbol": "bwJUP",
            "decimals": 18,
            "name": "BSC Wrapped Jupiter",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x0231f91e02debd20345ae8ab7d71a41f8e140ce7.png"
        },
        {
            "address": "0x14c358b573a4cE45364a3DBD84BBb4Dae87af034",
            "symbol": "DND",
            "decimals": 18,
            "name": "DungeonSwap Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x14c358b573a4ce45364a3dbd84bbb4dae87af034.png"
        },
        {
            "address": "0x650b940a1033B8A1b1873f78730FcFC73ec11f1f",
            "symbol": "vLINK",
            "decimals": 8,
            "name": "Venus LINK",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x650b940a1033b8a1b1873f78730fcfc73ec11f1f.png"
        },
        {
            "address": "0x4e8a9D0BF525d78fd9E0c88710099f227F6924cf",
            "symbol": "LUNAR",
            "decimals": 9,
            "name": "LunarHighway",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x4e8a9d0bf525d78fd9e0c88710099f227f6924cf.png"
        },
        {
            "address": "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
            "symbol": "BAKE",
            "decimals": 18,
            "name": "BakeryToken",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xe02df9e3e622debdd69fb838bb799e3f168902c5.png"
        },
        {
            "address": "0x5B6DcF557E2aBE2323c48445E8CC948910d8c2c9",
            "symbol": "MIR",
            "decimals": 18,
            "name": "Wrapped MIR Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x09a3ecafa817268f77be1283176b946c4ff2e608.png"
        },
        {
            "address": "0x81E4d494b85A24a58a6BA45c9B418b32a4E039de",
            "symbol": "MOONTOKEN",
            "decimals": 18,
            "name": "Moon Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x81e4d494b85a24a58a6ba45c9b418b32a4e039de.png"
        },
        {
            "address": "0x6dc3d0D6EC970BF5522611D8eFF127145D02b675",
            "symbol": "RVL",
            "decimals": 18,
            "name": "Revolotto",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x6dc3d0d6ec970bf5522611d8eff127145d02b675.png"
        },
        {
            "address": "0x12e34cDf6A031a10FE241864c32fB03a4FDaD739",
            "symbol": "FREE",
            "decimals": 18,
            "name": "FREE coin BSC",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x12e34cdf6a031a10fe241864c32fb03a4fdad739.png"
        },
        {
            "address": "0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454",
            "symbol": "BDO",
            "decimals": 18,
            "name": "bDollar",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x190b589cf9fb8ddeabbfeae36a813ffb2a702454.png"
        },
        {
            "address": "0x965F527D9159dCe6288a2219DB51fc6Eef120dD1",
            "symbol": "BSW",
            "decimals": 18,
            "name": "Biswap",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x965f527d9159dce6288a2219db51fc6eef120dd1.png"
        },
        {
            "address": "0xf8E026dC4C0860771f691EcFFBbdfe2fa51c77CF",
            "symbol": "BGOV",
            "decimals": 18,
            "name": "BGOV Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xf8e026dc4c0860771f691ecffbbdfe2fa51c77cf.png"
        },
        {
            "address": "0x9806aec346064183b5cE441313231DFf89811f7A",
            "symbol": "yPANDA",
            "decimals": 8,
            "name": "YieldPanda.finance",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x9806aec346064183b5ce441313231dff89811f7a.png"
        },
        {
            "address": "0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8",
            "symbol": "COMP",
            "decimals": 18,
            "name": "Compound Coin",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xc00e94cb662c3520282e6f5717214004a7f26888.png"
        },
        {
            "address": "0x8b303d5BbfBbf46F1a4d9741E491e06986894e18",
            "symbol": "WOOP",
            "decimals": 18,
            "name": "Woonkly Power",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x8b303d5bbfbbf46f1a4d9741e491e06986894e18.png"
        },
        {
            "address": "0xBb46693eBbEa1aC2070E59B4D043b47e2e095f86",
            "symbol": "BFG",
            "decimals": 18,
            "name": "BFG Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xbb46693ebbea1ac2070e59b4d043b47e2e095f86_1.png"
        },
        {
            "address": "0x14016E85a25aeb13065688cAFB43044C2ef86784",
            "symbol": "TUSD",
            "decimals": 18,
            "name": "TrueUSD",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x0000000000085d4780b73119b644ae5ecd22b376.png"
        },
        {
            "address": "0x9Ab70e92319f0b9127df78868Fd3655fB9f1E322",
            "symbol": "WWY",
            "decimals": 18,
            "name": "WeWay Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x9ab70e92319f0b9127df78868fd3655fb9f1e322.png"
        },
        {
            "address": "0xF218184Af829Cf2b0019F8E6F0b2423498a36983",
            "symbol": "MATH",
            "decimals": 18,
            "name": "MATH Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x08d967bb0134f2d07f7cfb6e246680c53927dd30.png"
        },
        {
            "address": "0x9D986A3f147212327Dd658F712d5264a73a1fdB0",
            "symbol": "LAND",
            "decimals": 18,
            "name": "Landshare Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x9d986a3f147212327dd658f712d5264a73a1fdb0.png"
        },
        {
            "address": "0xD98560689C6e748DC37bc410B4d3096B1aA3D8C2",
            "symbol": "DFY",
            "decimals": 18,
            "name": "DeFi For You.",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xd98560689c6e748dc37bc410b4d3096b1aa3d8c2.png"
        },
        {
            "address": "0xa96658cd0D04a8fdCDc30D1156CC65BbFC7591eD",
            "symbol": "SUSHIBA",
            "decimals": 9,
            "name": "Sushiba",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xa96658cd0d04a8fdcdc30d1156cc65bbfc7591ed.png"
        },
        {
            "address": "0x0047A0DEaDAfb7ee6B1A0d219E70Fb6767057D93",
            "symbol": "xYSL",
            "decimals": 18,
            "name": "xYSL token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x0047a0deadafb7ee6b1a0d219e70fb6767057d93.png"
        },
        {
            "address": "0x8597ba143AC509189E89aaB3BA28d661A5dD9830",
            "symbol": "VANCAT",
            "decimals": 0,
            "name": "VANCAT Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x8597ba143ac509189e89aab3ba28d661a5dd9830.png"
        },
        {
            "address": "0x1c3C3941aCB8A9Be35e50F086fAE6a481f7d9DF7",
            "symbol": "SQUID",
            "decimals": 9,
            "name": "SQUID",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x1c3c3941acb8a9be35e50f086fae6a481f7d9df7.png"
        },
        {
            "address": "0x1bA8c21c623C843Cd4c60438d70E7Ad50f363fbb",
            "symbol": "SACT",
            "decimals": 18,
            "name": "srnArtGallery",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x1ba8c21c623c843cd4c60438d70e7ad50f363fbb.png"
        },
        {
            "address": "0x2222227E22102Fe3322098e4CBfE18cFebD57c95",
            "symbol": "TLM",
            "decimals": 4,
            "name": "Alien Worlds Trilium",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x2222227e22102fe3322098e4cbfe18cfebd57c95.png"
        },
        {
            "address": "0xFeea0bDd3D07eb6FE305938878C0caDBFa169042",
            "symbol": "8PAY",
            "decimals": 18,
            "name": "8PAY Network",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xfeea0bdd3d07eb6fe305938878c0cadbfa169042.png"
        },
        {
            "address": "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
            "symbol": "DOGE",
            "decimals": 8,
            "name": "Dogecoin",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xba2ae424d960c26247dd6c32edc70b295c744c43.png"
        },
        {
            "address": "0x86296279C147bd40cBe5b353F83cea9e9cC9b7bB",
            "symbol": "KTY",
            "decimals": 9,
            "name": "Krypto Kitty",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x86296279c147bd40cbe5b353f83cea9e9cc9b7bb.png"
        },
        {
            "address": "0x373E768f79c820aA441540d254dCA6d045c6d25b",
            "symbol": "DERC",
            "decimals": 18,
            "name": "DeRace Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x373e768f79c820aa441540d254dca6d045c6d25b.png"
        },
        {
            "address": "0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587",
            "symbol": "BSCX",
            "decimals": 18,
            "name": "BSCX",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x5ac52ee5b2a633895292ff6d8a89bb9190451587.png"
        },
        {
            "address": "0x151B1e2635A717bcDc836ECd6FbB62B674FE3E1D",
            "symbol": "vXVS",
            "decimals": 8,
            "name": "Venus XVS",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d.png"
        },
        {
            "address": "0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18",
            "symbol": "BAND",
            "decimals": 18,
            "name": "Band Protocol Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xba11d00c5f74255f56a5e366f4f77f5a186d7f55.png"
        },
        {
            "address": "0x8bAc6b4AF65C8c1967a0FBc27cd37FD6059daa00",
            "symbol": "SPH",
            "decimals": 18,
            "name": "Sphynx Network",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x8bac6b4af65c8c1967a0fbc27cd37fd6059daa00.png"
        },
        {
            "address": "0xCe5814eFfF15D53EFd8025B9F2006D4d7D640b9B",
            "symbol": "MOONSTAR",
            "decimals": 9,
            "name": "MoonStar",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xce5814efff15d53efd8025b9f2006d4d7d640b9b.png"
        },
        {
            "address": "0x3910db0600eA925F63C36DdB1351aB6E2c6eb102",
            "symbol": "SPARTA",
            "decimals": 18,
            "name": "Spartan Protocol Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x3910db0600ea925f63c36ddb1351ab6e2c6eb102.png"
        },
        {
            "address": "0xfCe146bF3146100cfe5dB4129cf6C82b0eF4Ad8c",
            "symbol": "renBTC",
            "decimals": 8,
            "name": "renBTC",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xfce146bf3146100cfe5db4129cf6c82b0ef4ad8c.png"
        },
        {
            "address": "0x101d82428437127bF1608F699CD651e6Abf9766E",
            "symbol": "BAT",
            "decimals": 18,
            "name": "Basic Attention Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x0d8775f648430679a709e98d2b0cb6250d2887ef.png"
        },
        {
            "address": "0x72fAa679E1008Ad8382959FF48E392042A8b06f7",
            "symbol": "bALBT",
            "decimals": 18,
            "name": "AllianceBlock Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x72faa679e1008ad8382959ff48e392042a8b06f7.png"
        },
        {
            "address": "0xe56a473043EaAB7947c0a2408cEA623074500EE3",
            "symbol": "SWAP",
            "decimals": 18,
            "name": "SafeSwap Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xe56a473043eaab7947c0a2408cea623074500ee3.png"
        },
        {
            "address": "0x46D502Fac9aEA7c5bC7B13C8Ec9D02378C33D36F",
            "symbol": "WSPP",
            "decimals": 0,
            "name": "WolfSafePoorPeople",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x46d502fac9aea7c5bc7b13c8ec9d02378c33d36f.png"
        },
        {
            "address": "0x7e624FA0E1c4AbFD309cC15719b7E2580887f570",
            "symbol": "POLS",
            "decimals": 18,
            "name": "PolkastarterToken",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x7e624fa0e1c4abfd309cc15719b7e2580887f570.png"
        },
        {
            "address": "0xD0dff49De3E314FDFD3f93c5EEee7D5d2F5515cD",
            "symbol": "ZBTC",
            "decimals": 18,
            "name": "ZBTC",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xd0dff49de3e314fdfd3f93c5eeee7d5d2f5515cd.png"
        },
        {
            "address": "0x9001eE054F1692feF3A48330cB543b6FEc6287eb",
            "symbol": "STEEL",
            "decimals": 18,
            "name": "IRON Share V2",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x9001ee054f1692fef3a48330cb543b6fec6287eb.png"
        },
        {
            "address": "0xAF44400A99a9693bF3c2e89b02652bABACc5cdb9",
            "symbol": "MAFA",
            "decimals": 18,
            "name": "MafaCoin",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xaf44400a99a9693bf3c2e89b02652babacc5cdb9.png"
        },
        {
            "address": "0xa86d305A36cDB815af991834B46aD3d7FbB38523",
            "symbol": "BR34P",
            "decimals": 8,
            "name": "BR34P",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xa86d305a36cdb815af991834b46ad3d7fbb38523.png"
        },
        {
            "address": "0x4f0ed527e8A95ecAA132Af214dFd41F30b361600",
            "symbol": "vBSWAP",
            "decimals": 18,
            "name": "vSWAP.fi",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x4f0ed527e8a95ecaa132af214dfd41f30b361600.png"
        },
        {
            "address": "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
            "symbol": "Helmet",
            "decimals": 18,
            "name": "Helmet.insure Governance Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8.png"
        },
        {
            "address": "0xF78D2e7936F5Fe18308A3B2951A93b6c4a41F5e2",
            "symbol": "OM",
            "decimals": 18,
            "name": "MANTRA DAO",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xf78d2e7936f5fe18308a3b2951a93b6c4a41f5e2.png"
        },
        {
            "address": "0xc5E6689C9c8B02be7C49912Ef19e79cF24977f03",
            "symbol": "ALPA",
            "decimals": 18,
            "name": "AlpaToken",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xc5e6689c9c8b02be7c49912ef19e79cf24977f03.png"
        },
        {
            "address": "0xfD5840Cd36d94D7229439859C0112a4185BC0255",
            "symbol": "vUSDT",
            "decimals": 8,
            "name": "Venus USDT",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xfd5840cd36d94d7229439859c0112a4185bc0255.png"
        },
        {
            "address": "0xF7844CB890F4C339c497aeAb599aBDc3c874B67A",
            "symbol": "NFTART",
            "decimals": 9,
            "name": "NFTArt.Finance",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xf7844cb890f4c339c497aeab599abdc3c874b67a.png"
        },
        {
            "address": "0x3aD9594151886Ce8538C1ff615EFa2385a8C3A88",
            "symbol": "SAFEMARS",
            "decimals": 9,
            "name": "SafeMars",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x3ad9594151886ce8538c1ff615efa2385a8c3a88.png"
        },
        {
            "address": "0xf91d58b5aE142DAcC749f58A49FCBac340Cb0343",
            "symbol": "vFIL",
            "decimals": 8,
            "name": "Venus FIL",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xf91d58b5ae142dacc749f58a49fcbac340cb0343.png"
        },
        {
            "address": "0x211FfbE424b90e25a15531ca322adF1559779E45",
            "symbol": "BUX",
            "decimals": 18,
            "name": "BUX Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x211ffbe424b90e25a15531ca322adf1559779e45.png"
        },
        {
            "address": "0xd4fBc57B6233F268E7FbA3b66E62719D74deecBc",
            "symbol": "MOD",
            "decimals": 18,
            "name": "Modefi",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xd4fbc57b6233f268e7fba3b66e62719d74deecbc.png"
        },
        {
            "address": "0x6b51231c43B1604815313801dB5E9E614914d6e4",
            "symbol": "SAFEGALAXY",
            "decimals": 9,
            "name": "SafeGalaxy",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x6b51231c43b1604815313801db5e9e614914d6e4.png"
        },
        {
            "address": "0x2d69c55baEcefC6ec815239DA0a985747B50Db6E",
            "symbol": "TFF",
            "decimals": 18,
            "name": "Tutti Frutti",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x2d69c55baecefc6ec815239da0a985747b50db6e.png"
        },
        {
            "address": "0x2fF3d0F6990a40261c66E1ff2017aCBc282EB6d0",
            "symbol": "vSXP",
            "decimals": 8,
            "name": "Venus SXP",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0.png"
        },
        {
            "address": "0xFB52FC1f90Dd2B070B9Cf7ad68ac3d68905643fa",
            "symbol": "SEA",
            "decimals": 18,
            "name": "Sea Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xfb52fc1f90dd2b070b9cf7ad68ac3d68905643fa.png"
        },
        {
            "address": "0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0",
            "symbol": "AXS",
            "decimals": 18,
            "name": "Axie Infinity Shard",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x715d400f88c167884bbcc41c5fea407ed4d2f8a0.png"
        },
        {
            "address": "0x8850D2c68c632E3B258e612abAA8FadA7E6958E5",
            "symbol": "PIG",
            "decimals": 9,
            "name": "Pig Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x8850d2c68c632e3b258e612abaa8fada7e6958e5.png"
        },
        {
            "address": "0x4197C6EF3879a08cD51e5560da5064B773aa1d29",
            "symbol": "ACS",
            "decimals": 18,
            "name": "ACryptoS",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x4197c6ef3879a08cd51e5560da5064b773aa1d29.png"
        },
        {
            "address": "0x630d98424eFe0Ea27fB1b3Ab7741907DFFEaAd78",
            "symbol": "PEAK",
            "decimals": 8,
            "name": "PEAKDEFI",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x630d98424efe0ea27fb1b3ab7741907dffeaad78.png"
        },
        {
            "address": "0xc5A49b4CBe004b6FD55B30Ba1dE6AC360FF9765d",
            "symbol": "SWAMP",
            "decimals": 18,
            "name": "Swampy",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xc5a49b4cbe004b6fd55b30ba1de6ac360ff9765d.png"
        },
        {
            "address": "0xd88ca08d8eec1E9E09562213Ae83A7853ebB5d28",
            "symbol": "XWIN",
            "decimals": 18,
            "name": "xWIN Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xd88ca08d8eec1e9e09562213ae83a7853ebb5d28.png"
        },
        {
            "address": "0x16939ef78684453bfDFb47825F8a5F714f12623a",
            "symbol": "XTZ",
            "decimals": 18,
            "name": "Tezos Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x16939ef78684453bfdfb47825f8a5f714f12623a.png"
        },
        {
            "address": "0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A",
            "symbol": "SXP",
            "decimals": 18,
            "name": "Swipe",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9.png"
        },
        {
            "address": "0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2",
            "symbol": "KEBAB",
            "decimals": 18,
            "name": "Kebab Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x7979f6c54eba05e18ded44c4f986f49a5de551c2.png"
        },
        {
            "address": "0x5D0158A5c3ddF47d4Ea4517d8DB0D76aA2e87563",
            "symbol": "BONDLY",
            "decimals": 18,
            "name": "Bondly Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x5d0158a5c3ddf47d4ea4517d8db0d76aa2e87563.png"
        },
        {
            "address": "0xeEeEEb57642040bE42185f49C52F7E9B38f8eeeE",
            "symbol": "ELK",
            "decimals": 18,
            "name": "Elk",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0xeeeeeb57642040be42185f49c52f7e9b38f8eeee.png"
        },
        {
            "address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
            "symbol": "BUSD",
            "decimals": 18,
            "name": "BUSD Token",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x4fabb145d64652a948d72533023f6e7a623c7c53.png"
        },
        {
            "address": "0x74926B3d118a63F6958922d3DC05eB9C6E6E00c6",
            "symbol": "DOGGY",
            "decimals": 18,
            "name": "DOGGY",
            "chain_id": 56,
            "logo": "https://tokens.1inch.io/0x74926b3d118a63f6958922d3dc05eb9c6e6e00c6.png"
        }
    ],
    "100": [
        {
            "address": "0xdd96B45877d0E8361a4DDb732da741e97f3191Ff",
            "symbol": "BUSD",
            "decimals": 18,
            "name": "BUSD Token from BSC",
            "chain_id": 100,
            "logo": "https://tokens.1inch.io/0x4fabb145d64652a948d72533023f6e7a623c7c53.png"
        },
        {
            "address": "0x27B9C2Bd4BaEa18ABdF49169054c1C1c12af9862",
            "symbol": "SNAFU",
            "decimals": 18,
            "name": "SNAFU",
            "chain_id": 100,
            "logo": "https://gateway.ipfs.io/ipfs/QmaEPqRKrJDN8iNKVSFj19rbHzZSyWENdj241oek3EJYn7"
        },
        {
            "address": "0xC45b3C1c24d5F54E7a2cF288ac668c74Dd507a84",
            "symbol": "SYMM",
            "decimals": 18,
            "name": "Symmetric",
            "chain_id": 100,
            "logo": "https://etherscan.io/token/images/symmetricfinance_32.png"
        },
        {
            "address": "0x82dFe19164729949fD66Da1a37BC70dD6c4746ce",
            "symbol": "BAO",
            "decimals": 18,
            "name": "BaoToken on xDai",
            "chain_id": 100,
            "logo": "https://tokens.1inch.io/0x374cb8c27130e2c9e04f44303f3c8351b9de61c1.png"
        },
        {
            "address": "0x63e62989D9EB2d37dfDB1F93A22f063635b07d51",
            "symbol": "MIVA",
            "decimals": 18,
            "name": "Minerva Wallet SuperToken",
            "chain_id": 100,
            "logo": "https://minerva.digital/i/MIVA-Token_200x200.png"
        },
        {
            "address": "0x524B969793a64a602342d89BC2789D43a016B13A",
            "symbol": "DONUT",
            "decimals": 18,
            "name": "Donut on xDai",
            "chain_id": 100,
            "logo": "https://tokens.1inch.io/0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9.png"
        },
        {
            "address": "0x71850b7E9Ee3f13Ab46d67167341E4bDc905Eef9",
            "symbol": "HNY",
            "decimals": 18,
            "name": "Honey",
            "chain_id": 100,
            "logo": "https://raw.githubusercontent.com/1Hive/default-token-list/master/src/assets/xdai/0x71850b7E9Ee3f13Ab46d67167341E4bDc905Eef9/logo.png"
        },
        {
            "address": "0x38Fb649Ad3d6BA1113Be5F57B927053E97fC5bF7",
            "symbol": "xCOMB",
            "decimals": 18,
            "name": "xDai Native Comb",
            "chain_id": 100,
            "logo": "https://raw.githubusercontent.com/1Hive/default-token-list/master/src/assets/xdai/0x38Fb649Ad3d6BA1113Be5F57B927053E97fC5bF7/logo.png"
        },
        {
            "address": "0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb",
            "symbol": "GNO",
            "decimals": 18,
            "name": "Gnosis from Ethereum",
            "chain_id": 100,
            "logo": "https://tokens.1inch.io/0x6810e776880c02933d47db1b9fc05908e5386b96.png"
        },
        {
            "address": "0xE2e73A1c69ecF83F464EFCE6A5be353a37cA09b2",
            "symbol": "LINK",
            "decimals": 18,
            "name": "ChainLink Token from Ethereum",
            "chain_id": 100,
            "logo": "https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png"
        },
        {
            "address": "0xC25AF3123d2420054c8fcd144c21113aa2853F39",
            "symbol": "XGTv2",
            "decimals": 18,
            "name": "Xion Global Token",
            "chain_id": 100,
            "logo": "https://xion.finance/images/xgt_icon.png"
        },
        {
            "address": "0xeEeEEb57642040bE42185f49C52F7E9B38f8eeeE",
            "symbol": "ELK",
            "decimals": 18,
            "name": "Elk",
            "chain_id": 100,
            "logo": "https://tokens.1inch.io/0xeeeeeb57642040be42185f49c52f7e9b38f8eeee.png"
        },
        {
            "address": "0x21a42669643f45Bc0e086b8Fc2ed70c23D67509d",
            "symbol": "FOX",
            "decimals": 18,
            "name": "FOX from Ethereum",
            "chain_id": 100,
            "logo": "https://tokens.1inch.io/0xc770eefad204b5180df6a14ee197d99d808ee52d.png"
        },
        {
            "address": "0xB5d592f85ab2D955c25720EbE6FF8D4d1E1Be300",
            "symbol": "PRTCLE",
            "decimals": 18,
            "name": "Particle",
            "chain_id": 100,
            "logo": "https://raw.githubusercontent.com/ShenaniganDApp/docs/master/static/img/SHELogo.png"
        },
        {
            "address": "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83",
            "symbol": "USDC",
            "decimals": 6,
            "name": "USD//C on xDai",
            "chain_id": 100,
            "logo": "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png"
        },
        {
            "address": "0xaA2C0cf54cB418eB24E7e09053B82C875C68bb88",
            "symbol": "SOON",
            "decimals": 18,
            "name": "RealT SOON Token",
            "chain_id": 100,
            "logo": "https://tokens.1inch.io/0xaa2c0cf54cb418eb24e7e09053b82c875c68bb88.png"
        },
        {
            "address": "0x37b60f4E9A31A64cCc0024dce7D0fD07eAA0F7B3",
            "symbol": "PNK",
            "decimals": 18,
            "name": "Pinakion on xDai",
            "chain_id": 100,
            "logo": "https://tokens.1inch.io/0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d.png"
        },
        {
            "address": "0x57e93BB58268dE818B42E3795c97BAD58aFCD3Fe",
            "symbol": "RAREv2",
            "decimals": 18,
            "name": "Rare Coin v2",
            "chain_id": 100,
            "logo": "https://affinityharmonics.s3.ca-central-1.amazonaws.com/Cloud/rare-logo.png"
        },
        {
            "address": "0x0116e28B43A358162B96f70B4De14C98A4465f25",
            "symbol": "UNCX",
            "decimals": 18,
            "name": "UniCrypt on xDai",
            "chain_id": 100,
            "logo": "https://tokens.1inch.io/0xadb2437e6f65682b85f814fbc12fec0508a7b1d0.png"
        },
        {
            "address": "0x479e32cDFF5F216f93060700C711D1cC8E811a6B",
            "symbol": "TRIPS",
            "decimals": 18,
            "name": "Trips on xDai",
            "chain_id": 100,
            "logo": "https://etherscan.io/token/images/trips_32.png"
        },
        {
            "address": "0x44fA8E6f47987339850636F88629646662444217",
            "symbol": "DAI",
            "decimals": 18,
            "name": "Dai Stablecoin from Ethereum",
            "chain_id": 100,
            "logo": "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png"
        },
        {
            "address": "0x83FF60E2f93F8eDD0637Ef669C69D5Fb4f64cA8E",
            "symbol": "BRIGHT",
            "decimals": 18,
            "name": "Bright from Ethereum",
            "chain_id": 100,
            "logo": "https://raw.githubusercontent.com/1Hive/dao-list/master/assets/BrightDAO/logo.png"
        },
        {
            "address": "0x4ECaBa5870353805a9F068101A40E0f32ed605C6",
            "symbol": "USDT",
            "decimals": 6,
            "name": "Tether on xDai",
            "chain_id": 100,
            "logo": "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png"
        },
        {
            "address": "0x97Edc0e345FbBBd8460847Fcfa3bc2a13bF8641F",
            "symbol": "RICE",
            "decimals": 18,
            "name": "DAOSquare Governance Token from Ethereum",
            "chain_id": 100,
            "logo": "https://daodkp.oss-ap-southeast-1.aliyuncs.com/assets/logo-sm.png"
        },
        {
            "address": "0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1",
            "symbol": "WETH",
            "decimals": 18,
            "name": "Wrapped Ether from Ethereum",
            "chain_id": 100,
            "logo": "https://tokens.1inch.io/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png"
        },
        {
            "address": "0x256eb8a51f382650B2A1e946b8811953640ee47D",
            "symbol": "DATA",
            "decimals": 18,
            "name": "Streamr DATA on xDai",
            "chain_id": 100,
            "logo": "https://tokens.1inch.io/0x8f693ca8d21b157107184d29d398a8d082b38b76.png"
        },
        {
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
            "symbol": "xDAI",
            "decimals": 18,
            "name": "xDAI",
            "chain_id": 100,
            "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
        },
        {
            "address": "0x1e16aa4Df73d29C029d94CeDa3e3114EC191E25A",
            "symbol": "XMOON",
            "decimals": 18,
            "name": "xMOON on xDai",
            "chain_id": 100,
            "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/xdai/assets/0x1e16aa4Df73d29C029d94CeDa3e3114EC191E25A/logo.png"
        },
        {
            "address": "0x8e5bBbb09Ed1ebdE8674Cda39A0c169401db4252",
            "symbol": "WBTC",
            "decimals": 8,
            "name": "Wrapped BTC on xDai",
            "chain_id": 100,
            "logo": "https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png"
        },
        {
            "address": "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d",
            "symbol": "WXDAI",
            "decimals": 18,
            "name": "Wrapped XDAI",
            "chain_id": 100,
            "logo": "https://raw.githubusercontent.com/1Hive/default-token-list/master/src/assets/xdai/0xe91d153e0b41518a2ce8dd3d7944fa863463a97d/logo.png"
        },
        {
            "address": "0xb7D311E2Eb55F2f68a9440da38e7989210b9A05e",
            "symbol": "STAKE",
            "decimals": 18,
            "name": "Stake Token on xDai",
            "chain_id": 100,
            "logo": "https://tokens.1inch.io/0x0ae055097c6d159879521c384f1d2123d1f195e6.png"
        },
        {
            "address": "0x18E9262e68Cc6c6004dB93105cc7c001BB103e49",
            "symbol": "RAID",
            "decimals": 18,
            "name": "Raid Guild Token from Ethereum",
            "chain_id": 100,
            "logo": "https://raw.githubusercontent.com/1Hive/default-token-list/master/src/assets/xdai/0x18e9262e68cc6c6004db93105cc7c001bb103e49/logo.png"
        },
        {
            "address": "0xD3D47d5578e55C880505dC40648F7F9307C3e7A8",
            "symbol": "DPI",
            "decimals": 18,
            "name": "DefiPulse Index from Ethereum",
            "chain_id": 100,
            "logo": "https://tokens.1inch.io/0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b.png"
        },
        {
            "address": "0x4f4F9b8D5B4d0Dc10506e5551B0513B61fD59e75",
            "symbol": "GIV",
            "decimals": 18,
            "name": "Giveth from Mainnet",
            "chain_id": 100,
            "logo": "https://raw.githubusercontent.com/Giveth/giveth-design-assets/master/02-logos/GIV%20Token/GIVToken_200x200.png"
        },
        {
            "address": "0xb0C5f3100A4d9d9532a4CfD68c55F1AE8da987Eb",
            "symbol": "HAUS",
            "decimals": 18,
            "name": "Haus",
            "chain_id": 100,
            "logo": "https://assets.coingecko.com/coins/images/14551/small/jN3kkqke_400x400.png"
        },
        {
            "address": "0x3a97704a1b25F08aa230ae53B352e2e72ef52843",
            "symbol": "AGVE",
            "decimals": 18,
            "name": "Agave",
            "chain_id": 100,
            "logo": "https://raw.githubusercontent.com/1Hive/default-token-list/master/src/assets/xdai/0x3a97704a1b25f08aa230ae53b352e2e72ef52843/logo.png"
        },
        {
            "address": "0x981fB9BA94078a2275A8fc906898ea107B9462A8",
            "symbol": "PAN",
            "decimals": 18,
            "name": "Panvala pan on xDai",
            "chain_id": 100,
            "logo": "https://tokens.1inch.io/0xd56dac73a4d6766464b38ec6d91eb45ce7457c44.png"
        },
        {
            "address": "0xb90D6bec20993Be5d72A5ab353343f7a0281f158",
            "symbol": "DXD",
            "decimals": 18,
            "name": "DXdao from Ethereum",
            "chain_id": 100,
            "logo": "https://tokens.1inch.io/0xa1d65e8fb6e87b60feccbc582f7f97804b725521.png"
        },
        {
            "address": "0x48b1B0d077b4919b65b4E4114806dD803901E1D9",
            "symbol": "DIP",
            "decimals": 18,
            "name": "Decentralized Insurance Protocol on xDai",
            "chain_id": 100,
            "logo": "https://etherscan.io/token/images/etherisc_28.png"
        },
        {
            "address": "0x703120F2f2011a0D03A03a531Ac0e84e81F15989",
            "symbol": "UNCL",
            "decimals": 18,
            "name": "UNCL on xDai",
            "chain_id": 100,
            "logo": "https://etherscan.io/token/images/unicrypt-uncl_32.png"
        },
        {
            "address": "0x988d1Be68F2C5cDE2516a2287c59Bd6302b7D20D",
            "symbol": "PUNK",
            "decimals": 18,
            "name": "Punk from Mainnet",
            "chain_id": 100,
            "logo": "https://xdaipunks.com/punk-200x200.png"
        }
    ],
    "128": [],
    "137": [
        {
            "address": "0x6C0AB120dBd11BA701AFF6748568311668F63FE0",
            "symbol": "APW",
            "decimals": 18,
            "name": "APWine Token (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x4104b135dbc9609fc1a9490e61369036497660c8.png"
        },
        {
            "address": "0xd0258a3fD00f38aa8090dfee343f10A9D4d30D3F",
            "symbol": "VOXEL",
            "decimals": 18,
            "name": "VOXEL Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xd0258a3fd00f38aa8090dfee343f10a9d4d30d3f.png"
        },
        {
            "address": "0xC004e2318722EA2b15499D6375905d75Ee5390B8",
            "symbol": "KOM",
            "decimals": 8,
            "name": "Kommunitas",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xc004e2318722ea2b15499d6375905d75ee5390b8.png"
        },
        {
            "address": "0x49690541E3f6E933A9aa3cFFEe6010a7BB5B72d7",
            "symbol": "AXIA",
            "decimals": 18,
            "name": "Axia (axiaprotocol.io)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x49690541e3f6e933a9aa3cffee6010a7bb5b72d7.png"
        },
        {
            "address": "0xE0339c80fFDE91F3e20494Df88d4206D86024cdF",
            "symbol": "ELON",
            "decimals": 18,
            "name": "Dogelon (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xe0339c80ffde91f3e20494df88d4206d86024cdf.png"
        },
        {
            "address": "0x27F8D03b3a2196956ED754baDc28D73be8830A6e",
            "symbol": "amDAI",
            "decimals": 18,
            "name": "Aave Matic Market DAI",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x028171bca77440897b824ca71d1c56cac55b68a3.png"
        },
        {
            "address": "0xaAa5B9e6c589642f98a1cDA99B9D024B8407285A",
            "symbol": "TITAN",
            "decimals": 18,
            "name": "IRON Titanium Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xaaa5b9e6c589642f98a1cda99b9d024b8407285a.png"
        },
        {
            "address": "0x1C954E8fe737F99f68Fa1CCda3e51ebDB291948C",
            "symbol": "KNC",
            "decimals": 18,
            "name": "Kyber Network Crystal v2",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x1c954e8fe737f99f68fa1ccda3e51ebdb291948c.png"
        },
        {
            "address": "0x4FF0b68ABc2b9E4e1401E9b691DBa7d66B264AC8",
            "symbol": "RIOT",
            "decimals": 18,
            "name": "RIOT (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x4ff0b68abc2b9e4e1401e9b691dba7d66b264ac8.png"
        },
        {
            "address": "0xD125443F38A69d776177c2B9c041f462936F8218",
            "symbol": "FBX",
            "decimals": 18,
            "name": "FireBotToken",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xd125443f38a69d776177c2b9c041f462936f8218.png"
        },
        {
            "address": "0xfe712251173A2cd5F5bE2B46Bb528328EA3565E1",
            "symbol": "MVI",
            "decimals": 18,
            "name": "Metaverse Index (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xfe712251173a2cd5f5be2b46bb528328ea3565e1.png"
        },
        {
            "address": "0x23E8B6A3f6891254988B84Da3738D2bfe5E703b9",
            "symbol": "WELT",
            "decimals": 18,
            "name": "FABWELT",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x23e8b6a3f6891254988b84da3738d2bfe5e703b9.png"
        },
        {
            "address": "0x64ca1571d1476b7a21C5aaf9f1a750A193A103C0",
            "symbol": "BONDLY",
            "decimals": 18,
            "name": "Bondly (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x64ca1571d1476b7a21c5aaf9f1a750a193a103c0.png"
        },
        {
            "address": "0x76e63a3E7Ba1e2E61D3DA86a87479f983dE89a7E",
            "symbol": "OMEN",
            "decimals": 18,
            "name": "Augury Finance",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x76e63a3e7ba1e2e61d3da86a87479f983de89a7e.png"
        },
        {
            "address": "0x4c4BF319237D98a30A929A96112EfFa8DA3510EB",
            "symbol": "WEXpoly",
            "decimals": 18,
            "name": "WaultSwap Polygon",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x4c4bf319237d98a30a929a96112effa8da3510eb.png"
        },
        {
            "address": "0x82a0E6c02b91eC9f6ff943C0A933c03dBaa19689",
            "symbol": "WNT",
            "decimals": 18,
            "name": "Wicrypt Network Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x82a0e6c02b91ec9f6ff943c0a933c03dbaa19689.png"
        },
        {
            "address": "0x5c2ed810328349100A66B82b78a1791B101C9D61",
            "symbol": "amWBTC",
            "decimals": 8,
            "name": "Aave Matic Market WBTC",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x9ff58f4ffb29fa2266ab25e75e2a8b3503311656.png"
        },
        {
            "address": "0x0d0B8488222F7f83B23E365320a4021b12eAD608",
            "symbol": "NXTT",
            "decimals": 18,
            "name": "NextEarthToken",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x0d0b8488222f7f83b23e365320a4021b12ead608.png"
        },
        {
            "address": "0x146e58D34EaB0bFf7e0a63cfe9332908d680c667",
            "symbol": "PDDOLLAR",
            "decimals": 18,
            "name": "pddollar",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x146e58d34eab0bff7e0a63cfe9332908d680c667.png"
        },
        {
            "address": "0x840195888Db4D6A99ED9F73FcD3B225Bb3cB1A79",
            "symbol": "SX",
            "decimals": 18,
            "name": "SportX",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x99fe3b1391503a1bc1788051347a1324bff41452.png"
        },
        {
            "address": "0x8f18dC399594b451EdA8c5da02d0563c0b2d0f16",
            "symbol": "WOLF",
            "decimals": 9,
            "name": "moonwolf.io",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x8f18dc399594b451eda8c5da02d0563c0b2d0f16.png"
        },
        {
            "address": "0xe8377A076adAbb3F9838afB77Bee96Eac101ffB1",
            "symbol": "MSU",
            "decimals": 18,
            "name": "MetaSoccer Universe",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xe8377a076adabb3f9838afb77bee96eac101ffb1.png"
        },
        {
            "address": "0xab0b2ddB9C7e440fAc8E140A89c0dbCBf2d7Bbff",
            "symbol": "iFARM",
            "decimals": 18,
            "name": "iFARM",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xa0246c9032bc3a600820415ae600c6388619a14d.png"
        },
        {
            "address": "0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
            "symbol": "AAVE",
            "decimals": 18,
            "name": "Aave",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.png"
        },
        {
            "address": "0x282d8efCe846A88B159800bd4130ad77443Fa1A1",
            "symbol": "mOCEAN",
            "decimals": 18,
            "name": "Ocean Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x967da4048cd07ab37855c090aaf366e4ce1b9f48.png"
        },
        {
            "address": "0x6968105460f67c3BF751bE7C15f92F5286Fd0CE5",
            "symbol": "MONA",
            "decimals": 18,
            "name": "Monavale",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x275f5ad03be0fa221b4c6649b8aee09a42d9412a.png"
        },
        {
            "address": "0xf0059CC2b3E980065A906940fbce5f9Db7ae40A7",
            "symbol": "ULT",
            "decimals": 18,
            "name": "Shardus (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xf0059cc2b3e980065a906940fbce5f9db7ae40a7.png"
        },
        {
            "address": "0x8839e639F210B80ffea73AedF51baed8DAc04499",
            "symbol": "DWEB",
            "decimals": 18,
            "name": "DecentraWeb (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x8839e639f210b80ffea73aedf51baed8dac04499.png"
        },
        {
            "address": "0x44d09156c7b4ACf0C64459Fbcced7613F5519918",
            "symbol": "$KMC",
            "decimals": 18,
            "name": "$KMC",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x44d09156c7b4acf0c64459fbcced7613f5519918.png"
        },
        {
            "address": "0xf1428850f92B87e629c6f3A3B75BffBC496F7Ba6",
            "symbol": "GEO$",
            "decimals": 18,
            "name": "GEOPOLY",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xf1428850f92b87e629c6f3a3b75bffbc496f7ba6.png"
        },
        {
            "address": "0x65A05DB8322701724c197AF82C9CaE41195B0aA8",
            "symbol": "FOX",
            "decimals": 18,
            "name": "FOX (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x65a05db8322701724c197af82c9cae41195b0aa8.png"
        },
        {
            "address": "0xA486c6BC102f409180cCB8a94ba045D39f8fc7cB",
            "symbol": "NEX",
            "decimals": 8,
            "name": "Nash Exchange Token (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xa486c6bc102f409180ccb8a94ba045d39f8fc7cb.png"
        },
        {
            "address": "0x8d520c8E66091cfD6743fe37Fbe3A09505616C4b",
            "symbol": "COT",
            "decimals": 18,
            "name": "CosplayToken (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x8d520c8e66091cfd6743fe37fbe3a09505616c4b.png"
        },
        {
            "address": "0xf4C83080E80AE530d6f8180572cBbf1Ac9D5d435",
            "symbol": "BLANK",
            "decimals": 18,
            "name": "GoBlank Token (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xf4c83080e80ae530d6f8180572cbbf1ac9d5d435.png"
        },
        {
            "address": "0xd78C475133731CD54daDCb430F7aAE4F03C1E660",
            "symbol": "HOPE",
            "decimals": 18,
            "name": "Firebird.Finance",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xd78c475133731cd54dadcb430f7aae4f03c1e660.png"
        },
        {
            "address": "0xAC63686230f64BDEAF086Fe6764085453ab3023F",
            "symbol": "USV",
            "decimals": 9,
            "name": "Universal Store of Value",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xac63686230f64bdeaf086fe6764085453ab3023f.png"
        },
        {
            "address": "0xef938b6da8576a896f6E0321ef80996F4890f9c4",
            "symbol": "DG",
            "decimals": 18,
            "name": "Decentral Games (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xef938b6da8576a896f6e0321ef80996f4890f9c4.png"
        },
        {
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
            "symbol": "miMATIC",
            "decimals": 18,
            "name": "miMATIC",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xa3fa99a148fa48d14ed51d610c367c61876997f1.png"
        },
        {
            "address": "0x88C949b4eB85a90071f2C0beF861BDDEe1a7479D",
            "symbol": "mSHEESHA",
            "decimals": 18,
            "name": "SHEESHA POLYGON",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x88c949b4eb85a90071f2c0bef861bddee1a7479d.png"
        },
        {
            "address": "0x56A0eFEFC9F1FBb54FBd25629Ac2aA764F1b56F7",
            "symbol": "AWX",
            "decimals": 18,
            "name": "AurusDeFi",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x56a0efefc9f1fbb54fbd25629ac2aa764f1b56f7.png"
        },
        {
            "address": "0xA9536B9c75A9E0faE3B56a96AC8EdF76AbC91978",
            "symbol": "PECO",
            "decimals": 18,
            "name": "Polygon Ecosystem Index",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xa9536b9c75a9e0fae3b56a96ac8edf76abc91978.png"
        },
        {
            "address": "0xC5B57e9a1E7914FDA753A88f24E5703e617Ee50c",
            "symbol": "POP",
            "decimals": 18,
            "name": "Popcorn (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xc5b57e9a1e7914fda753a88f24e5703e617ee50c.png"
        },
        {
            "address": "0xc1c93D475dc82Fe72DBC7074d55f5a734F8cEEAE",
            "symbol": "PGX",
            "decimals": 18,
            "name": "Pegaxy Stone",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xc1c93d475dc82fe72dbc7074d55f5a734f8ceeae.png"
        },
        {
            "address": "0x980111ae1B84E50222C8843e3A7a038F36Fecd2b",
            "symbol": "STACK",
            "decimals": 18,
            "name": "StackOS",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x980111ae1b84e50222c8843e3a7a038f36fecd2b.png"
        },
        {
            "address": "0x2e1AD108fF1D8C782fcBbB89AAd783aC49586756",
            "symbol": "TUSD",
            "decimals": 18,
            "name": "TrueUSD (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x2e1ad108ff1d8c782fcbbb89aad783ac49586756.png"
        },
        {
            "address": "0xD3b71117E6C1558c1553305b44988cd944e97300",
            "symbol": "YEL",
            "decimals": 18,
            "name": "YEL Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xd3b71117e6c1558c1553305b44988cd944e97300.png"
        },
        {
            "address": "0x5fe2B58c013d7601147DcdD68C143A77499f5531",
            "symbol": "GRT",
            "decimals": 18,
            "name": "Graph Token (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x5fe2b58c013d7601147dcdd68c143a77499f5531.png"
        },
        {
            "address": "0xAa7DbD1598251f856C12f63557A4C4397c253Cea",
            "symbol": "MCO2",
            "decimals": 18,
            "name": "Moss Carbon Credit (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xaa7dbd1598251f856c12f63557a4c4397c253cea.png"
        },
        {
            "address": "0x34d4ab47Bee066F361fA52d792e69AC7bD05ee23",
            "symbol": "AURUM",
            "decimals": 18,
            "name": "RaiderAurum",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x34d4ab47bee066f361fa52d792e69ac7bd05ee23.png"
        },
        {
            "address": "0x24834BBEc7E39ef42f4a75EAF8E5B6486d3F0e57",
            "symbol": "LUNA",
            "decimals": 18,
            "name": "Wrapped LUNA Token (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x24834bbec7e39ef42f4a75eaf8e5b6486d3f0e57.png"
        },
        {
            "address": "0x1BA17C639BdaeCd8DC4AAc37df062d17ee43a1b8",
            "symbol": "WIXS",
            "decimals": 18,
            "name": "Wrapped Ixs Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x1ba17c639bdaecd8dc4aac37df062d17ee43a1b8.png"
        },
        {
            "address": "0x8f9E8e833A69Aa467E42c46cCA640da84DD4585f",
            "symbol": "CHAMP",
            "decimals": 8,
            "name": "NFT Champions",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x8f9e8e833a69aa467e42c46cca640da84dd4585f.png"
        },
        {
            "address": "0x172370d5Cd63279eFa6d502DAB29171933a610AF",
            "symbol": "CRV",
            "decimals": 18,
            "name": "CRV",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xd533a949740bb3306d119cc777fa900ba034cd52.png"
        },
        {
            "address": "0x5314bA045a459f63906Aa7C76d9F337DcB7d6995",
            "symbol": "FODL",
            "decimals": 18,
            "name": "Fodl (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x5314ba045a459f63906aa7c76d9f337dcb7d6995.png"
        },
        {
            "address": "0x1d2a0E5EC8E5bBDCA5CB219e649B565d8e5c3360",
            "symbol": "amAAVE",
            "decimals": 18,
            "name": "Aave Matic Market AAVE",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xffc97d72e13e01096502cb8eb52dee56f74dad7b.png"
        },
        {
            "address": "0x8C92e38eCA8210f4fcBf17F0951b198Dd7668292",
            "symbol": "DHT",
            "decimals": 18,
            "name": "dHedge DAO Token (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x8c92e38eca8210f4fcbf17f0951b198dd7668292.png"
        },
        {
            "address": "0x60bB3D364B765C497C8cE50AE0Ae3f0882c5bD05",
            "symbol": "IMX",
            "decimals": 18,
            "name": "Impermax (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x60bb3d364b765c497c8ce50ae0ae3f0882c5bd05.png"
        },
        {
            "address": "0x5d47bAbA0d66083C52009271faF3F50DCc01023C",
            "symbol": "BANANA",
            "decimals": 18,
            "name": "ApeSwapFinance Banana",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x5d47baba0d66083c52009271faf3f50dcc01023c.png"
        },
        {
            "address": "0xcd7361ac3307D1C5a46b63086a90742Ff44c63B3",
            "symbol": "RAIDER",
            "decimals": 18,
            "name": "RaiderToken",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xcd7361ac3307d1c5a46b63086a90742ff44c63b3.png"
        },
        {
            "address": "0xcFb54a6D2dA14ABeCD231174FC5735B4436965D8",
            "symbol": "CYC",
            "decimals": 18,
            "name": "Cyclone Protocol",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xcfb54a6d2da14abecd231174fc5735b4436965d8.png"
        },
        {
            "address": "0xB9638272aD6998708de56BBC0A290a1dE534a578",
            "symbol": "IQ",
            "decimals": 18,
            "name": "Everipedia IQ (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xb9638272ad6998708de56bbc0a290a1de534a578.png"
        },
        {
            "address": "0x2b88aD57897A8b496595925F43048301C37615Da",
            "symbol": "PICKLE",
            "decimals": 18,
            "name": "PickleToken",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x429881672b9ae42b8eba0e26cd9c73711b891ca5.png"
        },
        {
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
            "symbol": "ETH",
            "decimals": 18,
            "name": "Ether",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619.png"
        },
        {
            "address": "0x769434dcA303597C8fc4997Bf3DAB233e961Eda2",
            "symbol": "XSGD",
            "decimals": 6,
            "name": "XSGD (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x769434dca303597c8fc4997bf3dab233e961eda2.png"
        },
        {
            "address": "0xcD86152047e800d67BDf00A4c635A8B6C0e5C4c2",
            "symbol": "NACHO",
            "decimals": 18,
            "name": "NACHO",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xcd86152047e800d67bdf00a4c635a8b6c0e5c4c2.png"
        },
        {
            "address": "0xE06Bd4F5aAc8D0aA337D13eC88dB6defC6eAEefE",
            "symbol": "IXT",
            "decimals": 18,
            "name": "PlanetIX",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xe06bd4f5aac8d0aa337d13ec88db6defc6eaeefe.png"
        },
        {
            "address": "0x12c9FFE6538f20A982FD4D17912f0ca00fA82D30",
            "symbol": "oORC",
            "decimals": 18,
            "name": "Orbit Bridge Polygon Orbit Chain",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x12c9ffe6538f20a982fd4d17912f0ca00fa82d30.png"
        },
        {
            "address": "0x695FC8B80F344411F34bDbCb4E621aA69AdA384b",
            "symbol": "NITRO",
            "decimals": 18,
            "name": "Nitro (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x695fc8b80f344411f34bdbcb4e621aa69ada384b.png"
        },
        {
            "address": "0xc3FdbadC7c795EF1D6Ba111e06fF8F16A20Ea539",
            "symbol": "ADDY",
            "decimals": 18,
            "name": "Adamant",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xc3fdbadc7c795ef1d6ba111e06ff8f16a20ea539.png"
        },
        {
            "address": "0x50B728D8D964fd00C2d0AAD81718b71311feF68a",
            "symbol": "SNX",
            "decimals": 18,
            "name": "Synthetix Network Token (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x50b728d8d964fd00c2d0aad81718b71311fef68a.png"
        },
        {
            "address": "0x8d1566569d5b695d44a9a234540f68D393cDC40D",
            "symbol": "GAME",
            "decimals": 18,
            "name": "GAME Credits",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x63f88a2298a5c4aee3c216aa6d926b184a4b2437.png"
        },
        {
            "address": "0xD4945a3D0De9923035521687D4bf18cC9B0c7c2A",
            "symbol": "LUXY",
            "decimals": 18,
            "name": "LUXY",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xd4945a3d0de9923035521687d4bf18cc9b0c7c2a.png"
        },
        {
            "address": "0x187Ae45f2D361CbCE37c6A8622119c91148F261b",
            "symbol": "POLX",
            "decimals": 18,
            "name": "Polylastic",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x187ae45f2d361cbce37c6a8622119c91148f261b.png"
        },
        {
            "address": "0xB25e20De2F2eBb4CfFD4D16a55C7B395e8a94762",
            "symbol": "REQ",
            "decimals": 18,
            "name": "Request",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xb25e20de2f2ebb4cffd4d16a55c7b395e8a94762.png"
        },
        {
            "address": "0xFbe49330E7B9F58a822788F86c1be38Ab902Bab1",
            "symbol": "PAPR",
            "decimals": 18,
            "name": "PAPR",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xfbe49330e7b9f58a822788f86c1be38ab902bab1.png"
        },
        {
            "address": "0x03CBA0CfF3BF727711eaE7eF11D152dCe3163901",
            "symbol": "PRNTR",
            "decimals": 18,
            "name": "PRNTR",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x03cba0cff3bf727711eae7ef11d152dce3163901.png"
        },
        {
            "address": "0x127984b5E6d5c59f81DACc9F1C8b3Bdc8494572e",
            "symbol": "PPDEX",
            "decimals": 18,
            "name": "Pepedex",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x127984b5e6d5c59f81dacc9f1c8b3bdc8494572e.png"
        },
        {
            "address": "0x3Ad707dA309f3845cd602059901E39C4dcd66473",
            "symbol": "ETH2x-FLI-P",
            "decimals": 18,
            "name": "ETH 2x Flexible Leverage Index",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x3ad707da309f3845cd602059901e39c4dcd66473.png"
        },
        {
            "address": "0x580A84C73811E1839F75d86d75d88cCa0c241fF4",
            "symbol": "QI",
            "decimals": 18,
            "name": "Qi Dao",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x580a84c73811e1839f75d86d75d88cca0c241ff4.png"
        },
        {
            "address": "0x05089C9EBFFa4F0AcA269e32056b1b36B37ED71b",
            "symbol": "Krill",
            "decimals": 18,
            "name": "Krill",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x05089c9ebffa4f0aca269e32056b1b36b37ed71b.png"
        },
        {
            "address": "0x033d942A6b495C4071083f4CDe1f17e986FE856c",
            "symbol": "AGA",
            "decimals": 4,
            "name": "AGA Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x2d80f5f5328fdcb6eceb7cacf5dd8aedaec94e20.png"
        },
        {
            "address": "0x236eeC6359fb44CCe8f97E99387aa7F8cd5cdE1f",
            "symbol": "USD+",
            "decimals": 6,
            "name": "USD+",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x236eec6359fb44cce8f97e99387aa7f8cd5cde1f.png"
        },
        {
            "address": "0x692597b009d13C4049a947CAB2239b7d6517875F",
            "symbol": "UST",
            "decimals": 18,
            "name": "Wrapped UST Token (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x692597b009d13c4049a947cab2239b7d6517875f.png"
        },
        {
            "address": "0x4e78011Ce80ee02d2c3e649Fb657E45898257815",
            "symbol": "KLIMA",
            "decimals": 9,
            "name": "Klima DAO",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x4e78011ce80ee02d2c3e649fb657e45898257815.png"
        },
        {
            "address": "0x7f280daC515121DcdA3EaC69eB4C13a52392CACE",
            "symbol": "FNC",
            "decimals": 18,
            "name": "Fancy Games",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x7f280dac515121dcda3eac69eb4c13a52392cace.png"
        },
        {
            "address": "0x3B56a704C01D650147ADE2b8cEE594066b3F9421",
            "symbol": "FYN",
            "decimals": 18,
            "name": "Affyn",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x3b56a704c01d650147ade2b8cee594066b3f9421.png"
        },
        {
            "address": "0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683",
            "symbol": "SAND",
            "decimals": 18,
            "name": "SAND",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xbbba073c31bf03b8acf7c28ef0738decf3695683.png"
        },
        {
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7",
            "symbol": "GHST",
            "decimals": 18,
            "name": "Aavegotchi GHST Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x3f382dbd960e3a9bbceae22651e88158d2791550.png"
        },
        {
            "address": "0x3068382885602FC0089aeC774944b5ad6123ae60",
            "symbol": "PDSHARE",
            "decimals": 18,
            "name": "PDSHARE",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x3068382885602fc0089aec774944b5ad6123ae60.png"
        },
        {
            "address": "0x30DE46509Dbc3a491128F97be0aAf70dc7Ff33cB",
            "symbol": "XZAR",
            "decimals": 18,
            "name": "South African Tether (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x30de46509dbc3a491128f97be0aaf70dc7ff33cb.png"
        },
        {
            "address": "0x8623e66Bea0DCe41B6d47f9C44e806A115baBae0",
            "symbol": "NFTY",
            "decimals": 18,
            "name": "NFTY Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x8623e66bea0dce41b6d47f9c44e806a115babae0.png"
        },
        {
            "address": "0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b",
            "symbol": "AVAX",
            "decimals": 18,
            "name": "Avalanche Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b.png"
        },
        {
            "address": "0xE7804D91dfCDE7F776c90043E03eAa6Df87E6395",
            "symbol": "DFX",
            "decimals": 18,
            "name": "DFX Token (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xe7804d91dfcde7f776c90043e03eaa6df87e6395.png"
        },
        {
            "address": "0x255707B70BF90aa112006E1b07B9AeA6De021424",
            "symbol": "TETU",
            "decimals": 18,
            "name": "TETU Reward Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x255707b70bf90aa112006e1b07b9aea6de021424.png"
        },
        {
            "address": "0xc10358f062663448a3489fC258139944534592ac",
            "symbol": "BCMC",
            "decimals": 18,
            "name": "Blockchain Monster Coin",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xc10358f062663448a3489fc258139944534592ac.png"
        },
        {
            "address": "0xb33EaAd8d922B1083446DC23f610c2567fB5180f",
            "symbol": "UNI",
            "decimals": 18,
            "name": "Uniswap",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png"
        },
        {
            "address": "0xe82808eaA78339b06a691fd92E1Be79671cAd8D3",
            "symbol": "PLOT",
            "decimals": 18,
            "name": "PLOT",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x72f020f8f3e8fd9382705723cd26380f8d0c66bb.png"
        },
        {
            "address": "0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a",
            "symbol": "SUSHI",
            "decimals": 18,
            "name": "SushiToken",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2.png"
        },
        {
            "address": "0xD85d1e945766Fea5Eda9103F918Bd915FbCa63E6",
            "symbol": "CEL",
            "decimals": 4,
            "name": "Celsius",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d.png"
        },
        {
            "address": "0xf50D05A1402d0adAfA880D36050736f9f6ee7dee",
            "symbol": "INST",
            "decimals": 18,
            "name": "Instadapp (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xf50d05a1402d0adafa880d36050736f9f6ee7dee.png"
        },
        {
            "address": "0x8C4476DFEC8e7EEdf2DE3e9E9461B7c14C828d46",
            "symbol": "UNIX",
            "decimals": 18,
            "name": "UniX Gaming (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x8c4476dfec8e7eedf2de3e9e9461b7c14c828d46.png"
        },
        {
            "address": "0xD86b5923F3AD7b585eD81B448170ae026c65ae9a",
            "symbol": "IRON",
            "decimals": 18,
            "name": "IRON Stablecoin",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xd86b5923f3ad7b585ed81b448170ae026c65ae9a.png"
        },
        {
            "address": "0x7FBc10850caE055B27039aF31bD258430e714c62",
            "symbol": "UBT",
            "decimals": 8,
            "name": "Unibright",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e.png"
        },
        {
            "address": "0xcf32822ff397Ef82425153a9dcb726E5fF61DCA7",
            "symbol": "GMEE",
            "decimals": 18,
            "name": "GAMEE",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xcf32822ff397ef82425153a9dcb726e5ff61dca7.png"
        },
        {
            "address": "0xB77e62709e39aD1cbeEBE77cF493745AeC0F453a",
            "symbol": "WISE",
            "decimals": 18,
            "name": "Wise Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x66a0f676479cee1d7373f3dc2e2952778bff5bd6.png"
        },
        {
            "address": "0x071AC29d569a47EbfFB9e57517F855Cb577DCc4C",
            "symbol": "GFC",
            "decimals": 18,
            "name": "GCOIN",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x071ac29d569a47ebffb9e57517f855cb577dcc4c.png"
        },
        {
            "address": "0x554f074d9cCda8F483d1812d4874cBebD682644E",
            "symbol": "$ANRX",
            "decimals": 18,
            "name": "AnRKey X (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x554f074d9ccda8f483d1812d4874cbebd682644e.png"
        },
        {
            "address": "0xFbdd194376de19a88118e84E279b977f165d01b8",
            "symbol": "BIFI",
            "decimals": 18,
            "name": "beefy.finance",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xca3f508b8e4dd382ee878a314789373d80a5190a.png"
        },
        {
            "address": "0x1599fE55Cda767b1F631ee7D414b41F5d6dE393d",
            "symbol": "MILK",
            "decimals": 18,
            "name": "Milk",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x1599fe55cda767b1f631ee7d414b41f5d6de393d.png"
        },
        {
            "address": "0xFdc26CDA2d2440d0E83CD1DeE8E8bE48405806DC",
            "symbol": "BTU",
            "decimals": 18,
            "name": "BTU Protocol",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xb683d83a532e2cb7dfa5275eed3698436371cc9f.png"
        },
        {
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13",
            "symbol": "QUICK",
            "decimals": 18,
            "name": "Quickswap",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x6c28aef8977c9b773996d0e8376d2ee379446f2f.png"
        },
        {
            "address": "0x28424507fefb6f7f8E9D3860F56504E4e5f5f390",
            "symbol": "amWETH",
            "decimals": 18,
            "name": "Aave Matic Market WETH",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x030ba81f1c18d280636f32af80b9aad02cf0854e.png"
        },
        {
            "address": "0xC168E40227E4ebD8C1caE80F7a55a4F0e6D66C97",
            "symbol": "DFYN",
            "decimals": 18,
            "name": "DFYN Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xc168e40227e4ebd8c1cae80f7a55a4f0e6d66c97.png"
        },
        {
            "address": "0x8D546026012bF75073d8A586f24A5d5ff75b9716",
            "symbol": "SPHERE",
            "decimals": 18,
            "name": "Sphere Finance",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x8d546026012bf75073d8a586f24a5d5ff75b9716.png"
        },
        {
            "address": "0x0A5926027d407222F8fe20f24cB16e103f617046",
            "symbol": "NFD",
            "decimals": 18,
            "name": "Feisty Doge NFT (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x0a5926027d407222f8fe20f24cb16e103f617046.png"
        },
        {
            "address": "0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3",
            "symbol": "BAL",
            "decimals": 18,
            "name": "Balancer",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3.png"
        },
        {
            "address": "0x39aB6574c289c3Ae4d88500eEc792AB5B947A5Eb",
            "symbol": "DYST",
            "decimals": 18,
            "name": "Dystopia token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x39ab6574c289c3ae4d88500eec792ab5b947a5eb.png"
        },
        {
            "address": "0x3A3e7650f8B9f667dA98F236010fBf44Ee4B2975",
            "symbol": "xUSD",
            "decimals": 18,
            "name": "xDollar Stablecoin",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x3a3e7650f8b9f667da98f236010fbf44ee4b2975.png"
        },
        {
            "address": "0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4",
            "symbol": "ROUTE (PoS)",
            "decimals": 18,
            "name": "Route",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4.png"
        },
        {
            "address": "0x70c006878a5A50Ed185ac4C87d837633923De296",
            "symbol": "REVV",
            "decimals": 18,
            "name": "REVV",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x70c006878a5a50ed185ac4c87d837633923de296.png"
        },
        {
            "address": "0x614389EaAE0A6821DC49062D56BDA3d9d45Fa2ff",
            "symbol": "ORBS",
            "decimals": 18,
            "name": "Orbs (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x614389eaae0a6821dc49062d56bda3d9d45fa2ff.png"
        },
        {
            "address": "0xA3c322Ad15218fBFAEd26bA7f616249f7705D945",
            "symbol": "MV",
            "decimals": 18,
            "name": "Metaverse (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xa3c322ad15218fbfaed26ba7f616249f7705d945.png"
        },
        {
            "address": "0x7075cAB6bCCA06613e2d071bd918D1a0241379E2",
            "symbol": "GFARM2",
            "decimals": 18,
            "name": "Gains V2",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x7075cab6bcca06613e2d071bd918d1a0241379e2.png"
        },
        {
            "address": "0xB35fcBCF1fD489fCe02Ee146599e893FDCdC60e6",
            "symbol": "DERC",
            "decimals": 18,
            "name": "DeRace Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xb35fcbcf1fd489fce02ee146599e893fdcdc60e6.png"
        },
        {
            "address": "0x3a3Df212b7AA91Aa0402B9035b098891d276572B",
            "symbol": "FISH",
            "decimals": 18,
            "name": "Fish",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x3a3df212b7aa91aa0402b9035b098891d276572b.png"
        },
        {
            "address": "0x29F1e986FCa02B7E54138c04C4F503DdDD250558",
            "symbol": "VSQ",
            "decimals": 9,
            "name": "VSQ",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x29f1e986fca02b7e54138c04c4f503dddd250558.png"
        },
        {
            "address": "0xeEe3371B89FC43Ea970E908536Fcddd975135D8a",
            "symbol": "DOG",
            "decimals": 18,
            "name": "The Doge NFT",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xeee3371b89fc43ea970e908536fcddd975135d8a.png"
        },
        {
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
            "symbol": "MATIC",
            "decimals": 18,
            "name": "MATIC",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png"
        },
        {
            "address": "0xD52f6CA48882Be8fbaa98ce390db18e1dbe1062d",
            "symbol": "ORE",
            "decimals": 18,
            "name": "pTokens ORE (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xd52f6ca48882be8fbaa98ce390db18e1dbe1062d.png"
        },
        {
            "address": "0xd99baFe5031cC8B345cb2e8c80135991F12D7130",
            "symbol": "FRM",
            "decimals": 18,
            "name": "Ferrum Network Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xd99bafe5031cc8b345cb2e8c80135991f12d7130.png"
        },
        {
            "address": "0xc6C855AD634dCDAd23e64DA71Ba85b8C51E5aD7c",
            "symbol": "ICE_2",
            "decimals": 18,
            "name": "Decentral Games ICE",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xc6c855ad634dcdad23e64da71ba85b8c51e5ad7c.png"
        },
        {
            "address": "0xEFeE2de82343BE622Dcb4E545f75a3b9f50c272D",
            "symbol": "TRY",
            "decimals": 18,
            "name": "TryHards",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xefee2de82343be622dcb4e545f75a3b9f50c272d.png"
        },
        {
            "address": "0x13748d548D95D78a3c83fe3F32604B4796CFfa23",
            "symbol": "KOGECOIN",
            "decimals": 9,
            "name": "kogecoin.io",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x13748d548d95d78a3c83fe3f32604b4796cffa23.png"
        },
        {
            "address": "0x89eF0900b0A6b5548ab2FF58EF588F9433b5fCf5",
            "symbol": "CRBN",
            "decimals": 18,
            "name": "Carbon (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x89ef0900b0a6b5548ab2ff58ef588f9433b5fcf5.png"
        },
        {
            "address": "0x361A5a4993493cE00f61C32d4EcCA5512b82CE90",
            "symbol": "SDT",
            "decimals": 18,
            "name": "Stake DAO Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f.png"
        },
        {
            "address": "0xeEeEEb57642040bE42185f49C52F7E9B38f8eeeE",
            "symbol": "ELK",
            "decimals": 18,
            "name": "Elk",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xeeeeeb57642040be42185f49c52f7e9b38f8eeee.png"
        },
        {
            "address": "0xfe4546feFe124F30788c4Cc1BB9AA6907A7987F9",
            "symbol": "cxETH",
            "decimals": 18,
            "name": "CelsiusX Wrapped ETH",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xfe4546fefe124f30788c4cc1bb9aa6907a7987f9.png"
        },
        {
            "address": "0x689f8e5913C158fFB5Ac5aeb83b3C875F5d20309",
            "symbol": "SNK",
            "decimals": 18,
            "name": "Snook",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x689f8e5913c158ffb5ac5aeb83b3c875f5d20309.png"
        },
        {
            "address": "0x6d5f5317308C6fE7D6CE16930353a8Dfd92Ba4D7",
            "symbol": "ABI",
            "decimals": 9,
            "name": "Abachi",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x6d5f5317308c6fe7d6ce16930353a8dfd92ba4d7.png"
        },
        {
            "address": "0xE2Aa7db6dA1dAE97C5f5C6914d285fBfCC32A128",
            "symbol": "PAR",
            "decimals": 18,
            "name": "PAR Stablecoin",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xe2aa7db6da1dae97c5f5c6914d285fbfcc32a128.png"
        },
        {
            "address": "0xEe9A352F6aAc4aF1A5B9f467F6a93E0ffBe9Dd35",
            "symbol": "MASQ",
            "decimals": 18,
            "name": "MASQ (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xee9a352f6aac4af1a5b9f467f6a93e0ffbe9dd35.png"
        },
        {
            "address": "0xeCf8f2FA183b1C4d2A269BF98A54fCe86C812d3e",
            "symbol": "CFI",
            "decimals": 18,
            "name": "CyberFi Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x63b4f3e3fa4e438698ce330e365e831f7ccd1ef4.png"
        },
        {
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
            "symbol": "DAI",
            "decimals": 18,
            "name": "Dai Stablecoin",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png"
        },
        {
            "address": "0x5f0197Ba06860DaC7e31258BdF749F92b6a636d4",
            "symbol": "1FLR",
            "decimals": 18,
            "name": "Flare Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x5f0197ba06860dac7e31258bdf749f92b6a636d4.png"
        },
        {
            "address": "0x04b33078Ea1aEf29bf3fB29c6aB7B200C58ea126",
            "symbol": "SAFLE",
            "decimals": 18,
            "name": "Safle",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x04b33078ea1aef29bf3fb29c6ab7b200c58ea126.png"
        },
        {
            "address": "0xADAC33f543267c4D59a8c299cF804c303BC3e4aC",
            "symbol": "MIMO",
            "decimals": 18,
            "name": "MIMO Parallel Governance Token (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xadac33f543267c4d59a8c299cf804c303bc3e4ac.png"
        },
        {
            "address": "0xd28449BB9bB659725aCcAd52947677ccE3719fD7",
            "symbol": "DMT",
            "decimals": 18,
            "name": "Dark Matter Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xd28449bb9bb659725accad52947677cce3719fd7.png"
        },
        {
            "address": "0x229b1b6C23ff8953D663C4cBB519717e323a0a84",
            "symbol": "BLOK",
            "decimals": 18,
            "name": "BLOK",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x229b1b6c23ff8953d663c4cbb519717e323a0a84.png"
        },
        {
            "address": "0x8a0e8b4b0903929f47C3ea30973940D4a9702067",
            "symbol": "INSUR",
            "decimals": 18,
            "name": "InsurAce (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x8a0e8b4b0903929f47c3ea30973940d4a9702067.png"
        },
        {
            "address": "0xA936e1f747d14fC30d08272D065c8aeF4ab7f810",
            "symbol": "WLD",
            "decimals": 18,
            "name": "wLitiDAO",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xa936e1f747d14fc30d08272d065c8aef4ab7f810.png"
        },
        {
            "address": "0x1a13F4Ca1d028320A707D99520AbFefca3998b7F",
            "symbol": "amUSDC",
            "decimals": 6,
            "name": "Aave Matic Market USDC",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xbcca60bb61934080951369a648fb03df4f96263c.png"
        },
        {
            "address": "0x300211Def2a644b036A9bdd3e58159bb2074d388",
            "symbol": "CIOTX",
            "decimals": 18,
            "name": "Crosschain IOTX",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x300211def2a644b036a9bdd3e58159bb2074d388.png"
        },
        {
            "address": "0x723B17718289A91AF252D616DE2C77944962d122",
            "symbol": "GAIA",
            "decimals": 18,
            "name": "GAIA Everworld",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x723b17718289a91af252d616de2c77944962d122.png"
        },
        {
            "address": "0x7E7fF932FAb08A0af569f93Ce65e7b8b23698Ad8",
            "symbol": "Yf-DAI",
            "decimals": 18,
            "name": "YfDAI.finance (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x7e7ff932fab08a0af569f93ce65e7b8b23698ad8.png"
        },
        {
            "address": "0xbAe28251B2a4E621aA7e20538c06DEe010Bc06DE",
            "symbol": "dUSD",
            "decimals": 18,
            "name": "dHEDGE Stablecoin Yield",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xbae28251b2a4e621aa7e20538c06dee010bc06de.png"
        },
        {
            "address": "0x381d168DE3991c7413d46e3459b48A5221E3dfE4",
            "symbol": "CUBO",
            "decimals": 18,
            "name": "CUBO token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x381d168de3991c7413d46e3459b48a5221e3dfe4.png"
        },
        {
            "address": "0x3B1A0c9252ee7403093fF55b4a5886d49a3d837a",
            "symbol": "UM",
            "decimals": 18,
            "name": "Continuum",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x3b1a0c9252ee7403093ff55b4a5886d49a3d837a.png"
        },
        {
            "address": "0x4e3Decbb3645551B8A19f0eA1678079FCB33fB4c",
            "symbol": "jEUR",
            "decimals": 18,
            "name": "Jarvis Synthetic Euro",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x4e3decbb3645551b8a19f0ea1678079fcb33fb4c.png"
        },
        {
            "address": "0xe6FC6C7CB6d2c31b359A49A33eF08aB87F4dE7CE",
            "symbol": "IGG",
            "decimals": 6,
            "name": "IG Gold",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xe6fc6c7cb6d2c31b359a49a33ef08ab87f4de7ce.png"
        },
        {
            "address": "0x431D5dfF03120AFA4bDf332c61A6e1766eF37BDB",
            "symbol": "JPYC",
            "decimals": 18,
            "name": "JPY Coin",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x431d5dff03120afa4bdf332c61a6e1766ef37bdb.png"
        },
        {
            "address": "0x60D55F02A771d515e077c9C2403a1ef324885CeC",
            "symbol": "amUSDT",
            "decimals": 6,
            "name": "Aave Matic Market USDT",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x3ed3b47dd13ec9a98b44e6204a523e766b225811.png"
        },
        {
            "address": "0xEe9801669C6138E84bD50dEB500827b776777d28",
            "symbol": "O3",
            "decimals": 18,
            "name": "O3 Swap Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xee9801669c6138e84bd50deb500827b776777d28.png"
        },
        {
            "address": "0x82362Ec182Db3Cf7829014Bc61E9BE8a2E82868a",
            "symbol": "MESH",
            "decimals": 18,
            "name": "Meshswap Protocol",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x82362ec182db3cf7829014bc61e9be8a2e82868a.png"
        },
        {
            "address": "0x3F46a70adB395cddb81FF9bFE3B62aDae1B44816",
            "symbol": "WARP",
            "decimals": 9,
            "name": "Warp Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x3f46a70adb395cddb81ff9bfe3b62adae1b44816.png"
        },
        {
            "address": "0x4A81f8796e0c6Ad4877A51C86693B0dE8093F2ef",
            "symbol": "ICE_1",
            "decimals": 18,
            "name": "Iron Finance ICE Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x4a81f8796e0c6ad4877a51c86693b0de8093f2ef.png"
        },
        {
            "address": "0x46F48FbdedAa6F5500993BEDE9539ef85F4BeE8e",
            "symbol": "ARIA20",
            "decimals": 18,
            "name": "ARIANEE",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x46f48fbdedaa6f5500993bede9539ef85f4bee8e.png"
        },
        {
            "address": "0x8765f05ADce126d70bcdF1b0a48Db573316662eB",
            "symbol": "PLA",
            "decimals": 18,
            "name": "PlayDapp Token (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x8765f05adce126d70bcdf1b0a48db573316662eb.png"
        },
        {
            "address": "0xa69d14d6369E414a32a5C7E729B7afbAfd285965",
            "symbol": "GCR",
            "decimals": 4,
            "name": "Global Coin Research (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xa69d14d6369e414a32a5c7e729b7afbafd285965.png"
        },
        {
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
            "symbol": "USDC",
            "decimals": 6,
            "name": "USD Coin (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png"
        },
        {
            "address": "0x7CdC0421469398e0F3aA8890693d86c840Ac8931",
            "symbol": "AZUKI",
            "decimals": 18,
            "name": "DokiDokiAzuki",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x910524678c0b1b23ffb9285a81f99c29c11cbaed.png"
        },
        {
            "address": "0xdF7837DE1F2Fa4631D716CF2502f8b230F1dcc32",
            "symbol": "TEL",
            "decimals": 2,
            "name": "Telcoin",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x467bccd9d29f223bce8043b84e8c8b282827790f.png"
        },
        {
            "address": "0xA55870278d6389ec5B524553D03C04F5677c061E",
            "symbol": "XCAD",
            "decimals": 18,
            "name": "XCAD Token (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xa55870278d6389ec5b524553d03c04f5677c061e.png"
        },
        {
            "address": "0x598e49f01bEfeB1753737934a5b11fea9119C796",
            "symbol": "ADS",
            "decimals": 11,
            "name": "Adshares (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x598e49f01befeb1753737934a5b11fea9119c796.png"
        },
        {
            "address": "0xa0E390e9ceA0D0e8cd40048ced9fA9EA10D71639",
            "symbol": "DSLA",
            "decimals": 18,
            "name": "DSLA",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe.png"
        },
        {
            "address": "0x2934b36ca9A4B31E633C5BE670C8C8b28b6aA015",
            "symbol": "THX",
            "decimals": 18,
            "name": "THX Network (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x2934b36ca9a4b31e633c5be670c8c8b28b6aa015.png"
        },
        {
            "address": "0x42d61D766B85431666B39B89C43011f24451bFf6",
            "symbol": "PSP",
            "decimals": 18,
            "name": "ParaSwap (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x42d61d766b85431666b39b89c43011f24451bff6.png"
        },
        {
            "address": "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
            "symbol": "LINK",
            "decimals": 18,
            "name": "ChainLink Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png"
        },
        {
            "address": "0xdaB35042e63E93Cc8556c9bAE482E5415B5Ac4B1",
            "symbol": "IRIS",
            "decimals": 18,
            "name": "Iris",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xdab35042e63e93cc8556c9bae482e5415b5ac4b1.png"
        },
        {
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
            "symbol": "WBTC",
            "decimals": 8,
            "name": "Wrapped BTC",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png"
        },
        {
            "address": "0x34667ED7C36cBBbF2d5d5c5c8d6Eb76a094EDb9F",
            "symbol": "GENE",
            "decimals": 18,
            "name": "GenomesDAO (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x34667ed7c36cbbbf2d5d5c5c8d6eb76a094edb9f.png"
        },
        {
            "address": "0xd8cA34fd379d9ca3C6Ee3b3905678320F5b45195",
            "symbol": "gOHM",
            "decimals": 18,
            "name": "Governance OHM",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xd8ca34fd379d9ca3c6ee3b3905678320f5b45195.png"
        },
        {
            "address": "0x3a9A81d576d83FF21f26f325066054540720fC34",
            "symbol": "DATA",
            "decimals": 18,
            "name": "Streamr",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x3a9a81d576d83ff21f26f325066054540720fc34.png"
        },
        {
            "address": "0x8346Ab8d5EA7A9Db0209aEd2d1806AFA0E2c4C21",
            "symbol": "MOD",
            "decimals": 18,
            "name": "MODEFI (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x8346ab8d5ea7a9db0209aed2d1806afa0e2c4c21.png"
        },
        {
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
            "symbol": "WMATIC",
            "decimals": 18,
            "name": "Wrapped Matic",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png"
        },
        {
            "address": "0xa1428174F516F527fafdD146b883bB4428682737",
            "symbol": "SUPER",
            "decimals": 18,
            "name": "SuperFarm",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xe53ec727dbdeb9e2d5456c3be40cff031ab40a55.png"
        },
        {
            "address": "0x59B5654a17Ac44F3068b3882F298881433bB07Ef",
            "symbol": "CHP",
            "decimals": 18,
            "name": "CoinPoker Chips (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x59b5654a17ac44f3068b3882f298881433bb07ef.png"
        },
        {
            "address": "0x02649C1Ff4296038De4b9bA8F491b42b940A8252",
            "symbol": "XGEM",
            "decimals": 18,
            "name": "Exchange Genesis Ethlas Medium",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x02649c1ff4296038de4b9ba8f491b42b940a8252.png"
        },
        {
            "address": "0xE0B52e49357Fd4DAf2c15e02058DCE6BC0057db4",
            "symbol": "agEUR",
            "decimals": 18,
            "name": "agEUR",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xe0b52e49357fd4daf2c15e02058dce6bc0057db4.png"
        },
        {
            "address": "0x51b5619F5180e333d18b6310C8D540AEa43a0371",
            "symbol": "VHC",
            "decimals": 18,
            "name": "Vault Hill City (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x51b5619f5180e333d18b6310c8d540aea43a0371.png"
        },
        {
            "address": "0x90F3edc7D5298918F7BB51694134b07356F7d0C7",
            "symbol": "DDAO",
            "decimals": 18,
            "name": "DEFI HUNTERS DAO Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x90f3edc7d5298918f7bb51694134b07356f7d0c7.png"
        },
        {
            "address": "0x8505b9d2254A7Ae468c0E9dd10Ccea3A837aef5c",
            "symbol": "COMP",
            "decimals": 18,
            "name": "Compound",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xc00e94cb662c3520282e6f5717214004a7f26888.png"
        },
        {
            "address": "0x8f6196901a4a153d8eE8F3fa779A042F6092D908",
            "symbol": "SALE",
            "decimals": 18,
            "name": "DxSale.Network (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x8f6196901a4a153d8ee8f3fa779a042f6092d908.png"
        },
        {
            "address": "0xE111178A87A3BFf0c8d18DECBa5798827539Ae99",
            "symbol": "EURS",
            "decimals": 2,
            "name": "STASIS EURS Token (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xe111178a87a3bff0c8d18decba5798827539ae99.png"
        },
        {
            "address": "0xC3Ec80343D2bae2F8E680FDADDe7C17E71E114ea",
            "symbol": "OM",
            "decimals": 18,
            "name": "OM",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x3593d125a4f7849a1b059e64f4517a86dd60c95d.png"
        },
        {
            "address": "0x2a93172c8DCCbfBC60a39d56183B7279a2F647b4",
            "symbol": "$DG",
            "decimals": 18,
            "name": "decentral.games",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xee06a81a695750e71a662b51066f2c74cf4478a0.png"
        },
        {
            "address": "0x2bC07124D8dAc638E290f401046Ad584546BC47b",
            "symbol": "TOWER",
            "decimals": 18,
            "name": "TOWER",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x2bc07124d8dac638e290f401046ad584546bc47b.png"
        },
        {
            "address": "0xdDa40cdfe4A0090f42Ff49f264A831402ADB801A",
            "symbol": "DOGIRA",
            "decimals": 9,
            "name": "Dogira",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xdda40cdfe4a0090f42ff49f264a831402adb801a.png"
        },
        {
            "address": "0xdb725f82818De83e99F1dAc22A9b5B51d3d04DD4",
            "symbol": "GET",
            "decimals": 18,
            "name": "GET Protocol (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xdb725f82818de83e99f1dac22a9b5b51d3d04dd4.png"
        },
        {
            "address": "0x59E9261255644c411AfDd00bD89162d09D862e38",
            "symbol": "ETHA",
            "decimals": 18,
            "name": "ETHA",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x59e9261255644c411afdd00bd89162d09d862e38.png"
        },
        {
            "address": "0xbD1463F02f61676d53fd183C2B19282BFF93D099",
            "symbol": "jCHF",
            "decimals": 18,
            "name": "Jarvis Synthetic Swiss Franc",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xbd1463f02f61676d53fd183c2b19282bff93d099.png"
        },
        {
            "address": "0xc75ea0c71023C14952F3C7B9101ECbbAa14aA27A",
            "symbol": "NFTI",
            "decimals": 18,
            "name": "Scalara NFT Index (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xc75ea0c71023c14952f3c7b9101ecbbaa14aa27a.png"
        },
        {
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
            "symbol": "USDT",
            "decimals": 6,
            "name": "Tether USD",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png"
        },
        {
            "address": "0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89",
            "symbol": "FRAX",
            "decimals": 18,
            "name": "Frax",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x45c32fa6df82ead1e2ef74d17b76547eddfaff89.png"
        },
        {
            "address": "0x034b2090b579228482520c589dbD397c53Fc51cC",
            "symbol": "VISION",
            "decimals": 18,
            "name": "Vision Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x034b2090b579228482520c589dbd397c53fc51cc.png"
        },
        {
            "address": "0x228b5C21ac00155cf62c57bcc704c0dA8187950b",
            "symbol": "NXD",
            "decimals": 18,
            "name": "Nexus Dubai",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x228b5c21ac00155cf62c57bcc704c0da8187950b.png"
        },
        {
            "address": "0x1B815d120B3eF02039Ee11dC2d33DE7aA4a8C603",
            "symbol": "WOO",
            "decimals": 18,
            "name": "Wootrade Network",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x1b815d120b3ef02039ee11dc2d33de7aa4a8c603.png"
        },
        {
            "address": "0x1a3acf6D19267E2d3e7f898f42803e90C9219062",
            "symbol": "FXS",
            "decimals": 18,
            "name": "Frax Share",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x1a3acf6d19267e2d3e7f898f42803e90c9219062.png"
        },
        {
            "address": "0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4",
            "symbol": "MANA",
            "decimals": 18,
            "name": "Decentraland MANA",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x0f5d2fb29fb7d3cfee444a200298f468908cc942.png"
        },
        {
            "address": "0x1379E8886A944d2D9d440b3d88DF536Aea08d9F3",
            "symbol": "MYST",
            "decimals": 18,
            "name": "Mysterium (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x1379e8886a944d2d9d440b3d88df536aea08d9f3.png"
        },
        {
            "address": "0xF84BD51eab957c2e7B7D646A3427C5A50848281D",
            "symbol": "AGAr",
            "decimals": 8,
            "name": "AGA Rewards",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xb453f1f2ee776daf2586501361c457db70e1ca0f.png"
        },
        {
            "address": "0x2B9E7ccDF0F4e5B24757c1E1a80e311E34Cb10c7",
            "symbol": "MASK",
            "decimals": 18,
            "name": "Mask Network (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x2b9e7ccdf0f4e5b24757c1e1a80e311e34cb10c7.png"
        },
        {
            "address": "0xbA3CB8329D442E6F9Eb70fafe1E214251df3D275",
            "symbol": "SWASH",
            "decimals": 18,
            "name": "Swash Token",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xba3cb8329d442e6f9eb70fafe1e214251df3d275.png"
        },
        {
            "address": "0xE5417Af564e4bFDA1c483642db72007871397896",
            "symbol": "GNS",
            "decimals": 18,
            "name": "Gains Network",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xe5417af564e4bfda1c483642db72007871397896.png"
        },
        {
            "address": "0x235737dBb56e8517391473f7c964DB31fA6ef280",
            "symbol": "KASTA",
            "decimals": 18,
            "name": "KastaToken",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x235737dbb56e8517391473f7c964db31fa6ef280.png"
        },
        {
            "address": "0x1dDcaa4Ed761428ae348BEfC6718BCb12e63bFaa",
            "symbol": "deUSDC",
            "decimals": 6,
            "name": "deBridge USD Coin",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa_2.png"
        },
        {
            "address": "0x00e5646f60AC6Fb446f621d146B6E1886f002905",
            "symbol": "RAI",
            "decimals": 18,
            "name": "Rai Reflex Index (PoS)",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x00e5646f60ac6fb446f621d146b6e1886f002905.png"
        },
        {
            "address": "0xab3D689C22a2Bb821f50A4Ff0F21A7980dCB8591",
            "symbol": "PRXY",
            "decimals": 18,
            "name": "Proxy",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xab3d689c22a2bb821f50a4ff0f21a7980dcb8591.png"
        },
        {
            "address": "0x4e1581f01046eFDd7a1a2CDB0F82cdd7F71F2E59",
            "symbol": "ICE_3",
            "decimals": 18,
            "name": "IceToken",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x4e1581f01046efdd7a1a2cdb0f82cdd7f71f2e59.png"
        },
        {
            "address": "0x23D29D30e35C5e8D321e1dc9A8a61BFD846D4C5C",
            "symbol": "HEX",
            "decimals": 8,
            "name": "HEXX",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x2b591e99afe9f32eaa6214f7b7629768c40eeb39.png"
        },
        {
            "address": "0x8A953CfE442c5E8855cc6c61b1293FA648BAE472",
            "symbol": "PolyDoge",
            "decimals": 18,
            "name": "PolyDoge",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x8a953cfe442c5e8855cc6c61b1293fa648bae472.png"
        },
        {
            "address": "0x9C78EE466D6Cb57A4d01Fd887D2b5dFb2D46288f",
            "symbol": "MUST",
            "decimals": 18,
            "name": "Must",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f.png"
        },
        {
            "address": "0x8dF3aad3a84da6b69A4DA8aeC3eA40d9091B2Ac4",
            "symbol": "amWMATIC",
            "decimals": 18,
            "name": "Aave Matic Market WMATIC",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0x8df3aad3a84da6b69a4da8aec3ea40d9091b2ac4.png"
        },
        {
            "address": "0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8",
            "symbol": "ANY",
            "decimals": 18,
            "name": "Anyswap",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xf99d58e463a2e07e5692127302c20a191861b4d6.png"
        },
        {
            "address": "0xC250e9987A032ACAC293d838726C511E6E1C029d",
            "symbol": "CLAM",
            "decimals": 9,
            "name": "Otter Clam",
            "chain_id": 137,
            "logo": "https://tokens.1inch.io/0xc250e9987a032acac293d838726c511e6e1c029d.png"
        }
    ],
    "250": [
        {
            "address": "0xeEeEEb57642040bE42185f49C52F7E9B38f8eeeE",
            "symbol": "ELK",
            "decimals": 18,
            "name": "Elk",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xeeeeeb57642040be42185f49c52f7e9b38f8eeee.png"
        },
        {
            "address": "0x468003B688943977e6130F4F68F23aad939a1040",
            "symbol": "SPELL",
            "decimals": 18,
            "name": "Spell Token",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xce1bffbd5374dac86a2893119683f4911a2f7814.png"
        },
        {
            "address": "0x10010078a54396F62c96dF8532dc2B4847d47ED3",
            "symbol": "HND",
            "decimals": 18,
            "name": "Hundred Finance",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x10010078a54396f62c96df8532dc2b4847d47ed3.png"
        },
        {
            "address": "0xfB4D42BEd5618fb1a377DDB64EB56B92a6d117f2",
            "symbol": "NOKU",
            "decimals": 18,
            "name": "NOKU v2",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xfb4d42bed5618fb1a377ddb64eb56b92a6d117f2.png"
        },
        {
            "address": "0x5Cc61A78F164885776AA610fb0FE1257df78E59B",
            "symbol": "SPIRIT",
            "decimals": 18,
            "name": "SpiritSwap Token",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x5cc61a78f164885776aa610fb0fe1257df78e59b.png"
        },
        {
            "address": "0x9Fb9a33956351cf4fa040f65A13b835A3C8764E3",
            "symbol": "MULTI",
            "decimals": 18,
            "name": "Multichain",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x9fb9a33956351cf4fa040f65a13b835a3c8764e3.png"
        },
        {
            "address": "0xc54A1684fD1bef1f077a336E6be4Bd9a3096a6Ca",
            "symbol": "2SHARES",
            "decimals": 18,
            "name": "2SHARE Token",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xc54a1684fd1bef1f077a336e6be4bd9a3096a6ca.png"
        },
        {
            "address": "0x59c6606ED2AF925F270733e378D6aF7829B5b3cf",
            "symbol": "WBOND",
            "decimals": 18,
            "name": "War Bond Token",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x59c6606ed2af925f270733e378d6af7829b5b3cf.png"
        },
        {
            "address": "0xEFF6FcfBc2383857Dd66ddf57effFC00d58b7d9D",
            "symbol": "JulD",
            "decimals": 18,
            "name": "JulSwap",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x5a41f637c3f7553dba6ddc2d3ca92641096577ea.png"
        },
        {
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
            "symbol": "FTM",
            "decimals": 18,
            "name": "Fantom Token",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x4e15361fd6b4bb609fa63c81a2be19d873717870.png"
        },
        {
            "address": "0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC",
            "symbol": "SUSHI",
            "decimals": 18,
            "name": "Sushi",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2.png"
        },
        {
            "address": "0x1c174f6AB0753162befbB916c69dEF2cc1bfdEc1",
            "symbol": "TEMP",
            "decimals": 18,
            "name": "Tempus",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xa36fdbbae3c9d55a1d67ee5821d53b50b63a1ab9.png"
        },
        {
            "address": "0x627524d78B4fC840C887ffeC90563c7A42b671fD",
            "symbol": "KEK",
            "decimals": 18,
            "name": "Cryptokek.com",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x627524d78b4fc840c887ffec90563c7a42b671fd.png"
        },
        {
            "address": "0x13082681E8CE9bd0aF505912d306403592490Fc7",
            "symbol": "PAR",
            "decimals": 18,
            "name": "PAR Stablecoin",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x13082681e8ce9bd0af505912d306403592490fc7.png"
        },
        {
            "address": "0x00a35FD824c717879BF370E70AC6868b95870Dfb",
            "symbol": "IB",
            "decimals": 18,
            "name": "IronBank",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x00a35fd824c717879bf370e70ac6868b95870dfb.png"
        },
        {
            "address": "0xF24Bcf4d1e507740041C9cFd2DddB29585aDCe1e",
            "symbol": "BEETS",
            "decimals": 18,
            "name": "BeethovenxToken",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xf24bcf4d1e507740041c9cfd2dddb29585adce1e.png"
        },
        {
            "address": "0xd6070ae98b8069de6B494332d1A1a81B6179D960",
            "symbol": "BIFI",
            "decimals": 18,
            "name": "Beefy.Finance",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xfbdd194376de19a88118e84e279b977f165d01b8.png"
        },
        {
            "address": "0x321162Cd933E2Be498Cd2267a90534A804051b11",
            "symbol": "BTC",
            "decimals": 8,
            "name": "Bitcoin",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png"
        },
        {
            "address": "0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9",
            "symbol": "LQDR",
            "decimals": 18,
            "name": "Liquid Driver",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9.png"
        },
        {
            "address": "0x112dF7E3b4B7Ab424F07319D4E92F41e6608c48B",
            "symbol": "pFTM",
            "decimals": 18,
            "name": "pFTM",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x112df7e3b4b7ab424f07319d4e92f41e6608c48b.png"
        },
        {
            "address": "0xC1Be9a4D5D45BeeACAE296a7BD5fADBfc14602C4",
            "symbol": "GTON",
            "decimals": 18,
            "name": "Graviton",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x01e0e2e61f554ecaaec0cc933e739ad90f24a86d_1.png"
        },
        {
            "address": "0xC758295Cd1A564cdb020a78a681a838CF8e0627D",
            "symbol": "FS",
            "decimals": 18,
            "name": "FantomStarter",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xc758295cd1a564cdb020a78a681a838cf8e0627d.png"
        },
        {
            "address": "0xbbc4A8d076F4B1888fec42581B6fc58d242CF2D5",
            "symbol": "FONT",
            "decimals": 18,
            "name": "Font",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x4c25bdf026ea05f32713f00f73ca55857fbf6342.png"
        },
        {
            "address": "0x29b0Da86e484E1C0029B56e817912d778aC0EC69",
            "symbol": "YFI",
            "decimals": 18,
            "name": "yearn.finance",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e.png"
        },
        {
            "address": "0x582423C10c9e83387a96d00A69bA3D11ee47B7b5",
            "symbol": "RING",
            "decimals": 18,
            "name": "OneRing",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x9469d013805bffb7d3debe5e7839237e535ec483.png"
        },
        {
            "address": "0x7a6e4E3CC2ac9924605DCa4bA31d1831c84b44aE",
            "symbol": "2OMB",
            "decimals": 18,
            "name": "2omb Token",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x7a6e4e3cc2ac9924605dca4ba31d1831c84b44ae.png"
        },
        {
            "address": "0xa231D452e4bCA86672FD6109de94688d1E17Aae5",
            "symbol": "SCC",
            "decimals": 9,
            "name": "ScaryChainCapital V2",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xa231d452e4bca86672fd6109de94688d1e17aae5.png"
        },
        {
            "address": "0x49C290Ff692149A4E16611c694fdED42C954ab7a",
            "symbol": "BSHARE",
            "decimals": 18,
            "name": "BSHARE",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x531780face85306877d7e1f05d713d1b50a37f7a.png"
        },
        {
            "address": "0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454",
            "symbol": "BNB",
            "decimals": 18,
            "name": "BNB",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c_1.png"
        },
        {
            "address": "0x1D43697D67cB5D0436cc38d583Ca473a1bFEbC7a",
            "symbol": "RIP",
            "decimals": 9,
            "name": "Fantom Doge",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x1d43697d67cb5d0436cc38d583ca473a1bfebc7a.png"
        },
        {
            "address": "0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8",
            "symbol": "LINK",
            "decimals": 18,
            "name": "ChainLink",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xe2e73a1c69ecf83f464efce6a5be353a37ca09b2.png"
        },
        {
            "address": "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
            "symbol": "DAI",
            "decimals": 18,
            "name": "Dai Stablecoin",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e.png"
        },
        {
            "address": "0x56ee926bD8c72B2d5fa1aF4d9E4Cbb515a1E3Adc",
            "symbol": "SNX",
            "decimals": 18,
            "name": "Synthetix Network",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f.png"
        },
        {
            "address": "0x4ae3Fa715E21f328c2B61c037B9CC1761B6aF0bD",
            "symbol": "POS",
            "decimals": 18,
            "name": "Poseidon",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x4ae3fa715e21f328c2b61c037b9cc1761b6af0bd.png"
        },
        {
            "address": "0x9bD0611610A0f5133e4dd1bFdd71C5479Ee77f37",
            "symbol": "FTMO",
            "decimals": 18,
            "name": "Fantom Oasis Token",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x9bd0611610a0f5133e4dd1bfdd71c5479ee77f37.png"
        },
        {
            "address": "0x9d8F97A3C2f9f397B6D46Cbe2d39CC1D8Cf19010",
            "symbol": "OOE",
            "decimals": 18,
            "name": "OpenOcean",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x9d8f97a3c2f9f397b6d46cbe2d39cc1d8cf19010.png"
        },
        {
            "address": "0xa23c4e69e5Eaf4500F2f9301717f12B578b948FB",
            "symbol": "PROTO",
            "decimals": 18,
            "name": "Protofi Token",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xa23c4e69e5eaf4500f2f9301717f12b578b948fb.png"
        },
        {
            "address": "0x94CcF60f700146BeA8eF7832820800E2dFa92EdA",
            "symbol": "wsHEC",
            "decimals": 18,
            "name": "Wrapped sHEC",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x94ccf60f700146bea8ef7832820800e2dfa92eda.png"
        },
        {
            "address": "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
            "symbol": "WFTM",
            "decimals": 18,
            "name": "Wrapped Fantom",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83.png"
        },
        {
            "address": "0xc2A45FE7d40bCAc8369371B08419DDAFd3131b4a",
            "symbol": "LCD",
            "decimals": 18,
            "name": "Lucidao",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xc2a45fe7d40bcac8369371b08419ddafd3131b4a.png"
        },
        {
            "address": "0x49894fCC07233957c35462cfC3418Ef0CC26129f",
            "symbol": "FANG",
            "decimals": 18,
            "name": "FANG Token",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x49894fcc07233957c35462cfc3418ef0cc26129f.png"
        },
        {
            "address": "0x9879aBDea01a879644185341F7aF7d8343556B7a",
            "symbol": "TUSD",
            "decimals": 18,
            "name": "TrueUSD",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x1c20e891bab6b1727d14da358fae2984ed9b59eb.png"
        },
        {
            "address": "0x049d68029688eAbF473097a2fC38ef61633A3C7A",
            "symbol": "fUSDT",
            "decimals": 6,
            "name": "Frapped USDT",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x049d68029688eabf473097a2fc38ef61633a3c7a.png"
        },
        {
            "address": "0xC5e2B037D30a390e62180970B3aa4E91868764cD",
            "symbol": "TAROT",
            "decimals": 18,
            "name": "Tarot",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xc5e2b037d30a390e62180970b3aa4e91868764cd.png"
        },
        {
            "address": "0x152888854378201e173490956085c711f1DeD565",
            "symbol": "MST",
            "decimals": 18,
            "name": "Monster",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x152888854378201e173490956085c711f1ded565.png"
        },
        {
            "address": "0x3b57f3FeAaF1e8254ec680275Ee6E7727C7413c7",
            "symbol": "EXOD",
            "decimals": 9,
            "name": "Exodia",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x3b57f3feaaf1e8254ec680275ee6e7727c7413c7.png"
        },
        {
            "address": "0x131c7afb4E5f5c94A27611f7210dfEc2215E85Ae",
            "symbol": "POWER",
            "decimals": 18,
            "name": "Power",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xf2f9a7e93f845b3ce154efbeb64fb9346fcce509.png"
        },
        {
            "address": "0xc60D7067dfBc6f2caf30523a064f416A5Af52963",
            "symbol": "TREEB",
            "decimals": 18,
            "name": "Treeb",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xc60d7067dfbc6f2caf30523a064f416a5af52963.png"
        },
        {
            "address": "0xe83dFaaAfd3310474D917583Ae9633B4f68fB036",
            "symbol": "RAINI",
            "decimals": 18,
            "name": "Raini",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xe83dfaaafd3310474d917583ae9633b4f68fb036.png"
        },
        {
            "address": "0x65Def5029A0e7591e46B38742bFEdd1Fb7b24436",
            "symbol": "KAE",
            "decimals": 18,
            "name": "Kanpeki",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x65def5029a0e7591e46b38742bfedd1fb7b24436.png"
        },
        {
            "address": "0xc165d941481e68696f43EE6E99BFB2B23E0E3114",
            "symbol": "OXD",
            "decimals": 18,
            "name": "0xDAO",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xc165d941481e68696f43ee6e99bfb2b23e0e3114.png"
        },
        {
            "address": "0xdDcb3fFD12750B45d32E084887fdf1aABAb34239",
            "symbol": "ANY",
            "decimals": 18,
            "name": "Anyswap",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xf99d58e463a2e07e5692127302c20a191861b4d6.png"
        },
        {
            "address": "0x82f0B8B456c1A451378467398982d4834b6829c1",
            "symbol": "MIM",
            "decimals": 18,
            "name": "Magic Internet Money",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x130966628846bfd36ff31a822705796e8cb8c18d.png"
        },
        {
            "address": "0xdc301622e621166BD8E82f2cA0A26c13Ad0BE355",
            "symbol": "FRAX",
            "decimals": 18,
            "name": "Frax",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xd24c2ad096400b6fbcd2ad8b24e7acbc21a1da64.png"
        },
        {
            "address": "0xfB98B335551a418cD0737375a2ea0ded62Ea213b",
            "symbol": "miMATIC",
            "decimals": 18,
            "name": "miMATIC",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xa3fa99a148fa48d14ed51d610c367c61876997f1.png"
        },
        {
            "address": "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
            "symbol": "USDC",
            "decimals": 6,
            "name": "USD Coin",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xddafbb505ad214d7b80b1f830fccc89b60fb7a83.png"
        },
        {
            "address": "0xD3b71117E6C1558c1553305b44988cd944e97300",
            "symbol": "YEL",
            "decimals": 18,
            "name": "YEL Token",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xd3b71117e6c1558c1553305b44988cd944e97300.png"
        },
        {
            "address": "0x4cdF39285D7Ca8eB3f090fDA0C069ba5F4145B37",
            "symbol": "TSHARE",
            "decimals": 18,
            "name": "TSHARE",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x4cdf39285d7ca8eb3f090fda0c069ba5f4145b37.png"
        },
        {
            "address": "0x940F41F0ec9ba1A34CF001cc03347ac092F5F6B5",
            "symbol": "gfUSDT",
            "decimals": 6,
            "name": "Geist fUSDT",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x940f41f0ec9ba1a34cf001cc03347ac092f5f6b5.png"
        },
        {
            "address": "0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE",
            "symbol": "BOO",
            "decimals": 18,
            "name": "SpookyToken",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xbd83010eb60f12112908774998f65761cf9f6f9a.png"
        },
        {
            "address": "0x6c021Ae822BEa943b2E66552bDe1D2696a53fbB7",
            "symbol": "TOMB",
            "decimals": 18,
            "name": "TOMB",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x6c021ae822bea943b2e66552bde1d2696a53fbb7.png"
        },
        {
            "address": "0x0DeF844ED26409C5C46dda124ec28fb064D90D27",
            "symbol": "CoUSD",
            "decimals": 18,
            "name": "CoffinDollar",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x0def844ed26409c5c46dda124ec28fb064d90d27.png"
        },
        {
            "address": "0x90E892FED501ae00596448aECF998C88816e5C0F",
            "symbol": "DMD",
            "decimals": 18,
            "name": "DarkMatter",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x90e892fed501ae00596448aecf998c88816e5c0f.png"
        },
        {
            "address": "0x89D5e71E275B4bE094Df9551627BCF4E3b24cE22",
            "symbol": "STA",
            "decimals": 18,
            "name": "Statera",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xa7de087329bfcda5639247f96140f9dabe3deed1.png"
        },
        {
            "address": "0xaD996A45fd2373ed0B10Efa4A8eCB9de445A4302",
            "symbol": "ALPACA",
            "decimals": 18,
            "name": "AlpacaToken",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x8f0528ce5ef7b51152a59745befdd91d97091d2f.png"
        },
        {
            "address": "0x1D1764F04DE29da6b90ffBef372D1A45596C4855",
            "symbol": "MIMO",
            "decimals": 18,
            "name": "MIMO Parallel Governance Token",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x1d1764f04de29da6b90ffbef372d1a45596c4855.png"
        },
        {
            "address": "0x59D07a115fe3FFe5db3D52029D43Cc0ef5e9ba08",
            "symbol": "SUPA",
            "decimals": 18,
            "name": "SUPA Foundation",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x59d07a115fe3ffe5db3d52029d43cc0ef5e9ba08.png"
        },
        {
            "address": "0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07",
            "symbol": "SOUL",
            "decimals": 18,
            "name": "SoulPower",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x67d012f731c23f0313cea1186d0121779c77fcfe.png"
        },
        {
            "address": "0xd8321AA83Fb0a4ECd6348D4577431310A6E0814d",
            "symbol": "GEIST",
            "decimals": 18,
            "name": "Geist.Finance Protocol Token",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xd8321aa83fb0a4ecd6348d4577431310a6e0814d.png"
        },
        {
            "address": "0xc3118248e7A3b2c103D87392Fca5EB6ED8DaA754",
            "symbol": "DUCAT",
            "decimals": 18,
            "name": "Ducat",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xc3118248e7a3b2c103d87392fca5eb6ed8daa754.png"
        },
        {
            "address": "0x6437ADAC543583C4b31Bf0323A0870430F5CC2e7",
            "symbol": "3SHARES",
            "decimals": 18,
            "name": "3SHARE Token",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x6437adac543583c4b31bf0323a0870430f5cc2e7.png"
        },
        {
            "address": "0x74b23882a30290451A17c44f4F05243b6b58C76d",
            "symbol": "ETH",
            "decimals": 18,
            "name": "Ethereum",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png"
        },
        {
            "address": "0xe0654C8e6fd4D733349ac7E09f6f23DA256bF475",
            "symbol": "SCREAM",
            "decimals": 18,
            "name": "Scream",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xe0654c8e6fd4d733349ac7e09f6f23da256bf475.png"
        },
        {
            "address": "0x3dc57B391262e3aAe37a08D91241f9bA9d58b570",
            "symbol": "YOSHI",
            "decimals": 18,
            "name": "Yoshi.exchange",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x3dc57b391262e3aae37a08d91241f9ba9d58b570.png"
        },
        {
            "address": "0x74E23dF9110Aa9eA0b6ff2fAEE01e740CA1c642e",
            "symbol": "TOR",
            "decimals": 18,
            "name": "TOR",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x74e23df9110aa9ea0b6ff2faee01e740ca1c642e.png"
        },
        {
            "address": "0x230576a0455d7Ae33c6dEfE64182C0BB68bAFAF3",
            "symbol": "BRO",
            "decimals": 18,
            "name": "DexBrowser",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x230576a0455d7ae33c6defe64182c0bb68bafaf3.png"
        },
        {
            "address": "0xE3a486C1903Ea794eED5d5Fa0C9473c7D7708f40",
            "symbol": "cUSD",
            "decimals": 18,
            "name": "Creditum USD",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xe3a486c1903ea794eed5d5fa0c9473c7d7708f40.png"
        },
        {
            "address": "0x85dec8c4B2680793661bCA91a8F129607571863d",
            "symbol": "BRUSH",
            "decimals": 18,
            "name": "PaintSwap Token",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x85dec8c4b2680793661bca91a8f129607571863d.png"
        },
        {
            "address": "0xD3c325848D7c6E29b574Cb0789998b2ff901f17E",
            "symbol": "1ART",
            "decimals": 18,
            "name": "ArtWallet",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xd3c325848d7c6e29b574cb0789998b2ff901f17e.png"
        },
        {
            "address": "0x34D33dc8Ac6f1650D94A7E9A972B47044217600b",
            "symbol": "SMART",
            "decimals": 18,
            "name": "Smart Token",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x34d33dc8ac6f1650d94a7e9a972b47044217600b.png"
        },
        {
            "address": "0x14d6111dbfD64CEb9676a494BF86AA9f7DD54acC",
            "symbol": "5TABLE",
            "decimals": 18,
            "name": "5table Token",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x14d6111dbfd64ceb9676a494bf86aa9f7dd54acc.png"
        },
        {
            "address": "0x8D7d3409881b51466B483B11Ea1B8A03cdEd89ae",
            "symbol": "BASED",
            "decimals": 18,
            "name": "BASED",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x8d7d3409881b51466b483b11ea1b8a03cded89ae.png"
        },
        {
            "address": "0x14DEf7584A6c52f470Ca4F4b9671056b22f4FfDE",
            "symbol": "3OMB",
            "decimals": 18,
            "name": "3OMB Token",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x14def7584a6c52f470ca4f4b9671056b22f4ffde.png"
        },
        {
            "address": "0x3A3841f5fa9f2c283EA567d5Aeea3Af022dD2262",
            "symbol": "SHADE",
            "decimals": 18,
            "name": "ShadeToken",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x3a3841f5fa9f2c283ea567d5aeea3af022dd2262.png"
        },
        {
            "address": "0x1E4F97b9f9F913c46F1632781732927B9019C68b",
            "symbol": "CRV",
            "decimals": 18,
            "name": "Curve DAO",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xd533a949740bb3306d119cc777fa900ba034cd52.png"
        },
        {
            "address": "0x6626c47c00F1D87902fc13EECfaC3ed06D5E8D8a",
            "symbol": "WOO",
            "decimals": 18,
            "name": "Wootrade Network",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x1b815d120b3ef02039ee11dc2d33de7aa4a8c603.png"
        },
        {
            "address": "0x92df3eaBf7c1c2A6b3D5793f6d53778eA78c48b2",
            "symbol": "ATLAS",
            "decimals": 18,
            "name": "Atlas Cloud",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x92df3eabf7c1c2a6b3d5793f6d53778ea78c48b2.png"
        },
        {
            "address": "0x593Ab53baFfaF1E821845cf7080428366F030a9c",
            "symbol": "COFFIN",
            "decimals": 18,
            "name": "CoffinToken",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x593ab53baffaf1e821845cf7080428366f030a9c.png"
        },
        {
            "address": "0x77128DFdD0ac859B33F44050c6fa272F34872B5E",
            "symbol": "CREDIT",
            "decimals": 18,
            "name": "Creditum",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x77128dfdd0ac859b33f44050c6fa272f34872b5e.png"
        },
        {
            "address": "0x5602df4A94eB6C680190ACCFA2A475621E0ddBdc",
            "symbol": "SPA",
            "decimals": 9,
            "name": "Spartacus",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x5602df4a94eb6c680190accfa2a475621e0ddbdc.png"
        },
        {
            "address": "0xe64B9fd040D1F9D4715C645e0D567EF69958D3D9",
            "symbol": "MOD",
            "decimals": 18,
            "name": "Modefi",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xd4fbc57b6233f268e7fba3b66e62719d74deecbc.png"
        },
        {
            "address": "0xe1e6B01aE86Ad82B1F1B4EB413B219aC32E17Bf6",
            "symbol": "XRUNE",
            "decimals": 18,
            "name": "Thorstarter Token",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xe1e6b01ae86ad82b1f1b4eb413b219ac32e17bf6.png"
        },
        {
            "address": "0x33333ee26a7d02e41c33828B42Fb1E0889143477",
            "symbol": "LIQR",
            "decimals": 18,
            "name": "LIQR",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x33333ee26a7d02e41c33828b42fb1e0889143477.png"
        },
        {
            "address": "0x6a07A792ab2965C72a5B8088d3a069A7aC3a993B",
            "symbol": "AAVE",
            "decimals": 18,
            "name": "Aave",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.png"
        },
        {
            "address": "0x6a545f9c64d8f7B957D8D2e6410B52095A9E6c29",
            "symbol": "CFi",
            "decimals": 18,
            "name": "CyberFi Token",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x63b4f3e3fa4e438698ce330e365e831f7ccd1ef4.png"
        },
        {
            "address": "0xfa1FBb8Ef55A4855E5688C0eE13aC3f202486286",
            "symbol": "FHM",
            "decimals": 9,
            "name": "Fantohm",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xfa1fbb8ef55a4855e5688c0ee13ac3f202486286.png"
        },
        {
            "address": "0x248CB87DDA803028dfeaD98101C9465A2fbdA0d4",
            "symbol": "CHARM",
            "decimals": 18,
            "name": "Charm Token",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x248cb87dda803028dfead98101c9465a2fbda0d4.png"
        },
        {
            "address": "0x9F47F313ACFd4bdC52F4373b493EaE7d5aC5b765",
            "symbol": "JOE",
            "decimals": 18,
            "name": "JoeToken",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd.png"
        },
        {
            "address": "0x511D35c52a3C244E7b8bd92c0C297755FbD89212",
            "symbol": "AVAX",
            "decimals": 18,
            "name": "Avalanche",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7.png"
        },
        {
            "address": "0x8a41f13a4FaE75ca88B1ee726ee9D52B148b0498",
            "symbol": "PAE",
            "decimals": 18,
            "name": "Ripae",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x8a41f13a4fae75ca88b1ee726ee9d52b148b0498.png"
        },
        {
            "address": "0x69D17C151EF62421ec338a0c92ca1c1202A427EC",
            "symbol": "SNT",
            "decimals": 18,
            "name": "Supernova Token",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x744d70fdbe2ba4cf95131626614a1763df805b9e.png"
        },
        {
            "address": "0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0",
            "symbol": "HEC",
            "decimals": 9,
            "name": "Hector",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x5c4fdfc5233f935f20d2adba572f770c2e377ab0.png"
        },
        {
            "address": "0xf16e81dce15B08F326220742020379B855B87DF9",
            "symbol": "ICE",
            "decimals": 18,
            "name": "IceToken",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0xe0ce60af0850bf54072635e66e79df17082a1109.png"
        },
        {
            "address": "0x91fa20244Fb509e8289CA630E5db3E9166233FDc",
            "symbol": "gOHM",
            "decimals": 18,
            "name": "Governance OHM",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x91fa20244fb509e8289ca630e5db3e9166233fdc.png"
        },
        {
            "address": "0x40DF1Ae6074C35047BFF66675488Aa2f9f6384F3",
            "symbol": "MATIC",
            "decimals": 18,
            "name": "MATIC",
            "chain_id": 250,
            "logo": "https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png"
        }
    ],
    "42161": [],
    "42220": [],
    "43114": [
        {
            "address": "0x2147EFFF675e4A4eE1C2f918d181cDBd7a8E208f",
            "symbol": "ALPHA.e",
            "decimals": 18,
            "name": "AlphaToken",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xa1faa113cbe53436df28ff0aee54275c13b40975.png"
        },
        {
            "address": "0x75739a693459f33B1FBcC02099eea3eBCF150cBe",
            "symbol": "TIC",
            "decimals": 18,
            "name": "ElasticSwap Tic Token",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x75739a693459f33b1fbcc02099eea3ebcf150cbe.png"
        },
        {
            "address": "0x0fEc6d8A84A85b79A1FFE0E28c1902E08b653EFE",
            "symbol": "HOOP",
            "decimals": 18,
            "name": "Hoopoe Ventures",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x0fec6d8a84a85b79a1ffe0e28c1902e08b653efe.png"
        },
        {
            "address": "0x0f34919404a290e71fc6A510cB4a6aCb8D764b24",
            "symbol": "BLZZ",
            "decimals": 18,
            "name": "Blizz.Finance Protocol Token",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x0f34919404a290e71fc6a510cb4a6acb8d764b24.png"
        },
        {
            "address": "0x4f60a160D8C2DDdaAfe16FCC57566dB84D674BD6",
            "symbol": "JEWEL",
            "decimals": 18,
            "name": "Jewels",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x4f60a160d8c2dddaafe16fcc57566db84d674bd6.png"
        },
        {
            "address": "0x686bEF2417b6Dc32C50a3cBfbCC3bb60E1e9a15D",
            "symbol": "avWBTC",
            "decimals": 8,
            "name": "Aave Avalanche Market WBTC",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x9ff58f4ffb29fa2266ab25e75e2a8b3503311656.png"
        },
        {
            "address": "0xE1C110E1B1b4A1deD0cAf3E42BfBdbB7b5d7cE1C",
            "symbol": "ELK",
            "decimals": 18,
            "name": "Elk",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xe1c110e1b1b4a1ded0caf3e42bfbdbb7b5d7ce1c.png"
        },
        {
            "address": "0x65378b697853568dA9ff8EaB60C13E1Ee9f4a654",
            "symbol": "HUSKY",
            "decimals": 18,
            "name": "Husky",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x65378b697853568da9ff8eab60c13e1ee9f4a654.png"
        },
        {
            "address": "0xD45B7c061016102f9FA220502908f2c0f1add1D7",
            "symbol": "avAAVE",
            "decimals": 18,
            "name": "Aave Avalanche Market AAVE",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xffc97d72e13e01096502cb8eb52dee56f74dad7b.png"
        },
        {
            "address": "0x564A341Df6C126f90cf3ECB92120FD7190ACb401",
            "symbol": "TRYB",
            "decimals": 6,
            "name": "BiLira",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x2c537e5624e4af88a7ae4060c022609376c8d0eb.png"
        },
        {
            "address": "0xfcDe4A87b8b6FA58326BB462882f1778158B02F1",
            "symbol": "WXT",
            "decimals": 18,
            "name": "Wirex Token",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xfcde4a87b8b6fa58326bb462882f1778158b02f1.png"
        },
        {
            "address": "0x62edc0692BD897D2295872a9FFCac5425011c661",
            "symbol": "GMX",
            "decimals": 18,
            "name": "GMX",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x62edc0692bd897d2295872a9ffcac5425011c661.png"
        },
        {
            "address": "0x4C9B4E1AC6F24CdE3660D5E4Ef1eBF77C710C084",
            "symbol": "LYD",
            "decimals": 18,
            "name": "LydiaFinance Token",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x4c9b4e1ac6f24cde3660d5e4ef1ebf77c710c084.png"
        },
        {
            "address": "0xBD100d061E120b2c67A24453CF6368E63f1Be056",
            "symbol": "iDYP",
            "decimals": 18,
            "name": "iDeFiYieldProtocol",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xbd100d061e120b2c67a24453cf6368e63f1be056.png"
        },
        {
            "address": "0x6C6f910A79639dcC94b4feEF59Ff507c2E843929",
            "symbol": "aAVAXb",
            "decimals": 18,
            "name": "Ankr Reward-Earning Staked AVAX",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x6c6f910a79639dcc94b4feef59ff507c2e843929.png"
        },
        {
            "address": "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
            "symbol": "WAVAX",
            "decimals": 18,
            "name": "Wrapped AVAX",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7.png"
        },
        {
            "address": "0x921f99719Eb6C01b4B8f0BA7973A7C24891e740A",
            "symbol": "MAGE",
            "decimals": 18,
            "name": "MetaBrands",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x921f99719eb6c01b4b8f0ba7973a7c24891e740a.png"
        },
        {
            "address": "0xc7B5D72C836e718cDA8888eaf03707fAef675079",
            "symbol": "SWAP.e",
            "decimals": 18,
            "name": "TrustSwap Token",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xcc4304a31d09258b0029ea7fe63d032f52e44efe.png"
        },
        {
            "address": "0x4939B3313E73ae8546b90e53E998E82274afDbDB",
            "symbol": "CCC",
            "decimals": 9,
            "name": "Cross Chain Capital V2",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x4939b3313e73ae8546b90e53e998e82274afdbdb.png"
        },
        {
            "address": "0x026187BdbC6b751003517bcb30Ac7817D5B766f8",
            "symbol": "H2O",
            "decimals": 18,
            "name": "Defrost Finance H2O",
            "chain_id": 43114,
            "logo": "https://snowtrace.io/token/images/defrostfinance_32.png"
        },
        {
            "address": "0x22d4002028f537599bE9f666d1c4Fa138522f9c8",
            "symbol": "PTP",
            "decimals": 18,
            "name": "Platypus",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x22d4002028f537599be9f666d1c4fa138522f9c8.png"
        },
        {
            "address": "0x78ea17559B3D2CF85a7F9C2C704eda119Db5E6dE",
            "symbol": "AVE",
            "decimals": 18,
            "name": "Avaware",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x78ea17559b3d2cf85a7f9c2c704eda119db5e6de.png"
        },
        {
            "address": "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
            "symbol": "USDC.e",
            "decimals": 6,
            "name": "USD Coin",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png"
        },
        {
            "address": "0xDFE521292EcE2A4f44242efBcD66Bc594CA9714B",
            "symbol": "avWAVAX",
            "decimals": 18,
            "name": "Aave Avalanche Market WAVAX",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xdfe521292ece2a4f44242efbcd66bc594ca9714b.png"
        },
        {
            "address": "0x46A51127C3ce23fb7AB1DE06226147F446e4a857",
            "symbol": "avUSDC",
            "decimals": 6,
            "name": "Aave Avalanche Market USDC",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xbcca60bb61934080951369a648fb03df4f96263c.png"
        },
        {
            "address": "0x440aBbf18c54b2782A4917b80a1746d3A2c2Cce1",
            "symbol": "SHIBX",
            "decimals": 18,
            "name": "SHIBAVAX",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x440abbf18c54b2782a4917b80a1746d3a2c2cce1.png"
        },
        {
            "address": "0xf693248F96Fe03422FEa95aC0aFbBBc4a8FdD172",
            "symbol": "TUS",
            "decimals": 18,
            "name": "Treasure Under Sea",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xf693248f96fe03422fea95ac0afbbbc4a8fdd172.png"
        },
        {
            "address": "0x8F47416CaE600bccF9530E9F3aeaA06bdD1Caa79",
            "symbol": "THOR",
            "decimals": 18,
            "name": "THOR v2",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x8f47416cae600bccf9530e9f3aeaa06bdd1caa79.png"
        },
        {
            "address": "0x1f1E7c893855525b303f99bDF5c3c05Be09ca251",
            "symbol": "SYN",
            "decimals": 18,
            "name": "Synapse",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x1f1e7c893855525b303f99bdf5c3c05be09ca251_1.png"
        },
        {
            "address": "0x37B608519F91f70F2EeB0e5Ed9AF4061722e4F76",
            "symbol": "SUSHI.e",
            "decimals": 18,
            "name": "SushiToken",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2.png"
        },
        {
            "address": "0x532E6537FEA298397212F09A61e03311686f548e",
            "symbol": "avUSDT",
            "decimals": 6,
            "name": "Aave Avalanche Market USDT",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x3ed3b47dd13ec9a98b44e6204a523e766b225811.png"
        },
        {
            "address": "0x264c1383EA520f73dd837F915ef3a732e204a493",
            "symbol": "BNB",
            "decimals": 18,
            "name": "Binance",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png"
        },
        {
            "address": "0xd039C9079ca7F2a87D632A9C0d7cEa0137bAcFB5",
            "symbol": "APE-X",
            "decimals": 9,
            "name": "Ape-X",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xd039c9079ca7f2a87d632a9c0d7cea0137bacfb5.png"
        },
        {
            "address": "0x130966628846BFd36ff31a822705796e8cb8C18D",
            "symbol": "MIM",
            "decimals": 18,
            "name": "Magic Internet Money",
            "chain_id": 43114,
            "logo": "https://snowtrace.io/token/images/mimstablecoin_32.png"
        },
        {
            "address": "0x7761E2338B35bCEB6BdA6ce477EF012bde7aE611",
            "symbol": "EGG",
            "decimals": 18,
            "name": "chikn egg",
            "chain_id": 43114,
            "logo": "https://snowtrace.io/token/images/chikneeg_32.png"
        },
        {
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
            "symbol": "AVAX",
            "decimals": 18,
            "name": "Avalanche",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7.png"
        },
        {
            "address": "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
            "symbol": "USDT.e",
            "decimals": 6,
            "name": "Tether USD",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xc7198437980c041c805a1edcba50c1ce5db95118.png"
        },
        {
            "address": "0x63a72806098Bd3D9520cC43356dD78afe5D386D9",
            "symbol": "AAVE.e",
            "decimals": 18,
            "name": "Aave Token",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.png"
        },
        {
            "address": "0x7f041ce89A2079873693207653b24C15B5e6A293",
            "symbol": "LOOT",
            "decimals": 18,
            "name": "LOOT",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x7b3d36eb606f873a75a6ab68f8c999848b04f935.png"
        },
        {
            "address": "0xe0Ce60AF0850bF54072635e66E79Df17082A1109",
            "symbol": "ICE",
            "decimals": 18,
            "name": "IceToken",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xf16e81dce15b08f326220742020379b855b87df9.png"
        },
        {
            "address": "0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd",
            "symbol": "JOE",
            "decimals": 18,
            "name": "JoeToken",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd.png"
        },
        {
            "address": "0x7d1232B90D3F809A54eeaeeBC639C62dF8a8942f",
            "symbol": "SB",
            "decimals": 9,
            "name": "Snowbank",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x7d1232b90d3f809a54eeaeebc639c62df8a8942f.png"
        },
        {
            "address": "0x4fbf0429599460D327BD5F55625E30E4fC066095",
            "symbol": "TSD",
            "decimals": 18,
            "name": "TSD Stablecoin",
            "chain_id": 43114,
            "logo": "https://snowtrace.io/token/images/teddy-tsd_32.png"
        },
        {
            "address": "0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5",
            "symbol": "QI",
            "decimals": 18,
            "name": "BENQI",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x8729438eb15e2c8b576fcc6aecda6a148776c0f5.png"
        },
        {
            "address": "0xb2a85C5ECea99187A977aC34303b80AcbDdFa208",
            "symbol": "ROCO",
            "decimals": 18,
            "name": "ROCO",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xb2a85c5ecea99187a977ac34303b80acbddfa208.png"
        },
        {
            "address": "0x6feFd97F328342a8A840546A55FDcfEe7542F9A8",
            "symbol": "agEUR",
            "decimals": 18,
            "name": "agEUR",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x6fefd97f328342a8a840546a55fdcfee7542f9a8.png"
        },
        {
            "address": "0xfB98B335551a418cD0737375a2ea0ded62Ea213b",
            "symbol": "PENDLE",
            "decimals": 18,
            "name": "Pendle",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x808507121b80c02388fad14726482e061b8da827.png"
        },
        {
            "address": "0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17",
            "symbol": "DYP",
            "decimals": 18,
            "name": "DeFiYieldProtocol",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17.png"
        },
        {
            "address": "0x6D923f688C7FF287dc3A5943CAeefc994F97b290",
            "symbol": "SMRTr",
            "decimals": 18,
            "name": "SmarterCoin",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x6d923f688c7ff287dc3a5943caeefc994f97b290.png"
        },
        {
            "address": "0xF891214fdcF9cDaa5fdC42369eE4F27F226AdaD6",
            "symbol": "IME",
            "decimals": 18,
            "name": "Imperium Empires Token",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xf891214fdcf9cdaa5fdc42369ee4f27f226adad6.png"
        },
        {
            "address": "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
            "symbol": "WETH.e",
            "decimals": 18,
            "name": "Wrapped Ether",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png"
        },
        {
            "address": "0xe896CDeaAC9615145c0cA09C8Cd5C25bced6384c",
            "symbol": "PEFI",
            "decimals": 18,
            "name": "PenguinToken",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xe896cdeaac9615145c0ca09c8cd5c25bced6384c.png"
        },
        {
            "address": "0x28690ec942671aC8d9Bc442B667EC338eDE6dFd3",
            "symbol": "deUSDC",
            "decimals": 6,
            "name": "deBridge USD Coin",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x28690ec942671ac8d9bc442b667ec338ede6dfd3.png"
        },
        {
            "address": "0x47AFa96Cdc9fAb46904A55a6ad4bf6660B53c38a",
            "symbol": "avDAI",
            "decimals": 18,
            "name": "Aave Avalanche Market DAI",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x028171bca77440897b824ca71d1c56cac55b68a3.png"
        },
        {
            "address": "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
            "symbol": "USDt",
            "decimals": 6,
            "name": "TetherToken",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7.png"
        },
        {
            "address": "0xcF8419A615c57511807236751c0AF38Db4ba3351",
            "symbol": "AXIAL",
            "decimals": 18,
            "name": "AxialToken",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xcf8419a615c57511807236751c0af38db4ba3351.png"
        },
        {
            "address": "0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985",
            "symbol": "SPORE",
            "decimals": 9,
            "name": "Spore.Finance",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985.png"
        },
        {
            "address": "0x544c42fBB96B39B21DF61cf322b5EDC285EE7429",
            "symbol": "INSUR",
            "decimals": 18,
            "name": "InsurAce",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x544c42fbb96b39b21df61cf322b5edc285ee7429.png"
        },
        {
            "address": "0xaBC9547B534519fF73921b1FBA6E672b5f58D083",
            "symbol": "WOO.e",
            "decimals": 18,
            "name": "Wootrade Network",
            "chain_id": 43114,
            "logo": "https://snowtrace.io/token/images/wootradenetwork_32.png"
        },
        {
            "address": "0x488F73cddDA1DE3664775fFd91623637383D6404",
            "symbol": "YTS",
            "decimals": 18,
            "name": "YetiSwap",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x488f73cddda1de3664775ffd91623637383d6404.png"
        },
        {
            "address": "0x100Cc3a819Dd3e8573fD2E46D1E66ee866068f30",
            "symbol": "DCAU",
            "decimals": 18,
            "name": "Dragon Crypto Aurum",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x100cc3a819dd3e8573fd2e46d1e66ee866068f30.png"
        },
        {
            "address": "0x027dbcA046ca156De9622cD1e2D907d375e53aa7",
            "symbol": "AMPL",
            "decimals": 9,
            "name": "Ampleforth secured by Meter Passport",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xd46ba6d942050d489dbd938a2c909a5d5039a161.png"
        },
        {
            "address": "0x3EeFb18003D033661f84e48360eBeCD181A84709",
            "symbol": "ISA",
            "decimals": 18,
            "name": "Islander",
            "chain_id": 43114,
            "logo": "https://snowtrace.io/token/images/theislander_32.png"
        },
        {
            "address": "0xb27c8941a7Df8958A1778c0259f76D1F8B711C35",
            "symbol": "KLO",
            "decimals": 18,
            "name": "Kalao Token",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xb27c8941a7df8958a1778c0259f76d1f8b711c35.png"
        },
        {
            "address": "0x938FE3788222A74924E062120E7BFac829c719Fb",
            "symbol": "APEIN",
            "decimals": 18,
            "name": "Ape In",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x938fe3788222a74924e062120e7bfac829c719fb.png"
        },
        {
            "address": "0x1DB749847C4abB991d8B6032102383e6BfD9B1c7",
            "symbol": "DON",
            "decimals": 18,
            "name": "Dogeon Token",
            "chain_id": 43114,
            "logo": "https://snowtrace.io/token/images/dogeon_32.png"
        },
        {
            "address": "0xdDAaAD7366B455AfF8E7c82940C43CEB5829B604",
            "symbol": "mYAK",
            "decimals": 12,
            "name": "MiniYAK",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xddaaad7366b455aff8e7c82940c43ceb5829b604.png"
        },
        {
            "address": "0x637afeff75ca669fF92e4570B14D6399A658902f",
            "symbol": "COOK",
            "decimals": 18,
            "name": "Poly-Peg COOK",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xff75ced57419bcaebe5f05254983b013b0646ef5.png"
        },
        {
            "address": "0x19860CCB0A68fd4213aB9D8266F7bBf05A8dDe98",
            "symbol": "BUSD.e",
            "decimals": 18,
            "name": "Binance USD",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x4fabb145d64652a948d72533023f6e7a623c7c53.png"
        },
        {
            "address": "0xC38f41A296A4493Ff429F1238e030924A1542e50",
            "symbol": "SNOB",
            "decimals": 18,
            "name": "Snowball",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xc38f41a296a4493ff429f1238e030924a1542e50.png"
        },
        {
            "address": "0x321E7092a180BB43555132ec53AaA65a5bF84251",
            "symbol": "gOHM",
            "decimals": 18,
            "name": "Governance OHM",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x321e7092a180bb43555132ec53aaa65a5bf84251.png"
        },
        {
            "address": "0xDBf31dF14B66535aF65AaC99C32e9eA844e14501",
            "symbol": "renBTC",
            "decimals": 8,
            "name": "renBTC",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xeb4c2781e4eba804ce9a9803c67d0893436bb27d.png"
        },
        {
            "address": "0xfa4B6db72A650601E7Bd50a0A9f537c9E98311B2",
            "symbol": "HSHARES",
            "decimals": 18,
            "name": "HERMES Shares",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xfa4b6db72a650601e7bd50a0a9f537c9e98311b2.png"
        },
        {
            "address": "0x50b7545627a5162F82A992c33b87aDc75187B218",
            "symbol": "WBTC.e",
            "decimals": 8,
            "name": "Wrapped BTC",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png"
        },
        {
            "address": "0xb54f16fB19478766A268F172C9480f8da1a7c9C3",
            "symbol": "TIME",
            "decimals": 9,
            "name": "Time",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x485d17a6f1b8780392d53d64751824253011a260.png"
        },
        {
            "address": "0x47EB6F7525C1aA999FBC9ee92715F5231eB1241D",
            "symbol": "MELT",
            "decimals": 18,
            "name": "Defrost Finance Token",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x47eb6f7525c1aa999fbc9ee92715f5231eb1241d.png"
        },
        {
            "address": "0x1ECd47FF4d9598f89721A2866BFEb99505a413Ed",
            "symbol": "AVME",
            "decimals": 18,
            "name": "AVME",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x1ecd47ff4d9598f89721a2866bfeb99505a413ed.png"
        },
        {
            "address": "0xa5E59761eBD4436fa4d20E1A27cBa29FB2471Fc6",
            "symbol": "SHERPA",
            "decimals": 18,
            "name": "Sherpa",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xa5e59761ebd4436fa4d20e1a27cba29fb2471fc6.png"
        },
        {
            "address": "0x937E077aBaEA52d3abf879c9b9d3f2eBd15BAA21",
            "symbol": "OH",
            "decimals": 18,
            "name": "Oh! Finance",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x937e077abaea52d3abf879c9b9d3f2ebd15baa21.png"
        },
        {
            "address": "0x7b2B702706D9b361dfE3f00bD138C0CFDA7FB2Cf",
            "symbol": "PLN",
            "decimals": 18,
            "name": "Pollen",
            "chain_id": 43114,
            "logo": "https://snowtrace.io/token/images/pollendefi_32.png"
        },
        {
            "address": "0x7086e045b78E1e72F741F25231c08d238812CF8a",
            "symbol": "RACEX",
            "decimals": 18,
            "name": "RaceX",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x7086e045b78e1e72f741f25231c08d238812cf8a.png"
        },
        {
            "address": "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
            "symbol": "DAI.e",
            "decimals": 18,
            "name": "Dai Stablecoin",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png"
        },
        {
            "address": "0x01C2086faCFD7aA38f69A6Bd8C91BEF3BB5adFCa",
            "symbol": "YAY",
            "decimals": 18,
            "name": "YAY Games",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x01c2086facfd7aa38f69a6bd8c91bef3bb5adfca.png"
        },
        {
            "address": "0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64",
            "symbol": "FRAX",
            "decimals": 18,
            "name": "Frax",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x853d955acef822db058eb8505911ed77f175b99e.png"
        },
        {
            "address": "0x846D50248BAf8b7ceAA9d9B53BFd12d7D7FBB25a",
            "symbol": "VSO",
            "decimals": 18,
            "name": "VersoToken",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x846d50248baf8b7ceaa9d9b53bfd12d7d7fbb25a.png"
        },
        {
            "address": "0xbD83010eB60F12112908774998F65761cf9f6f9a",
            "symbol": "BOO",
            "decimals": 18,
            "name": "SpookyToken",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xbd83010eb60f12112908774998f65761cf9f6f9a.png"
        },
        {
            "address": "0x8aE8be25C23833e0A01Aa200403e826F611f9CD2",
            "symbol": "CRAFT",
            "decimals": 18,
            "name": "CRAFT",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x8ae8be25c23833e0a01aa200403e826f611f9cd2.png"
        },
        {
            "address": "0xCE1bFFBD5374Dac86a2893119683F4911a2F7814",
            "symbol": "SPELL",
            "decimals": 18,
            "name": "Spell Token",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x090185f2135308bad17527004364ebcc2d37e5f6.png"
        },
        {
            "address": "0xB1466d4cf0DCfC0bCdDcf3500F473cdACb88b56D",
            "symbol": "WET",
            "decimals": 18,
            "name": "Weble Ecosystem Token",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xb1466d4cf0dcfc0bcddcf3500f473cdacb88b56d.png"
        },
        {
            "address": "0x59414b3089ce2AF0010e7523Dea7E2b35d776ec7",
            "symbol": "YAK",
            "decimals": 18,
            "name": "Yak Token",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x59414b3089ce2af0010e7523dea7e2b35d776ec7.png"
        },
        {
            "address": "0xeEeEEb57642040bE42185f49C52F7E9B38f8eeeE",
            "symbol": "ELK",
            "decimals": 18,
            "name": "Elk",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xeeeeeb57642040be42185f49c52f7e9b38f8eeee.png"
        },
        {
            "address": "0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4",
            "symbol": "XAVA",
            "decimals": 18,
            "name": "Avalaunch",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xd1c3f94de7e5b45fa4edbba472491a9f4b166fc4.png"
        },
        {
            "address": "0x60781C2586D68229fde47564546784ab3fACA982",
            "symbol": "PNG",
            "decimals": 18,
            "name": "Pangolin",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x60781c2586d68229fde47564546784ab3faca982.png"
        },
        {
            "address": "0x5947BB275c521040051D82396192181b413227A3",
            "symbol": "LINK.e",
            "decimals": 18,
            "name": "Chainlink Token",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x697256caa3ccafd62bb6d3aa1c7c5671786a5fd9.png"
        },
        {
            "address": "0xec3492a2508DDf4FDc0cD76F31f340b30d1793e6",
            "symbol": "CLY",
            "decimals": 18,
            "name": "Colony Token",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xec3492a2508ddf4fdc0cd76f31f340b30d1793e6.png"
        },
        {
            "address": "0xB00F1ad977a949a3CCc389Ca1D1282A2946963b0",
            "symbol": "BOOFI",
            "decimals": 18,
            "name": "Boo Finance Token",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xb00f1ad977a949a3ccc389ca1d1282a2946963b0.png"
        },
        {
            "address": "0xA32608e873F9DdEF944B24798db69d80Bbb4d1ed",
            "symbol": "CRA",
            "decimals": 18,
            "name": "CRA",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xa32608e873f9ddef944b24798db69d80bbb4d1ed.png"
        },
        {
            "address": "0x1C20E891Bab6b1727d14Da358FAe2984Ed9B59EB",
            "symbol": "TUSD",
            "decimals": 18,
            "name": "TrueUSD",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x1c20e891bab6b1727d14da358fae2984ed9b59eb.png"
        },
        {
            "address": "0x53f7c5869a859F0AeC3D334ee8B4Cf01E3492f21",
            "symbol": "avWETH",
            "decimals": 18,
            "name": "Aave Avalanche Market WETH",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x030ba81f1c18d280636f32af80b9aad02cf0854e.png"
        },
        {
            "address": "0x783C08b5F26E3daf8C4681F3bf49844e425b6393",
            "symbol": "AUSD",
            "decimals": 18,
            "name": "Avaware USD",
            "chain_id": 43114,
            "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/15807.png"
        },
        {
            "address": "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
            "symbol": "USDC",
            "decimals": 6,
            "name": "USD Coin",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png"
        },
        {
            "address": "0xB15f02F9Da8CD1f99E9dd375F21dc96D25ddd82C",
            "symbol": "HERMES",
            "decimals": 18,
            "name": "HERMES",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xb15f02f9da8cd1f99e9dd375f21dc96d25ddd82c.png"
        },
        {
            "address": "0x346A59146b9b4a77100D369a3d18E8007A9F46a6",
            "symbol": "AVAI",
            "decimals": 18,
            "name": "AVAI",
            "chain_id": 43114,
            "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/12500.png"
        },
        {
            "address": "0x214DB107654fF987AD859F34125307783fC8e387",
            "symbol": "FXS",
            "decimals": 18,
            "name": "Frax Share",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0.png"
        },
        {
            "address": "0xff579d6259dEDcc80488c9b89d2820bCb5609160",
            "symbol": "LVT",
            "decimals": 18,
            "name": "Louverture",
            "chain_id": 43114,
            "logo": "https://tokens.1inch.io/0xff579d6259dedcc80488c9b89d2820bcb5609160.png"
        }
    ]
}

export const MultiCallABI = [{ "inputs": [{ "components": [{ "internalType": "address", "name": "target", "type": "address" }, { "internalType": "bytes", "name": "callData", "type": "bytes" }], "internalType": "struct Multicall3.Call[]", "name": "calls", "type": "tuple[]" }], "name": "aggregate", "outputs": [{ "internalType": "uint256", "name": "blockNumber", "type": "uint256" }, { "internalType": "bytes[]", "name": "returnData", "type": "bytes[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "target", "type": "address" }, { "internalType": "bool", "name": "allowFailure", "type": "bool" }, { "internalType": "bytes", "name": "callData", "type": "bytes" }], "internalType": "struct Multicall3.Call3[]", "name": "calls", "type": "tuple[]" }], "name": "aggregate3", "outputs": [{ "components": [{ "internalType": "bool", "name": "success", "type": "bool" }, { "internalType": "bytes", "name": "returnData", "type": "bytes" }], "internalType": "struct Multicall3.Result[]", "name": "returnData", "type": "tuple[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "target", "type": "address" }, { "internalType": "bool", "name": "allowFailure", "type": "bool" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "bytes", "name": "callData", "type": "bytes" }], "internalType": "struct Multicall3.Call3Value[]", "name": "calls", "type": "tuple[]" }], "name": "aggregate3Value", "outputs": [{ "components": [{ "internalType": "bool", "name": "success", "type": "bool" }, { "internalType": "bytes", "name": "returnData", "type": "bytes" }], "internalType": "struct Multicall3.Result[]", "name": "returnData", "type": "tuple[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "target", "type": "address" }, { "internalType": "bytes", "name": "callData", "type": "bytes" }], "internalType": "struct Multicall3.Call[]", "name": "calls", "type": "tuple[]" }], "name": "blockAndAggregate", "outputs": [{ "internalType": "uint256", "name": "blockNumber", "type": "uint256" }, { "internalType": "bytes32", "name": "blockHash", "type": "bytes32" }, { "components": [{ "internalType": "bool", "name": "success", "type": "bool" }, { "internalType": "bytes", "name": "returnData", "type": "bytes" }], "internalType": "struct Multicall3.Result[]", "name": "returnData", "type": "tuple[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "getBasefee", "outputs": [{ "internalType": "uint256", "name": "basefee", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "blockNumber", "type": "uint256" }], "name": "getBlockHash", "outputs": [{ "internalType": "bytes32", "name": "blockHash", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getBlockNumber", "outputs": [{ "internalType": "uint256", "name": "blockNumber", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getChainId", "outputs": [{ "internalType": "uint256", "name": "chainid", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCurrentBlockCoinbase", "outputs": [{ "internalType": "address", "name": "coinbase", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCurrentBlockDifficulty", "outputs": [{ "internalType": "uint256", "name": "difficulty", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCurrentBlockGasLimit", "outputs": [{ "internalType": "uint256", "name": "gaslimit", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCurrentBlockTimestamp", "outputs": [{ "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "getEthBalance", "outputs": [{ "internalType": "uint256", "name": "balance", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getLastBlockHash", "outputs": [{ "internalType": "bytes32", "name": "blockHash", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "requireSuccess", "type": "bool" }, { "components": [{ "internalType": "address", "name": "target", "type": "address" }, { "internalType": "bytes", "name": "callData", "type": "bytes" }], "internalType": "struct Multicall3.Call[]", "name": "calls", "type": "tuple[]" }], "name": "tryAggregate", "outputs": [{ "components": [{ "internalType": "bool", "name": "success", "type": "bool" }, { "internalType": "bytes", "name": "returnData", "type": "bytes" }], "internalType": "struct Multicall3.Result[]", "name": "returnData", "type": "tuple[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "requireSuccess", "type": "bool" }, { "components": [{ "internalType": "address", "name": "target", "type": "address" }, { "internalType": "bytes", "name": "callData", "type": "bytes" }], "internalType": "struct Multicall3.Call[]", "name": "calls", "type": "tuple[]" }], "name": "tryBlockAndAggregate", "outputs": [{ "internalType": "uint256", "name": "blockNumber", "type": "uint256" }, { "internalType": "bytes32", "name": "blockHash", "type": "bytes32" }, { "components": [{ "internalType": "bool", "name": "success", "type": "bool" }, { "internalType": "bytes", "name": "returnData", "type": "bytes" }], "internalType": "struct Multicall3.Result[]", "name": "returnData", "type": "tuple[]" }], "stateMutability": "payable", "type": "function" }]