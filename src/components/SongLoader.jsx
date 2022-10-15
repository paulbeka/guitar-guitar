import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { SongRecommendations } from './SongRecommendations';


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
        guitarswithsongs.map((item) => {
          return (
          <div>
            {<SongRecommendations id={item.spotifyId} />}
          </div>)
        })
      }
    </div>    
  )
}

export default App
