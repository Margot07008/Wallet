import * as React from "react";
import {List} from "antd";
import './SingleTrans.scss';



type Props = {
    trans: {
        transactionHash: string,
        timestamp: string,
        balance: string,
        to: string,
        from: string,
        symbol: string,
    };
    reqAddress: string
};

const SingleTrans: React.FC<Props> = ({trans, reqAddress}) => {
    const isSend = reqAddress === trans.from;
    const description = isSend ? `To: ${trans.to} `: `From: ${trans.from}`;

    return(
        <>
            <List.Item key={trans.transactionHash}>
                <List.Item.Meta
                    title={trans.timestamp}
                    description={description}
                />
                <div className={`transactions-list-balance ${isSend?'stonks_down':'stonks_up'}`}>{isSend ? '-' : ''}{trans.balance} {trans.symbol}</div>
            </List.Item>
        </>
    )
}

export default SingleTrans;