import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FirstPage from "./FirstPage.jsx";
import SecondPage from "./SecondPage.jsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FirstPage/>}></Route>
                <Route path="/secondPage" element={<SecondPage/>}></Route>
                <Route path="/thirdPage" element={<></>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
