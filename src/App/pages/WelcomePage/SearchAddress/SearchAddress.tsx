import { Button, Form, Input } from 'antd';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import InputFormItem from './InputFormItem';

const SearchAddress = () => {
    const history = useHistory();

    const onFinish = (value: any) => {
        history.push(`tokens/${value.address}`);
    };

    return (
        <Form name="input-address" onFinish={onFinish}>
            <InputFormItem />
        </Form>
    );
};

export default SearchAddress;
