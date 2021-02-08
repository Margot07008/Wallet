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

const SingleTrans: React.FC<Props> = ({ trans, reqAddress }) => {
    const isSend = reqAddress === trans.from;
    const description = isSend
        ? `To: ${trans.to.slice(2, 7)}...${trans.to.slice(37)}`
        : `From: ${trans.from.slice(2, 7)}...${trans.from.slice(37)}`;
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
