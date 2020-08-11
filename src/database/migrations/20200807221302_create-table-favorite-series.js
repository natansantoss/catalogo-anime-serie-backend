exports.up = function(knex) {
    return knex.schema.createTable('favorites_series', (table) => {
        table.increments("id_db").primary()

        table.string("id").notNullable()
        table.string("name").notNullable()
        table.string("image_thumbnail_path").notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('favorites_series')
};