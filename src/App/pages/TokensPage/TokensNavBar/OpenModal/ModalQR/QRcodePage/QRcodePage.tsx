import * as React from 'react';
import './QRCodePage.scss';
import { useContext } from 'react';
import { WalletAddressContext } from '../../../TokensNavBar';
const QRCode = require('qrcode.react');

const QRcodePage = () => {
    const id = useContext(WalletAddressContext);

    return (
            <div className="qr-code-page">
                <div className="qr-code-page__qr">
                    <QRCode value={id} />
                </div>
            </div>
    );
};

export default QRcodePage;