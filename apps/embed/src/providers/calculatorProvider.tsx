"use client";

import { PropsWithChildren, createContext, useContext } from "react";
import { CalculatorData } from "~/types/calculator";
import { QuestionsData } from "~/types/questions";

type Props = PropsWithChildren<{
  calculator: CalculatorData;
  questions: QuestionsData;
}>;

type CalculatorContextData = {
  calculator: CalculatorData;
  questions: QuestionsData;
};

const CalculatorContext = createContext<CalculatorContextData | null>(null);

export function CalculatorProvider({ calculator, questions, children }: Props) {
  return (
    <CalculatorContext.Provider
      value={{
        calculator,
        questions,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculator() {
  const data = useContext(CalculatorContext);

  if (!data) {
    throw new Error("useCalculator must be used within an CalculatorProvider");
  }

  return data;
}
