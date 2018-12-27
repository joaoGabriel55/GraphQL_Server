const db = require('../config/database')

//ES == JavaScript implementa essa especificação

const tableUsers = 'users'

module.exports = {
     Query: {
          //First Param == Obj.
          // where({ id: id })
          async getUser(_, { id }) {
               return await db(tableUsers).where({ id }).first()
          },

          async getUsers() {
               return await db(tableUsers)
          }
     },
     Mutation: {
          async createUser(_, { input }) {
               const result = await db(tableUsers).insert({
                    name: input.name,
                    email: input.email,
                    password: input.password
               })

               const id = result[0]
               return await db('users').where({ id }).first()
          }
     }
}