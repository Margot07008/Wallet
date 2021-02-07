import {someTransaction} from "../../../../../utils/mocks";
import {formatMoney} from "../../../../../utils/formatMoney";
import {List} from "antd";
import * as React from "react";
import SingleTrans from "./SingleTrans";
import {convertDate} from "../../../../../utils/convertDate";
import './Transactions.scss';


const createListOfTransactions = (list: any[]) => {
    let formedList: {transactionHash: string; timestamp: string; balance: string; to: string; from: string; symbol: string; }[] = [];
    list.forEach((item) => {
        formedList.push({
            transactionHash: item.transactionHash,
            timestamp: convertDate(item.timestamp),
            balance: String(formatMoney(item.value / Math.pow(10, item.tokenInfo.decimals), 7)),
            to: item.to,
            from: item.from,
            symbol: item.tokenInfo.symbol,
        }
        )
        console.log(new Date(item.timestamp));
    })
    return formedList;
}

const Transactions = () => {
    const listOfTrans = createListOfTransactions(someTransaction.operations);
    const reqAddress = '0xc88f7666330b4b511358b7742dc2a3234710e7b1'; //TODO как только буду игратьсь с запросами, буду оттуда брать адрес кошелька, по которому ищем инфу
    return (
        <div className="transactions-list">
            <List
                dataSource={listOfTrans}
                renderItem={trans => (
                    <SingleTrans trans={trans} reqAddress={reqAddress}/>
                )}
            >
            </List>
        </div>
    )
}

export default Transactions;