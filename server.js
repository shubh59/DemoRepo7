const express = require("express")
const app = express()
var NarutoM = [["Itachi", "Uchiha"]];

app.get("/", (req, res) => {
  res.send(`Hii! ${NarutoM}`)
})

app.get("/users", (req, res) => {
  res.send("Users Page")
})

app.listen(3000, () => console.log("Server Started"))