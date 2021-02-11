import * as React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.css';
import App from './App';
import '@styles/index.scss';
import { fit } from '@utils/fit';

ReactDOM.render(
    <React.StrictMode>
        <ConfigProvider>
            <App />
        </ConfigProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

document.addEventListener('DOMContentLoaded', () => {
    initScale();
});

function initScale() {
    window.addEventListener('resize', fit);
    fit();
}
