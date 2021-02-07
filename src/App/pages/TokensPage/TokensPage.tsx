import * as React from 'react';
import NavBar from "../../../components/NavBar";
import SummaryCash from "./SummaryCash";
import Tokens from "./Tokens";
import {formatMoney} from "../../../utils/formatMoney";
import {CreateTokens} from "../../../utils/CreateTokens";


const TokensPage = () => {
  const listOfToken = CreateTokens();
  return (
    <>
      <NavBar title={'Wallet'} subtitle={'Check your money'}/>
      <SummaryCash totalSum={String(listOfToken.totalSum)}/>
      <Tokens tokens={listOfToken.tokens}/>
    </>
  )
};

export default TokensPage;