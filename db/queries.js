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
  }

}   



module.exports = {
    createQueries,
    readQueries,
}
