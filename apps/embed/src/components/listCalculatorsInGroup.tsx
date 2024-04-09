"use client";

import Link from "next/link";
import { useCalculatorGroup } from "~/providers/calculatorGroupProvider";
import { useInstance } from "~/providers/instanceProvider";
import { useLanguage } from "~/providers/languageProvider";
import { useTheme } from "~/providers/themeProvider";

export default function ListCalculatorsInGroup() {
  const data = useCalculatorGroup();
  const instance = useInstance();
  const theme = useTheme();
  const language = useLanguage();

  return (
    <>
      <div>
        Instance: <span>{instance.key}</span>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {data.calculators.map((calculator) => {
          return (
            <Link
              href={`/${theme.name}/${instance.key}/${language.name}/${data.election.key}/${calculator.variant.key}`}
              key={calculator.id}
            >
              {calculator.variant.key}
            </Link>
          );
        })}
      </div>
    </>
  );
}
