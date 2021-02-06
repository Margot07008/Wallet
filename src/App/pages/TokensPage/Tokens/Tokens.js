import * as React from 'react';
import * as antd from "antd";
import './Tokens.css';
import {formatMoney} from "../../../../utils/formatMoney";
const {  List, Avatar  } = antd;

const Rate = ({rate, diff}) => {
  if (diff > 0) {
    return (
      <>
        <span className={'tokens-one-dollar'}>{`$${formatMoney(rate,2)} `}</span>
        <span className={'stonks'}>{`(+${diff}%)`}</span>
      </>
    )
  }
  return (
    <>
      <span>{`$${formatMoney(rate,2)} `}</span>
      <span className={'not-stonks'}>{`(${diff}%)`}</span>
    </>
  )
}


const Tokens = ({tokens}) => {
    return (
      <div className="tokens-list">
          <List
            dataSource={tokens}
            renderItem={token => (
              <List.Item key={token.address}>
                <List.Item.Meta
                  avatar={
                    <Avatar src={token.logo} />
                  }
                  title={token.name}
                  description={<Rate rate={token.rate} diff={token.dif}/>}
                />
                <div className={'tokens-money-cont'}>
                  <div className={'tokens-money-cont__crypt'}>{formatMoney(token.balance,7)} {token.symbol}</div>
                  <div className={'tokens-money-cont__dollar'}>{'$'+formatMoney(token.price,2)}</div>
                </div>
              </List.Item>
            )}
          >
          </List>
      </div>
    )
};

export default Tokens;