import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
    
);


