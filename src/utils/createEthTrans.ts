import {EtherTransApi, SingleTransaction, TokenInfoDisplay} from "@store/models/transactions/transactionsEthApi";
import {convertDate} from "@utils/convertDate";
import {formatMoney} from "@utils/formatMoney";
import imgEth from '@img/ethereum.png';

export const createEthTrans = (transactions:EtherTransApi[], address:string):{trans: SingleTransaction[], tokenInfo: TokenInfoDisplay} => {
    let formedData: SingleTransaction[] = [];
    let info:TokenInfoDisplay = {
        logo: '',
        name: '',
        dif: '',
        totalCrypto: '',
        totalDollar: '',
        rate: '',
        symbol: ''
    };
    let totalSumCrypt:number = 0;

    transactions.forEach((item) => {
        address === item.from ? totalSumCrypt-=item.value : totalSumCrypt+=item.value;
        formedData.push({
                transactionHash: item.hash,
                timestamp: convertDate(item.timestamp),
                balance: String(formatMoney(item.value, 7)),
                to: item.to,
                from: item.from,
                symbol: 'ETH',
            }
        )
    });

    if (transactions) {
        info = {
            logo: imgEth,
            name: 'Ethereum',
            dif: '',
            totalCrypto: String(formatMoney(totalSumCrypt, 7)),
            totalDollar: '',
            rate: '',
            symbol: 'ETH'
        }
    }

    return {trans: formedData, tokenInfo: info}
}