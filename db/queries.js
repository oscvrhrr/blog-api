const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();


const createQueries = {

  async createUser(newUser) {
    try {
      const { username, password } = newUser
      await prisma.user.create({
        data: {
          username,
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
}
