import * as React from 'react';
import { List } from 'antd';
import './SingleToken.scss';
import { urls } from '@config/apiUrls';
import { Link, useHistory } from 'react-router-dom';
import TokenListMeta from './TokenListMeta';
import { EthToken } from '@store/models/tokens/ethToken';
import { formatMoney } from '@utils/formatMoney';
import { replaceAll } from '@utils/replaceALl';

type Props = {
    token: EthToken;
};

const SingleToken: React.FC<Props> = ({ token }) => {
    const history = useHistory();
    const addressWallet = history.location.pathname.split('/tokens/')[1];
    const rate = Number(replaceAll(token.rate, ',', ''));
    console.log(token.rate, rate);

    return (
        <>
            <Link to={urls.TRANS.create(addressWallet, token?.address)}>
                <List.Item key={token?.address}>
                    <TokenListMeta token={token} />
                    <div className="tokens-money-cont">
                        <div className="tokens-money-cont__crypt">${token?.price}</div>
                        <div className="tokens-money-cont__dollar">
                            {rate < 1 && formatMoney(replaceAll(token.balance, ',', ''), 3)}
                            {rate >= 1 && token.balance}
                            {token.symbol}
                        </div>
                    </div>
                </List.Item>
            </Link>
        </>
    );
};

export default SingleToken;
