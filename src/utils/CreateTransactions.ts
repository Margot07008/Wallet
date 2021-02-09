import {convertDate} from "./convertDate";
import {formatMoney} from "./formatMoney";

export const createListOfTransactions = (list: any[]) => {
    let formedList: {
        transactionHash: string;
        timestamp: string;
        balance: string;
        to: string;
        from: string;
        symbol: string;
    }[] = [];
    list.forEach((item) => {
        formedList.push({
            transactionHash: item.transactionHash,
            timestamp: convertDate(item.timestamp),
            balance: String(formatMoney(item.value / Math.pow(10, item.tokenInfo.decimals), 7)),
            to: item.to,
            from: item.from,
            symbol: item.tokenInfo.symbol,
        });
        console.log(new Date(item.timestamp));
    });
    return formedList;
};