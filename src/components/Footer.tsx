import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="bg-white">
      <div className="pt-12 lg:pt-16">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="border-t py-4 text-center text-sm text-gray-400">
            © 2023 - 京都茶祭実行委員会 All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};
