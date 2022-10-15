import React, { useState } from 'react'
import axios from 'axios'


const getSongFromID = (token, id, setSong) => {
  axios.request({
    method: 'get',
    url: 'http://localhost:5000/songs?id=' + id + "&token=" + token
  })
  .then(res => {
    console.log(res);
    setSong(res);
  })
}

export const SongRecommendations = (props) => {
  const [song, setSong] = useState(null);

  getSongFromID(props.token, props.id, setSong);

  return (
    <div>
      {song}
    </div>
  )
};