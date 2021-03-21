import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CopyOutlined } from '@ant-design/icons';
import * as React from 'react';
import { Typography } from 'antd';
import { useContext } from 'react';
import { WalletAddressContext } from '../../../TokensNavBar';
import './TopField.scss';
import DataToCopy from '@components/DataToCopy';

const { Text } = Typography;

const TopField = () => {
    const id = useContext(WalletAddressContext);

    return (
        <>
            <div className="qrcode-link-fields qrcode-link-fields_bordered">
                <div className="qrcode-link-fields__title">
                    <Text type="secondary">Scan the QR code or сopy the address below</Text>
                </div>
                <div className="qrcode-link-fields__address">
                    <Text strong>{id}</Text>
                    <DataToCopy text={id} />
                </div>
            </div>
        </>
    );
};

export default TopField;
