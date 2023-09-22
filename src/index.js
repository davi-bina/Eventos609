import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './app/Router';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/defaultTheme';
import { GlobalStyle } from './global';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
    <Router />
    <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);


