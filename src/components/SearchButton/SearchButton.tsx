import * as React from 'react';
import { Button, Tooltip } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { urls } from '../../config';


type Props = {
    inputText: string;
};


const SearchButton: React.FC<Props> = ({ inputText }) => {

    const history = useHistory();

    return (
        <>
            <Tooltip title="search">
                <Link to={urls.TOKENS.create(inputText)} >
                <Button
                    onClick={() => {
                        history.push(`tokens/${inputText}`);
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
