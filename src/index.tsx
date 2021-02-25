import * as React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.css';
import App from './App';
import '@styles/index.scss';
import { fit } from '@utils/fit';
import bridge from '@vkontakte/vk-bridge';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <ConfigProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ConfigProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

document.addEventListener('DOMContentLoaded', () => {
    bridge.subscribe((e) => {
        if (e.detail.type === 'VKWebAppInitResult') {
            document.body.classList.add('vk-app');
        }
        console.log(e);
    });
    bridge.send('VKWebAppInit', {});
    initScale();
});

function initScale() {
    window.addEventListener('resize', fit);
    fit();
}
