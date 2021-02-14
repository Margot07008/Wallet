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

export const requestLoadMore = async (
    address: string,
    searchToken: string,
    lastTransTime: number,
): Promise<ApiResp> => {
    let tokenAddress = searchToken.split('=')[1];
    let url: string = '';

    try {
        if (address !== tokenAddress) {
            url = `${apiUrl}${getAddressHistoryByToken}${address}${apikey}&${searchToken}&type=transfer&limit=10&timestamp=${lastTransTime}`;
        } else {
            url = `${apiUrl}${getEtherTrans}${address}${apikey}&limit=10&timestamp=${lastTransTime}`;
        }
        const response = await axios({
            method: 'get',
            url: url,
        });
        return {
            isError: false,
            data:
                address.toLocaleUpperCase() !== tokenAddress.toLocaleUpperCase()
                    ? { trans: createListTransPage(response.data) }
                    : {
                          trans: createEthTrans(response.data),
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
