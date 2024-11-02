import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

export const Customers = pgTable("customers", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  orgId: text("orgId"),
  userId: text("userId").notNull(),
  name: text("name").notNull(),
  vatNr: text("vatNr").notNull(),
  updated_at: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
  created_at: timestamp("created_at").defaultNow().notNull(),
});
