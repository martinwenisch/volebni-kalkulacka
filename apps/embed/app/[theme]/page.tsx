import { Button } from "@repo/ui/components";

export default function Page(): JSX.Element {
  return (
    <main className="flex w-full min-h-screen justify-center items-center">
      <Button variant="default" size="lg">
        Test
      </Button>
    </main>
  );
}
