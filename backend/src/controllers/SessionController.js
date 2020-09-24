const connection = require('../database/connection');

module.exports = {
                  async create(request, response)
                  {
                    const { id, login, password } = request.body;
                    const user = await connection('students')
                    .where('login',login)
                    .select('id')
                    .first();
                    const key = await connection('students')
                    .where('password', password)
                    .select('id')
                    .first();
                    if(!user){
                      return response.status(400).json({ error: 'Login not found' });
                    }
                    if(!key){
                      return response.status(400).json({ error: 'Password not found' });
                    }
                    return response.json(user);
                  }
                }