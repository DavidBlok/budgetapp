"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { Invoices } from "@/db/schema/invoices";
import { createInvoiceSchema } from "@/components/forms/invoices/CreateInvoiceForm";

export async function createInvoiceAction(formData: createInvoiceSchema) {
  const { userId, orgId } = await auth();

  if (!userId) {
    return;
  }

  const value = Math.floor(formData.value * 100);

  const results = await db
    .insert(Invoices)
    .values({
      userId: userId,
      orgId: orgId,
      customerId: formData.companyId,
      value: value,
      description: formData.description,
      status: "open",
    })
    .returning({
      id: Invoices.id,
    });

  redirect(`/invoices/${results[0].id}`);
}
