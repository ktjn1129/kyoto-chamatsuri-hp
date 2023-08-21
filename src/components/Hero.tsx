import Image from "next/image";
import { FC } from "react";

export const Hero: FC = () => {
  return (
    <div className="mb-14">
      <div className="h-96 lg:h-screen relative overflow-hidden">
        <Image
          src="/images/hero.svg"
          layout="fill"
          loading="lazy"
          alt="Kyoto Cha Matsuri Header"
          className="absolute t-0 inset-0 h-full w-full object-cover "
        />
      </div>
    </div>
  );
};
