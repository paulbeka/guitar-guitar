const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

// enable CORS
app.use(cors());

const port = process.env.PORT || 5000;

const CLIENT_ID = "68d571f08b8c432c8a88fb286b1fc191";
const CLIENT_SECRET = "5b57c743669948d4ab76711e0ce62765";

// basic string route to prevent Glitch error
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// the route we're working with
app.get("/guitars", (req, res) => {
    const backendUrl = "https://services.guitarguitar.co.uk/WebService/api/hackathon/guitars";
    axios.get(backendUrl).then(response => res.send(response.data));
});

app.get("/search-spotify-songs", (req, res) => {
    const backendUrl = "https://api.spotify.com/v1/search";
    axios.post(backendUrl, {}, {
        headers: {
            'Authorization' : CLIENT_SECRET,
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        res.send(response.data);
    })
})

// console text when app is running
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});