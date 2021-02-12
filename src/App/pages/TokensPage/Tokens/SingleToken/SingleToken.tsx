import * as React from 'react';
import { List } from 'antd';
import './SingleToken.scss';
import { urls } from '@config/apiUrls';
import { Link, useHistory } from 'react-router-dom';
import TokenListMeta from './TokenListMeta';
import { EthToken } from '@store/models/tokens/ethToken';
import TokenInfoStore from '@store/TokenInfoStore';

type Props = {
    token: EthToken;
    storeTokenInfo: TokenInfoStore;
};

const SingleToken: React.FC<Props> = ({ token, storeTokenInfo }) => {
    const history = useHistory();
    const addressWallet = history.location.pathname.split('/tokens/')[1];

    return (
        <>
            <Link to={urls.TRANS.create(addressWallet, token?.address)}>
                <List.Item key={token?.address}>
                    <TokenListMeta token={token} />
                    <div className="tokens-money-cont">
                        <div className="dollars">
                            {token?.balance} {token?.symbol}
                        </div>
                        <div className="tokens-money-cont__dollar">${token?.price}</div>
                    </div>
                </List.Item>
            </Link>
        </>
    );
};

export default SingleToken;
