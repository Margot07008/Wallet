export const urls = {
    MAIN: '/',
    TOKENS: {
        mask: '/tokens/:id',
        create: (id: string) => `/tokens/${id}`,
    },
    TRANS: {
        mask: '/transactions/:address',
        create: (address: string, token: string | undefined) =>
            `/transactions/${address}?token=${token}`,
    },
    TRANS_DETAILS: {
        mask: '/single-transaction/:transHash',
        create: (transHash: string, coins: string, rate: string) => `/single-transaction/${transHash}&coins=${coins}&rate=${rate}`,
    }
};

export const apikey = '?apiKey=EK-3HTzj-zcxPo7d-qCssY';
export const apiUrl = 'https://api.ethplorer.io/';

export const getAddressInfo = 'getAddressInfo/';
export const getAddressHistoryByToken = 'getAddressHistory/';
export const getEtherTrans = 'getAddressTransactions/';
export const getTransDetails = 'getTxInfo/';
