"use client";

import { ColumnDef } from "@tanstack/react-table";
import CustomersOverviewTableAction from "@/app/actions/customers/CustomersOverviewTableAction";
import { DataTable } from "@/components/DataTable";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export type TCustomers = {
  id: string;
  name: string;
};

export const CustomersOverviewTable = () => {
  const columns: ColumnDef<TCustomers>[] = [
    {
      id: "open",
      size: 10,
      maxSize: 15,
      header: () => <div className="text-left">Open</div>,
      cell: ({ row }) => {
        const customer = row.original;
        return (
          <Button variant="outline" asChild className="px-2">
            <Link href={"/customers/" + customer.id}>
              <SquareArrowOutUpRight className="h-3 w-3" />
            </Link>
          </Button>
        );
      },
    },
    {
      accessorKey: "name",
      header: () => <div className="text-left">Amount</div>,
      cell: ({ row }) => {
        return (
          <div className="text-left font-semibold">{row.getValue("name")}</div>
        );
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const payment = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const { data, mutate, isPending } = useMutation({
    mutationKey: ["customersOverviewTable"],
    mutationFn: CustomersOverviewTableAction,
  });

  useEffect(() => {
    mutate();
  }, [mutate]);

  if (!data) {
    return <div>NO RECORDS FOUND</div>;
  }

  return <DataTable columns={columns} data={data} />;
};
