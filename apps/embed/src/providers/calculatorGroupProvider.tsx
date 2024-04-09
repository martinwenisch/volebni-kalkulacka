"use client";

import { PropsWithChildren, createContext, useContext } from "react";
import { CalculatorGroupData } from "~/types/calculatorGroup";

type Props = PropsWithChildren<{
  data: CalculatorGroupData;
}>;

const ElectionContext = createContext<CalculatorGroupData | null>(null);

export function CalculatorGroupProvider({ data, children }: Props) {
  return (
    <ElectionContext.Provider value={data}>{children}</ElectionContext.Provider>
  );
}

export function useCalculatorGroup() {
  const data = useContext(ElectionContext);

  if (!data) {
    throw new Error("useElection must be used within an ElectionProvider");
  }

  return data;
}
