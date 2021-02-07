import * as React from 'react';
import './Tokens.scss';
import {  List  } from "antd";
import SingleToken from "./SingleToken";

type Props = {
    tokens: {
        address: string,
        symbol: string,
        name: string,
        balance: string,
        price: string,
        logo: string,
        rate: string,
        dif: string,
    }[];
};


const Tokens: React.FC<Props> = ({tokens}) => {
    return (
      <div className="tokens-list">
          <List
            dataSource={tokens}
            renderItem={token => (
              <SingleToken token={token} />
            )}
          >
          </List>
      </div>
    )
};

export default Tokens;