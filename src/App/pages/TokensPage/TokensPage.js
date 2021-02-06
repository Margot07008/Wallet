import * as React from 'react';
import NavBar from "../../../components/NavBar";
import SummaryCash from "./SummaryCash";
import Tokens from "./Tokens";
import {someTokens} from "../../../utils/constants";
import {formatMoney} from "../../../utils/formatMoney";

const CreateTokens = () => {
  let totalSum = 0;
  const tokensForRender = [];
  tokensForRender.push({
    address: someTokens.address,
    symbol: 'ETH',
    name: 'Ethereum',
    balance: someTokens.ETH.balance,
    price: someTokens.ETH.balance*someTokens.ETH.price.rate,
    logo: '',
    rate: someTokens.ETH.price.rate,
    dif: someTokens.ETH.price.diff,
  });
  totalSum += tokensForRender[0].price;
  if (someTokens.tokens) {
    someTokens.tokens.forEach((item)=>{
      if (item.tokenInfo.price !== false) {
        const itemInfo = item.tokenInfo;
        const itemBalance = item.balance/Math.pow(10, itemInfo.decimals);

        const tmpPrice = itemBalance*itemInfo.price.rate;

        totalSum+=tmpPrice;

        tokensForRender.push({
          address: itemInfo.address,
          symbol: itemInfo.symbol,
          name: itemInfo.name,
          balance: itemBalance,
          price: tmpPrice,
          logo: itemInfo.image ? 'https://ethplorer.io'+itemInfo.image : '',
          rate: itemInfo.price.rate,
          dif: itemInfo.price.diff,
        });
      }
    })
  }

  return {tokens: tokensForRender, totalSum: totalSum};
};

const TokensPage = () => {
  const listOfToken = CreateTokens();
  return (
    <>
      <NavBar/>
      <SummaryCash totalSum={formatMoney(listOfToken.totalSum, 2)}/>
      <Tokens tokens={listOfToken.tokens}/>
    </>
  )
};

export default TokensPage;