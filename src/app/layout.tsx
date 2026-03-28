import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pool Nerds - Pool Chemical & Treatment Service",
  description:
    "We remove the guesswork before we start the poolwork. Custom pool chemical treatments engineered for your water chemistry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
