import React from 'react';
import TokensPage from './pages/TokensPage';
import './App.scss';
import WelcomePage from './pages/WelcomePage';
import TransactionsPage from './pages/TransactionsPage';

function App() {
    return (
        <div className="app">
            {/*<WelcomePage />*/}
            {/*<TokensPage/>*/}
            <TransactionsPage />
        </div>
    );
}

export default App;
