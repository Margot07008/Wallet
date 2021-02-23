import {ApiResp} from "@utils/ApiResp";
import axios from "axios";
import {apikey, apiUrl, getTransDetails} from "@config/apiUrls";
import {log} from "@utils/log";
import {CreateTransDetails} from "@utils/createTransDetails";

export const requestTransDetails = async (transHash: string) : Promise<ApiResp> => {
    try {
        const response = await axios({
            method: 'get',
            url: `${apiUrl}${getTransDetails}${transHash}${apikey}`,
        });
        return {
            isError: false,
            data: CreateTransDetails(response.data),
        };
    } catch (e) {
        log(e);
        return {
            isError: true,
            data: null,
        };
    }
}