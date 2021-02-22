import {Button, Form, Input} from 'antd';
import * as React from 'react';
import {useState} from "react";

const InputFormItem = () => {

    const [isError, setError] = useState(false);

    return (
        <>
        <Form.Item
            initialValue="0x6f2e19b1dac147587ab8ad3a3ff556a5f2bb332a"
            name="address"
            label="Address"
            rules={[
                { required: true, message: 'Please input your address!' },
                () => ({
                    validator(_, value) {
                        const reg = new RegExp('0x[0-9a-fA-F]{40}');
                        if (!value || value.search(reg) != -1) {
                            setError(false);
                            return Promise.resolve();
                        }
                        setError(true);
                        return Promise.reject('Enter a correct Eth address!');
                    },
                }),
            ]}
        >
            <Input allowClear placeholder="Example: 0x6f2e19b1dac147587ab8ad3a3ff556a5f2bb332a" />
        </Form.Item>
        <Form.Item>
            <Button type="primary" disabled={isError} htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </>
    );
};

export default InputFormItem;
