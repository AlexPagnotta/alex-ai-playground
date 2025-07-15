import { Button } from "~/components/ui/button";

export default function Homepage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <h1 className="text-2xl font-bold">Homepage</h1>
      <Button>Click me</Button>
    </div>
  );
}
