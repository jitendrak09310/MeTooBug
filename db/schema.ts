import {
  PgTable,
  serial,
  varchar,
  timestamp,
  pgTable,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),

  name: varchar("name", {
    length: 100,
  }).notNull(),

  email: varchar("email", {
    length: 255,
  })
    .notNull()
    .unique(),

  password: varchar("password", {
    length: 255,
  }).notNull(),

  role: varchar("role", {
    length: 20,
  })
    .notNull()
    .default("USER"),

  createdAt: timestamp("created_At").defaultNow().notNull(),
});
