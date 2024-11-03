import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CirclePlus } from "lucide-react";
import { db } from "@/db";
import { auth } from "@clerk/nextjs/server";
import { and, eq, isNull } from "drizzle-orm";
import { Invoices } from "@/db/schema/invoices";

export default async function Dashboard() {
  const { userId, orgId } = await auth();

  if (!userId) {
    return;
  }

  const invoices = await db
    .select()
    .from(Invoices)
    .where(
      orgId
        ? and(eq(Invoices.orgId, orgId))
        : and(eq(Invoices.userId, userId!), isNull(Invoices.orgId)),
    );

  return (
    <main className="flex flex-col gap-6">
      <div className="flex justify-between">
        <h1 className="text-3xl">Invoices</h1>
        <p>
          <Button className="inline-flex gap-2" variant="ghost" asChild>
            <Link href="invoices/new">
              <CirclePlus className="h-4 w-4" /> Create Invoice
            </Link>
          </Button>
        </p>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-left p-4">Date</TableHead>
            <TableHead className="text-left p-4">Customer</TableHead>
            <TableHead className="text-left p-4">Email</TableHead>
            <TableHead className="text-center p-4">Status</TableHead>
            <TableHead className="text-right p-4">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => {
            return (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium p-0">
                  <Link
                    href={`/invoices/${invoice.id}`}
                    className="font-semibold block p-4"
                  >
                    {invoice.created_at.toLocaleDateString()}
                  </Link>
                </TableCell>
                <TableCell className="text-left p-4">
                  <span className="font-semibold">David BLok</span>
                </TableCell>
                <TableCell className="text-left p-4">
                  <span>david@ierts.be</span>
                </TableCell>
                <TableCell className="text-center p-4">
                  <span className="font-semibold">
                    <Badge variant="default" className="rounded-full">
                      {invoice.status}
                    </Badge>
                  </span>
                </TableCell>
                <TableCell className="text-right p-4">
                  <span className="font-semibold">
                    €{(invoice.value / 100).toFixed(2)}
                  </span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </main>
  );
}
