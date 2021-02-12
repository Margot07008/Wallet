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
import { log } from '@utils/log';
import { requestTransactions } from '@store/TokenInfoStore/requestTransactions';

export default class TokenInfoStore {
    _repos: { trans: SingleTransaction[]; tokenInfo: TokenInfoDisplay } = {
        trans: [],
        tokenInfo: {
            logo: '',
            name: '',
            dif: '',
            totalDollar: '',
            totalCrypto: '',
            rate: '',
            symbol: '',
        },
    };
    meta: Meta = Meta.initial;

    constructor() {
        makeObservable(this, {
            _repos: observable,
            meta: observable,
            fetch: action.bound,
            repos: computed,
        });
    }

    async fetch(address: string, searchToken: string): Promise<void> {
        if (this.meta === Meta.loading || this.meta === Meta.success) {
            return;
        }

        this.meta = Meta.loading;
        this._repos = {
            trans: [],
            tokenInfo: {
                logo: '',
                name: '',
                dif: '',
                totalDollar: '',
                totalCrypto: '',
                rate: '',
                symbol: '',
            },
        };

        const { isError, data } = await requestTransactions(address, searchToken);
        if (isError) {
            this.meta = Meta.error;
            return;
        }

        runInAction(() => {
            this.meta = Meta.success;
            this._repos = data;
        });
    }

    get repos(): { trans: SingleTransaction[]; tokenInfo: TokenInfoDisplay } {
        return this._repos;
    }

    destroy(): void {
        this._metaChangedReaction();
    }

    _metaChangedReaction: IReactionDisposer = reaction(
        () => this.meta,
        (...args) => {
            log('Reaction', args);
        },
    );
}
