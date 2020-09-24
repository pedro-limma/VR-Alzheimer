exports.up = function(knex){
    return knex.schema.createTable('patients',table =>{
      table.string('name').notNullable();
      table.string('birth_date').notNullable();
      table.string('cpf').primary();
      table.string('phone_number').notNullable();
      table.string('HDA');
      table.string('class_id').notNullable();
      table.foreign('class_id').references('id').inTable('students');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('patients');
};
