import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";
import { z } from "zod";
import { CalculatorProvider } from "~/providers/calculatorProvider";
import { calculatorDataSchema } from "~/types/calculator";
import { questionsDataSchema } from "~/types/questions";

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default async function Layout({
  children,
  params,
}: PropsWithChildren<{
  params: {
    theme: string;
    instance: string;
    language: string;
    elections: string;
    calculator: string;
  };
}>) {
  const calculatorResponse = await fetch(
    `https://volebnakalkulacka.sk/data/instance/${params.instance}/${params.elections}/${params.calculator}/calculator.json`
  );

  const questionsResponse = await fetch(
    `https://volebnakalkulacka.sk/data/instance/${params.instance}/${params.elections}/${params.calculator}/questions.json`
  );

  if (calculatorResponse.status !== 200 || questionsResponse.status !== 200) {
    return notFound();
  }

  try {
    const calculatorData = calculatorDataSchema.parse(
      await calculatorResponse.json()
    );
    const questionsData = questionsDataSchema.parse(
      await questionsResponse.json()
    );

    return (
      <CalculatorProvider calculator={calculatorData} questions={questionsData}>
        {children}
      </CalculatorProvider>
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error(error.errors);
    }
    return notFound();
  }
}