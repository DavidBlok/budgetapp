"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/db";
import { Customers } from "@/db/schema/customers";
import { and, eq, isNull } from "drizzle-orm";

export default async function GetCustomerAction(customerId: string) {
  const { userId, orgId } = await auth();

  if (!userId) {
    return;
  }

  const [customer] = await db
    .select({
      id: Customers.id,
      name: Customers.name,
    })
    .from(Customers)
    .where(
      orgId
        ? and(eq(Customers.orgId, orgId), eq(Customers.id, customerId))
        : and(
            eq(Customers.userId, userId!),
            isNull(Customers.orgId),
            eq(Customers.id, customerId),
          ),
    );

  return customer;
}
