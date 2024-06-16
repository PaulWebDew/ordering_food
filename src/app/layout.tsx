import React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Food",
  description: "Ordering food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Toaster position={"top-right"} />
        <main className={"max-w-6xl mx-auto p-4"}>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
