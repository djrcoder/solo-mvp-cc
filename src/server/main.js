// import db from "./knex"
const express = require("express");
const path = require("path");
const app = express();
const knex = require("knex");
const knexfile = require("../../knexfile");

const db = knex(knexfile);



app.use(express.static(path.resolve(__dirname, "..", "..", "build")));


console.log("Starting express...");

app.get("/api/runlog", async (req, res) => {
    try {
        console.log("GET")
        const allLogs = await db.select().table("logs");
        res.json(allLogs);
    } catch (err) {
        console.error("Error loading log!", err);
        res.sendStatus(500);
    }
});

app.post("/api/runlog/log", async (req, res) => {
    try {
        console.log("POST")
        await db.insert().table("logs");
        // res.json(allLogs);
    } catch (err) {
        console.error("Error!", err);
        res.sendStatus(500);
    }
})

// Always return the main index.html, so react - router render the route i
// n the client
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "..", "build", "index.html"));
});



module.exports = app;

