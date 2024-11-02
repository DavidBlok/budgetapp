"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/db";
import { Customers } from "@/db/schema/customers";
import { and, eq, isNull } from "drizzle-orm";
import { TCustomers } from "@/components/datatables/customers/CustomersOverviewTable";

export default async function CustomersOverviewTableAction() {
  const { userId, orgId } = await auth();

  if (!userId) {
    return;
  }

  const customers: TCustomers[] = await db
    .select({
      id: Customers.id,
      name: Customers.name,
    })
    .from(Customers)
    .where(
      orgId
        ? eq(Customers.orgId, orgId)
        : and(eq(Customers.userId, userId!), isNull(Customers.orgId)),
    );

  return customers;
}
