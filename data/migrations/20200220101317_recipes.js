exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("name", 256).notNullable();
    })
    .createTable("steps", tbl => {
      tbl.increments();
      tbl.integer("step_number").notNullable();
      tbl.string("description", 1000).notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("ingredient_name", 128).notNullable();
      tbl.float("ingredient_amount").notNullable();
    })
    .createTable("recipe_ingredients", tbl => {
      tbl.increments()
     // tbl.primary(["recipe_id", "ingredient_id"]);;
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");

      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};