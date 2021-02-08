import React from 'react';
import './WelcomePage.scss';
import HelloText from './HelloText';
import AddressInput from '../../../components/AddressInput';
import SearchButton from '../../../components/SearchButton';

const WelcomePage = () => {
    return (
        <>
            <div className="welcome-bg">
                <div className="input-window">
                    <HelloText />
                    <div className="search-input">
                        <AddressInput />
                        <SearchButton />
                    </div>
                </div>
            </div>
        </>
    );
};

export default WelcomePage;
