const passport = require("../auth/passportConfig")
const Router = require("express");


const { createPost, createNewPost, retrieveAllPosts, retrievePostById } = require("../controllers/postController")

const postRouter = Router();




postRouter.get(("/"), retrieveAllPosts);

postRouter.post(("/"), passport.authenticate('jwt', { session: false }), createPost);

postRouter.get(("/:postId"), retrievePostById);

// postRouter.delete(("/:postId"), deletePost);

postRouter.post(("/:postId/comment"), createNewPost)






module.exports = postRouter;