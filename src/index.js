import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.css';
import App from './App';
import './styles/index.css';


ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


const DESKTOP_WIDTH = 1440;
const DESKTOP_HEIGHT = 1024;
const MOBILE_WIDTH = 720;
const MOBILE_HEIGHT = 1280;

const SIZE = {
  MOBILE: [MOBILE_WIDTH, MOBILE_HEIGHT],
};


function fit() {

  let  currentWidth = window.innerWidth;
  let  currentHeight = window.innerHeight;


  const initScale = 10;
  let currentScale = 1;

  const [aspectWidth, aspectHeight] = SIZE.MOBILE ;
  if (currentWidth < aspectWidth) {
    currentScale = currentWidth / aspectWidth;
  }
  if (currentHeight < aspectHeight) {
    currentScale = Math.min(currentScale, currentHeight / aspectHeight);
  }

  currentScale = Math.max(currentScale, 0.5);

  document.documentElement.style.fontSize = `${currentScale * initScale}px`;
}

function initScale() {
  window.addEventListener("resize", fit);
  fit();
}

document.addEventListener("DOMContentLoaded", () => {
  initScale();
})