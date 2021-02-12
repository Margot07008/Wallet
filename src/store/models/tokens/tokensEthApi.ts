import { formatMoney } from '@utils/formatMoney';
import { EthToken, EthTokenArr } from '@store/models/tokens/ethToken';
import { createSingleToken } from '@utils/createSingleToken';

export type TokensEthApiModel = {
    address: string;
    ETH: {
        balance: number;
        price: {
            diff: number;
            rate: number;
        };
    };
    tokens: TokenApiModel[];
};

export type TokenApiModel = {
    tokenInfo: {
        address: string;
        name: string;
        decimals: string;
        symbol: string;
        image: string;
        price: {
            rate: string;
            diff: string;
        };
    };
    balance: string;
};

export type EtherApiModels = {
    balance: number,
    price:{
        "rate":number,
        "diff":number,
    },
}

