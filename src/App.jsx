import { useState, useEffect} from 'react';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import './App.css'

const searchString = "Rancher";
const dropString = "Item Name";
let guitars = [];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


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
  }
  return results;
}

function App() {
  const url = 'http://localhost:5000/guitars';
  const [result, setResult] = useState(null);

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
  for (let i = 0; i < searchResult.size; i++){
    console.log([...searchResult][i].itemName);
}

  return(
  <div className="App"></div>
  )
};

export default App
