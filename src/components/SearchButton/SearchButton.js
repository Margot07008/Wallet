import React from "react";
import { Button, Tooltip } from 'antd';
import {ArrowRightOutlined} from '@ant-design/icons';

const SearchButton = () => {
  return (
    <>
      <Tooltip title="search">
        <Button shape="circle" icon={<ArrowRightOutlined />} />
      </Tooltip>
    </>
  )
}

export default SearchButton;