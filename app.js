require("dotenv").config();
const express = require("express");


const app = express();
const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");


app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.post("/login", (req, res) => {
    jwt.sign()
})
app.use("/users", userRouter);
app.use("/posts", postRouter);









app.listen(process.env.PORT, () => {
    console.log("server running on port 4001")
})