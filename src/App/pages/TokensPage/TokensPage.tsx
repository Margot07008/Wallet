import * as React from 'react';
import NavBar from '../../../components/NavBar';
import SummaryCash from './SummaryCash';
import Tokens from './Tokens';
import { CreateTokens } from '../../../utils/CreateTokens';
import {useEffect, useState} from "react";
import {someTokens} from "../../../utils/mocks";
import axios from "axios";

const TokensPage = () => {

    const [listOfTokens, getListOfTokens] = useState([{}]);

    useEffect(() => {
        axios({
            method: 'get',
            url: ''
        })
    },[])

    // @ts-ignore
    const listOfToken = CreateTokens(someTokens);
    return (
        <>
            <NavBar title={'Wallet'} subtitle={'Check your money'} />
            <SummaryCash totalSum={String(listOfToken.totalSum)} />
            <Tokens tokens={listOfToken.tokens} />
        </>
    );
};

export default TokensPage;
