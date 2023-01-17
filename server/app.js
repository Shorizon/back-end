// Describes the server/API

const express = require("express"); // Access to the Express library
const cors = require("cors");
const { goats, nextId } = require("./goats");

const app = express(); // Make a very basic server using Express

// Tell the app what kinds of request to listen for (and how to handle them)

//when a requests comes in goes through cors then API. 
// cors attaches headers to requests.
app.use(cors())

app.get("/", (req, res) => {
    res.json({
        "message": "Hello, World!"
    })
})

app.get("/goats", (req, res) => {
    res.json(goats)
})

app.get("/goats/:id", (req, res) => {
    const id = req.params["id"];
    const goat = goats.filter(g => g["id"] == id)[0];

    if (goat) {
        res.json(goat)
    } else {
        res.status(404)
.json("no such goat!")
    }
})
module.exports = app; // Make the server available to other files
