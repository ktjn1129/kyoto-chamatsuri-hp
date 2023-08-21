"use client";

import { TextContent } from "@/components/TextContent";
import { Shops } from "@/texts/texts";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <TextContent id={Shops.id} title={Shops.title} text={Shops.text} />
    </div>
  );
}
