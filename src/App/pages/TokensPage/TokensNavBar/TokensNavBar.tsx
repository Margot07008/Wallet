import Icon, { LogoutOutlined, QrcodeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { urls } from '@config/apiUrls';
import * as React from 'react';
import './TokensNavBar.scss';
import { ReactComponent as LogoutIcon } from '@img/logout.svg';

type Props = {
    id: string,
}

export const TokensNavBar:React.FC<Props> = ({id}) => {
    return (
        <div
            className="tokens-navbar"
            onClick={() => {
                window.scrollTo(0, 0);
            }}
        >

                <div className="tokens-navbar__icon qr-code">
                    <Link to={urls.QR.create(id)}>
                    <QrcodeOutlined style={{ fontSize: '5rem', color: 'white' }} />
                    </Link>
                </div>

            <Link to={urls.MAIN}>
                <div className="tokens-navbar__icon logout">
                    <Icon component={LogoutIcon} style={{ fontSize: '5rem' }} />
                </div>
            </Link>
        </div>
    );
};

export default TokensNavBar;
