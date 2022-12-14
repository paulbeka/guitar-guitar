import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { QuestionAnswerRounded } from '@mui/icons-material';
import SongRecommendations from "./SongRecommendations.jsx";


function getData(setData) {
  axios.get("http://localhost:5000/guitars")
  .then(res => {
    setData(res.data);
  })
}

function getGuitarsWithSongs(setGuitarsWithSongs) {
  axios.get("http://localhost:5000/guitarswithsongs")
  .then(res => {
    setGuitarsWithSongs(res.data);
  })
}

function App() {
  const [data, setData] = useState([]);
  const [guitarswithsongs, setGuitarsWithSongs] = useState([]);

  useEffect(() => {
    getData(setData);
    getGuitarsWithSongs(setGuitarsWithSongs);
  }, [])

  return (
    <div>
      {guitarswithsongs != [] &&
        guitarswithsongs.map((item) => {return (
          <div>
            {data.filter(obj => obj.skU_ID === item.skU_ID).map(guitar => {return guitar.itemName})}
            {<SongRecommendations id={item.spotifyId} />}
          </div>)
        })
      }
    </div>    
  )
}

export default App
