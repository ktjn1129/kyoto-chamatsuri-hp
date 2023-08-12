"use client";

import React, { FC } from "react";
import { notoserifjp } from "@/app/layout";
import Link from "next/link";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Button,
} from "@chakra-ui/react";

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={notoserifjp.className}>
      <div className="max-w-full px-4 md:px-8 bg-black">
        <div className="flex items-center justify-between py-3 md:py-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 text-xl font-bold text-gray-300 md:text-2xl"
          >
            京都茶祭
          </Link>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                <Box padding={4} onClick={onClose}>
                  <Link
                    href="/"
                    className="text-lg font-semibold text-gray-500 transition duration-100 hover:text-lime-600 active:text-lime-700"
                  >
                    トップページ
                  </Link>
                </Box>
                <Box padding={4} onClick={onClose}>
                  <a
                    href="/shops"
                    className="text-lg font-semibold text-gray-500 transition duration-100 hover:text-lime-600 active:text-lime-700"
                  >
                    出店一覧
                  </a>
                </Box>
                <Box padding={4} onClick={onClose}>
                  <Link
                    href="/location"
                    className="text-lg font-semibold text-gray-500 transition duration-100 hover:text-lime-600 active:text-lime-700"
                  >
                    会場アクセス
                  </Link>
                </Box>
                <Box padding={4} onClick={onClose}>
                  <Link
                    href="/contact"
                    className="text-lg font-semibold text-gray-500 transition duration-100 hover:text-lime-600 active:text-lime-700"
                  >
                    お問い合わせ
                  </Link>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>

          <div className="hidden gap-12 lg:flex">
            <Link
              href="/"
              className="text-lg font-semibold text-gray-500 transition duration-100 hover:text-lime-600 active:text-lime-700"
            >
              トップページ
            </Link>
            <Link
              href="/shops"
              className="text-lg font-semibold text-gray-500 transition duration-100 hover:text-lime-600 active:text-lime-700"
            >
              出店一覧
            </Link>
            <Link
              href="/location"
              className="text-lg font-semibold text-gray-500 transition duration-100 hover:text-lime-600 active:text-lime-700"
            >
              会場アクセス
            </Link>
            <Link
              href="/contact"
              className="text-lg font-semibold text-gray-500 transition duration-100 hover:text-lime-600 active:text-lime-700"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
