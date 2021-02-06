import {formatMoney} from "../../../../../utils/formatMoney";
import './Rate.scss';


const Rate = ({rate, diff}) => {
  if (diff > 0) {
    return (
      <>
        <span className="dollars">{`$${formatMoney(rate,2)} `}</span>
        <span className="stonks stonks_up">{`(+${diff}%)`}</span>
      </>
    )
  }
  return (
    <>
      <span className="dollars">{`$${formatMoney(rate,2)} `}</span>
      <span className="stonks stonks_down">{`(${diff}%)`}</span>
    </>
  )
}

export default Rate;