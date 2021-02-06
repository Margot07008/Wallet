import * as React from 'react';
import './Tokens.scss';
import {  List  } from "antd";
import SingleToken from "./SingleToken";


const Tokens = ({tokens}) => {
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