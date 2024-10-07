require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");


const app = express();
const userRouter = require("./routes/userRouter")


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use("/users", userRouter)








app.listen(process.env.PORT, () => {
    console.log("server running on port 4001")
})