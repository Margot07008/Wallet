import {action, computed, IReactionDisposer, makeObservable, observable, reaction, runInAction,} from 'mobx';
import {Meta} from '@utils/meta';
import {SingleTransaction, TokenInfoDisplay} from '@store/models/transactions/transactionsEthApi';
import {log} from '@utils/log';
import {requestTransactions} from '@store/TokenInfoStore/requestTransactions';
import React from 'react';

export default class TokenInfoStore {
    _repos: { trans: SingleTransaction[]; tokenInfo: TokenInfoDisplay; lastTransTime: number } = {
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
            this._repos.tokenInfo = data.tokenInfo;
        });
    }

    // async loadMore(
    //     address: string,
    //     searchToken: string,
    //     needSearch: boolean,
    //     setNeedSearch: React.Dispatch<React.SetStateAction<boolean>>,
    // ): Promise<void> {
    //     if (this.meta === Meta.loading ) {
    //         return;
    //     }
    //
    //     this.meta = Meta.loading;
    //     this._repos = {
    //         lastTransTime: this._repos.lastTransTime,
    //         trans: [],
    //         tokenInfo: this._repos.tokenInfo,
    //     };
    //
    //     const { isError, data } = await requestLoadMore(
    //         address,
    //         searchToken,
    //         this._repos.lastTransTime,
    //     );
    //
    //     if (isError) {
    //         this.meta = Meta.error;
    //         return;
    //     }
    //
    //     runInAction(() => {
    //         this.meta = Meta.success;
    //         let lastDate: number = Date.now();
    //         if (data.trans.length > 0) {
    //             lastDate = data.trans[data.trans.length - 1].unixTimestamp;
    //         }
    //
    //         if (this._repos.lastTransTime === lastDate || data.trans.length === 0) {
    //             setNeedSearch(false);
    //         } else {
    //             setNeedSearch(true);
    //             this._repos.trans = data.trans;
    //             this._repos.lastTransTime = lastDate;
    //         }
    //     });
    // }

    get repos(): {
        lastTransTime: number;
        trans: SingleTransaction[];
        tokenInfo: TokenInfoDisplay;
    } {
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
