import * as React from 'react';
import { Button, Tooltip } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { urls } from '@config/apiUrls';

type Props = {
    inputText: string;
};

const validateAddress = (inputText: string) => {
    return inputText !== '';
};

const SearchButton: React.FC<Props> = ({ inputText }) => {
    return (
        <>
            <Tooltip title="search">
                <Link to={urls.TOKENS.create(inputText)}>
                    <Button
                        onClick={(e) => {
                            if (!validateAddress(inputText)) {
                                e.preventDefault();
                            }
                        }}
                        shape="circle"
                        icon={<ArrowRightOutlined />}
                    />
                </Link>
            </Tooltip>
        </>
    );
};

export default SearchButton;
