import { Avatar, List } from 'antd';
import img from '@img/ethereum.png';
import { QuestionCircleOutlined } from '@ant-design/icons';
import Rate from './Rate';
import * as React from 'react';

// @ts-ignore
const TokenListMeta = ({ token }) => {
    return (
        <List.Item.Meta
            avatar={
                <Avatar
                    src={token?.symbol === 'ETH' ? img : token?.logo}
                    icon={<QuestionCircleOutlined />}
                    style={{ fontSize: '6rem', color: '#d3adf7', background: 'white' }}
                />
            }
            title={token.name}
            description={<Rate rate={token.rate} diff={token.dif} />}
        />
    );
};

export default TokenListMeta;
