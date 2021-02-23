import './Rate.scss';
import * as React from 'react';
import {replaceAll} from "@utils/replaceALl";
import {formatMoney} from "@utils/formatMoney";
import {roundedRateTokens} from "@utils/roundedRateTokens";

type Props = {
    rate: string;
    diff: string;
};



const Rate: React.FC<Props> = ({ rate, diff }) => {
    const numDiff = Number(diff);
    const diffClassName = `stonks ${
        numDiff > 0 ? 'stonks_up' : numDiff < 0 ? 'stonks_down' : 'stonks_static'
    }`;
    return (
        <>
            <span className="dollars">{`$${roundedRateTokens(rate)} `}</span>
            <span className={diffClassName}>{`(${numDiff > 0 ? '+' : ''}${diff}%)`}</span>
        </>
    );
};

export default Rate;
