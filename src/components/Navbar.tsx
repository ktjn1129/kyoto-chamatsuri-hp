import { FC } from "react";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  return (
    <div className="mx-5 flex items-center justify-between py-4 md:py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
        aria-label="logo"
      >
        京都茶祭
      </Link>
      <div className="hidden gap-12 lg:flex">
        <Scroll
          to="about"
          smooth={true}
          duration={600}
          offset={-50}
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-lime-500 active:text-lime-700"
        >
          京都茶祭とは
        </Scroll>
        <Scroll
          to="shops"
          smooth={true}
          duration={600}
          offset={-50}
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-lime-500 active:text-lime-700"
        >
          出店情報
        </Scroll>
        <Scroll
          to="date"
          smooth={true}
          duration={600}
          offset={-50}
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-lime-500 active:text-lime-700"
        >
          開催日時
        </Scroll>
        <Scroll
          to="location"
          smooth={true}
          duration={600}
          offset={-50}
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-lime-500 active:text-lime-700"
        >
          会場アクセス
        </Scroll>
        <Scroll
          to="contact"
          smooth={true}
          duration={600}
          offset={-50}
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-lime-500 active:text-lime-700"
        >
          お問い合わせ
        </Scroll>
      </div>
    </div>
  );
};
