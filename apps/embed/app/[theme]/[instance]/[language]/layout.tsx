import { PropsWithChildren } from "react";
import { LanguageProvider } from "~/providers/languageProvider";

export default async function Layout({
  children,
  params,
}: PropsWithChildren<{
  params: { theme: string; instance: string; language: string };
}>) {
  // add more rada linked to language, like translation files
  const languageData = {
    name: params.language,
  };
  return <LanguageProvider data={languageData}>{children}</LanguageProvider>;
}
