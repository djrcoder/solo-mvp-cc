exports.up = function (knex, Promise) {
    return knex.schema.createTable('logs', function (table) {
        table.increments('id').unsigned().primary();
        table.dateTime('time_and_date_of_run')
        table.float('distance').notNull();
        table.float('time_taken').notNull();
        table.string('name_of_run').notNull();

    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('logs');
};

