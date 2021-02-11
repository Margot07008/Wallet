import * as React from 'react';
import './Tokens.scss';
import { List } from 'antd';
import SingleToken from './SingleToken';
import {EthTokenArr} from "@store/models/tokens/ethToken";
import TokenInfoStore from "@store/TokenInfoStore";

type Props = {
    tokens: EthTokenArr,
    storeTokenInfo: TokenInfoStore,
};

const Tokens: React.FC<Props> = ({ tokens,storeTokenInfo }) => {

    return (
        <div className="tokens-list">
            <List dataSource={tokens} renderItem={(token) => <SingleToken storeTokenInfo={storeTokenInfo} token={token} />} />
        </div>
    );
};

export default Tokens;
