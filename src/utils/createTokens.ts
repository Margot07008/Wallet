import { EthTokenArr } from '@store/models/tokens/ethToken';
import { formatMoney } from '@utils/formatMoney';
import { createSingleToken } from '@utils/createSingleToken';
import { TokensEthApiModel } from '@store/models/tokens/tokensEthApi';

export const CreateTokens = (
    someTokens: TokensEthApiModel,
): { tokens: EthTokenArr; totalSum: Number | string } => {
    let totalSum = 0;
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
        dif: String(someTokens.ETH.price.diff),
    });
    totalSum += ethBalance;
    if (someTokens.tokens) {
        someTokens.tokens.forEach((item) => {
            if (item.tokenInfo.price) {
                const itemBalance =
                    Number(item.balance) / Math.pow(10, Number(item.tokenInfo.decimals));
                totalSum += itemBalance * Number(item.tokenInfo.price.rate);
            }
            tokensForRender.push(createSingleToken(item));
        });
    }

    return { tokens: tokensForRender, totalSum: formatMoney(totalSum, 2) };
};
