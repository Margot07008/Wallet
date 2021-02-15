import {ApiResp} from "@utils/ApiResp";
import {apikey, apiUrl, getAddressHistoryByToken, getEtherTrans} from "@config/apiUrls";
import axios from "axios";
import {createListTransPage} from "@utils/createListTransPage";
import {createEthTrans} from "@utils/createEthTrans";
import {log} from "@utils/log";

export const requestUploadTrans = async (
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
