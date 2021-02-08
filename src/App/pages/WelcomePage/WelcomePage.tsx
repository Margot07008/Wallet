import React, {useState} from 'react';
import './WelcomePage.scss';
import HelloText from './HelloText';
import AddressInput from '../../../components/AddressInput';
import SearchButton from '../../../components/SearchButton';
import { Formik, Form } from 'formik';

const WelcomePage = () => {

    const [inputText, saveInput] = useState('');

    return (
        <>
            <div className="welcome-bg">
                <div className="input-window">
                    <HelloText />
                    <div className="search-input">
                        <AddressInput saveInput={saveInput}/>
                        <SearchButton inputText={inputText}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WelcomePage;
