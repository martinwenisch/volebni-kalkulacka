"use client";

import { PropsWithChildren, createContext, useContext } from "react";
import { LanguageData } from "~/types/language";

type Props = PropsWithChildren<{
  data: LanguageData;
}>;

const LanguageContext = createContext<LanguageData | null>(null);

export function LanguageProvider({ data, children }: Props) {
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const data = useContext(LanguageContext);

  if (!data) {
    throw new Error("useLanguage must be used within an LanguageProvider");
  }

  return data;
}
