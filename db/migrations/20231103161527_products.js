/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function (knex) {
    return knex.schema.createTable('products', table => {
        table.increments('id');
        table.text('brand', 128).nullable();
        table.text('description', 255).unique().notNullable();
        table.decimal('price').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function (knex) {
    return knex.schema.dropTable('products');
};
