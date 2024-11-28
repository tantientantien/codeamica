import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
  component: Home
})
export function Home() {
  return (
    <div className="h-screen">
      <h1>Codeamica</h1>
      <h2 className="text-3xl font-bold underline">Hello world!</h2>
    </div>
  );
}
