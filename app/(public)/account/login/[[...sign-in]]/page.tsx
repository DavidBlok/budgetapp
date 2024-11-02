"use client";
import { SignIn } from "@clerk/nextjs";
export default function SignInPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <SignIn />
    </div>
  );
}
