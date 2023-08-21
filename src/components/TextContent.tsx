import { FC } from "react";

interface TextContentProps {
  id: string;
  title: string;
  text: string;
}

export const TextContent: FC<TextContentProps> = ({ id, title, text }) => {
  return (
    <div id={id} className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl mb-8 px-8">
        <h2 className="text-center text-gray-800 font-bold text-lg mb-10 lg:text-3xl lg:mb-12">
          {title}
        </h2>
        <p className="text-center text-gray-700 text-md leading-8 lg:text-2xl lg:leading-10">
          {text}
        </p>
      </div>
    </div>
  );
};
