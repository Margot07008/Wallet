import * as React from 'react';
import {createContext, useState} from 'react';
import {observer} from 'mobx-react-lite';
import NavBar from '@components/NavBar';
import './TransDetailsPage.scss';
import {Spin} from 'antd';
import TransDetailsStore from '@store/TransDetailsStore';
import {useParams} from 'react-router-dom';
import {useLocalStore} from '@utils/useLocal';
import {useAsync} from '@utils/useAsync';
import {getParamsTransDetails} from '@utils/getPatamsTransDetails';
import TransCard from './TransCard';
import PullToRefresh from "react-simple-pull-to-refresh";
import {Meta} from "@utils/meta";
import PageTitle from "./PageTitle";


// @ts-ignore
export const TransDetailsContext = createContext<TransDetailsStore>();

const TransDetailsPage = () => {
    const store = useLocalStore(() => new TransDetailsStore());
    const [refresh, setRefresh] = useState(false);
    // @ts-ignore
    const {transHash} = useParams();
    const params = getParamsTransDetails(transHash);
    useAsync(store.fetch, [params.hash], []);

    const onRefresh = async () => {
        store.meta = Meta.initial;
        setRefresh(true);
        await store.fetch(params.hash);
        setRefresh(false);
    }

    return (
        <>
            <NavBar title={''} subtitle={''}/>
            {((store.meta === Meta.loading && !refresh)) && (
                <Spin className="loading" size="large" tip="Loading..."/>
            )}
            <div className="trans-details-page">
                <PageTitle/>
                <TransDetailsContext.Provider value={store}>
                    {(store.meta === Meta.success || (store.meta === Meta.loading && refresh)) &&
                    <PullToRefresh
                      refreshingContent={<Spin size="large" className="spinning"/>}
                      onRefresh={onRefresh}
                      canFetchMore={false}
                      pullDownThreshold={30}
                      maxPullDownDistance={70}
                    >
                      <TransCard params={params}/>
                    </PullToRefresh>
                    }
                </TransDetailsContext.Provider>
            </div>
        </>
    );
};

export default observer(TransDetailsPage);
