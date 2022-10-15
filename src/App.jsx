import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { SongRecommendations } from './components/SongRecommendations';


const CLIENT_ID = "68d571f08b8c432c8a88fb286b1fc191";
const CLIENT_SECRET = "5b57c743669948d4ab76711e0ce62765";


function getData(setData) {
  axios.get("http://localhost:5000/guitars")
  .then(res => {
    setData(res.data);
  })
}

function spotifyLogin(setToken) {
  axios.request({
    method: 'post',
    url: 'http://accounts.spotify.com/api/token',
    data: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  .then(data => {
    setToken(data.data.access_token)
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
  const [token, setToken] = useState("");
  const [guitarswithsongs, setGuitarsWithSongs] = useState([]);

  useEffect(() => {
    getData(setData);
    spotifyLogin(setToken);
    getGuitarsWithSongs(setGuitarsWithSongs);
  }, [])

  return (
    <React.StrictMode>
      <div>
        {token != "" && guitarswithsongs != [] &&
          guitarswithsongs.map((item) => {
            return (
            <div>
              {<SongRecommendations id={item.spotifyId} token={token} />}
            </div>)
          })
        }
      </div>
    </React.StrictMode>
    
  )
}

export default App
