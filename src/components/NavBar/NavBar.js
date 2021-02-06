import * as React from 'react';
import { PageHeader } from 'antd';
import './NavBar.scss';

const NavBar = () => {
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        onBack={() => {}}
        title={<div className="navbar-slogan">Wallet</div>}
        subTitle={<div className="navbar-slogan">Check your money</div>}
      >
      </PageHeader>
    </div>
  )
}

export default NavBar;