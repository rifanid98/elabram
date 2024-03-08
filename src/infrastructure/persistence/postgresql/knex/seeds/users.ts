import { Knex } from "knex";
import { randomUUID } from "crypto";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    { id: 1, email: "user1@email.com", password: "password1" },
    { id: 2, email: "user2@email.com", password: "password2" },
    { id: 3, email: "user3@email.com", password: "password3" },
  ]);
}
