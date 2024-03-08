import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("user", function (table) {
    table.increments("id", { primaryKey: true });
    table.string("email", 255).nullable();
    table.string("password", 300).nullable();
    table.string("fullname", 255).nullable();
    table.string("token", 300).nullable();
    table.timestamp("created_at", {useTz: true}).notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    table.timestamp("updated_at", {useTz: true}).notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("user");
}
