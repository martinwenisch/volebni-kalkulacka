import { Button } from "@repo/ui/components";
import Link from "next/link";

export default function Page({
  params,
}: {
  params: {
    theme: string;
    instance: string;
    language: string;
    elections: string;
    calculator: string;
  };
}) {
  return (
    <>
      <Button variant="default" size="lg" asChild>
        <Link
          href={`/${params.theme}/${params.instance}/${params.language}/${params.elections}/${params.calculator}/1`}
        >
          Start!
        </Link>
      </Button>
    </>
  );
}
