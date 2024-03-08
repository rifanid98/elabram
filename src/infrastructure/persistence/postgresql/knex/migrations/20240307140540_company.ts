import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("company", function (table) {
    table.increments("id", { primaryKey: true });
    table.string("company_name", 255).nullable();
    table.integer("created_by").notNullable();
    table
      .timestamp("created_at", { useTz: true })
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table.index(["created_by"], "idx_company_created_by");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("company");
}
