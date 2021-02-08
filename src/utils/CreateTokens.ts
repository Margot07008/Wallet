
import { formatMoney } from './formatMoney';
// import RootObject = namespace.RootObject;

// declare module namespace {

    export interface Price {
        rate: number;
        diff: number;
        diff7d: number;
        ts: number;
        marketCapUsd: number;
        availableSupply: number;
        volume24h: number;
        diff30d: number;
        volDiff1: number;
        volDiff7: number;
        volDiff30: number;
    }

    export interface ETH {
        balance: number;
        price: Price;
    }

    export interface Price2 {
        rate: number;
        diff: number;
        diff7d: number;
        ts: number;
        marketCapUsd: number;
        availableSupply: number;
        volume24h: number;
        diff30d: number;
        volDiff1: number;
        volDiff7: number;
        volDiff30: number;
        currency: string;
    }

    export interface TokenInfo {
        address: string;
        name: string;
        decimals: string;
        symbol: string;
        totalSupply: string;
        owner: string;
        lastUpdated: number;
        issuancesCount: number;
        holdersCount: number;
        website: string;
        twitter: string;
        image: string;
        facebook: string;
        coingecko: string;
        ethTransfersCount: number;
        price: Price2;
        publicTags: string[];
    }

    export interface Token {
        tokenInfo: TokenInfo;
        balance: number;
        totalIn: number;
        totalOut: number;
    }

    export interface RootObject {
        address: string;
        ETH: ETH;
        countTxs: number;
        tokens: Token[];
    }

// }
export const CreateTokens = (someTokens: RootObject) => {
    let totalSum = 0;
    const tokensForRender = [];
    const ethBalance = someTokens.ETH.balance * someTokens.ETH.price.rate;
    tokensForRender.push({
        address: String(someTokens.address),
        symbol: 'ETH',
        name: 'Ethereum',
        balance: String(formatMoney(someTokens.ETH.balance, 7)),
        price: String(formatMoney(ethBalance, 2)),
        logo: '',
        rate: String(formatMoney(someTokens.ETH.price.rate, 2)),
        dif: String(someTokens.ETH.price.diff),
    });
    totalSum += ethBalance;
    if (someTokens.tokens) {
        someTokens.tokens.forEach((item) => {
            if (item.tokenInfo.price) {
                const itemInfo = item.tokenInfo;

                let itemPrice: any;
                itemPrice = itemInfo.price;

                const itemBalance = item.balance / Math.pow(10, Number(itemInfo.decimals));

                const tmpPrice = itemBalance * itemPrice.rate;

                totalSum += tmpPrice;

                tokensForRender.push({
                    address: String(itemInfo.address), //адрес кошелька
                    symbol: String(itemInfo.symbol), //ETH, BTC,
                    name: String(itemInfo.name), //Ethereum, Bitcoin
                    balance: String(formatMoney(itemBalance, 7)), //мое количесто денег в валюте (битке, эфире)
                    price: String(formatMoney(tmpPrice, 2)), //мое кол-во денег в долларах (balance * rate)
                    logo: itemInfo.image ? 'https://ethplorer.io' + itemInfo.image : '', //картинка валюты
                    rate: String(formatMoney(itemPrice.rate, 2)), //курс в долларах за 1 монетку
                    dif: String(itemPrice.diff), //рост, падение за сутки
                });
            }
        });
    }

    return { tokens: tokensForRender, totalSum: formatMoney(totalSum, 2) };
};
