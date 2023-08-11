import { FC } from "react";

interface TextContentProps {
  id: string;
  title: string;
  text: string;
}

export const TextContent: FC<TextContentProps> = ({ id, title, text }) => {
  return (
    <div id={id} className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="mb-8 md:mb-12">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            {title}
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
