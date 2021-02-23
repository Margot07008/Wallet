import * as React from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {CopyOutlined} from "@ant-design/icons";
import {Card} from "antd";
import {useState} from "react";

type Props = {hash:string};

const TransHashCopy:React.FC<Props> = ({hash}) => {

    const [copied, setCopied] = useState(false);

    return (
            <Card title="Transaction Hash" size="small" bordered={true}
                  style={{width: '100%', borderRadius: '5rem 5rem 0 0', wordBreak: 'break-all'}}>
                {hash}
                <CopyToClipboard
                    text={hash}
                    onCopy={() => {
                        setCopied(true);
                    }}
                >
                    <CopyOutlined
                        style={{color: '#22075e', fontSize: '4rem', margin: '0 1rem 0 2rem'}}
                    />
                </CopyToClipboard>
                {copied && <span style={{color: '#d3adf7'}}>Copied.</span>}
            </Card>
    )
}

export default TransHashCopy;