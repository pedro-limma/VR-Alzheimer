const connection = require('../database/connection');
const { hash } = require('bcrypt');
const crypto = require('crypto');

module.exports = {
                  async create(request, response)
                  {
                    const { login, password } = request.body;
                    const id = crypto.randomBytes(4).toString('HEX');
                    const hash_password = await hash(password, 8); 

                    await connection('students').insert({id, login, password: hash_password});
                    
                    return response.json({ id, password });
                  }
                }