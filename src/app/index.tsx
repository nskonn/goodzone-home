import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'shared/consts/globalStyles';
import { App } from './App';

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);
    root.render(
        <BrowserRouter>
            <GlobalStyle />
            <App />
        </BrowserRouter>
    );
}
