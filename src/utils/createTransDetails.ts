import { transDetails, transDetailsApi } from '@store/models/transactions/transDetailsApi';
import { formatNumber } from '@utils/formatMoney';

export const CreateTransDetails = (response: transDetailsApi): transDetails => {
    return {
        hash: response.hash,
        timestamp: response.timestamp,
        blockNumber: formatNumber(response.blockNumber),
        success: response.success,
        from: response.from,
        to: response.to,
        gasLimit: formatNumber(response.gasLimit),
        gasUsed: formatNumber(response.gasUsed),
        gasProc: `(${((response.gasUsed * 100) / response.gasLimit).toFixed(2)}%)`,
        confirmations: formatNumber(response.confirmations),
    };
};
