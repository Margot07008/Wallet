import * as React from 'react';
import {createContext, useState} from 'react';
import SummaryCash from './SummaryCash';
import Tokens from './Tokens';
import {useParams} from 'react-router-dom';
import TokensStore from '@store/TokensStore';
import {useLocalStore} from '@utils/useLocal';
import {useAsync} from '@utils/useAsync';
import {observer} from 'mobx-react-lite';
import {Spin} from 'antd';
import './TokensPage.scss';
import TokensNavBar from './TokensNavBar/TokensNavBar';
import PullToRefresh from 'react-simple-pull-to-refresh';
import {Meta} from '@utils/meta';

// @ts-ignore
export const TokensContext = createContext<TokensStore>();

const TokensPage = () => {
    // @ts-ignore
    const {id} = useParams();

    const store = useLocalStore(() => new TokensStore());
    useAsync(store.fetch, [id], []);

    const [refresh, setRefresh] = useState(false);

    const onRefresh = async () => {
        store.meta = Meta.initial;
        setRefresh(true);
        await store.fetch(id);
        setRefresh(false);
    };

    return (
        <>
            {store.meta === 'loading' && !refresh && (
                <Spin className="loading" size="large" tip="Loading..."/>
            )}
            <TokensContext.Provider value={store}>
                {( store.meta === 'success' || store.meta === 'loading' && refresh) && (
                    <>
                        <TokensNavBar/>
                        <SummaryCash/>
                        <PullToRefresh
                            refreshingContent={<Spin size="large" className="spinning"/>}
                            onRefresh={onRefresh}
                            canFetchMore={false}
                            pullDownThreshold={30}
                            maxPullDownDistance={50}
                        >
                            <Tokens/>
                        </PullToRefresh>
                    </>
                )}
            </TokensContext.Provider>
        </>
    );
};

export default observer(TokensPage);
