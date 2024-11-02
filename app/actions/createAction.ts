"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { Invoices } from "@/db/schema/invoices";

export async function createAction(formData: FormData) {
  const { userId, orgId } = await auth();

  const value = Math.floor(parseFloat(String(formData.get("value"))) * 100);
  const description = String(formData.get("description"));

  if (!userId) {
    return;
  }

  const results = await db
    .insert(Invoices)
    .values({
      userId: userId,
      orgId: orgId,
      customerId: "1",
      value: value,
      description: description,
      status: "open",
    })
    .returning({
      id: Invoices.id,
    });

  redirect(`/invoices/${results[0].id}`);
}
