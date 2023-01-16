import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Hello from '../modules/hello/Hello'

export default function Main() {
    return <>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Hello/>}/>
                    <Route path="/hello" element={<Hello/>}/>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </>
};
