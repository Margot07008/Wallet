import * as React from 'react';
import './WelcomePage.scss';
import HelloText from './HelloText';
import { Space } from 'antd';
import { useHistory } from 'react-router-dom';

import Search from 'antd/es/input/Search';
import { History } from 'history';


const WelcomePage = () => {
    const history = useHistory();

    const onSearch = (history: History<unknown> | string[], value: string) => {
        try {
            const reg = new RegExp('0x[0-9a-fA-F]{40}');
            if (value.search(reg) != -1) {
                history.push(`tokens/${value}`);
            }
            // const address = web3.utils.toChecksumAddress(value);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="welcome-bg">
            <div className="input-window">
                <HelloText />
                <Space direction="vertical">
                    <Search
                        allowClear
                        placeholder="input search text"
                        onSearch={(value) => {
                            onSearch(history, value);
                        }}
                        enterButton
                    />
                </Space>
            </div>
        </div>
    );
};

export default WelcomePage;
