import * as React from 'react';
import Rate from "./Rate";
import {formatMoney} from "../../../../../utils/formatMoney";
import {Avatar, List} from "antd";
import './SingleToken.scss';
import {FrownOutlined} from "@ant-design/icons";


type Props = {
    token?: {
        address?: string,
        logo?: string,
        name?: string,
        rate?: string,
        dif?: string,
        balance?: string,
        symbol?: string,
        price?: string,
    };
};


const SingleToken: React.FC<Props> = ({token}) => {
    return (
    <>
      <List.Item key={token?.address}>
        <List.Item.Meta
          avatar={
            <Avatar src={token?.logo} icon={<FrownOutlined />} style={{color: '#f56a00', background: '#fde3cf'}}/>
          }
          title={token?.name}
          description={<Rate rate={token?.rate} diff={token?.dif}/>}
        />
        <div className="tokens-money-cont">
          <div className="dollars">{token?.balance} {token?.symbol}</div>
          <div className="tokens-money-cont__dollar">${token?.price}</div>
        </div>
      </List.Item>
      </>
  )
}

export default SingleToken