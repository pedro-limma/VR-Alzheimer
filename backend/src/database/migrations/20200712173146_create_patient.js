exports.up = function(knex) {
  return knex.schema.createTable('patients', function (table) {
    table.string('class_id').notNullable();
    table.foreign('class_id').references('id').inTable('students');

    table.string('name').notNullable();
    table.string('birth_date').notNullable();
    table.string('cpf').notNullable();
    table.string('phone_number').notNullable();
    
    table.string('HDA');
  });   
};

exports.down = function(knex) {
  return knex.schema.dropTable('patients');
};
