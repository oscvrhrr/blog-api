const db = require("../db/queries");


async function retrievePostById(req, res) {
  try {
    const postId = Number(req.params.postId)
    const post = await db.readQueries.getPostById(postId);
    res.json(post);
  } catch(error) {
    console.log(error)
  }
}


async function retrieveAllPosts(req, res) {
  try {
    const allPosts = await db.readQueries.getAllPosts();
    res.json(allPosts);
  } catch (error) {
    console.log("error fetching posts", error)
  }
}

async function createPost(req, res) {
    try {
      const { content, title } = req.body;
      const { id } = req.user
      await db.createQueries.createPost(title, content, id);
      res.status(201).json("user created");
    } catch (error) {
        
    }
}

async function createNewPost(req, res) {
  try {
    const { postId } = req.params
    const { comment } = req.body
    await db.createQueries.createComment(comment, Number(postId))
    res.status(201).json('comment posted')
  } catch(error) {
    console.log(error)
  }
}







module.exports = {
    createPost,
    createNewPost,
    retrieveAllPosts,
    retrievePostById,
}