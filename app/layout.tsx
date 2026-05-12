import type { Metadata } from "next";
// @ts-ignore: side-effect import of CSS globals
import "./globals.css";

export const metadata: Metadata = {
  title: "Rubie Tents Company Limited",
  description:
    "High-quality tarpaulin distribution and custom tent-making solutions in Uganda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
