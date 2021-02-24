import * as React from 'react';
import { observer } from 'mobx-react-lite';
import NavBar from '@components/NavBar';
import './TransDetailsPage.scss';
import { Spin } from 'antd';
import { createContext } from 'react';
import TransDetailsStore from '@store/TransDetailsStore';
import { useParams } from 'react-router-dom';
import { useLocalStore } from '@utils/useLocal';
import { useAsync } from '@utils/useAsync';
import { getParamsTransDetails } from '@utils/getPatamsTransDetails';
import TransCard from './TransCard';

// @ts-ignore
export const TransDetailsContext = createContext<TransDetailsStore>();

const TransDetailsPage = () => {
    const store = useLocalStore(() => new TransDetailsStore());
    // @ts-ignore
    const { transHash } = useParams();
    const params = getParamsTransDetails(transHash);
    useAsync(store.fetch, [params.hash], []);

    return (
        <>
            <NavBar title={''} subtitle={''} />
            {(store.meta === 'loading' || store.meta === 'initial') && (
                <Spin className="loading" size="large" tip="Loading..." />
            )}
            <TransDetailsContext.Provider value={store}>
                {store.meta === 'success' && <TransCard params={params} />}
            </TransDetailsContext.Provider>
        </>
    );
};

export default observer(TransDetailsPage);
