"use client";

export default function Contact() {
  return (
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

        <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              お名前*
            </label>
            <input
              name="email"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-lime-300 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Eメール*
            </label>
            <input
              name="email"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-lime-300 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              ご用件*
            </label>
            <textarea
              name="message"
              className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-lime-300 transition duration-100 focus:ring"
            ></textarea>
          </div>

          <div className="flex items-center justify-between sm:col-span-2">
            <button className="inline-block rounded-lg bg-lime-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-lime-300 transition duration-100 hover:bg-lime-600 focus-visible:ring active:bg-lime-700 md:text-base">
              送信
            </button>

            <span className="text-sm text-gray-500">*必須項目</span>
          </div>
        </form>
      </div>
    </div>
  );
}
