import React, {useEffect, useState} from 'react';
import {IconButton, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = (props) => { // establishes props so that this function can recieve the setter for the input variable stored in app()

    let x = ""; // establish a var x that is an empty string
    const handleInput = (event) => { // declare a function that takes in a var event
        x = event.target.value; // store the value contained in the element that triggered the event
    }

    const handleClick = (event) => { // declare a function that takes in event
        event.preventDefault(); // this stops the button from redirecting the user
        console.log("INPUT PASSED!"); //DEBUG LOG
        props.setInput(x); // makes use of the setter passed through props to update the value of input to match x (the value contained in the search bar)
    }
    // rendering
    /*
    declare a text field
    give a unique id
    make use of a class name for css formatting
    calls the handleInput function whenever the user enters anything into the search bar (which in turn saves what is in the search bar locally in x)
    give the search bar a label
    add some placeholder text
    add an icon that functions as a button and tie it to handleClick, this send the input in the searchbar through to the main app file via the setter
    renders the icon
     */
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