import * as React from 'react';
import './Coin.scss';
import '../../../../../styles/variables.scss';

type Props = {
    rate: string;
    dif: string;
};

const Coin: React.FC<Props> = ({ rate, dif }) => {
    const diff = Number(dif);
    return (
        <>
            <div className="coin-line">
                <div className="coin-line__coin">COIN</div>
                <div className="coin-line-right">
                    <div className="dollars coin-line-right__dollars">${rate}</div>
                    <div
                        className={
                            diff > 0 ? 'stonks_up' : diff < 0 ? 'stonks_down' : 'stonks_static'
                        }
                    >
                        {diff > 0 ? '+' : ''}
                        {dif}%
                    </div>
                </div>
            </div>
        </>
    );
};

export default Coin;
