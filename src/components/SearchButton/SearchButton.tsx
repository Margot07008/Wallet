import React, {useState} from 'react';
import { Button, Tooltip } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import axios from "axios";
import {apikey, apiUrl, getAddressInfo, urls} from "../../config";
import {Link} from "react-router-dom";

type Props = {
    inputText: string
}

const submitAddress = (address: string) :void => {

    const [isRedirected, redirect] = useState(false);

    const makeRequest = async () => {
        axios({
            method: 'get',
            url: `${apiUrl}${getAddressInfo}${address}${apikey}`
        }).then(response => {
            console.log(response);
            redirect(true);
        });

    }

    makeRequest().then(()=>{

    });

}

const SearchButton:React.FC<Props> = ({inputText}) => {
    return (
        <>
            <Tooltip title="search" >
                <Button onClick={()=>{submitAddress(inputText)}} shape="circle" icon={<ArrowRightOutlined />} />
            </Tooltip>
        </>
    );
};

export default SearchButton;
