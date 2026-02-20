import * as p from 'drizzle-orm/pg-core';

export const users = p.pgTable("users", {
  id: p.uuid().primaryKey(),
  createdAt: p.timestamp().notNull().defaultNow(),
  updatedAt: p.timestamp().notNull().defaultNow(),
  firstName: p.text().notNull(),
  lastName: p.text().notNull(),
  email: p.text().notNull().unique(),
});
