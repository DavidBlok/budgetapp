"use server";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createCustomerSchema } from "@/components/forms/customers/CreateCustomerForm";
import { db } from "@/db";
import { Customers } from "@/db/schema/customers";

export async function CreateCustomerFormAction(formData: createCustomerSchema) {
  const { userId, orgId } = await auth();

  if (!userId) {
    return;
  }

  try {
    await db.insert(Customers).values({
      userId: userId,
      orgId: orgId,
      name: formData.companyName,
      vatNr: formData.vatNr,
    });
  } catch (error) {
    throw new Error("error");
  }

  redirect("/customers");
}
