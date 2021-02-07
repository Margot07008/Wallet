import {someTokens} from "./constants";

export const CreateTokens = () => {
  let totalSum = 0;
  const tokensForRender = [];
  const ethBalance = someTokens.ETH.balance * someTokens.ETH.price.rate;
  tokensForRender.push({
    address: String(someTokens.address),
    symbol: 'ETH',
    name: 'Ethereum',
    balance: String(someTokens.ETH.balance),
    price: String(ethBalance),
    logo: '',
    rate: String(someTokens.ETH.price.rate),
    dif: String(someTokens.ETH.price.diff),
  });
  totalSum += ethBalance;
  if (someTokens.tokens) {
    someTokens.tokens.forEach((item) => {
      if (item.tokenInfo.price) {
        const itemInfo = item.tokenInfo;

        const itemBalance = item.balance / Math.pow(10, Number(itemInfo.decimals));

        const tmpPrice = itemBalance * itemInfo.price.rate;

        totalSum += tmpPrice;

        tokensForRender.push({
          address: String(itemInfo.address),
          symbol: String(itemInfo.symbol),
          name: String(itemInfo.name),
          balance: String(itemBalance),
          price: String(tmpPrice),
          logo: itemInfo.image ? 'https://ethplorer.io' + itemInfo.image : '',
          rate: String(itemInfo.price.rate),
          dif: String(itemInfo.price.diff),
        });
      }
    })
  }

  return {tokens: tokensForRender, totalSum};
};