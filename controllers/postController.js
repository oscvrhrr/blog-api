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

// async function createPost(req, res) {
//     try {
//       const user = 
//       const post = req.body;

//       console.log(data)
//     } catch (error) {
        
//     }
// }







module.exports = {
    // createPost,
    retrieveAllPosts,
    retrievePostById,
}