const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const class_id = request.headers.authorization;

        const patients = await connection('patients')
        .where('class_id', class_id)
        .select('*');

        return response.json(patients);
    },

    async create(request, response) {
      const { name, birth_date, cpf, phone_number, HDA } = request.body;
      const class_id = request.headers.authorization; 

      await connection('patients').insert({
          class_id,
          name,
          birth_date,
          cpf,
          phone_number,
          HDA,
      });

      return response.json({ name });
    }
}