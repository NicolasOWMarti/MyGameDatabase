const express = require('express')
const app = express()
const port = 3000
const database = require("./dbconnector.js")
const cors =require('cors')

app.use(cors())
app.use(express.json())
console.log("hi.")

app.get('/games', async (req, res) => {
    console.log("hello")
    let queryResult = await database.query("SELECT * FROM games;")

    console.log(queryResult)

    res.send( queryResult)
})

app.post('/newgame', async(req, res) => {
  let forwaredData = req.body;
  let queryResult = await database.query(`INSERT INTO games(Title, Genre, AgeRestriction, SinglePlayer, MultiPlayer, ReleaseDate, Developer, Publisher) VALUES ('${forwaredData.title}', '${forwaredData.genre}', '${forwaredData.AgeRestriction}', '${forwaredData.SinglePlayer}', '${forwaredData.MultiPlayer}', '${forwaredData.ReleaseDate}', '${forwaredData.Developer}', '${forwaredData.Publisher}');`)
  console.log(queryResult)
  res.send("hi, it worked")
})

// /users

// 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
