import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { HTMLInputTypeAttribute } from "react";

interface FormInputFieldProps {
  control: Control<any>;
  name: string;
  label?: string;
  description?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

export const FormInputField = ({
  control,
  name,
  label,
  description,
  placeholder,
  type = "text",
}: FormInputFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormDescription>{description}</FormDescription>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
