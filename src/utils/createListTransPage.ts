import {
    SingleTransaction,
    TokenInfoDisplay,
    TransactionsEthApi
} from "@store/models/transactions/transactionsEthApi";
import {convertDate} from "@utils/convertDate";
import {formatMoney} from "@utils/formatMoney";


export const createListTransPage = (list: TransactionsEthApi, searchAddress:string ):{trans: SingleTransaction[], tokenInfo: TokenInfoDisplay} => {
    let formedList: SingleTransaction[] = [];
    let tokenInfoDisplay: TokenInfoDisplay = {
        logo: '',
        name: '',
        dif: '',
        totalDollar: '',
        totalCrypto: '',
        rate: '',
        symbol: ''
    };
    let totalSumCrypt: number = 0;

    list.operations.forEach((item) => {
        const tmpBalance = Number(item.value) / Math.pow(10, Number(item.tokenInfo.decimals));
        item.from === searchAddress ? totalSumCrypt -= tmpBalance : totalSumCrypt += tmpBalance;
        formedList.push({
            transactionHash: item.transactionHash,
            timestamp: convertDate(item.timestamp),
            balance: String(formatMoney(tmpBalance, 7)),
            to: item.to,
            from: item.from,
            symbol: item.tokenInfo.symbol,
        });
    });

    if (list.operations) {
        const firstTrans = list.operations[0];
        const tokenInfoPrice = firstTrans.tokenInfo.price;
        tokenInfoDisplay = {
            logo: firstTrans.tokenInfo.image ? 'https://ethplorer.io' + firstTrans.tokenInfo.image : '',
            name: firstTrans.tokenInfo.name,
            dif: tokenInfoPrice ? String(firstTrans.tokenInfo.price.diff) : '0',
            totalCrypto: String(formatMoney(totalSumCrypt, 7)),
            totalDollar: tokenInfoPrice ? String(formatMoney(totalSumCrypt * firstTrans.tokenInfo.price.rate, 2)) : '0',
            rate: tokenInfoPrice ? String(formatMoney(firstTrans.tokenInfo.price.rate, 2)) : '0',
            symbol: firstTrans.tokenInfo.symbol
        }
    }

    return {trans: formedList, tokenInfo: tokenInfoDisplay};
};