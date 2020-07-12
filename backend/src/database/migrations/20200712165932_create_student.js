
exports.up = function(knex) {
  return knex.schema.createTable('students', function(table){
    table.string('id').notNullable(),
    table.string('login').notNullable(),
    table.string('password').notNullable()
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('students');
};
