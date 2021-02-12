import React from 'react';
import { Avatar } from 'antd';
import { FrownOutlined } from '@ant-design/icons';
import './DisplayToken.scss';
import imgEth from '@img/ethereum.png';

type Props = {
    logo: string;
    balance: string;
    price: string;
    symbol: string;
};

const DisplayToken: React.FC<Props> = ({ logo, balance, price, symbol }) => {
    return (
        <div className="personal-token-info">
            <Avatar
                src={symbol === 'ETH' ? imgEth : logo}
                size={64}
                icon={<FrownOutlined />}
                style={{ color: '#f56a00', background: 'white' }}
            />
            <div className="personal-token-info__balance">
                {balance} {symbol}
            </div>
            <div className="personal-token-info__price">≈${price}</div>
        </div>
    );
};

export default DisplayToken;
