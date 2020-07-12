exports.up = function(knex) {
  return knex.schema.createTable('feedback', function(table){
    table.increments();

    table.string('feedback').notNullable();

    table.string('patient_cpf');
    table.foreign('patient_cpf').references('cpf').inTable('patients');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('feedback');
};