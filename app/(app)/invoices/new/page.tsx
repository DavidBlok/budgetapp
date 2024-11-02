"use client";
import { CreateInvoiceForm } from "@/components/forms/invoices/CreateInvoiceForm";

export default function InvoicesNew() {
  return (
    <main className="max-w-5xl mx-auto flex flex-col gap-6 h-full m-12">
      <div className="flex justify-between">
        <h1 className="text-3xl">Create a New Invoice</h1>
      </div>
      <CreateInvoiceForm />
    </main>
  );
}
