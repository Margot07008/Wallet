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
                <Text className="hello-text__text hello-text__text_grey" type="secondary">
                    It is a free client interface to help you interact with the Ethereum blockchain
                </Text>
                <Title className="hello-text__text" level={4}>
                    Select type of login
                </Title>
            </div>
        </>
    );
};

export default HelloText;
