import QRcodePage from './QRcodePage/QRcodePage';
import { Modal, Typography } from 'antd';
import * as React from 'react';
import TopField from './TopField/TopField';
import './ModalQR.scss';

const { Text } = Typography;

type Props = {
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    isModalVisible: boolean;
};

const ModalQR: React.FC<Props> = ({ setIsModalVisible, isModalVisible }) => {

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <Modal
            title="Share your address"
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={null}
            bodyStyle={{ padding: '0 0 4rem 0', height: '70%' }}
            centered={true}
        >
            <div className="qrcode-link-fields">
                <QRcodePage />
            </div>
            <TopField />
            <div className="qrcode-link-fields">
                <Text type="secondary">
                    Send <b>only</b> ETH Ethereum to this address. Sending any other asset will
                    result in the loss of your deposit.
                </Text>
            </div>
        </Modal>
    );
};

export default ModalQR;
