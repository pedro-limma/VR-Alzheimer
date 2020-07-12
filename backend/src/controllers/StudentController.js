const connection = require('../database/connection');

module.exports = {
  async create(request, response){
    const { id, login, password } = request.body;

    await connection('students').insert({
      id,
      login,
      password
    });

    return response.json({ id });
  }
}