import * as React from 'react';
import Coin from './Coin';
import './TokenInfo.scss';
import DisplayToken from './DisplayToken';
import TokenInfoStore from '@store/TokenInfoStore';
import { useContext } from 'react';
import { TransInfoContext } from '../TransactionsPage';

const TokenInfo = () => {
    const store = useContext(TransInfoContext);

    return (
        <>
            <div className="token-info-block">
                <Coin rate={store.repos.tokenInfo.rate} dif={store.repos.tokenInfo.dif} />
                <DisplayToken
                    logo={store.repos.tokenInfo.logo}
                    balance={store.repos.tokenInfo.totalCrypto}
                    price={store.repos.tokenInfo.totalDollar}
                    symbol={store.repos.tokenInfo.symbol}
                />
            </div>
        </>
    );
};

export default TokenInfo;
