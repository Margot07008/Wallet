import * as React from 'react';
import NavBar from '../../../components/NavBar';
import SummaryCash from './SummaryCash';
import Tokens from './Tokens';
import { CreateTokens } from '../../../utils/CreateTokens';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {apikey, apiUrl, getAddressInfo} from "../../../config";


const TokensPage = () => {

    // @ts-ignore
    const {id}  = useParams();
    const [clearData, setTokens] = useState({totalSum: '', tokens: []});


    useEffect(() => {
        const makeRequest = async () => {
            axios({
                method: 'get',
                url: `${apiUrl}${getAddressInfo}${id}${apikey}`,
            }).then((response) => {
                // @ts-ignore
                setTokens(CreateTokens(response.data));
            });
        };

        makeRequest();
    }, []);


    return (
        <>
            <NavBar title={'Wallet'} subtitle={'Check your money'} />
            <SummaryCash totalSum={String(clearData.totalSum)} />
            <Tokens tokens={clearData.tokens} />
        </>
    );
};

export default TokensPage;
