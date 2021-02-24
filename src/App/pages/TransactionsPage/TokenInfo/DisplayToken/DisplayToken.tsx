import React from 'react';
import { Avatar } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import './DisplayToken.scss';
import imgEth from '@img/ethereum.png';
import { replaceAll } from '@utils/replaceALl';
import { formatMoney } from '@utils/formatMoney';

type Props = {
    logo: string;
    balance: string;
    price: string;
    symbol: string;
};

const DisplayToken: React.FC<Props> = ({ logo, balance, price, symbol }) => {
    const clearPrice = formatMoney(Number(replaceAll(price, ',', '')).toFixed(2), 2);

    return (
        <div className="personal-token-info">
            <Avatar
                src={symbol === 'ETH' ? imgEth : logo}
                size={64}
                icon={<QuestionCircleOutlined />}
                style={{ fontSize: '11rem', color: '#d3adf7', background: 'white' }}
            />
            <div className="personal-token-info__balance">${clearPrice}</div>
            <div className="personal-token-info__price">
                {balance} {symbol}
            </div>
        </div>
    );
};

export default DisplayToken;
