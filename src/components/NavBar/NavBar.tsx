import * as React from 'react';
import { PageHeader } from 'antd';
import './NavBar.scss';

type Props = {
    title: string;
    subtitle?: string;
};

const NavBar: React.FC<Props> = ({ title, subtitle }) => {
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                onBack={() => {window.history.back()}}
                title={<div className="navbar-slogan">{title}</div>}
                subTitle={<div className="navbar-slogan">{subtitle}</div>}
            />
        </div>
    );
};

export default NavBar;
