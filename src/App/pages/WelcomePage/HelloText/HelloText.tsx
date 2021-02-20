import * as React from 'react';
import * as antd from 'antd';
import './HelloText.scss';
const { Typography } = antd;
const { Title, Text } = Typography;

const HelloText = () => {
    return (
        <>
            <div className="hello-text">
                <Title id="hello-text__title" level={1}>
                    Welcome!
                </Title>
                <Text id="hello-text__text" type={'secondary'}>
                    Enter your mnemonics or Ethereum address below
                </Text>
            </div>
        </>
    );
};

export default HelloText;
