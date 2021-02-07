import * as React from "react";
import './Coin.scss';
import '../../../TokensPage/Tokens/SingleToken/Rate/Rate.scss';


type Props = {
    rate: string,
    dif: string,
}

const Coin: React.FC<Props> = ({rate, dif}) => {
    const diff = Number(dif);
    return (
        <>
            <div className="coin-line">
                <div className="coin-line__coin">COIN</div>
                <div className="coin-line-right">
                    <div className="dollars coin-line-right__dollars">${rate}</div>
                    <div className={diff > 0?'stonks_up' : (diff < 0? 'stonks_down' : 'stonks_static')}>{dif}%</div>
                </div>
            </div>
        </>
    )
}

export default Coin;