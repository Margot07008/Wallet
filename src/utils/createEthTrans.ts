import {
    EtherTransApi,
    SingleTransaction,
    TokenInfoDisplay,
} from '@store/models/transactions/transactionsEthApi';
import { convertDate } from '@utils/convertDate';
import { formatMoney } from '@utils/formatMoney';
import imgEth from '@img/ethereum.png';
import { TokensEthApiModel } from '@store/models/tokens/tokensEthApi';

export const createEthTrans = (
    transactions: EtherTransApi[],
    etherInfo: TokensEthApiModel,
): { trans: SingleTransaction[]; tokenInfo: TokenInfoDisplay } => {
    let formedData: SingleTransaction[] = [];
    let info: TokenInfoDisplay = {
        logo: '',
        name: '',
        dif: '',
        totalCrypto: '',
        totalDollar: '',
        rate: '',
        symbol: '',
    };

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

    if (transactions) {
        info = {
            logo: imgEth,
            name: 'Ethereum',
            dif: String(formatMoney(etherInfo.ETH.price.diff, 2)),
            totalCrypto: String(formatMoney(etherInfo.ETH.balance, 7)),
            totalDollar: String(formatMoney(etherInfo.ETH.balance * etherInfo.ETH.price.rate, 2)),
            rate: String(formatMoney(etherInfo.ETH.price.rate, 2)),
            symbol: 'ETH',
        };
    }

    return { trans: formedData, tokenInfo: info };
};
