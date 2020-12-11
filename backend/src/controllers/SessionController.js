const { sign } = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const authConfig = require('../database/auth');
const connection = require('../database/connection');

module.exports = {
                  async create(request, response)
                  {
                    const { login, password } = request.body;

                    const id = await connection('students')
                    .where('login', login)
                    .select('id')
                    .first();

                    const user = await connection('students')
                    .where('login', login)
                    .select('login')
                    .first();

                    const key = await connection('students')
                    .where('login', login)
                    .select('password')
                    .first();

                    console.log(id);
                    console.log(key);

                    if(!user){
                      return response.status(400).json({ error: 'Login not found' });
                    }

                    const token = sign({}, authConfig.jwt.secret, {
                      subject: user.login,
                      expiresIn: authConfig.jwt.expiresIn,
                    });

                    bcrypt.compare(password, key.password, function (err, result) {
                      if (result == true) {
                        return response.json({ id, token });
                      } else {
                        return response.status(400).json({ error: 'Password not found' });
                      }
                    });
                  }
                }