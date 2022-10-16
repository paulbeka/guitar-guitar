import React, { useState } from 'react'
import axios from 'axios'


export const SongRecommendations = (props) => {

  const url_id = "https://open.spotify.com/embed/track/" + props.id + "?utm_source=generator";

  return (
    <div style={{}}>
      <iframe src={url_id} style={{width:"50%", height:"352", border:"None", allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture", loading:"lazy"}} />
    </div>
  )
};