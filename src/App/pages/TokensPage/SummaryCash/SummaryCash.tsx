import * as React from 'react';
import { Typography } from 'antd';
import './SummaryCash.scss';
import { useContext } from 'react';
import { TokensContext } from '../TokensPage';

const { Title, Text } = Typography;

const SummaryCash = () => {
    const store = useContext(TokensContext);

    return (
        <div className="monitor">
            <Title id="monitor__summary" level={2}>
                ${store?.repos.totalSum}
            </Title>
            <Text id="monitor__pubkey" type="secondary">
                readonly
            </Text>
        </div>
    );
};

export default SummaryCash;
