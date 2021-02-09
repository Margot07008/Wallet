import * as React from 'react';
import { List } from 'antd';
import './SingleToken.scss';
import {urls} from "../../../../../config";
import {Link, useHistory} from "react-router-dom";
import TokenListMeta from "./TokenListMeta";


type Props = {
    token?: {
        address?: string;
        logo?: string;
        name?: string;
        rate?: string;
        dif?: string;
        balance?: string;
        symbol?: string;
        price?: string;
    };
};



const SingleToken: React.FC<Props> = ({ token }) => {
    const history = useHistory();
    const addressWallet = history.location.pathname.split('/tokens/')[1];

    return (
        <>
            <Link to={urls.TRANS.create(addressWallet, token?.address)} onClick={()=>{}} >
            <List.Item key={token?.address}>
                <TokenListMeta token={token}/>
                <div className="tokens-money-cont">
                    <div className="dollars">
                        {token?.balance} {token?.symbol}
                    </div>
                    <div className="tokens-money-cont__dollar">${token?.price}</div>
                </div>
            </List.Item>
            </Link>
        </>
    );
};

export default SingleToken;
