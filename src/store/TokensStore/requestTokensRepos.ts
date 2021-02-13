import axios from 'axios';
import { apikey, apiUrl, getAddressInfo } from '@config/apiUrls';
import { CreateTokens } from '@utils/createTokens';
import { ApiResp } from '@utils/ApiResp';
import { log } from '@utils/log';

export const requestTokensRepos = async (id: string): Promise<ApiResp> => {
    try {
        const response = await axios({
            method: 'get',
            url: `${apiUrl}${getAddressInfo}${id}${apikey}`,
        });
        return {
            isError: false,
            // lastTime: response.data.tokens[response.data.tokens.length - 1].
            data: CreateTokens(response.data),
        };
    } catch (e) {
        log(e);
        return {
            isError: true,
            data: null,
        };
    }
};
