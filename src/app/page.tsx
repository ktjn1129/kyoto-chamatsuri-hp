"use client";

import { Hero } from "@/components/Hero";
import { TextContent } from "@/components/TextContent";
import { About, Date } from "@/texts/texts";

export default function Home() {
  return (
    <>
      <Hero />
      <TextContent id={About.id} title={About.title} text={About.text} />
      <TextContent id={Date.id} title={Date.title} text={Date.text} />
    </>
  );
}
