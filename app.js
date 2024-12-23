require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("./auth/passportConfig");
const jwt = require("jsonwebtoken");


const app = express();
const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");
const userContoller = require("./controllers/userContoller");


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());


app.post("/auth/login", passport.authenticate('local', { session: false }), (req, res) => {
  const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: '2hr' });
  res.json({ token })
})

app.post("/auth/signup", userContoller.createUser);

app.use("/users", passport.authenticate('jwt', { session: false }), userRouter);

app.use("/posts", postRouter);


app.listen(process.env.PORT, () => {
    console.log("server running on port 4001")
})
