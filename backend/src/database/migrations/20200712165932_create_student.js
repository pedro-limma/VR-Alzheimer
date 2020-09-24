
exports.up = function(knex) {
  return knex.schema.createTable('students', table => {
    table.string('id').primary(),
    table.string('login').notNullable(),
    table.string('password').notNullable()
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('students');
};
