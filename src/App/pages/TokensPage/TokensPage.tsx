import * as React from 'react';
import { createContext } from 'react';
import NavBar from '@components/NavBar';
import SummaryCash from './SummaryCash';
import Tokens from './Tokens';
import {Link, useParams, useHistory} from 'react-router-dom';
import TokensStore from '@store/TokensStore';
import { useLocalStore } from '@utils/useLocal';
import { useAsync } from '@utils/useAsync';
import { observer } from 'mobx-react-lite';
import { Spin } from 'antd';
import './TokensPage.scss';
import {LogoutOutlined, QrcodeOutlined} from "@ant-design/icons";
import {urls} from "@config/apiUrls";
import TokensNavBar from "./TokensNavBar/TokensNavBar";

// @ts-ignore
export const TokensContext = createContext<TokensStore>();

const TokensPage = () => {
    // @ts-ignore
    const { id } = useParams();

    const store = useLocalStore(() => new TokensStore());
    useAsync(store.fetch, [id], []);


    return (
        <TokensContext.Provider value={store}>
            {store.meta === 'loading' && <Spin className="loading" size="large" tip="Loading..." />}
            {store.meta === 'success' && (
                <>
                    <TokensNavBar />
                    <SummaryCash />
                    <Tokens />
               </>
            )}
        </TokensContext.Provider>
    );
};

export default observer(TokensPage);
