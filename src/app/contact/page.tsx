"use client";

import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const schema = yup.object({
  name: yup.string().required("必須項目です"),
  email: yup
    .string()
    .required("必須項目です")
    .email("正しいメールアドレスを入力してください"),
  message: yup.string().required("必須項目です"),
});

export default function Contact() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    const response = await fetch("api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      router.push("/thanks");
    } else {
      alert("正常に送信できませんでした");
    }
  };

  return (
    <>
      <div className="bg-white py-8 sm:py-10 lg:py-12 mt-5">
        <div className="mx-auto max-w-screen-2xl px-8 md:px-10">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              お問い合わせ
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              以下のフォームへ必要事項をご記入の上お問い合わせいただきましたら、内容を確認いたしまして運営事務局よりご返信いたします。
            </p>
          </div>
          <div className="mx-auto max-w-screen-lg">
            <FormControl isInvalid={"name" in errors}>
              <FormLabel>お名前*</FormLabel>
              <Input variant="outline" {...register("name")} />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>

            <FormControl mt={4} isInvalid={"email" in errors}>
              <FormLabel>Eメール*</FormLabel>
              <Input variant="outline" type="email" {...register("email")} />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl mt={4} isInvalid={"message" in errors}>
              <FormLabel>ご用件*</FormLabel>
              <Textarea variant="outline" rows={6} {...register("message")} />
              <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
            </FormControl>

            <div className="flex items-center justify-between sm:col-span-2 mt-5 mb-20">
              <button
                className="inline-block rounded-lg bg-lime-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-lime-300 transition duration-100 hover:bg-lime-600 focus-visible:ring active:bg-lime-700 md:text-base"
                onClick={handleSubmit(onSubmit)}
              >
                送信
              </button>
              <span className="text-sm text-gray-500">*必須項目</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
