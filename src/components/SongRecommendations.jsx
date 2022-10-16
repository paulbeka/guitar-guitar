import React, { useState } from 'react'
import axios from 'axios'


const SongRecommendations = (props) => {

  const url_id = "https://open.spotify.com/embed/track/" + props.spotifyId + "?utm_source=generator";

  return (
    <div style={{}}>
      <iframe src={url_id} style={{border:"None", allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture", loading:"lazy"}} />
    </div>
  )
};

export default SongRecommendations;