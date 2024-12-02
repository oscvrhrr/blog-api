const db = require("../db/queries");
const { all } = require("../routes/userRouter");


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
    const filteredPosts = allPosts.map(user => {
      const { userId, ...rest } = user;
      return rest
    });
    res.json(filteredPosts);
  } catch (error) {
    console.log("error fetching posts", error)
  }
}

async function createPost(req, res) {
    try {
      const { content, title } = req.body;
      const { id } = req.user
      await db.createQueries.createPost(title, content, id);
      res.status(201).json("post created");
    } catch (error) {
        console.log(error, 'post not created')
    }
}

async function createNewComment(req, res) {
  try {
    const { postId } = req.params
    const { name, comment  } = req.body

    await db.createQueries.createComment(name, comment, Number(postId))
    res.status(201).json('comment posted')
  } catch(error) {
    console.log(error)
  }
}

async function deletePost(req, res) {
  try {
    
  } catch (error) {
    console.log(error)
  }
}







module.exports = {
    createPost,
    createNewComment,
    retrieveAllPosts,
    retrievePostById,
    deletePost
}