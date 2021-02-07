import React from "react";
import Coin from "./Coin";
import './TokenInfo.scss';
import DisplayToken from "./DisplayToken";

const tokenInfo = {
    logo: 'https://ethplorer.io/images/tether.png',
    name: 'Ethereum',
    rate: '1705.54',
    dif: '3.13',
    balance: '69.8072392',
    symbol: 'ETH',
    price: '119044',
}

const TokenInfo = () => {
    return (
        <div className="token-info-block">
            <Coin rate={tokenInfo.rate} dif={tokenInfo.dif}/>
            <DisplayToken logo={tokenInfo.logo} balance={tokenInfo.balance} price={tokenInfo.price} symbol={tokenInfo.symbol}/>
        </div>
    )
}

export default TokenInfo;