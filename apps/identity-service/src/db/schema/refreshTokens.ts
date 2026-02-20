import * as p from 'drizzle-orm/pg-core';
import { users } from './users';
import { relations } from 'drizzle-orm';

export const refreshTokens = p.pgTable("refreshTokens", {
  id: p.uuid().primaryKey(),
  createdAt: p.timestamp().notNull().defaultNow(),
  updatedAt: p.timestamp().notNull().defaultNow(),
  refreshTokenHash: p.text().notNull(),
  userId: p.uuid().notNull().references(() => users.id),
});

export const usersRelations = relations(users, ({ one }) => ({
  refreshToken: one(refreshTokens),
}));