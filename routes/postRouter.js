const passport = require("../auth/passportConfig")
const Router = require("express");


const { createPost, createNewComment, retrieveAllPosts, retrievePostById, deletePost } = require("../controllers/postController")

const postRouter = Router();



postRouter.post(("/"), passport.authenticate('jwt', { session: false }), createPost);

postRouter.post(("/:postId/comments"), createNewComment)

postRouter.get(("/"), retrieveAllPosts);

postRouter.get(("/:postId"), retrievePostById);

postRouter.delete(("/:postId/"), passport.authenticate('jwt', { session: false }), deletePost);



module.exports = postRouter;