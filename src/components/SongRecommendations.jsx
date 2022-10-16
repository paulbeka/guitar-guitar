import React, {useState} from 'react'
import axios from 'axios'


const SongRecommendations = (props) => {

    const url_id = "https://open.spotify.com/embed/track/" + props.spotifyId + "?utm_source=generator";
    const video_id = props.youtubeUrl.split('=')[1];
    return (
        <div style={{width:'300px'}}>
            <iframe src={url_id} style={{
                border: "None",
                allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
                loading: "lazy"
            }}/>
            <iframe id="ytplayer" type="text/html" style={{
                border:"None"
            }}
                    src={`https://www.youtube.com/embed/${video_id}?&origin=http://example.com`}
            />
        </div>
    )
};

export default SongRecommendations;