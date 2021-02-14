import { EtherTransApi, SingleTransaction } from '@store/models/transactions/transactionsEthApi';
import { convertDate } from '@utils/convertDate';
import { formatMoney } from '@utils/formatMoney';
import imgEth from '@img/ethereum.png';
import { TokensEthApiModel } from '@store/models/tokens/tokensEthApi';

export const createEthTrans = (transactions: EtherTransApi[]): SingleTransaction[] => {
    let formedData: SingleTransaction[] = [];

    transactions.forEach((item) => {
        formedData.push({
            unixTimestamp: item.timestamp,
            transactionHash: item.hash,
            timestamp: convertDate(item.timestamp),
            balance: String(formatMoney(item.value, 7)),
            to: item.to,
            from: item.from,
            symbol: 'ETH',
        });
    });

    return formedData;
};

export const ethTransInfo = (etherInfo: TokensEthApiModel) => {
    return {
        logo: imgEth,
        name: 'Ethereum',
        dif: String(formatMoney(etherInfo.ETH.price.diff, 2)),
        totalCrypto: String(formatMoney(etherInfo.ETH.balance, 7)),
        totalDollar: String(formatMoney(etherInfo.ETH.balance * etherInfo.ETH.price.rate, 2)),
        rate: String(formatMoney(etherInfo.ETH.price.rate, 2)),
        symbol: 'ETH',
    };
};