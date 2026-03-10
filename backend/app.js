const express = require('express')
const app = express()
const port = 3000
const database = require("./dbconnector.js")
const cors =require('cors')

app.use(cors())
console.log("hi.")
app.get('/games', async (req, res) => {
    console.log("hello")
    let queryResult = await database.query("SELECT * FROM games;")

    console.log(queryResult)

    res.send( queryResult)
})

//app.post

// /users

// 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
