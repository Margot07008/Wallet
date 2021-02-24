import { EthTokenArr } from '@store/models/tokens/ethToken';
import { Meta } from '@utils/meta';
import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { requestTokensRepos } from '@store/TokensStore/requestTokensRepos';

export default class TokensStore {
    _repos: { tokens: EthTokenArr; totalSum: number | string; dailyMoney: number } = {
        tokens: [],
        totalSum: 0,
        dailyMoney: 0,
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

    async fetch(id: string): Promise<void> {
        if (this.meta === Meta.loading || this.meta === Meta.success) {
            return;
        }

        this.meta = Meta.loading;
        this._repos = {
            tokens: this._repos.tokens,
            totalSum: this._repos.totalSum,
            dailyMoney: this._repos.dailyMoney,
        };

        const { isError, data } = await requestTokensRepos(id);
        if (isError) {
            this.meta = Meta.error;
            return;
        }

        runInAction(() => {
            this.meta = Meta.success;
            this._repos = data;
        });
    }

    get repos(): { tokens: EthTokenArr; totalSum: number | string; dailyMoney: number } {
        return this._repos;
    }
}
