const Router = require("express")
const { retrieveAllUsers, retrieveUserById, retrieveUserPosts, deleteUser } = require("../controllers/userContoller")

const userRouter = Router();



userRouter.get(("/"), retrieveAllUsers);

userRouter.get(("/me"), (req, res) => {
  res.json(req.user)
});

userRouter.get(("/:userId"), retrieveUserById);

userRouter.get(("/:userId/posts"), retrieveUserPosts)

userRouter.delete(("/:userId"), deleteUser);



module.exports = userRouter;

