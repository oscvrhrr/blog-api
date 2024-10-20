const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const createQueries = {

  async createUser(newUser) {
    try {
      const { fullname, email, password } = newUser
      await prisma.user.create({
        data: {
          fullname,
          email,
          password
        }
      })
    } catch (error) {
      console.log(error)
    }
  },

  async createPost(post) {
    try {
      const { title, content } = post;
      await prisma.post.create({
        data: {
          title,
          content,
          userId
        }
      })
    } catch (error) {
      
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
