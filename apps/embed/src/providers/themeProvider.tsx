"use client";

import { PropsWithChildren, createContext, useContext } from "react";
import { ThemeData } from "~/types/theme";

type Props = PropsWithChildren<{
  data: ThemeData;
}>;

const ThemeContext = createContext<ThemeData | null>(null);

export function ThemeProvider({ data, children }: Props) {
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const data = useContext(ThemeContext);

  if (!data) {
    throw new Error("useTheme must be used within an ThemeProvider");
  }

  return data;
}
