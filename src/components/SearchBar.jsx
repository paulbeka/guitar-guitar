import React, {useEffect, useState} from 'react';
import {IconButton, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = (props) => {

    let x = "";
    const handleInput = (event) => {
        x = event.target.value;
    }

    const handleClick = (event) => {
        event.preventDefault();
        console.log("INPUT PASSED!");
        props.setInput(x);
    }

    return (
        <form>
            <TextField
                id="search-bar"
                className="text"
                onInput={(event) => handleInput(event)}
                label="Search"
                variant="outlined"
                placeholder="Search..."
                size="small"
            />
            <IconButton onClick={(event) => handleClick(event)} type="submit" aria-label="search">
                <SearchIcon/>
            </IconButton>
        </form>
    )
};

export default SearchBar