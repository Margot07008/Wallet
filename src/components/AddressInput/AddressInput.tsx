import * as antd from 'antd';
import React from 'react';
import './AddressInput.scss';

const { Input } = antd;

type Props = {
    saveInput: any;
};

const AddressInput: React.FC<Props> = ({ saveInput }) => {
    return (
        <>
            <div className={'input-btn-cont'}>
                <Input
                    name="address"
                    placeholder="Например: 0xC88F7666330b4b511358b7742dC2a3234710e7B1"
                    allowClear
                    // onPressEnter={(e)=>{saveInput(console.log(e.target.name))}}
                    onChange={(e) => {
                        saveInput(e.target.value);
                    }}
                />
            </div>
        </>
    );
};

export default AddressInput;
