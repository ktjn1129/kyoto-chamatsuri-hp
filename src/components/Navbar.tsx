"use client";

import React, { FC } from "react";
import { notosansjp } from "@/app/layout";
import Link from "next/link";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={notosansjp.className}>
      <div className="max-w-full px-2 md:px-8 bg-kimidori">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 text-xl font-bold text-gray-300 md:text-2xl"
          >
            <Image
              src="/images/logo.svg"
              width={70}
              height={70}
              alt="Kyoto cha matsauri logo"
            ></Image>
          </Link>

          <div className="hidden gap-12 lg:flex">
            <Link
              href="/"
              className="text-lg font-semibold text-gray-700 transition duration-100 hover:text-white"
            >
              トップページ
            </Link>
            <Link
              href="/shops"
              className="text-lg font-semibold text-gray-700 transition duration-100 hover:text-white"
            >
              出店情報
            </Link>
            <Link
              href="/contact"
              className="text-lg font-semibold text-gray-700 transition duration-100 hover:text-white"
            >
              お問合わせ
            </Link>
            <Link href="https://www.instagram.com/kyoto_cha_matsuri/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="26"
                height="26"
                className="fill-current text-gray-700 transition duration-100 hover:text-white"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </Link>
          </div>

          {/* humberger menu */}
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="w-10 h-10 text-gray-700 lg:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={onOpen}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <Box padding={5} onClick={onClose}>
                  <Link
                    href="/"
                    className="text-lg font-semibold text-gray-700 transition duration-100 hover:text-lime-600 active:text-lime-700"
                  >
                    トップページ
                  </Link>
                </Box>
                <Box padding={5} onClick={onClose}>
                  <a
                    href="/shops"
                    className="text-lg font-semibold text-gray-700 transition duration-100 hover:text-lime-600 active:text-lime-700"
                  >
                    出店情報
                  </a>
                </Box>
                <Box padding={5} onClick={onClose}>
                  <Link
                    href="/contact"
                    className="text-lg font-semibold text-gray-700 transition duration-100 hover:text-lime-600 active:text-lime-700"
                  >
                    お問合わせ
                  </Link>
                </Box>
                <Box padding={5} onClick={onClose}>
                  <Link
                    href="https://www.instagram.com/kyoto_cha_matsuri/"
                    className="text-lg font-semibold text-gray-700 transition duration-100 hover:text-lime-600 active:text-lime-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="30"
                      height="30"
                      className="fill-current duration-100 hover:text-lime-600 active:text-lime-700"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </Link>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};
