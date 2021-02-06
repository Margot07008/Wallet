import * as React from 'react';
import { Typography } from 'antd';
import './SummaryCash.css';

const { Title } = Typography;
const { Text } = Typography;

const SummaryCash = () => {
  const money = '$123,456.51';
  return (
    <div className={'monitor'}>
      <Title id={'monitor__summary'} level={2}>{money}</Title>
      <Text id={'monitor__pubkey'} type="secondary">pubkey</Text>
    </div>
  )
}

export default SummaryCash;