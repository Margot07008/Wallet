import Icon, { LogoutOutlined, QrcodeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { urls } from '@config/apiUrls';
import * as React from 'react';
import './TokensNavBar.scss';
import { ReactComponent as LogoutIcon } from '@img/logout.svg';
import {createContext, useState} from "react";
import {Modal} from "antd";
import QRCodePage from "./OpenModal/ModalQR/QRcodePage";
import OpenModal from "./OpenModal";
import TokensStore from "@store/TokensStore";

type Props = {
    id: string;
};

export const WalletAddressContext = createContext<string>('');

export const TokensNavBar: React.FC<Props> = ({ id }) => {


    return (
        <div
            className="tokens-navbar"
            onClick={() => {
                window.scrollTo(0, 0);
            }}
        >
            <WalletAddressContext.Provider value={id}>
                <OpenModal/>
            </WalletAddressContext.Provider>



            <Link to={urls.MAIN}>
                <div className="tokens-navbar__icon logout">
                    <Icon component={LogoutIcon} style={{ fontSize: '5rem' }} />
                </div>
            </Link>
        </div>
    );
};

export default TokensNavBar;
