exports.up = function(knex) {
    return knex.schema.createTable('favorites_animes', (table) => {
        table.increments("id").primary()

        table.string("mal_id").notNullable()
        table.string("title").notNullable()
        table.string("synopsis").notNullable()
        table.string("image").notNullable()
        table.string("episodes").notNullable()
        table.string("score").notNullable()
        table.string("url").notNullable()

        table.integer('user_id').references('users.id').notNullable()

    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('favorites_anime')
};
