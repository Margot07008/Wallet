import * as React from 'react';
import NavBar from '@components/NavBar';
import SummaryCash from './SummaryCash';
import Tokens from './Tokens';
import { useParams } from 'react-router-dom';
import TokensStore from "@store/TokensStore";
import {useLocalStore} from "@utils/useLocal";
import {useAsync} from "@utils/useAsync";
import { observer } from 'mobx-react-lite';
import TokenInfoStore from "@store/TokenInfoStore";

type Props = {
    storeTokenInfo: TokenInfoStore,
};

const TokensPage: React.FC<Props> = ({storeTokenInfo}) => {

    // @ts-ignore
    const {id} = useParams();

    const store = useLocalStore(() => new TokensStore());
    useAsync(store.fetch, [id],[]);

    return (
        <>
            <NavBar title={'Wallet'} subtitle={'Check your money'} />
            <SummaryCash totalSum={String(store.repos.totalSum)} />
            <Tokens storeTokenInfo={storeTokenInfo} tokens={store.repos.tokens} />
        </>
    );
};

export default observer(TokensPage);
