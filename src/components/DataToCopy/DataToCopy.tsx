import * as React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CopyOutlined } from '@ant-design/icons';
import { useState } from 'react';

type Props = { text: string };

const DataToCopy: React.FC<Props> = ({ text }) => {
    const [copied, setCopied] = useState(false);

    return (
        <>
            <CopyToClipboard
                text={text}
                onCopy={() => {
                    setTimeout(() => setCopied(false), 1000);
                    setCopied(true);
                }}
            >
                <CopyOutlined
                    style={{ color: '#22075e', fontSize: '4rem', margin: '0 0.1rem 0 1rem' }}
                />
            </CopyToClipboard>
            {copied && <span style={{ color: '#d3adf7' }}>Copied.</span>}
        </>
    );
};

export default DataToCopy;
