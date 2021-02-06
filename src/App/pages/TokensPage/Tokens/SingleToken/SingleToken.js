import {Avatar, List} from "antd";
import Rate from "../Rate";
import {formatMoney} from "../../../../../utils/formatMoney";
import React from "react";
import './SingleToken.scss';


const SingleToken = ({token}) => {
  return (
    <>
      <List.Item key={token.address}>
        <List.Item.Meta
          avatar={
            <Avatar src={token.logo} />
          }
          title={token.name}
          description={<Rate rate={token.rate} diff={token.dif}/>}
        />
        <div className="tokens-money-cont">
          <div className="dollars">{formatMoney(token.balance,7)} {token.symbol}</div>
          <div className="tokens-money-cont__dollar">${formatMoney(token.price,2)}</div>
        </div>
      </List.Item>
      </>
  )
}

export default SingleToken