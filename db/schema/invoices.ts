import { integer, pgTable, text, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";
import { Customers } from "@/db/schema/customers";

export const statusEnum = pgEnum("status", [
  "open",
  "payed",
  "void",
  "uncollectible",
]);

export const Invoices = pgTable("invoices", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  orgId: text("orgId"),
  userId: text("userId").notNull(),
  customerId: text("customerId")
    .references(() => Customers.id)
    .notNull(),
  value: integer("value").notNull(),
  description: text("description").notNull(),
  status: statusEnum("status").notNull(),
  updated_at: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
  created_at: timestamp("created_at").defaultNow().notNull(),
});
