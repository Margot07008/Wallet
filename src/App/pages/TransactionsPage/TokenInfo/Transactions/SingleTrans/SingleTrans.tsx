import * as React from 'react';
import { Avatar, List } from 'antd';
import './SingleTrans.scss';
import { ToTopOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';

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
};

const shortAddress = (trans: string) => {
    return `${trans.slice(2, 7)}...${trans.slice(37)}`;
};

const SingleTrans: React.FC<Props> = ({ trans, reqAddress }) => {
    const isSend = reqAddress.toUpperCase() === trans.from.toUpperCase();
    const description = isSend
        ? `To: ${shortAddress(trans.to)}`
        : `From: ${shortAddress(trans.from)}`;
    const style = isSend ? 'red' : 'green';
    const icon = isSend ? <ToTopOutlined /> : <VerticalAlignBottomOutlined />;

    return (
        <>
            <List.Item key={trans.transactionHash}>
                <List.Item.Meta
                    title={trans.timestamp}
                    description={description}
                    avatar={
                        <Avatar
                            size={'large'}
                            icon={icon}
                            style={{ color: `${style}`, background: 'white' }}
                        />
                    }
                />
                <div
                    className={`transactions-list-balance ${isSend ? 'stonks_down' : 'stonks_up'}`}
                >
                    {isSend ? '-' : ''}
                    {trans.balance} {trans.symbol}
                </div>
            </List.Item>
        </>
    );
};

export default SingleTrans;
