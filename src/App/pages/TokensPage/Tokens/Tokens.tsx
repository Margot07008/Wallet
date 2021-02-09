import * as React from 'react';
import './Tokens.scss';
import {List} from 'antd';
import SingleToken from './SingleToken';
import {createContext, useContext, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {urls} from "../../../../config";


type Props = {
    tokens: {
        address: string;
        symbol: string;
        name: string;
        balance: string;
        price: string;
        logo: string;
        rate: string;
        dif: string;
    }[];
};



const Tokens: React.FC<Props> = ({ tokens }) => {

    return (

        <div className="tokens-list">
            <List dataSource={tokens} renderItem={(token) => <SingleToken token={token}/>}/>
        </div>

    );
};

export default Tokens;
