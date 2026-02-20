import * as p from 'drizzle-orm/pg-core';
import { users } from "./users";
import { relations } from "drizzle-orm";

export const passwords = p.pgTable("passwords", {
  id: p.uuid().primaryKey(),
  createdAt: p.timestamp().notNull().defaultNow(),
  updatedAt: p.timestamp().notNull().defaultNow(),
  passwordHash: p.text().notNull(),
  userId: p.uuid().notNull().references(() => users.id),
});

export const usersRelations = relations(users, ({ one }) => ({
  password: one(passwords),
}));
