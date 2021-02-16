import Search from "antd/es/input/Search";
import {Alert, Space} from "antd";
import * as React from "react";
import {useHistory} from "react-router-dom";
import {useState} from "react";

export const SearchInput = () => {
    const history = useHistory();
    const [isError, setError] = useState(false);

    const onSearch = (value: string) => {
        const reg = new RegExp('0x[0-9a-fA-F]{40}');
        if (value.search(reg) != -1) {
            history.push(`tokens/${value}`);
        } else {
            setError(true);
        }
    };

    return (
        <>
            <Space direction="vertical">
                <Search
                    allowClear
                    placeholder="input search text"
                    onSearch={(value) => {
                        onSearch(value);
                    }}
                    onChange={() => {setError(false)}}
                    defaultValue='0x6f2e19b1dac147587ab8ad3a3ff556a5f2bb332a'
                    enterButton
                />
            </Space>
            {isError &&
            <Alert
              message="Incorrect address"
              description="You should enter the correct wallet ethereum address"
              type="error"
            />
            }
        </>
    );

}

export default SearchInput;