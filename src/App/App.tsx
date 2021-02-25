import * as React from 'react';
import TokensPage from './pages/TokensPage';
import './App.scss';
import WelcomePage from './pages/WelcomePage';
import TransactionsPage from './pages/TransactionsPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { urls } from '@config/apiUrls';
import NotFoundPage from './pages/NotFoundPage';
import { Spin } from 'antd';
// @ts-ignore
import LoaderIcon from 'react-loader-icon';
import TransDetailsPage from './pages/TransDetailsPage';

// Spin.setDefaultIndicator(<LoadingOutlined style={{color:'#d3adf7'}}/>)
Spin.setDefaultIndicator(<LoaderIcon size={50} type={'spokes'} color="#d3adf7" />);

function App() {
    return (
        <>
            <div className="app">
                <BrowserRouter>
                    <Switch>
                        <Route component={WelcomePage} exact path={urls.MAIN} />
                        <Route component={TokensPage} path={urls.TOKENS.mask} />
                        <Route component={TransactionsPage} path={urls.TRANS.mask} />
                        <Route component={TransDetailsPage} path={urls.TRANS_DETAILS.mask} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
