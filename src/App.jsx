import { useState } from 'react'
import axios from 'axios';


function getData() {
  axios.get("http://localhost:5000/guitars")
  .then(res => {
    console.log(res);
  })
}


function App() {
  const [count, setCount] = useState(0)
  getData();
  return <div></div>
}

export default App
