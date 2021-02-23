import * as React from "react";
import {useContext, useState} from "react";
import {Card, Typography} from "antd";
import {replaceAll} from "@utils/replaceALl";
import {formatMoney} from "@utils/formatMoney";
import {CopyOutlined} from "@ant-design/icons";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {TransDetailsContext} from "../TransDetailsPage";
import TransHashCopy from "./TransHashCopy";

const {Title} = Typography;

type Props = {
    params: {
        hash: string, coins: string, rate: string
    }
}

const TransCard: React.FC<Props> = ({params}) => {

    const store = useContext(TransDetailsContext);

    const date = new Date(store.details.timestamp * 1000);
    const balanceReplace = replaceAll(params.coins, ',', '');
    const usdBalance = formatMoney((Number(params.rate) * Number(balanceReplace)).toFixed(2), 2)

    return (
        <div className="trans-details-page">
            <div className="monitor-info">
                <Title level={2} style={{color: 'white'}}> Transaction Details</Title>
            </div>
            <TransHashCopy hash={store.details.hash}/>
            <Card title="Status" size="small" bordered={true} style={{width: '100%', borderRadius: '0'}}>
                {store.details.success && "Success"}
                {!store.details.success && "Failed"}
            </Card>
            <Card title="Block" size="small" bordered={true} style={{width: '100%', borderRadius: '0'}}>
                {store.details.blockNumber}
            </Card>
            <Card title="Value USD" size="small" bordered={true} style={{width: '100%', borderRadius: '0'}}>
                ${usdBalance}
            </Card>
            <Card title="Value in token" size="small" bordered={true} style={{width: '100%', borderRadius: '0'}}>
                {params.coins} {store.details.symbol}
            </Card>
            <Card title="From" size="small" bordered={true}
                  style={{width: '100%', borderRadius: '0', wordBreak: 'break-all'}}>
                {store.details.from}
            </Card>
            <Card title="To" size="small" bordered={true}
                  style={{width: '100%', borderRadius: '0', wordBreak: 'break-all'}}>
                {store.details.to}
            </Card>
            <Card title="Gas Limit" size="small" bordered={true} style={{width: '100%', borderRadius: '0'}}>
                {store.details.gasLimit}
            </Card>
            <Card title="Gas Used by Transaction" size="small" bordered={true}
                  style={{width: '100%', borderRadius: '0'}}>
                {store.details.gasUsed}
            </Card>
            <Card title="Timestamp" size="small" bordered={true} style={{width: '100%', borderRadius: '0'}}>
                {date.toDateString()} at {date.getHours()}:{date.getMinutes()}
            </Card>
        </div>
    )
}

export default TransCard;