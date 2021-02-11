import {ApiResp} from "@utils/ApiResp";
import axios from "axios";
import {apikey, apiUrl, getAddressHistoryByToken, getEtherTrans} from "@config/apiUrls";
import {log} from "@utils/log";
import {createListTransPage} from "@utils/createListTransPage";
import {createEthTrans} from "@utils/createEthTrans";

export const requestTransactions = async (address: string, searchToken: string): Promise<ApiResp> => {

    if (address !== searchToken.split('=')[1]) {
        try {
            const response = await axios({
                    method: 'get',
                    url: `${apiUrl}${getAddressHistoryByToken}${address}${apikey}&${searchToken}&type=transfer`,
                }
            );
            return {
                isError: false,
                data: createListTransPage(response.data, address),
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
                }
            );
            return {
                isError: false,
                data: createEthTrans(response.data, address),
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