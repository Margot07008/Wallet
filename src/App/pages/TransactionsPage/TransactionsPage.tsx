import * as React from 'react';
import FillInNavBar from './FillInNavBar';
import TokenInfo from './TokenInfo';
import TokenInfoStore from '@store/TokenInfoStore';
import { useLocalStore } from '@utils/useLocal';
import { useAsync } from '@utils/useAsync';
import { useHistory, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

type Props = {
    storeTokenInfo: TokenInfoStore;
};

const TransactionsPage: React.FC<Props> = ({ storeTokenInfo }) => {
    // @ts-ignore
    const { address } = useParams();
    const history = useHistory();
    const searchToken = history.location.search.slice(1);

    const storeTrans = useLocalStore(() => new TokenInfoStore());
    useAsync(storeTrans.fetch, [address, searchToken], []);

    return (
        <>
            <FillInNavBar infoToken={storeTrans.repos.tokenInfo} />
            <TokenInfo storeTrans={storeTrans} />
        </>
    );
};

export default observer(TransactionsPage);
