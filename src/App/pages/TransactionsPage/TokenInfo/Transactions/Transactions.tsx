import { List, Spin } from 'antd';
import * as React from 'react';
import { useContext, useEffect, useRef, useState } from 'react';
import SingleTrans from './SingleTrans';
import './Transactions.scss';
import { useHistory, useParams } from 'react-router-dom';
import { TransContext } from '../../TransactionsPage';

const Transactions = () => {
    // @ts-ignore
    const { address } = useParams();
    const reqAddress = address;

    const history = useHistory();
    const searchToken = history.location.search.slice(1);

    const store = useContext(TransContext);

    const [postList, setPostList] = useState({
        list: [],
    });

    const [page, setPage] = useState(1);
    let [needSearch, setNeedSearch] = useState(true);
    const loader = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '20px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
            // @ts-ignore
            observer.observe(loader.current);
        }
        return () => observer.disconnect();
    }, []);

    let mounted = true;

    // @ts-ignore
    useEffect(() => {
        if (needSearch) {
            store.loadMore(address, searchToken, needSearch, setNeedSearch).then(() => {
                // @ts-ignore
                const newList = postList.list.concat(store.repos.trans);
                setPostList({
                    list: newList,
                });
            });
        }
        return () => (mounted = false);
    }, [page]);

    const handleObserver = (entities: any[]) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setPage((page) => page + 1);
        }
    };
    const [tmpDay, setDay] = useState();

    return (
        <>
            <div className="tokens-list">
                <List
                    dataSource={postList.list}
                    renderItem={(trans) => (
                        <>
                            {/*{setDay(trans.timestamp) && <div>123</div>}*/}

                            <SingleTrans trans={trans} reqAddress={reqAddress} />
                        </>
                    )}
                />
                <div ref={loader} />
            </div>
            {store.meta === 'loading' && (
                <div className="loader">
                    <Spin size="large" tip="Loading..." />
                </div>
            )}
        </>
    );
};

export default Transactions;
