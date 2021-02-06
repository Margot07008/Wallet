import * as React from 'react';
import { Typography } from 'antd';
import './SummaryCash.css';

const { Title } = Typography;
const { Text } = Typography;

const SummaryCash = ({totalSum}) => {
  return (
    <div className={'monitor'}>
      <Title id={'monitor__summary'} level={2}>${totalSum}</Title>
      <Text id={'monitor__pubkey'} type="secondary">readonly</Text>
    </div>
  )
}

export default SummaryCash;