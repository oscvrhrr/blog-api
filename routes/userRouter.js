const Router = require("express")
const { createUser, retrieveAllUsers, retrieveUserById, retrieveUserPosts, deleteUser } = require("../controllers/userContoller")

const userRouter = Router();





userRouter.get(("/"), retrieveAllUsers);

// userRouter.post(("/"), createUser);

// userRouter.get(("/:userId"), retrieveUserById);

// userRouter.delete(("/:userId"), deleteUser);

userRouter.get(("/:userId/posts"), retrieveUserPosts)



module.exports = userRouter;
