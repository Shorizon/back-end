// Describes the server/API

const express = require("express"); // Access to the Express library
const cors = require("cors");
const logger = require("./logger");
let { goats, nextId } = require("./goats");

const app = express(); // Make a very basic server using Express

// Tell the app what kinds of request to listen for (and how to handle them)

//when a requests comes in goes through cors then API. 
// cors attaches headers to requests.
app.use(express.json())
app.use(cors())
app.use(logger)

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

app.post("/goats", (req,res) =>{
    const newGoat = req.body;
    newGoat["id"] = nextId;
    nextId +=1;
    goats.push(newGoat);
    console.log(newGoat);
    res.status(201).json(newGoat);

})




module.exports = app; // Make the server available to other files
