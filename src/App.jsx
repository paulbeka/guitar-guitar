import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Navigate } from "react-router-dom";
import FirstPage from "./FirstPage.jsx";
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import SecondPage from "./SecondPage.jsx";
import {RedirectVar} from "./components/States.jsx";

function App() {
    const [clicked, setClicked] = useRecoilState(RedirectVar);
    return (
            <BrowserRouter>
                <Routes>
                    <Route element={clicked ? <Navigate to={'/secondPage'}/> : <FirstPage/> } path="/"></Route>
                    <Route path="/secondPage" element={<SecondPage/>}></Route>
                    <Route path="/thirdPage" element={<></>}></Route>
                </Routes>
            </BrowserRouter>
    )
}

export default App;
