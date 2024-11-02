"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormInputField } from "@/components/formFields/FormInputField";
import { useMutation } from "@tanstack/react-query";
import { FormComboBoxSearchField } from "@/components/formFields/FormComboBoxSearchField";

const formSchema = z.object({
  companyId: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  value: z.number(),
  description: z.string(),
});

export interface createInvoiceSchema extends z.infer<typeof formSchema> {}

export const CreateInvoiceForm = () => {
  const form = useForm<createInvoiceSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyId: "remix",
      value: 0,
      description: "",
    },
  });

  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (values: createInvoiceSchema) => {
      console.log(values);
      // await CreateCustomerFormAction(values);
    },
  });

  async function onSubmit(values: createInvoiceSchema) {
    mutate(values);
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
            label="value"
          />
          <FormInputField control={form.control} name="value" label="value" />
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
