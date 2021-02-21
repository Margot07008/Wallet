import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CopyOutlined } from '@ant-design/icons';
import * as React from 'react';
import { Typography } from 'antd';
import { useContext } from 'react';
import { WalletAddressContext } from '../../../TokensNavBar';
import './TopField.scss'

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
                    <Text type="secondary">Scan the QR code or сopy the address below</Text>
                </div>
                <div className="qrcode-link-fields__address">
                    <Text  strong>{id}</Text>
                    <CopyToClipboard
                        text={id}
                        onCopy={() => {
                            setCopied(true);
                        }}
                    >
                        <CopyOutlined style={{ color: '#22075e', fontSize: '4rem', margin:'0 1rem 0 2rem' }} />
                    </CopyToClipboard>
                    {copied && <span style={{ color: '#d3adf7' }}>Copied.</span>}
                </div>
            </div>
        </>
    );
};

export default TopField;
