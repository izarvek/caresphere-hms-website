import type { ReactNode } from "react";
import "./globals.css";
export const metadata = {
  title: "coresphere hospital",
  description: "coresphere hospital management system",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
