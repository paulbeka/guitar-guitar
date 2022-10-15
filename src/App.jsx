import { useState, useEffect } from 'react'
import axios from 'axios';

const searchString = "Rancher";
const dropString = "Item Name";
let guitars = [];

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
      setResult(response.data)
    })
  }, [])

  if (result === null){
    return(<div>loading</div>)
  } else {
    guitars = result;
  }

  let searchResult = search(searchString, dropString);
  console.log(searchResult);
  for (let i = 0; i < searchResult.size; i++){
    console.log([...searchResult][i].itemName);
  }
};

export default App
