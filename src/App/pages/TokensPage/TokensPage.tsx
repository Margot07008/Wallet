import * as React from 'react';
import NavBar from '@components/NavBar';
import SummaryCash from './SummaryCash';
import Tokens from './Tokens';
import { useParams } from 'react-router-dom';
import TokensStore from '@store/TokensStore';
import { useLocalStore } from '@utils/useLocal';
import { useAsync } from '@utils/useAsync';
import { observer } from 'mobx-react-lite';
import {createContext} from "react";

export const TokensContext = createContext<TokensStore | null>(null);

const TokensPage = () => {
    // @ts-ignore
    const { id } = useParams();

    const store = useLocalStore(() => new TokensStore());
    useAsync(store.fetch, [id], []);

    return (
        <>
            <TokensContext.Provider value={store}>
                <NavBar title={'Wallet'} subtitle={'Check your money'} />
                <SummaryCash />
                <Tokens />
            </TokensContext.Provider>
        </>
    );
};

export default observer(TokensPage);
