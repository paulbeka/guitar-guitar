import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import {Arrow} from "./Arrow";
import SearchBar from "./components/SearchBar.jsx"
import './App.css';
import {getAttrib} from "./dataHandling/dataInitialisation.js";
import {search} from "./dataHandling/Filtering.js"

let guitars = [];
let searchResult = [];
let outputPrinted = false;
let searching = false;

function App() {
    const [output, setOutput] = useState([]);
    const [input, setInput] = useState();
    const [selected, setSelected] = useState([]);
    const [result, setResult] = useState(null);

    useEffect(() => {
        if (guitars.length !== 0) {
            outputPrinted = false;
            searching = true;
            searchResult = search(guitars, input, "Brand Name");
            rendering(handleClick, isItemSelected, setOutput);
        }
    }, [input])

    // fetch data from server
    useEffect(() => {
        axios.get('http://localhost:5000/guitars')
            .then((response) => {
                setResult(response.data);
            })
    }, [])
    if (result === null) {
        return (<div>Loading...</div>)
    } else {
        guitars = result;
    }
    const isItemSelected = (id) => !!selected.find((el) => el === id);
    const handleClick = (id) => ({getItemById, scrollToItem}) => {
        const itemSelected = isItemSelected(id);

        setSelected((currentSelected) =>
            itemSelected
                ? currentSelected.filter((el) => el !== id)
                : currentSelected.concat(id)
        );
    };
    rendering(handleClick, isItemSelected, setOutput);

    return (
        <div className="container">
            <div className='Logo'>
                <img src='./src/assets/gglogo.png'/>
            </div>
            <div className="Searchbar">
                <SearchBar setInput={setInput}/>
            </div>
            <div className="Dropdowns">
                <div className="Color"></div>
                <div className="Pickup"></div>
                <div className="Body-Shape"></div>
                <div className="Search-Type"></div>
            </div>
            <div className='ScrollMenu'>
                <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                    {output}
                </ScrollMenu>
            </div>
        </div>
    );
}

function rendering(handleClick, isItemSelected, setOutput) {
    if (outputPrinted === false) {
        if (searching) {
            for (let i = 0; i < searchResult.length; i++) {
                setOutput(prevState => [...prevState, <Card
                    image={searchResult[i].pictureMain}
                    itemId={searchResult[i].skU_ID} // NOTE: itemId is required for track items
                    title={searchResult[i].itemName}
                    key={searchResult[i].skU_ID}
                    onClick={handleClick(searchResult[i])}
                    selected={isItemSelected(searchResult[i])}
                />]);
            }
        } else {
            for (let i = 0; i < guitars.length; i++) {
                setOutput(prevState => [...prevState, <Card
                    image={guitars[i].pictureMain}
                    itemId={guitars[i].skU_ID} // NOTE: itemId is required for track items
                    title={guitars[i].itemName}
                    key={guitars[i].skU_ID}
                    onClick={handleClick(guitars[i])}
                    selected={isItemSelected(guitars[i])}
                />]);
            }
        }
        outputPrinted = true;
    }
}

function LeftArrow() {
    const {isFirstItemVisible, scrollPrev} =
        React.useContext(VisibilityContext);

    return (
        <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
            Left
        </Arrow>
    );
}

function RightArrow() {
    const {isLastItemVisible, scrollNext} = React.useContext(VisibilityContext);

    return (
        <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
            Right
        </Arrow>
    );
}

function Card({onClick, selected, title, itemId, image}) {
    const visibility = React.useContext(VisibilityContext);
    const k = 1;
    return (
        <div
            onClick={() => onClick(visibility)}
            style={{
                width: `${k * 160}px`,
            }}
            tabIndex={0}
        >
            <div className="card">
                <img src={image}
                     style={{
                         height: `${k * 300}px`,
                         width: `${k * 117}px`,
                     }}/>
                <div>{title}</div>
                <div>selected: {JSON.stringify(!!selected)}</div>
            </div>
        </div>
    )
        ;
}

export default App;
