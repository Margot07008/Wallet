import { transDetails, transDetailsApi } from '@store/models/transactions/transDetailsApi';

export const CreateTransDetails = (response: transDetailsApi): transDetails => {
    return {
        hash: response.hash,
        timestamp: response.timestamp,
        blockNumber: response.blockNumber,
        success: response.success,
        from: response.from,
        to: response.to,
        gasLimit: response.gasLimit,
        gasUsed: response.gasUsed,
    };
};
