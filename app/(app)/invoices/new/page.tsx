"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createAction } from "@/app/actions/createAction";
import { startTransition, SyntheticEvent, useState } from "react";

export default function InvoicesNew() {
  const [state, setState] = useState("ready");

  async function handleOnSubmit(event: SyntheticEvent) {
    event.preventDefault();
    if (state === "pending") {
      return;
    }
    setState("pending");
    const target = event.target as HTMLFormElement;

    startTransition(async () => {
      const formData = new FormData(target);
      await createAction(formData);
      console.log("done");
    });
  }

  return (
    <main className="max-w-5xl mx-auto flex flex-col gap-6 h-full m-12">
      <div className="flex justify-between">
        <h1 className="text-3xl">Create a New Invoice</h1>
      </div>
      <form
        action={createAction}
        onSubmit={handleOnSubmit}
        className="grid gap-4 max-w-xs"
      >
        <div>
          <Label htmlFor="name" className="block mb-2 font-semibold text-sm">
            Billing Name
          </Label>
          <Input id="name" name="name" type="text" defaultValue="david" />
        </div>
        <div>
          <Label htmlFor="email" className="block mb-2 font-semibold text-sm">
            Billing Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            defaultValue="david@iets.be"
          />
        </div>
        <div>
          <Label htmlFor="value" className="block mb-2 font-semibold text-sm">
            Value
          </Label>
          <Input id="value" name="value" type="text" />
        </div>
        <div>
          <Label
            htmlFor="description"
            className="block mb-2 font-semibold text-sm"
          >
            Value
          </Label>
          <Textarea id="description" name="description" />
        </div>
        <div>
          <Button className="w-full font-semibold" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </main>
  );
}
