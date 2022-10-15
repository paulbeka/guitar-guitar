import React, { useState, useEffect} from 'react';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import { Arrow } from "./Arrow";
import './App.css'

const searchString = "Taylor";
const dropString = "Brand Name";
let guitars = [];
let output = [];
let outputPrinted = false;

function search(searchString, dropString){
  let results = new Set();
  switch(dropString){
    case "Item Name":
      for (let i = 0; i < 501; i++){
        if(guitars[i].itemName.search(searchString) != -1){
          results.add(guitars[i]);
        }
      }
      break;
    case "Brand Name":
      for (let i = 0; i < 501; i++){
        if(guitars[i].brandName.search(searchString) != -1){
          results.add(guitars[i]);
        }
      }
      break;
  }
  return results;
}

function App() {
  //Carousel
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);
  const url = 'http://localhost:5000/guitars';
  const [result, setResult] = useState(null);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };
  
  useEffect(() => {
    axios.get(url)
    .then((response)=>{
      setResult(response.data);
    })
  }, [])

  if (result === null){
    return(<div>loading</div>)
  } else {
    guitars = result;
  }
  let searchResult = search(searchString, dropString);
  console.log(searchResult);
  /*
  for (let i = 0; i < searchResult.size; i++){
    console.log([...searchResult][i].itemName);
  }
  */
  if (!outputPrinted){
    for (let i = 0; i < searchResult.size; i++){
        let id = 'element-' + i.toString()
        console.log(id);
        output.push(
            <Card className='guitar'
                image={[...searchResult][i].pictureMain}
                itemId={id} // NOTE: itemId is required for track items
                title={[...searchResult][i].itemName}
                key={id}
                onClick={handleClick(id)}
                selected={isItemSelected(id)}
            />
        )
    }
  }
  outputPrinted = true;
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {output}
    </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isFirstItemVisible} direction='Left' onClick={() => scrollPrev()}/>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isLastItemVisible} direction='Right' onClick={() => scrollNext()}/>
  );
}

function Card({ onClick, selected, title, itemId, image }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: '160px',
      }}
      tabIndex={0}
    >
      <div className="card">
        <img className='guitar' src={image}/>
        <div>{title}</div>
        <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: '200px',
        }}
      />
    </div>
  );
}

export default App
