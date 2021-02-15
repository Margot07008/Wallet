import * as React from 'react';
import './Tokens.scss';
import { List } from 'antd';
import SingleToken from './SingleToken';
import { useContext } from 'react';
import { TokensContext } from '../TokensPage';

const Tokens = () => {
    const store = useContext(TokensContext);
    return (
        <div className="tokens-list">
            <List
                dataSource={store.repos.tokens}
                renderItem={(token) => <SingleToken token={token} />}
            />
        </div>
    );
};

export default Tokens;
