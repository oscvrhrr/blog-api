const passport = require("../auth/passportConfig")
const Router = require("express");


const { createPost, createNewComment, retrieveAllPosts, retrievePostById, deletePost } = require("../controllers/postController")

const postRouter = Router();




postRouter.get(("/"), retrieveAllPosts);

postRouter.post(("/"), passport.authenticate('jwt', { session: false }), createPost);

postRouter.get(("/:postId"), retrievePostById);

postRouter.delete(("/:postId"), passport.authenticate('jwt', { session: false }), deletePost);

postRouter.post(("/:postId/comment"), createNewComment)






module.exports = postRouter;