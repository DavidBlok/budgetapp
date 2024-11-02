import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { Invoices } from "@/db/schema/invoices";
import { Customers } from "@/db/schema/customers";

const pool = new Pool({
  connectionString: process.env.XATA_DATABASE_URL,
  max: 20,
});

export const db = drizzle(pool, {
  schema: {
    Invoices,
    Customers,
  },
});
