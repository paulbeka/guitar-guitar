const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

// enable CORS
app.use(cors());

const port = process.env.PORT || 5000;

// keep this
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// the route we're working with
app.get("/guitars", (req, res) => {
    const backendUrl = "https://services.guitarguitar.co.uk/WebService/api/hackathon/guitars";
    axios.get(backendUrl).then(response => res.send(response.data));
});

app.get("/songs", (req, res) => {
    axios.get("https://api.spotify.com/v1/tracks/" + req.query.id, {
    headers: {
            'Authorization' : 'Bearer ' + req.query.token
        }
    })
    .then(response => {
        res.send(response.data);
    })
    .catch(err => {
        console.log(err)
    })
})

app.get("/guitarswithsongs", (req, res) => {
    axios.get("https://services.guitarguitar.co.uk/WebService/api/hackathon/guitarswithsongs")
    .then(response => {
        res.send(response.data)
    })
})

// console text when app is running
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});