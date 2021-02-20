import {Form, Input} from "antd";
import * as React from "react";

const InputFormItem = () => {
    return (
        <Form.Item initialValue="0x6f2e19b1dac147587ab8ad3a3ff556a5f2bb332a" name="address" label="Enter address here"
                   rules={[{ required: true, message: 'Please input your address!'},
                       () => ({
                           validator(_, value) {
                               const reg = new RegExp('0x[0-9a-fA-F]{40}');
                               if (!value || value.search(reg) != -1) {
                                   return Promise.resolve();
                               }
                               return Promise.reject('Enter a correct Eth address!');
                           },
                       }),
                   ]}
        >
            <Input allowClear
                   placeholder="Example: 0x6f2e19b1dac147587ab8ad3a3ff556a5f2bb332a"
            />
        </Form.Item>
    )
}

export default InputFormItem;