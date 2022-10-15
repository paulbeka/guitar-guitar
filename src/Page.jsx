import React from 'react';
import Guitar from './components/Guitar';
import Dropdown from "./components/Dropdown.jsx";
import SearchBar from "./components/SearchBar.jsx";

const Page = (props) => {

    return (
        <div className="container"
             onScroll={() => {
                 console.log("scroll")
             }}
        >
            <div className="logo">
                <img src="src/assets/gglogo.png"/>
            </div>
            <div className="filter">
                <SearchBar/>
            </div>
            <div className="content">
            </div>
        </div>
    )
}

export default Page;