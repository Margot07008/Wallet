import * as React from 'react';
import Coin from './Coin';
import './TokenInfo.scss';
import DisplayToken from './DisplayToken';
import Transactions from './Transactions';
import TokenInfoStore from '@store/TokenInfoStore';

type Props = {
    storeTrans: TokenInfoStore;
};

const TokenInfo: React.FC<Props> = ({ storeTrans }) => {
    return (
        <>
            <div className="token-info-block">
                <Coin rate={storeTrans.repos.tokenInfo.rate} dif={storeTrans.repos.tokenInfo.dif} />
                <DisplayToken
                    logo={storeTrans.repos.tokenInfo.logo}
                    balance={storeTrans.repos.tokenInfo.totalCrypto}
                    price={storeTrans.repos.tokenInfo.totalDollar}
                    symbol={storeTrans.repos.tokenInfo.symbol}
                />
            </div>
            <Transactions storeTrans={storeTrans} />
        </>
    );
};

export default TokenInfo;
