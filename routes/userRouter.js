const Router = require("express")
const { createUser, retrieveAllUsers, retrieveUserById, deleteUser } = require("../controllers/userContoller")

const userRouter = Router();





userRouter.get(("/"), retrieveAllUsers);

userRouter.post(("/"), createUser);

userRouter.get(("/:userId"), retrieveUserById);

userRouter.delete(("/:userId"), deleteUser);



module.exports = userRouter;
