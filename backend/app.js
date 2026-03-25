const express = require('express')
const app = express()
const port = 3000
const database = require("./dbconnector.js")
const cors =require('cors')

app.use(cors());
app.use(express.json());

console.log("hi.")
app.get('/games', async (req, res) => {
    console.log("hello")
    let queryResult = await database.query("SELECT * FROM games;")

    console.log(queryResult)

    res.send( queryResult)
})

app.post('/newgame', async (req, res) => {
  let forwardedData = req.body;
  let queryResult = await database.query(`INSERT INTO Games (Title, Genre, AgeRestriction, SinglePlayer, MultiPlayer, ReleaseDate, Developer, Publisher) VALUES ('${forwardedData.Title}', '${forwardedData.Genre}', '${forwardedData.AgeRestriction}', '${forwardedData.SinglePlayer}', '${forwardedData.MultiPlayer}', '${forwardedData.ReleaseDate}', '${forwardedData.Developer}', '${forwardedData.Publisher}');`)
  console.log(forwardedData);
  res.send("hello");
})

// /users

// 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
