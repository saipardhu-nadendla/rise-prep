import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rise Prep | SAT Tutoring",
  description: "Expert SAT prep to help you reach your target score.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
