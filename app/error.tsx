"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <main className="max-w-5xl mx-auto flex flex-col gap-6 h-full m-12">
      <div className="flex justify-between">
        <h1 className="text-3xl">Error</h1>
      </div>
      <div>{error.message}</div>
    </main>
  );
}
