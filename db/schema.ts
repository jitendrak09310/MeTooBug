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

  passwordHash: varchar("password_hash", {
    length: 255,
  }).notNull(),

  role: varchar("role", {
    length: 20,
  })
    .notNull()
    .default("USER"),

  isActive: varchar("is_active", {
    length: 10,
  })
    .notNull()
    .default("true"),

  // In your db/schema.ts file
  createdAt: timestamp("created_at", {
    mode: "date",
    withTimezone: true, // 👈 Tells PostgreSQL to preserve timezone awareness
  })
    .defaultNow()
    .notNull(),
});

export type user = typeof users.$inferSelect;

export type NewUser = typeof users.$inferInsert;
