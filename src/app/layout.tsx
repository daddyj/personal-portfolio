import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={montserrat.style}>
        {children}
      </body>
    </html>
  );
}
