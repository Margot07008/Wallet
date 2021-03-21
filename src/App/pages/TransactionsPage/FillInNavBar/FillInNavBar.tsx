import NavBar from '@components/NavBar';
import * as React from 'react';
import { useContext } from 'react';
import { TransInfoContext } from '../TransactionsPage';

const FillInNavBar = () => {
    const store = useContext(TransInfoContext);
    const titleNavBar = `${store.repos.tokenInfo.name} ${store.repos.tokenInfo.symbol}`;
    return <NavBar title={titleNavBar} subtitle={''} />;
};

export default FillInNavBar;
