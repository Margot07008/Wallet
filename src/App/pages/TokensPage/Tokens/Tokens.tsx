import * as React from 'react';
import './Tokens.scss';
import { List } from 'antd';
import SingleToken from './SingleToken';
import { EthTokenArr } from '@store/models/tokens/ethToken';
import TokensStore from '@store/TokensStore';

type Props = {
    tokens: EthTokenArr;
    store: TokensStore;
};

const Tokens: React.FC<Props> = ({ store, tokens }) => {
    return (
        <div className="tokens-list">
            <List
                dataSource={tokens}
                renderItem={(token) => <SingleToken store={store} token={token} />}
            />
        </div>
    );
};

export default Tokens;
