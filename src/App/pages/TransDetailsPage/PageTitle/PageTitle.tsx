import * as React from 'react';
import { Typography } from 'antd';
import './PageTitle.scss';
const { Title } = Typography;

const PageTitle = () => {
    return (
        <div className="monitor-info">
            <Title level={2} style={{ color: 'white' }}>
                {' '}
                Transaction Details
            </Title>
        </div>
    );
};

export default PageTitle;
