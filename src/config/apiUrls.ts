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
};

export const apikey = '?apiKey=EK-3HTzj-zcxPo7d-qCssY';
export const apiUrl = 'https://api.ethplorer.io/';

export const getAddressInfo = 'getAddressInfo/';
export const getAddressHistoryByToken = 'getAddressHistory/';
export const getEtherTrans = 'getAddressTransactions/';    //address, ?limit success
