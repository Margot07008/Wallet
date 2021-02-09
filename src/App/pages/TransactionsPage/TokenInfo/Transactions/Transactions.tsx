import { List } from 'antd';
import * as React from 'react';
import SingleTrans from './SingleTrans';
import './Transactions.scss';
import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {apikey, apiUrl, getAddressHistoryByToken} from "../../../../../config";
import {cleanup} from "@testing-library/react";
import {createListOfTransactions} from "../../../../../utils/CreateTransactions";

const Transactions = () => {

    // @ts-ignore
    const {address}  = useParams();
    const history = useHistory();
    const searchToken = history.location.search.slice(1);

    const [transactions, uploadTransactions] = useState([]);

    useEffect(() => {
        const makeRequest = async () => {
            axios({
                method: 'get',
                url: `${apiUrl}${getAddressHistoryByToken}${address}${apikey}&${searchToken}`,
            }).then((response) => {
                // @ts-ignore
                uploadTransactions(createListOfTransactions(response.data.operations));
            });
        }


        makeRequest();
        return  cleanup();
    }, [])

    // @ts-ignore

    const reqAddress = address;
    return (
        <div className="transactions-list">
            <List
                dataSource={transactions}
                renderItem={(trans) => <SingleTrans trans={trans} reqAddress={reqAddress} />}
            ></List>
        </div>
    );
};

export default Transactions;
