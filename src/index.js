import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom";

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: '#25262E',
            },
        }
    },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ChakraProvider theme={theme}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </ChakraProvider>
    </BrowserRouter>
);
