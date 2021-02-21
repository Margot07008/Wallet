import * as React from 'react';
import * as antd from 'antd';
import './HelloText.scss';
const { Typography } = antd;
const { Title, Text } = Typography;

const HelloText = () => {
    return (
        <>
            <div className="hello-text">
                <div className="hello-text-title">
                    <Title className="hello-text__text" level={1}>
                    </Title>
                    <Title className="hello-text__text hello-text__text_purple" level={1}>
                        CryptoMargot
                    </Title>
                    <Text className="hello-text__text hello-text__text_grey" type="secondary">
                        It is a free client interface to help you interact with the Ethereum blockchain
                    </Text>
                    <Text className="hello-text__text">
                        <b>Swipe to select</b> a type of authorization
                    </Text>
                </div>
            </div>
        </>
    );
};

export default HelloText;
