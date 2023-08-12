import { FC } from "react";
import { notoserifjp } from "@/app/layout";

export const Hero: FC = () => {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto">
        <div className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-100 py-16 md:py-20 xl:py-48">
          {/* <Image
        src=""
        layout="fill"
        loading="lazy"
        alt="Photo by Fakurian Design"
        className="absolute inset-0 h-full w-full object-cover object-center"
      /> */}
          <div className="absolute inset-0 bg-lime-700 mix-blend-multiply"></div>

          <div className={notoserifjp.className}>
            <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
              <p className="mb-4 text-center text-lg text-lime-300 sm:text-xl md:mb-8">
                2023.09.24 (Sun)
              </p>
              <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
                Kyoto Japanese Tea Festival 2023
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
