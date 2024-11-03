"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/db";
import { Customers } from "@/db/schema/customers";
import { and, eq, isNull } from "drizzle-orm";
import { TCustomers } from "@/components/datatables/customers/CustomersOverviewTable";
import { ComboBoxSearchDataType } from "@/components/formFields/FormComboBoxSearchField";

export default async function GetCustomersComboSearchAction() {
  const { userId, orgId } = await auth();

  if (!userId) {
    return [];
  }

  const customers: ComboBoxSearchDataType = await db
    .select({
      value: Customers.id,
      label: Customers.name,
    })
    .from(Customers)
    .where(
      orgId
        ? eq(Customers.orgId, orgId)
        : and(eq(Customers.userId, userId!), isNull(Customers.orgId)),
    );

  return customers;
}
