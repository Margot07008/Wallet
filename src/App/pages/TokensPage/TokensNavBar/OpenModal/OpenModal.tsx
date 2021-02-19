import {CopyOutlined, QrcodeOutlined} from "@ant-design/icons";
import {Modal, Typography} from "antd";
import QRCodePage from "./ModalQR/QRcodePage/QRcodePage";
import * as React from "react";
import {useContext, useState} from "react";
import './OpenModal.scss';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {WalletAddressContext} from "../TokensNavBar";
import ModalQR from "./ModalQR";

const {Text} = Typography;


const OpenModal = () => {


    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };


    return (
        <>
            <div className="tokens-navbar__icon qr-code">
                <QrcodeOutlined style={{fontSize: '5rem', color: 'white'}} onClick={showModal}/>
            </div>
            <ModalQR setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible}/>
        </>
    )
}

export default OpenModal;