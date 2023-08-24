"use client";

import "./globals.css";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notosansjp.className}>
        <ChakraProvider>
          <div className="flex flex-col">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ChakraProvider>
      </body>
    </html>
  );
}
