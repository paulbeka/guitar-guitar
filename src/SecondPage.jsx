import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import {Arrow} from "./Arrow";
import SearchBar from "./components/SearchBar.jsx"
import styles from './SecondPage.module.css';
//import {getAttrib} from "./dataHandling/dataInitialisation.js";
import {search} from "./dataHandling/Filtering.js"
import {inputVar, resultVar, selectedIDList} from "./components/States.jsx";
import {useRecoilState} from "recoil";
import SongLoader from './components/SongLoader'
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SearchIcon from "@mui/icons-material/Search.js";
import {IconButton} from "@mui/material";
import AlertDialog from "./components/AlertDialog.jsx";

let guitars = []; //stores all guitars available
let searchResult = []; //stores all guitars that match the search terms
let outputPrepped = false; //tracks whether output is ready for rendering
let output = []; //stores the array of cards to be output
let searching = false; //tracks whether the user has entered a search query

//MAIN
function SecondPage() {
    //use state vars
    const [input, setInput] = useRecoilState(inputVar); //getter and setter for input var that stores the users search term(s)
    const [selected, setSelected] = useRecoilState(selectedIDList); //getter and setter for selected var that stores the id's of all currently selected cards
    const [result, setResult] = useRecoilState(resultVar); //getter and setter for result var which stores the data fetched via the axios server and guitarguitar api

    //Runs whenever the user submits a search term
    useEffect(() => {
        if (guitars.length !== 0) { //keeps this from running on start
            outputPrepped = false; //sets outputprepped to false to show that the output needs to be rendered
            searching = true; //sets searching to true to show that the user has submitted search terms
            searchResult = search(guitars, input, "Brand Name"); //Calls search function that is imported from 'src/data handling/filtering.js' and stores the results in a var
        }
    }, [input]) //ensures this only runs when input is changed (when the user submits a search term)

    // fetch data from axios server
    useEffect(() => {
        axios.get('http://localhost:5000/guitars')
            .then((response) => {
                setResult(response.data);
            })
    }, []) //makes this only run once
    if (result === null) { //if result has not been recieved yet
        return (<div>Loading...</div>) //show loading message
    } else { //if a result has been recieved
        guitars = result; //store the result in guitars
    }
    //Checks if an item is currently selected based off it's id
    function isItemSelected(id){
        return !!selected.find((el) => el === id); //return true if a matching id is found in the selected array, otherwise return false
    }
    //handles the behaviour when the user clicks on a card
    const handleClick = (id) => ({getItemById, scrollToItem}) => {
        const itemSelected = isItemSelected(id); //checks if the card clicked on is already selected and stores the result in a var

        setSelected((currentSelected) =>
            itemSelected ? currentSelected.filter((el) => el !== id) : currentSelected.concat(id) //If item is already selected remove item from the list of selected objects, otherwise add it to the list
        );
    };

    const handleClick2 = (event) => {

    }


    if (outputPrepped === false) { //if the output has not been prepared already
        if (searching) { //if the user has entered a search term
            output = searchResult.map((item) => ( //set output to an array of cards, with each card holding information collected from the searchResult array
                // passes parameters to the card constructor defined further below
                <Card
                    image={item.pictureMain} //set image uri
                    itemId={item.skU_ID} //set the item id to the sku id
                    title={item.itemName} //set the name of the guitar
                    brand={item.brandName} //set the brand that produced the guitar
                    key={item.skU_ID} //use the sku id as a key
                    onClick={handleClick(item.skU_ID)} // makes the handleClick function execute whenever a card is clicked, passing the id of the card in
                    selected={isItemSelected(item.skU_ID)} // checks whether the card is selected and passes the result to the constructor
                />))
        } else { // if the user did not enter any search terms
            output = guitars.map((item) => ( // set output to an array of cards, with each card holding information collected from the guitars array
                // passes parameters to the card constructor defined further below, all in the exact same manner as above, just taking from the general guitars array rather than the searchResult one
                <Card
                    image={item.pictureMain}
                    itemId={item.skU_ID}
                    title={item.itemName}
                    brand={item.brandName}
                    key={item.skU_ID}
                    onClick={handleClick(item.skU_ID)}
                    selected={isItemSelected(item.skU_ID)}
                />))
        }
        outputPrepped = true; // after setting the output, changes the value of outputPrepped to show that the output has been prepared
    }
    // this section renders the components
    return (
        <div className={styles.container}> <p hidden> // defines a container to keep everything in </p>
            <div className={styles.Logo}> <p hidden> // a div that contains the guitarguitar logo </p>
                <img src='./src/assets/gglogo.png'/>
            </div>
            <div className={styles.Searchbar}> <p hidden> // a div containing the searchbar </p>
                <SearchBar setInput={setInput}/> <p hidden> //the setInput here passes the useState setter to the searchbar.jsx file to allow for transfer of the input string the user entered into the searchbar </p>
            </div>
            <div className={styles.Dropdowns}> <p hidden> // a div that contains all the dropdown components </p>
                <div className={styles.Color}></div>
                <div className={styles.Pickup}></div>
                <div className={styles.BodyShape}></div>
                <div className={styles.SearchType}></div>
            </div>
            <div className={styles.ScrollMenu}> <p hidden> // a div that stores the scroll menu, the carousel component </p>
                <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}> <p hidden> // passes arrows in for navigation </p>
                    {output} <p hidden> // passes in constructed cards from earlier to be rendered </p>
                </ScrollMenu>
            </div>
        </div>
    )
}

//Function that constructs an arrow that can be used to navigate left
function LeftArrow() {
    const {isFirstItemVisible, scrollPrev} = React.useContext(VisibilityContext); // allows the program to judge if a card is currently visible

    // renders the arrow, disabling and hiding it if the leftmost card is visible (as the user can't go any further left)
    return (
        <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
            Left
        </Arrow>
    );
}

//Function that constructs an arrow that can be used to navigate right
function RightArrow() {
    const {isLastItemVisible, scrollNext} = React.useContext(VisibilityContext); // same purpose as above

    // renders the arrow, disabling and hiding it if the rightmost card is visible (as the user can't go any further right)
    return (
        <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
            Right
        </Arrow>
    );
}

// defines the card constructor that is used to generate the array of cards to be rendered in the scroll menu
function Card({onClick, selected, title, itemId, image, brand}) {
    const visibility = React.useContext(VisibilityContext); // allows the program to alter the card's visibility
    const k = 1; // defines a constant to use as a scale factor
    return (
        <div
            onClick={() => onClick(visibility)} // makes the card temporarily invisible when clicked
            style={{
                width: `${k * 160}px`, // defines the width of the card as 160 [the base width] multiplied by the scale factor
            }}
            tabIndex={0} // RETURN TO THIS
        >
            <div className="card"> <p hidden> assigns a className for css styling </p>
                <img src={image} // passes the image uri into an img tag to render the image
                    // defines the height and width of the image in terms of baseX or baseY multiplied by the scale factor
                     style={{
                         height: `${k * 300}px`,
                         width: `${k * 117}px`,
                     }}/>
                <div>{title}</div> <p hidden> // adds a div to the card that displays the model name of the guitar </p>
                <div>{brand}</div> <p hidden> // adds a div to the card that displays the brand who made the guitar </p>
                <div>selected: {JSON.stringify(!!selected)}</div> <p hidden> // adds a div that displays whether the card is currently selected </p>
                <AlertDialog/>
            </div>
        </div>
    )
}

export default SecondPage; // exports app to be called in main