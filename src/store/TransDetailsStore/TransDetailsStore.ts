import {Meta} from "@utils/meta";
import {action, computed, get, makeObservable, observable, runInAction} from "mobx";
import {requestTransDetails} from "@store/TransDetailsStore/requestTransDetails";
import {transDetails, transDetailsApi} from "@store/models/transactions/transDetailsApi";

const defaultDetails:transDetails= {
    hash: '',
    timestamp: 0,
    blockNumber: 0,
    success: false,
    from: '',
    to: '',
    gasLimit: 0,
    gasUsed: 0,
    symbol: '',
}

export default class TransDetailsStore {

    _details:transDetails = defaultDetails;
    meta: Meta = Meta.initial;

    constructor() {
        makeObservable(this, {
            _details: observable,
            meta: observable,
            fetch: action.bound,
            details: computed,
        })
    }

    async fetch (transHash: string): Promise<void> {
        if (this.meta === Meta.loading || this.meta === Meta.success) {
            return;
        }

        this.meta = Meta.loading;
        this._details = defaultDetails;

        const { isError, data } = await requestTransDetails(transHash);
        if (isError) {
            this.meta = Meta.error;
            return;
        }
        runInAction(() => {
            this.meta = Meta.success;
            this._details = data;
        });

    }

    get details(): transDetails {
        return this._details;
    }

}