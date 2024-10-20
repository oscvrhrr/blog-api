require("dotenv").config();
const express = require("express");
const cors = require("cors")
const passport = require("./auth/passportConfig")
const jwt = require("jsonwebtoken")


const app = express();
const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors())


app.post("/login", passport.authenticate('local', { session: false }), (req, res) => {
    const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: '2hr'});
    res.json({ token })
})


app.get("/user", passport.authenticate('jwt', { session: false}), (req, res) => {
    res.json(req.user)
});

app.use("/users", passport.authenticate('jwt', { session: false }), userRouter);
app.use("/posts", passport.authenticate('jwt', { session: false }), postRouter);









app.listen(process.env.PORT, () => {
    console.log("server running on port 4001")
})