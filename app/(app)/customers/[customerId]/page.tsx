import GetCustomerAction from "@/app/actions/customers/GetCustomerAction";
import { notFound } from "next/navigation";

export default async function CustomerPage({
  params,
}: {
  params: { customerId: string };
}) {
  const { customerId } = await params;

  const customer = await GetCustomerAction(customerId);

  if (!customer) notFound();

  return (
    <div>
      <h1>{customer.name}</h1>
      {customerId} - {JSON.stringify(customer)}
    </div>
  );
}
