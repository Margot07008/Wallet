import React, { useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import { Form, Button } from 'antd';
import './SearchTextarea.scss';
import { useHistory } from 'react-router-dom';
const { EthHdWallet } = require('eth-hd-wallet');

const SearchTextarea = () => {
    const history = useHistory();
    const [address, setAddress] = useState('');
    const [isError, setError] = useState(false);

    const onFinish = () => {
        history.push(`tokens/${address}`);
    };

    return (
        <Form name="input-mnemonics" onFinish={onFinish}>
            <Form.Item
                initialValue="crop truly stuff sing course hour six rescue mass aunt invest dose will local empower"
                name="mnemonics"
                label="Mnemonic phrase"
                rules={[
                    { required: true, message: 'Please input your mnemonic!' },
                    () => ({
                        validator(_, value) {
                            try {
                                const wallet = EthHdWallet.fromMnemonic(
                                    value.replace(/\s+/g, ' ').trim(),
                                );
                                setAddress(wallet.generateAddresses(1));
                                setError(false);
                                return Promise.resolve();
                            } catch (e) {
                                setError(true);
                                return Promise.reject('Enter a correct Eth mnemonic!');
                            }
                        },
                    }),
                ]}
            >
                <TextArea
                    placeholder="Example: crop truly stuff sing course hour six rescue mass aunt invest dose will local empower"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    allowClear
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" disabled={isError} htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SearchTextarea;
