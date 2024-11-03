import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CustomersOverviewTable } from "@/components/datatables/customers/CustomersOverviewTable";
import { CirclePlus } from "lucide-react";

export default async function Dashboard() {
  return (
    <div>
      <div className="flex justify-between">
        <h1>Customers overview</h1>
        <div>
          <Button className="inline-flex gap-2" variant="ghost" asChild>
            <Link href="/customers/new">
              <CirclePlus className="h-4 w-4" /> Create new customer
            </Link>
          </Button>
        </div>
      </div>

      <div>
        <CustomersOverviewTable />
      </div>
    </div>
  );
}
