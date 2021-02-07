import React from "react";
import * as antd from "antd";
import './HelloText.scss';
const {  Typography  } = antd;
const { Title, Text } = Typography;


const HelloText = () => {
  return (
    <>
      <div className="hello-text">
        <Title id="hello-text__title" level={2}>Добро пожаловать!</Title>
        <Text id="hello-text__text" type={'secondary'} >Введите адрес кошелька, чтобы узнать баланс</Text>
      </div>
    </>
  );
}

export default HelloText;