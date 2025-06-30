import { Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <main className="w-screen h-screen flex justify-center items-center gap-2">
      <h1 className="text-2xl font-bold">Hello world</h1>
      <Button>Click me</Button>
    </main>
  );
}
