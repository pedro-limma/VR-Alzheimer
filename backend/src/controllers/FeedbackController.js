const connection = require('../database/connection');

module.exports = {
                  async index(request, response)
                  {
                    const patient_cpf = request.headers.authorization;
                    const feedback = await connection('feedback')
                    .where('patient_cpf', patient_cpf)
                    .select('*');
                    return response.json(feedback);
                  },
                  async create(request, response)
                  {
                    const { feedback } = request.body;
                    const patient_cpf = request.headers.authorization;
                    const [id] = await connection('feedback').insert({feedback, patient_cpf});
                    return response.status(204).send();
                  },
                  async delete(request, response)
                  {
                    const { id } = resquest.params;
                    const patient_cpf = request.headers.authorization;
                    const feedback = await connection('feedback')
                    .where('id', id)
                    .select('patient_cpf')
                    .first();
                    if(feedback.patient_cpf !== patient_cpf){
                      return response.status(401).json({ error: 'Operation not permitted' });
                    }
                    await connection('feedback').where('id', id).delete();
                    return response.status(204).send();
                  }
                }