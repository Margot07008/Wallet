import {
    action,
    computed,
    IReactionDisposer,
    makeObservable,
    observable,
    reaction,
    runInAction,
} from 'mobx';
import { Meta } from '@utils/meta';
import { SingleTransaction, TokenInfoDisplay } from '@store/models/transactions/transactionsEthApi';
import { requestTransactions } from '@store/TokenInfoStore/requestTransactions';

export default class TokenInfoStore {
    _repos: { trans: SingleTransaction[]; tokenInfo: TokenInfoDisplay; lastTransTime: number } = {
        trans: [],
        tokenInfo: {
            logo: 'eth',
            name: '',
            dif: '0.00',
            totalDollar: '0.00',
            totalCrypto: '0.00',
            rate: '',
            symbol: '',
        },
        lastTransTime: Date.now(),
    };
    meta: Meta = Meta.initial;
    isFirst: Boolean = true;

    constructor() {
        makeObservable(this, {
            _repos: observable,
            meta: observable,
            fetch: action.bound,
            repos: computed,
            // loadMore: action.bound,
        });
    }

    async fetch(address: string, searchToken: string): Promise<void> {
        if (this.meta === Meta.loading || this.meta === Meta.success) {
            return;
        }

        this.meta = Meta.loading;
        this._repos = {
            lastTransTime: this._repos.lastTransTime,
            trans: this._repos.trans,
            tokenInfo: this._repos.tokenInfo,
        };

        const { isError, data } = await requestTransactions(address, searchToken);

        if (isError) {
            this.meta = Meta.error;
            return;
        }

        runInAction(() => {
            this.meta = Meta.success;
            this._repos.tokenInfo = data.tokenInfo;
        });
    }

    get repos(): {
        lastTransTime: number;
        trans: SingleTransaction[];
        tokenInfo: TokenInfoDisplay;
    } {
        return this._repos;
    }
}
