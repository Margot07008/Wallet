import * as React from 'react';
import { Button, PageHeader } from 'antd';
import { useHistory } from 'react-router-dom';
import './NavBar.scss';
import { ArrowLeftOutlined, ArrowsAltOutlined, LogoutOutlined } from '@ant-design/icons';

type Props = {
    title: string;
    subtitle?: string;
};

const NavBar: React.FC<Props> = ({ title, subtitle }) => {
    const history = useHistory();

    return (
        <>
            <div
                className="site-page-header-ghost-wrapper"
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            >
                <PageHeader
                    backIcon={<ArrowLeftOutlined style={{ color: 'white' }} />}
                    ghost={false}
                    onBack={() => {
                        history.goBack();
                    }}
                    title={<div className="navbar-slogan">{title}</div>}
                    subTitle={<div className="navbar-slogan">{subtitle}</div>}
                />
            </div>
        </>
    );
};

export default NavBar;
