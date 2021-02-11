import {EthToken} from "@store/models/tokens/ethToken";
import {formatMoney} from "@utils/formatMoney";
import {TokenApiModel} from "@store/models/tokens/tokensEthApi";


export const createSingleToken = (item: TokenApiModel):EthToken => {
    const itemInfo = item.tokenInfo;
    const itemBalance = Number(item.balance) / Math.pow(10, Number(itemInfo.decimals));
    if (item.tokenInfo.price) {

        let itemPrice: any;
        itemPrice = itemInfo.price;

        const tmpPrice = itemBalance * itemPrice.rate;

        return {
            address: String(itemInfo.address), //адрес кошелька
            symbol: String(itemInfo.symbol), //ETH, BTC,
            name: String(itemInfo.name), //Ethereum, Bitcoin
            balance: String(formatMoney(itemBalance, 7)), //мое количесто денег в валюте (битке, эфире)
            price: String(formatMoney(tmpPrice, 2)), //мое кол-во денег в долларах (balance * rate)
            logo: itemInfo.image ? 'https://ethplorer.io' + itemInfo.image : '', //картинка валюты
            rate: String(formatMoney(itemPrice.rate, 2)), //курс в долларах за 1 монетку
            dif: String(itemPrice.diff), //рост, падение за сутки
        };
    } else {
        return {
            address: String(itemInfo.address), //адрес кошелька
            symbol: String(itemInfo.symbol), //ETH, BTC,
            name: String(itemInfo.name), //Ethereum, Bitcoin
            balance: String(formatMoney(itemBalance, 7)), //мое количесто денег в валюте (битке, эфире)
            price: '0', //мое кол-во денег в долларах (balance * rate)
            logo: itemInfo.image ? 'https://ethplorer.io' + itemInfo.image : '', //картинка валюты
            rate: '0', //курс в долларах за 1 монетку
            dif: '0', //рост, падение за сутки
        };
    }
}