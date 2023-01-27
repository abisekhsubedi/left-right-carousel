import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReduceStress } from "react-reduce-stress";
import { NextUIProvider } from '@nextui-org/react';
import App from './app'
import './index.css'
// import '@tremor/react/dist/esm/tremor.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ReduceStress />
        <NextUIProvider>
            <App />
        </NextUIProvider>
    </React.StrictMode>,
)
