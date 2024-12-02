const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const createQueries = {

  async createComment(author, comment, postId) {
    try {
      await prisma.comment.create({
        data: {
          author,
          comment,
          postId
        }
      })
    } catch (err) {
      console.log(err)
    }
  },

  async createUser(newUser) {
    try {
      const { fullname, email, password } = newUser
      const createdUser =  await prisma.user.create({
        data: {
          fullname,
          email,
          password
        }
      })
      return createdUser
    } catch (error) {
      console.log(error)
    }
  },

  async createPost(title, content, userId) {
    try {
      await prisma.post.create({
        data: {
          title,
          content,
          userId
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

}


const readQueries = {

  async getAllUsers() {
    try {
      return await prisma.user.findMany()
    } catch (error) {
      console.log(error)
    }
  },

  async getUserById(userId) {
    try {
      return await prisma.user.findFirst({
        where: {
            id: userId
        }
      })   
    } catch (error) {
      console.log(error)
    }
  },

  async getAllPosts() {
    try {
      return await prisma.post.findMany()
    } catch (error) {
      console.log( 'Error fetching all posts', error)
    }
  },

  async getUsersPost(userId) {
    try {
        return  await prisma.post.findMany({
        where: {
          userId
        }
      })
    } catch (error) {
      console.log("error fetching user posts", error)
    }
  },

  async getPostById(postId) {
    try {
      return await prisma.post.findFirst({
        where: {
          id: postId
        },
        include: {
          comments: true
        }
      })


    } catch (error) {
      console.log("error fetching post by id",error)
    }
  },

}

const deleteQueries = {

  async deleteUser(userId) {
    await prisma.user.delete({
      where: {
        id: userId
      }
    })
  }
  
}



module.exports = {
    createQueries,
    readQueries,
    deleteQueries,
    prisma
}
