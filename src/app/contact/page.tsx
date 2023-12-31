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
  useToast,
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
  const toast = useToast();

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
      router.push("/");
      toast({
        title: "お問合せが正常に完了しました。",
        status: "success",
        position: "bottom-right",
        isClosable: true,
      });
    } else {
      toast({
        title: "お問合せが正常に送信できませんでした。",
        status: "error",
        position: "bottom-right",
        isClosable: true,
      });
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="mx-auto max-w-screen-2xl px-10 py-20">
          <div className="mb-10">
            <h2 className="mb-10 text-center text-xl font-bold text-gray-800 lg:text-3xl">
              お問合わせ
            </h2>
            <p className="mx-auto max-w-screen-md text-gray-500 md:text-lg">
              以下のフォームへ必要事項をご記入の上お問合わせいただきましたら、内容を確認いたしまして運営事務局よりご返信いたします。
            </p>
          </div>
          <div className="mx-auto max-w-screen-xl">
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

            <div className="flex items-center justify-between sm:col-span-2 mt-6">
              <button
                className="inline-block rounded-lg bg-kimidori px-8 py-3 text-center text-sm text-white outline-none ring-lime-300 transition duration-100 hover:bg-lime-600 focus-visible:ring active:bg-lime-700 md:text-base"
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
