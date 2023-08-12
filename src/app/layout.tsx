"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChakraProvider } from "@chakra-ui/react";

export const notosansjp = Noto_Sans_JP({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-notojp",
  display: "swap",
});

export const notoserifjp = Noto_Serif_JP({
  weight: ["400"],
  subsets: ["latin"],
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
          <Navbar />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
