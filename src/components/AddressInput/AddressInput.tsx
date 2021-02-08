import * as antd from 'antd';
import React from 'react';
import './AddressInput.scss';

const { Input } = antd;

const AddressInput = () => {
    return (
        <>
            <div className={'input-btn-cont'}>
                <Input
                    placeholder="Например: 0xC88F7666330b4b511358b7742dC2a3234710e7B1"
                    allowClear
                />
            </div>
        </>
    );
};

export default AddressInput;
