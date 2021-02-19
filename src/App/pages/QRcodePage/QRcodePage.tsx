import {useParams} from "react-router-dom";
import * as React from 'react';
import {observer} from "mobx-react-lite";
import './QRCodePage.scss';
import ExitNavBar from "./ExitNavBar";

const QRCode = require('qrcode.react');

interface ParamTypes {
    id: string
}

const QRCodePage = () => {
    const {id} = useParams<ParamTypes>();

    return (
        <>
        <div className="qr-code-page">
            <ExitNavBar id={id}/>
            <div className="qr-code-page__qr">
                <QRCode value={id}/>
            </div>
        </div>
        </>
    )
}

export default observer(QRCodePage);