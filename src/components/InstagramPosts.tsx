import { FC } from "react";
import { notoserifjp } from "@/app/layout";

interface InstagramPostsProps {
  title: string;
}

export const InstagramPosts: FC<InstagramPostsProps> = ({ title }) => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className={notoserifjp.className}>
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
            {title}
          </h2>
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8"></div>
      </div>
    </div>
  );
};
