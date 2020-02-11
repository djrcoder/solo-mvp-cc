// import db from "./knex"
const express = require("express");
const path = require("path");
const app = express();
// require("dotenv").config();
const knex = require("knex");
const knexfile = require("../../knexfile");

const db = knex(knexfile);
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });


app.use(express.static(path.resolve(__dirname, "..", "..", "build")));


console.log("Starting express...");

app.get("/api/runlog", async (req, res) => {
    try {
        const allLogs = await db.select().table("logs");
        console.log("logs")
        res.json(allLogs);
    } catch (err) {
        console.error("Error loading log!", err);
        res.sendStatus(500);
    }
});

app.post("/api/runlog/run", async (req, res) => {
    try {
        const allLogs = await db.select().table("logs");
        console.log("logs")
        res.json(allLogs);
    } catch (err) {
        console.error("Error loading log!", err);
        res.sendStatus(500);
    }
})



// Always return the main index.html, so react - router render the route i
// n the client
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "..", "build", "index.html"));
});



module.exports = app;

