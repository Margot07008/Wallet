import { ApiResp } from '@utils/ApiResp';
import axios from 'axios';
import {
    apikey,
    apiUrl,
    getAddressHistoryByToken, getAddressInfo,
    getEtherTrans,
    getTokenInfo,
} from '@config/apiUrls';
import { log } from '@utils/log';
import { createListTransPage } from '@utils/createListTransPage';
import { createEthTrans } from '@utils/createEthTrans';

export const requestTransactions = async (
    address: string,
    searchToken: string,
): Promise<ApiResp> => {
    let tokenAddress = searchToken.split('=')[1]
    if (address !== tokenAddress) {
        try {
            const response = await axios({
                method: 'get',
                url: `${apiUrl}${getAddressHistoryByToken}${address}${apikey}&${searchToken}&type=transfer`,
            });
            const response2 = await axios({
                method: 'get',
                url: `${apiUrl}${getAddressInfo}${address}${apikey}`,
            })
            return {
                isError: false,
                data: createListTransPage(response.data,response2.data.tokens, tokenAddress),
            };
        } catch (e) {
            log(e);
            return {
                isError: true,
                data: null,
            };
        }
    } else {
        try {
            const response = await axios({
                method: 'get',
                url: `${apiUrl}${getEtherTrans}${address}${apikey}&limit=50`,
            });
            const response2 = await axios({
                method: 'get',
                url: `${apiUrl}${getAddressInfo}${address}${apikey}`,
            })
            return {
                isError: false,
                data: createEthTrans(response.data, response2.data),
            };
        } catch (e) {
            log(e);
            return {
                isError: true,
                data: null,
            };
        }
    }
};
