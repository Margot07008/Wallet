import {formatMoney} from "../../../../../utils/formatMoney";
import './Rate.scss';
import * as React from "react";

type Props = {
    rate?: string,
    diff?: string,
};


const Rate: React.FC<Props> = ({rate, diff}) => {
  if (Number(diff) > 0) {
    return (
      <>
        <span className="dollars">{`$${formatMoney(rate,2)} `}</span>
        <span className="stonks stonks_up">{`(+${diff}%)`}</span>
      </>
    )
  } else if (Number(diff) < 0) {
    return (
      <>
        <span className="dollars">{`$${formatMoney(rate,2)} `}</span>
        <span className="stonks stonks_down">{`(${diff}%)`}</span>
      </>
    )
  } else {
    return (
      <>
        <span className="dollars">{`$${formatMoney(rate,2)} `}</span>
        <span className="stonks stonks_static">{`(${diff}%)`}</span>
      </>
    )
  }

}

export default Rate;