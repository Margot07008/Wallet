import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CopyOutlined } from '@ant-design/icons';
import * as React from 'react';
import { Typography } from 'antd';
import { useContext } from 'react';
import { WalletAddressContext } from '../../../../TokensNavBar';
const { Text } = Typography;

type Props = {
    setCopied: React.Dispatch<React.SetStateAction<boolean>>;
    copied: boolean;
};

const TopField: React.FC<Props> = ({ copied, setCopied }) => {
    const id = useContext(WalletAddressContext);

    return (
        <>
            <div className="qrcode-link-fields qrcode-link-fields_bordered">
                <div className="qrcode-link-fields__title">
                    <Text type="secondary">Scan the QR code, or сopy the address below</Text>
                </div>
                <div className="qrcode-link-fields__address">
                    <Text strong>{id}</Text>
                </div>
                <div className="qrcode-link-fields__link">
                    <CopyToClipboard
                        text={id}
                        onCopy={() => {
                            setCopied(true);
                        }}
                    >
                        <CopyOutlined style={{ color: '#22075e', fontSize: '4rem' }} />
                    </CopyToClipboard>
                    {copied && <div style={{ color: '#d3adf7' }}>Copied.</div>}
                </div>
            </div>
        </>
    );
};

export default TopField;
