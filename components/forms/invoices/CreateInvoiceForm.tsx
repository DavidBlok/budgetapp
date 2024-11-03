"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormInputField } from "@/components/formFields/FormInputField";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FormComboBoxSearchField } from "@/components/formFields/FormComboBoxSearchField";
import GetCustomersComboSearchAction from "@/app/actions/customers/GetCustomersComboSearchAction";
import { createInvoiceAction } from "@/app/actions/invoices/createInvoiceAction";

const formSchema = z.object({
  companyId: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  value: z.coerce.number(),
  description: z.string(),
});

export interface createInvoiceSchema extends z.infer<typeof formSchema> {}

export const CreateInvoiceForm = () => {
  const form = useForm<createInvoiceSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyId: undefined,
      value: 0,
      description: "",
    },
  });

  const { data: dataCustomer, isLoading: isLoadingCustomer } = useQuery({
    queryKey: ["createInvoiceCompanyList"],
    queryFn: GetCustomersComboSearchAction,
  });

  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (values: createInvoiceSchema) => {
      await createInvoiceAction(values);
    },
  });

  async function onSubmit(values: createInvoiceSchema) {
    mutate(values);
  }

  if (isLoadingCustomer || isPending) {
    return <div>LOADING...</div>;
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid space-y-4 max-w-md"
        >
          <FormComboBoxSearchField
            control={form.control}
            name="companyId"
            label="Company"
            data={dataCustomer}
          />
          <FormInputField
            control={form.control}
            type="number"
            name="value"
            label="value"
          />
          <FormInputField
            control={form.control}
            name="description"
            label="description"
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
};
