const connection = require('../database/connection');

module.exports ={
  async create(request, response){
    const { feedback } = request.body;

    const patient_cpf = request.headers.authorization;

    const [id] = await connection('feedback').insert({
      feedback
    });

    return response.status(204).send();
  }
}