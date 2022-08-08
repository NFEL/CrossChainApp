// import Cache from 'timed-cache';

// const cache = new Cache({ defaultTtl: 5 * 60 * 1000 });
// const CMC_API_KEY = "f2c809d5-59cd-49c0-8edb-d8de06056644";
// const CMC_CACHE_KEY = 'cmcCachedPrices';
// async function cmcPrices(symbol) {
//   var cmcCachedPrices = cache.get(CMC_CACHE_KEY);
//   if (!cmcCachedPrices) {

//     const fetchRes = await (
//       await fetch(
//         // 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest',
//         "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD",
//         { headers: { "X-CMC_PRO_API_KEY": CMC_API_KEY } })
//     ).json()
//     //
//     cache.put(CMC_CACHE_KEY, fetchRes)
//     cmcCachedPrices = fetchRes;
//     console.log(fetchRes);
//   }
//   Object.values(cmcCachedPrices).forEach(token => {
//     if (token.symbol == symbol) {
//       return token.quote.USD.price;
//     }
//   });

// }

// https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd

// import { CoinGecko } from "coingecko-api";
import { CoinGeckoIds } from "./../Constants";

export const getTokenPrice = async (tokenSymbol) => {
  // const CoinGeckoClient = new CoinGecko();
  // CoinGeckoClient.coins.fetch(CoinGeckoIds[tokenSymbol]).then((data) => console.log(data))

  const tokenId = CoinGeckoIds[tokenSymbol.toLowerCase()];
  if (!tokenId) {
    return null;
  }
  else {

    try {
      const fetchRes = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${tokenId}&vs_currencies=usd`,
      )
        .then((response) => response.json())
        .then((data) => {
          return data;
        });
      const price = fetchRes[tokenId].usd;
      return price || 1;
    }
    catch (error) {
      console.error({ errorOnGetTokenPrice: error });
      return null;

    }
  }
  // console.log(cmcPrices(tokenSymbol).then((data) => { return data }));

  // formattedData:
  // exchangeAddress: "0x1f98431c8ad98523631ae4a59f267346ea31f984"
  // exchangeName: "Uniswap v3"
  // formattedNative: "0.005269 ETH"
  // formattedUsd: "$9.09"
  // nativePrice:
  // decimals: 18
  // name: "Ether"
  // symbol: "ETH"
  // value: "5268878710433216"
  // [[Prototype]]: Object
  // usdPrice: 9.093794575981569
};
