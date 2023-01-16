import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Hello from '../modules/hello/Hello'
import FatherToSon from '../modules/usestate/FatherToSon'
import SonToFather from "../modules/usestate/SonToFather";
import SonToFatherCallBack from "../modules/usestate/SonToFatherCallBack";
import FatherToSonContext from "../modules/usestate/FatherToSonContext";

export default function Main() {
    return <>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Hello/>}/>
                    <Route path="/hello" element={<Hello/>}/>
                    <Route path="/fathertoson" element={<FatherToSon/>}/>
                    <Route path="/sontofather" element={<SonToFather/>}/>
                    <Route path="/sontofathercallback" element={<SonToFatherCallBack/>}/>
                    <Route path="/fathertosoncontext" element={<FatherToSonContext/>}/>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </>
};
