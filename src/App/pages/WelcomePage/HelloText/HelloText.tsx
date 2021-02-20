import * as React from 'react';
import * as antd from 'antd';
import './HelloText.scss';
const { Typography } = antd;
const { Title, Text } = Typography;

const HelloText = () => {
    return (
        <>
            <div className="hello-text">
                <Title className="hello-text__text" level={1}>
                    Welcome!
                </Title>
                <Title className="hello-text__text" level={4}>
                    It is a free client interface to help you interact with the Ethereum blockchain
                </Title>
                <Text className="hello-text__text" type={'secondary'}>
                    Select type of login
                </Text>
            </div>
        </>
    );
};

export default HelloText;
