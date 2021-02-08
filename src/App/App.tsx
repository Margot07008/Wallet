import React from 'react';
import TokensPage from './pages/TokensPage';
import './App.scss';
import WelcomePage from './pages/WelcomePage';
import TransactionsPage from './pages/TransactionsPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { urls} from "../config";



function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Switch>
                    <Route component={TokensPage} exact path={urls.TOKENS.mask} />
                    <Route component={WelcomePage} path={urls.MAIN} />
                    {/*<TransactionsPage />*/}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
