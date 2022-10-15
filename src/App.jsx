import { useState, useEffect } from 'react'
import axios from 'axios';

const searchString = "Gretsch";



function search(searchString){
  return searchString;
}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const brandName = async () => {
      await axios.get("http://localhost:5000/guitars")
      .then(
        res => setData(res.data))
    }
    brandName();
  }, []);

  const [count, setCount] = useState(0)
  search(searchString);
  return <div>{data[0].brandName}</div>
}

export default App
