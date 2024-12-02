const db = require("../db/queries");
const jwt = require("jsonwebtoken")

async function createUser(req, res) {
  try {
    const createdUser =  await db.createQueries.createUser(newUser = {
      fullname: req.body.fullname,
      email: req.body.email,
      password: req.body.password
    });
    const token = jwt.sign({ id: createdUser.id }, process.env.JWT_SECRET, { expiresIn: "2hr" })
    res.status(201).json({ token })
  } catch (error) {
    console.log(error)
  }
}

async function retrieveAllUsers(req, res) {
  try {
    const allUsers = await db.readQueries.getAllUsers()
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error)
  }
}

async function retrieveUserById(req, res) {
  try {
    const userId = Number(req.params.userId)
    const fetchedUser = await db.readQueries.getUserById(userId);
    if(!fetchedUser) {
      res.status(404).json("user does not exist")
    }
    res.status(200).json({ user: fetchedUser });   
  } catch (error) {
    console.log("Internal server error",error)
  }
}   

async function retrieveUserPosts(req, res) {
  try {
    const userId = Number(req.params.userId)
    const posts = await db.readQueries.getUsersPost(userId)
    res.status(200).json(posts)
  } catch (error) {
    console.log("error fetching user post", error)
  }
}

async function deleteUser(req, res) {
  try {
    const userId = Number(req.params.userId)
    await db.deleteQueries.deleteUser(userId);
    res.status(200).json(`user with id ${userId} deleted`)
  } catch (error) {
    console.log("Internal server error", error)
  }
  
}









module.exports = {
    createUser,
    retrieveAllUsers,
    retrieveUserById,
    retrieveUserPosts,
    deleteUser,
}