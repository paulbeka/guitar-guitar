import React from 'react';
import Guitar from './components/Guitar';
import Dropdown from "./components/Dropdown.jsx";
import SearchBar from "./components/SearchBar.jsx";

const Page = (props) => {

    return (
        <div className="container"
             style={{
                 background: props.background,
                 display: props.display ?? ''
             }}
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
                <Guitar/>
            </div>
        </div>
    )
}

export default Page;