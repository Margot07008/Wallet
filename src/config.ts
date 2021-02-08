export const urls = {
    MAIN: '/',
    TOKENS: {
        mask: '/tokens/:id',
        create: (id: string) => `/tokens/:${id}`
    },
}

export const apikey = '?apiKey=EK-3HTzj-zcxPo7d-qCssY';
export const apiUrl = 'https://api.ethplorer.io/';

export const getAddressInfo = 'getAddressInfo/';
export const getAddressHistory = 'getAddressHistory/';

