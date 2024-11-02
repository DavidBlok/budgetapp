"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CreateCustomerFormAction } from "@/app/actions/customers/CreateCustomerFormAction";
import { FormInputField } from "@/components/formFields/FormInputField";
import { useMutation } from "@tanstack/react-query";

const formSchema = z.object({
  companyName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  vatNr: z.string().min(8, {
    message: "vatNr must be at least 8 characters.",
  }),
});

export interface createCustomerSchema extends z.infer<typeof formSchema> {}

export const CreateCustomerForm = () => {
  const form = useForm<createCustomerSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      vatNr: "",
    },
  });

  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (values: createCustomerSchema) => {
      await CreateCustomerFormAction(values);
    },
  });

  async function onSubmit(values: createCustomerSchema) {
    mutate(values);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid space-y-4 max-w-md"
        >
          <FormInputField
            control={form.control}
            name="companyName"
            label="Customer Name"
            description={"Enter the customer name"}
          />
          <FormInputField control={form.control} name="vatNr" label="VAT Nr" />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
};
