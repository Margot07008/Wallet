import * as React from 'react';
import { PageHeader } from 'antd';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        onBack={() => {}}
        title="Wallet"
        subTitle="Check your money"
        // extra={[
        //   <Button key="3">Operation</Button>,
        //   <Button key="2">Operation</Button>,
        //   <Button key="1" type="primary">
        //     Primary
        //   </Button>,
        // ]}
      >
      </PageHeader>
    </div>
  )
}

export default NavBar;