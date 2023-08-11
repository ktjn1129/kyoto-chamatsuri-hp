import { Navbar } from "@/components/Navbar";
import { TextContent } from "@/components/TextContent";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto">
          <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-100 py-16 md:py-20 xl:py-48">
            {/* <Image
              src=""
              layout="fill"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="absolute inset-0 h-full w-full object-cover object-center"
            /> */}
            <div className="absolute inset-0 bg-lime-500 mix-blend-multiply"></div>

            <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
              <p className="mb-4 text-center text-lg text-lime-200 sm:text-xl md:mb-8">
                2023.09.24 (Sun)
              </p>
              <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
                Kyoto Japanese Tea Festival 2023 Autumn
              </h1>
            </div>
          </section>
        </div>
      </div>
      <TextContent id="about" title="京都茶祭とは" text="仮テキストです。" />

      <footer className="bg-white">
        <div className="pt-12 lg:pt-16">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="border-t py-8 text-center text-sm text-gray-400">
              © 2023 - 京都茶祭実行委員会 All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
