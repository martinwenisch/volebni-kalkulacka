"use client";

import { PropsWithChildren, createContext, useContext } from "react";
import { InstanceData } from "~/types/instance";

type Props = PropsWithChildren<{
  data: InstanceData;
}>;

const InstanceContext = createContext<InstanceData | null>(null);

export default function InstanceProvider({ data, children }: Props) {
  return (
    <InstanceContext.Provider value={data}>{children}</InstanceContext.Provider>
  );
}

export function useInstance() {
  const data = useContext(InstanceContext);

  if (!data) {
    throw new Error("useInstance must be used within an InstanceProvider");
  }

  return data;
}
