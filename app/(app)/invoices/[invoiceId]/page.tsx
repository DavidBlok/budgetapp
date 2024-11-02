import { db } from "@/db";
import { and, eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { Invoices } from "@/db/schema/invoices";

export default async function InvoicePage({
  params,
}: {
  params: { invoiceId: string };
}) {
  const { invoiceId } = await params;
  const invoiceIdValue = invoiceId;

  const { userId } = await auth();

  if (!userId) {
    return;
  }

  const [result] = await db
    .select()
    .from(Invoices)
    .where(and(eq(Invoices.id, invoiceIdValue), eq(Invoices.userId, userId)))
    .limit(1);

  if (!result) {
    notFound();
  }

  console.log(result);

  return (
    <main className="max-w-5xl mx-auto flex flex-col gap-6 h-full m-12">
      <div className="flex justify-between">
        <h1 className="text-3xl">Invoice {invoiceId}</h1>
      </div>
      <div>{result.status}</div>
    </main>
  );
}
