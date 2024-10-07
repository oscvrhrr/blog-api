const Router = require("express")
const { createUser, retrieveAllUsers, retrieveUserById } = require("../controllers/userContoller")

const userRouter = Router();





userRouter.get(("/"), retrieveAllUsers);

userRouter.post(("/"), createUser)

userRouter.get(("/:userId"), retrieveUserById);

userRouter.put(("/:userId"), (req, res) => {
  
});

userRouter.delete(("/:userId"), (req, res) => {

});


module.exports = userRouter;
