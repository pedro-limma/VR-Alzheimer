const connection = require('../database/connection');
const { compare ,hash } = require('bcrypt');

module.exports = {
                  async create(request, response)
                  {
                    const { id, login, password } = request.body;
                    const hash_password = await hash(password, 8)
                    console.log(hash_password) 
                    await connection('students').insert({id, login, password: hash_password});
                    return response.json({ id, password});
                  }
                }