"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChakraProvider } from "@chakra-ui/react";

export const notosansjp = Noto_Sans_JP({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-notojp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "京都茶祭2023秋",
  description: "Kyoto Japanese Tea Festival 2023 Autumn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notosansjp.className}>
        <ChakraProvider>
          <div className="flex flex-col h-screen">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ChakraProvider>
      </body>
    </html>
  );
}
