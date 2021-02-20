import React from 'react';
import TextArea from 'antd/es/input/TextArea';
import { Form, Button } from 'antd';
import './SearchTextarea.scss';
import { useHistory } from 'react-router-dom';
const { EthHdWallet } = require('eth-hd-wallet');

const SearchTextarea = () => {
    const history = useHistory();

    const onFinish = (values: any) => {
        try {
            const wallet = EthHdWallet.fromMnemonic(values.mnemonics.replace(/\s+/g, ' ').trim());
            history.push(`tokens/${wallet.generateAddresses(1)}`);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Form name="input-mnemonics" onFinish={onFinish}>
            <Form.Item
                initialValue="crop truly stuff sing course hour six rescue mass aunt invest dose will local empower"
                name="mnemonics"
                label="Enter mnemonics here"
                rules={[{ required: true }]}
            >
                <TextArea
                    placeholder="Example: crop truly stuff sing course hour six rescue mass aunt invest dose will local empower"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    allowClear
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SearchTextarea;
