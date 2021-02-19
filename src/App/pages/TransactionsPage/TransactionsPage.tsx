import * as React from 'react';
import { createContext, useState } from 'react';
import FillInNavBar from './FillInNavBar';
import TokenInfo from './TokenInfo';
import TokenInfoStore from '@store/TokenInfoStore';
import { useLocalStore } from '@utils/useLocal';
import { useAsync } from '@utils/useAsync';
import { useHistory, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Transactions from './Transactions';
import UploadTransStore from '@store/UploadTransStore/UploadTransStore';
import { Spin } from 'antd';
import PullToRefresh from 'react-simple-pull-to-refresh';
import { Meta } from '@utils/meta';

// @ts-ignore
export const TransInfoContext = createContext<TokenInfoStore>();
// @ts-ignore
export const TransContext = createContext<UploadTransStore>();

const TransactionsPage = () => {
    // @ts-ignore
    const { address } = useParams();
    const history = useHistory();
    const searchToken = history.location.search.slice(1);

    const storeTransInfo = useLocalStore(() => new TokenInfoStore());
    useAsync(storeTransInfo.fetch, [address, searchToken], []);

    const storeTrans = useLocalStore(() => new UploadTransStore());
    const rate = storeTransInfo.repos.tokenInfo.rate.replace(',', '');

    const [refresh, setRefresh] = useState(true);
    let [needSearch, setNeedSearch] = useState(true);

    const onRefresh = async () => {
        storeTransInfo.meta = Meta.initial;

        setRefresh(true);
        await storeTransInfo.fetch(address, searchToken);
        setRefresh(false);

        storeTrans.meta = Meta.initial;

        setRefresh(true);
        await storeTrans.loadMore(address, searchToken, needSearch, setNeedSearch);
        setRefresh(false);
    };

    return (
        <>
            {storeTransInfo.meta === 'loading' && storeTrans.meta === 'loading' && !refresh && (
                <Spin className="loading" size="large" />
            )}
            <TransInfoContext.Provider value={storeTransInfo}>
                {(storeTransInfo.meta === 'success' || storeTransInfo.meta === 'loading') && (
                    <>
                        <FillInNavBar />
                        <TokenInfo />
                    </>
                )}
            </TransInfoContext.Provider>
            <TransContext.Provider value={storeTrans}>
                <PullToRefresh
                    refreshingContent={<Spin size="large" className="spinning" />}
                    onRefresh={onRefresh}
                    canFetchMore={false}
                    className="pullToRefresh"
                    pullDownThreshold={30}
                    maxPullDownDistance={50}
                >
                    <Transactions
                        rate={rate}
                        needSearch={needSearch}
                        setNeedSearch={setNeedSearch}
                    />
                </PullToRefresh>
            </TransContext.Provider>
        </>
    );
};

export default observer(TransactionsPage);
