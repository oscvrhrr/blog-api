const db = require("../db/queries")


async function createUser(req, res) {
  try {
    await db.createQueries.createUser(newUser = {
      username: req.body.username,
      password: req.body.password
    });
    res.status(201).json({ user: newUser })
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
    deleteUser,
}