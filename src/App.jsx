import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FirstPage from "./FirstPage.jsx";
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import SecondPage from "./SecondPage.jsx";

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FirstPage/>}></Route>
                    <Route path="/secondPage" element={<SecondPage/>}></Route>
                    <Route path="/thirdPage" element={<></>}></Route>
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    )
}

export default App;
