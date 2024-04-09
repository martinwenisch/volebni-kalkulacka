"use client";

import { Button } from "@repo/ui/components";
import Link from "next/link";
import { useCalculatorGroup } from "~/providers/calculatorGroupProvider";
import { useCalculator } from "~/providers/calculatorProvider";
import { useInstance } from "~/providers/instanceProvider";
import { useLanguage } from "~/providers/languageProvider";
import { useTheme } from "~/providers/themeProvider";

type Props = {
  questionNumber: number;
};

export default function Question({ questionNumber }: Props) {
  const { questions, calculator } = useCalculator();
  const data = useCalculatorGroup();
  const instance = useInstance();
  const theme = useTheme();
  const language = useLanguage();

  const question = questions[questionNumber - 1];
  const hasNextQuestion = questionNumber < questions.length;

  const nextQuestionLink = `/${theme.name}/${instance.key}/${language.name}/${data.election.key}/${calculator.variant.key}/${questionNumber + 1}`;
  const vysledekLink = `/${theme.name}/${instance.key}/${language.name}/${data.election.key}/${calculator.variant.key}/vysledek`;

  return (
    <div className="flex flex-col gap-4">
      <div>{question?.statement}</div>
      {hasNextQuestion && (
        <Button variant="default" size="lg" asChild>
          <Link href={nextQuestionLink}>Next Question</Link>
        </Button>
      )}
      {!hasNextQuestion && (
        <Button variant="default" size="lg" asChild>
          <Link href={vysledekLink}>A to je vse!</Link>
        </Button>
      )}
    </div>
  );
}
