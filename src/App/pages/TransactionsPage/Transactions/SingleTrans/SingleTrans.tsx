import * as React from 'react';
import { Avatar, List } from 'antd';
import './SingleTrans.scss';
import Icon from '@ant-design/icons';
import { formatMoney } from '@utils/formatMoney';
import { ReactComponent as SendIcon } from '@img/send.svg';
import { ReactComponent as Receive } from '@img/receive.svg';
import {replaceAll} from "@utils/replaceALl";

type Props = {
    trans: {
        transactionHash: string;
        timestamp: string;
        balance: string;
        to: string;
        from: string;
        symbol: string;
    };
    reqAddress: string;
    rate: string;
};

const shortAddress = (trans: string) => {
    return `${trans.slice(0, 5)}..${trans.slice(37)}`;
};

const SingleTrans: React.FC<Props> = ({ trans, reqAddress, rate }) => {
    const isSend = reqAddress.toUpperCase() === trans.from.toUpperCase();
    const description = isSend
        ? `To: ${shortAddress(trans.to)}`
        : `From: ${shortAddress(trans.from)}`;
    const style = isSend ? 'red' : 'green';
    const icon = isSend ? <Icon component={SendIcon} /> : <Icon component={Receive} />;
    const balanceReplace = replaceAll(trans.balance, ',', '');


    return (
        <>
            <List.Item key={trans.transactionHash}>
                <List.Item.Meta
                    title={trans.timestamp}
                    description={description}
                    avatar={
                        <Avatar
                            size={'small'}
                            icon={icon}
                            style={{ color: `${style}`, background: 'white', fontSize: '4rem' }}
                        />
                    }
                />
                <div className="tokens-money-cont">
                    <div className={`tokens-money-cont__crypt `}>
                        {isSend ? '-' : ''}$
                        {formatMoney((Number(rate) * Number(balanceReplace)).toFixed(2), 2)}
                    </div>
                    <div
                        className={`tokens-money-cont__dollar ${
                            isSend ? 'stonks_down' : 'stonks_up'
                        }`}
                    >
                        {isSend ? '-' : ''}
                        {Number(rate) < 1 && formatMoney(balanceReplace, 3)}
                        {Number(rate) >= 1 && formatMoney(balanceReplace, 7)}
                        {trans.symbol}
                    </div>
                </div>
            </List.Item>
        </>
    );
};

export default SingleTrans;
