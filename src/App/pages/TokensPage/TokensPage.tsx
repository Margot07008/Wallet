import * as React from 'react';
import NavBar from "../../../components/NavBar";
import SummaryCash from "./SummaryCash";
import Tokens from "./Tokens";
import {formatMoney} from "../../../utils/formatMoney";
import {CreateTokens} from "../../../utils/CreateTokens";


const TokensPage = () => {
  const listOfToken = CreateTokens();
  const totalSum = formatMoney(listOfToken.totalSum, 2);
  return (
    <>
      <NavBar/>
      <SummaryCash totalSum={String(totalSum)}/>
      <Tokens tokens={listOfToken.tokens}/>
    </>
  )
};

export default TokensPage;