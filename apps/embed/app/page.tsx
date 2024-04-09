import { Button } from "@repo/ui/components";
import Link from "next/link";

export default function Page(): JSX.Element {
  const randomLink = "/cool/volebnakalkulacka.sk/sk/prezidentske-2024";
  return (
    <main className="flex w-full min-h-screen justify-center items-center">
      <Button variant="default" size="lg" asChild>
        <Link href={randomLink}>Ukazkova kalkulacka</Link>
      </Button>
    </main>
  );
}
