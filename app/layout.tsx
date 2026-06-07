import type { ReactNode } from "react";
import { inter, roboto } from "@/public/fonts/fonts";
import "./globals.css";

export const metadata = {
  title: "CareSphere",
  description: "coresphere hospital management system",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/images/logo/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body className="px-2 sm:px-8 md:px-14 lg:px-20 xl:px-28">{children}</body>
    </html>
  );
}
