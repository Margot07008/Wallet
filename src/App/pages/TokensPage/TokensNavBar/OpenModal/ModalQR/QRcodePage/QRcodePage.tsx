import { useParams } from 'react-router-dom';
import * as React from 'react';
import { observer } from 'mobx-react-lite';
import './QRCodePage.scss';
import {useContext} from "react";
import {WalletAddressContext} from "../../../TokensNavBar";

const QRCode = require('qrcode.react');


const QRCodePage= () => {

    const id = useContext(WalletAddressContext);

    return (
        <>
            <div className="qr-code-page">
                <div className="qr-code-page__qr">
                    <QRCode value={id} />
                </div>
            </div>
        </>
    );
};

export default observer(QRCodePage);
