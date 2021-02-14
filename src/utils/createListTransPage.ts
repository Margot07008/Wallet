import {
    SingleTransaction,
    TokenInfoDisplay,
    TransactionsEthApi,
} from '@store/models/transactions/transactionsEthApi';
import { convertDate } from '@utils/convertDate';
import { formatMoney } from '@utils/formatMoney';
import { TokenApiModel } from '@store/models/tokens/tokensEthApi';

export const createListTransPage = (list: TransactionsEthApi): SingleTransaction[] => {
    let formedList: SingleTransaction[] = [];

    list.operations.forEach((item) => {
        const tmpBalance = Number(item.value) / Math.pow(10, Number(item.tokenInfo.decimals));
        formedList.push({
            unixTimestamp: item.timestamp,
            transactionHash: item.transactionHash,
            timestamp: convertDate(item.timestamp),
            balance: String(formatMoney(tmpBalance, 7)),
            to: item.to,
            from: item.from,
            symbol: item.tokenInfo.symbol,
        });
    });

    return formedList;
};

export const listTransInfo = (
    tokensInformation: TokenApiModel[],
    tokensAddr: string,
): TokenInfoDisplay => {
    console.log('ell');
    let foundedTokenInfo: TokenApiModel = {
        tokenInfo: {
            address: '',
            name: '',
            decimals: '',
            symbol: '',
            image: '',
            price: {
                rate: '',
                diff: '',
            },
        },
        balance: '',
    };

    let tokenInfoDisplay: TokenInfoDisplay = {
        logo: '',
        name: '',
        dif: '',
        totalDollar: '',
        totalCrypto: '',
        rate: '',
        symbol: '',
    };

    tokensInformation.forEach((singleToken) => {
        if (singleToken.tokenInfo.address === tokensAddr) {
            foundedTokenInfo = singleToken;
        }
    });

    if (foundedTokenInfo) {
        const tokenInfoPrice = foundedTokenInfo.tokenInfo.price;
        const totalCrypto =
            Number(foundedTokenInfo.balance) /
            Math.pow(10, Number(foundedTokenInfo.tokenInfo.decimals));
        tokenInfoDisplay = {
            logo: foundedTokenInfo.tokenInfo.image
                ? 'https://ethplorer.io' + foundedTokenInfo.tokenInfo.image
                : '',
            name: foundedTokenInfo.tokenInfo.name,
            dif: tokenInfoPrice ? String(foundedTokenInfo.tokenInfo.price.diff) : '0',
            totalCrypto: totalCrypto ? String(formatMoney(totalCrypto, 7)) : '0',
            totalDollar: tokenInfoPrice
                ? String(
                      formatMoney(totalCrypto * Number(foundedTokenInfo.tokenInfo.price.rate), 2),
                  )
                : '0',
            rate: tokenInfoPrice
                ? String(formatMoney(foundedTokenInfo.tokenInfo.price.rate, 2))
                : '0',
            symbol: foundedTokenInfo.tokenInfo.symbol,
        };
    }

    return tokenInfoDisplay;
};
