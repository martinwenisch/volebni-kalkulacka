import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import { promises as fs } from "fs";
import "~/themes/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default async function RootLayout({
  children,
  params,
}: PropsWithChildren<{
  params: { theme: string };
}>) {
  let themeCss = null;

  // Try to dynamically import the CSS file based on the theme parameter
  try {
    themeCss = await fs.readFile(
      process.cwd() + `/src/themes/${params.theme}.css`,
      "utf8"
    );
  } catch (error) {
    // If the theme doesn't exist, use the default theme
    themeCss = await fs.readFile(
      process.cwd() + `/src/themes/cool.css`,
      "utf8"
    );
  }

  return (
    <html lang="en">
      <head>{themeCss && <style>{themeCss}</style>}</head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
