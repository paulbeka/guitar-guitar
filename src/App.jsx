import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FirstPage from "./FirstPage.jsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FirstPage/>}></Route>
                <Route path="/secondPage" element={<></>}></Route>
                <Route path="/thirdPage" element={<></>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
