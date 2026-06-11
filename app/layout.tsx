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
      <body>{children}</body>
    </html>
  );
}
