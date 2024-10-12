const Router = require("express");

const { retrieveAllPosts, createPost } = require("../controllers/postController")

const postRouter = Router();




postRouter.get(("/"), retrieveAllPosts);

// postRouter.post(("/"), createPost);

// postRouter.get(("/:postId"), retrievePostById);

// postRouter.delete(("/:postId"), deletePost);






module.exports = postRouter;