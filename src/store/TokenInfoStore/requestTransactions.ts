import { ApiResp } from '@utils/ApiResp';
import axios from 'axios';
import {
    apikey,
    apiUrl,
    getAddressHistoryByToken,
    getAddressInfo,
    getEtherTrans,
} from '@config/apiUrls';
import { log } from '@utils/log';
import { createListTransPage, listTransInfo } from '@utils/createListTransPage';
import { createEthTrans, ethTransInfo } from '@utils/createEthTrans';

export const requestTransactions = async (
    address: string,
    searchToken: string,
): Promise<ApiResp> => {
    let tokenAddress = searchToken.split('=')[1];
    try {
        const response2 = await axios({
            method: 'get',
            url: `${apiUrl}${getAddressInfo}${address}${apikey}`,
        });
        return {
            isError: false,
            data: {
                tokenInfo:
                    address.toUpperCase() !== tokenAddress.toUpperCase()
                        ? listTransInfo(response2.data.tokens, tokenAddress)
                        : ethTransInfo(response2.data),
            },
        };
    } catch (e) {
        log(e);
        return {
            isError: true,
            data: null,
        };
    }
};
