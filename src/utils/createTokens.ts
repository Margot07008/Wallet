import { EthTokenArr } from '@store/models/tokens/ethToken';
import { formatDiff, formatMoney } from '@utils/formatMoney';
import { createSingleToken } from '@utils/createSingleToken';
import { TokensEthApiModel } from '@store/models/tokens/tokensEthApi';

export const CreateTokens = (
    someTokens: TokensEthApiModel,
): { tokens: EthTokenArr; totalSum: number | string; dailyMoney: number } => {
    let totalSum = 0;
    let dailyMoney = 0;
    const tokensForRender = [];
    const ethBalance = someTokens.ETH.balance * someTokens.ETH.price.rate;
    tokensForRender.push({
        address: String(someTokens.address),
        symbol: 'ETH',
        name: 'Ethereum',
        balance: String(formatMoney(someTokens.ETH.balance, 7)),
        price: String(formatMoney(ethBalance, 2)),
        logo: '',
        rate: String(formatMoney(someTokens.ETH.price.rate, 2)),
        dif: formatDiff(someTokens.ETH.price.diff),
    });
    dailyMoney += (ethBalance * someTokens.ETH.price.diff) / (100 + someTokens.ETH.price.diff);
    totalSum += ethBalance;
    if (someTokens.tokens) {
        someTokens.tokens.forEach((item) => {
            if (item.tokenInfo.price) {
                const itemBalance =
                    Number(item.balance) / Math.pow(10, Number(item.tokenInfo.decimals));

                const ItemBalanceDol = itemBalance * Number(item.tokenInfo.price.rate);

                totalSum += ItemBalanceDol;
                dailyMoney +=
                    (ItemBalanceDol * Number(item.tokenInfo.price.diff)) /
                    (100 + Number(item.tokenInfo.price.diff));
                tokensForRender.push(createSingleToken(item));
            }
        });
    }

    return { tokens: tokensForRender, totalSum: totalSum, dailyMoney: dailyMoney };
};
