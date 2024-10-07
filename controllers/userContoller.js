const db = require("../db/queries")


async function createUser(req, res) {
  try {
    await db.createQueries.createUser(newUser = {
      username: req.body.username,
      password: req.body.password
    }); 
    res.status(200).json("new user created succesfully")

    
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
    res.status(200).json(fetchedUser);   
  } catch (error) {
    console.log(error)
  }
}   









module.exports = {
    createUser,
    retrieveAllUsers,
    retrieveUserById,
}