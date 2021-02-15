import * as React from 'react';
import './WelcomePage.scss';
import HelloText from './HelloText';
import AddressInput from '@components/AddressInput';
import SearchButton from '@components/SearchButton';
import { useState } from 'react';
import {Form, Input, Space} from "antd";
import { useHistory } from 'react-router-dom';

import Search from "antd/es/input/Search";
import { History } from 'history';
import Web3 from "web3";
var web3 = new Web3(Web3.givenProvider);



const onSearch = (history: History<unknown> | string[], value: string) => {
    try {
        const reg = new RegExp('0x[0-9a-fA-F]{40}');
        if (value.search(reg) != -1) {
            history.push(`tokens/${value}`);
        }
        // const address = web3.utils.toChecksumAddress(value);

    } catch(e) {
        console.log(e);
    }
}

const WelcomePage = () => {
    const [inputText, saveInput] = useState('');
    const history = useHistory();

    return (
        <>
            <div className="welcome-bg">
                <div className="input-window">
                    <HelloText />
                    {/*<div className="search-input">*/}
                    {/*    <AddressInput saveInput={saveInput} />*/}
                    {/*    <SearchButton inputText={inputText} />*/}
                    {/*</div>*/}
                    <Space direction="vertical">
                        <Search allowClear  placeholder="input search text" onSearch = {(value) => {
                            onSearch(history, value);
                        }} enterButton />
                    </Space>
                </div>
            </div>
        </>
    );
};

export default WelcomePage;
