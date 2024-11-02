import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard");

  return (
    <main className="max-w-5xl mx-auto flex flex-col gap-6 h-full justify-center text-center">
      <h1 className="text-5xl">TEST</h1>
      <div>
        <Button asChild>
          <Link href={"/dashboard"}>Sign IN</Link>
        </Button>
      </div>
    </main>
  );
}
