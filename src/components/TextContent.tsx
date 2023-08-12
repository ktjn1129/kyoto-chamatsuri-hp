import { FC } from "react";
import { notoserifjp } from "@/app/layout";

interface TextContentProps {
  id: string;
  title: string;
  text: string;
}

export const TextContent: FC<TextContentProps> = ({ id, title, text }) => {
  return (
    <div id={id} className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-8 md:mb-12 px-8">
          <div className={notoserifjp.className}>
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-10 lg:text-3xl">
              {title}
            </h2>
          </div>
          <p className="mx-auto max-w-screen-lg text-center text-gray-600 md:text-xl leading-8 md:leading-10">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
