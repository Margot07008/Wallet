import NavBar from '@components/NavBar';
import * as React from 'react';

type Props = {
    infoToken: {
        name: string;
        symbol: string;
    };
};

const FillInNavBar: React.FC<Props> = ({ infoToken }) => {
    const titleNavBar = `${infoToken.name} (${infoToken.symbol})`;
    return <NavBar title={titleNavBar} subtitle={''} />;
};

export default FillInNavBar;
