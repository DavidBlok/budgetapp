import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CustomersOverviewTable } from "@/components/datatables/customers/CustomersOverviewTable";

export default async function Dashboard() {
  return (
    <div>
      <h1>Customers overview</h1>
      <div>
        <Button asChild>
          <Link href="/customers/new">NEW CUSTOMER</Link>
        </Button>
      </div>
      <div>
        <CustomersOverviewTable />
      </div>
    </div>
  );
}
