import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TrendingCoinProvider } from './Context/TrendingCoinContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TrendingCoinProvider>
    <App />
    </TrendingCoinProvider>
  </React.StrictMode>
);



