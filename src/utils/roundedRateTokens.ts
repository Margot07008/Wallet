import { replaceAll } from '@utils/replaceALl';
import { formatMoney } from '@utils/formatMoney';

export const roundedRateTokens = (rate: string) => {
    const rateNumber = Number(replaceAll(rate, ',', ''));
    if (rateNumber > 0 && rateNumber < 1) {
        return formatMoney(rateNumber.toFixed(2), 2);
    }
    return rate;
};
