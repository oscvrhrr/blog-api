require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true}));



app.get(("/"), (req, res) => {
  res.json("sending best wishes")
});

app.post(("/"), (req, res) => {
    res.json({"text": "hello"})
})







app.listen(process.env.PORT, () => {
    console.log("server running on port 4001")
})