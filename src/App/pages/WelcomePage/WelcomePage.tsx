import * as React from 'react';
import './WelcomePage.scss';
import HelloText from './HelloText';
import SearchInput from "./SearchInput/SearchInput";


const WelcomePage = () => {
    return (
        <div className="welcome-bg">
            <div className="input-window">
                <HelloText />
                <SearchInput />
            </div>
        </div>
    );
};

export default WelcomePage;
