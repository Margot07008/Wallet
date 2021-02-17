import * as React from 'react';
import FillInNavBar from './FillInNavBar';
import TokenInfo from './TokenInfo';
import TokenInfoStore from '@store/TokenInfoStore';
import { useLocalStore } from '@utils/useLocal';
import { useAsync } from '@utils/useAsync';
import { useHistory, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Transactions from './Transactions';
import {createContext, useContext} from 'react';
import UploadTransStore from '@store/UploadTransStore/UploadTransStore';
import { Spin } from 'antd';

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

    return (
        <>
            {(storeTransInfo.meta === 'loading' || storeTrans.meta === 'loading') && (
                <Spin className="loading" size="large" />
            )}
            <TransInfoContext.Provider value={storeTransInfo}>
                {storeTransInfo.meta === 'success' && (
                    <>
                        <FillInNavBar />
                        <TokenInfo />

                    </>
                )}
            </TransInfoContext.Provider>
            <TransContext.Provider value={storeTrans}>
                <Transactions rate={rate}/>
            </TransContext.Provider>
        </>
    );
};

export default observer(TransactionsPage);
