export const getParamsTransDetails = (url: string) => {
    const urlArr = url.split('&');
    return {
        hash: urlArr[0],
        coins: urlArr[1].slice(urlArr[1].indexOf('=') + 1),
        rate: urlArr[2].slice(urlArr[2].indexOf('=') + 1),
        symbol: urlArr[3].slice(urlArr[3].indexOf('=') + 1),
    };
};
