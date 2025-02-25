import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./fonts";

export const metadata: Metadata = {
  title: "Acun Gürsoy Homepage",
  description: "Portfolio und Überblick zu dem Softwareentwickler Acun Gürsoy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={montserrat.style}>
        <div className="bg-blue-400">
          {children}
        </div>
      </body>
    </html>
  );
}
