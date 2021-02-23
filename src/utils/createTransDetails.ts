import {transDetails, transDetailsApi} from "@store/models/transactions/transDetailsApi";


export const CreateTransDetails = (response: transDetailsApi): transDetails => {
    let symbol = '';
    if (response.value === 0 && response.operations) {
        symbol = response.operations[0].tokenInfo.symbol;
    }
    return {
        hash: response.hash,
        timestamp: response.timestamp,
        blockNumber: response.blockNumber,
        success: response.success,
        from: response.from,
        to: response.to,
        gasLimit: response.gasLimit,
        gasUsed: response.gasUsed,
        symbol: symbol ? symbol : 'ETH',
    }
}