import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-screen-xl mb-8 px-8 py-6 sm:py-8 lg:py-12">
        <h2 className="text-center text-gray-800 font-bold text-lg mb-10 lg:text-3xl lg:mb-12">
          京都茶祭とは
        </h2>
        <p className="text-gray-700 text-md leading-8 lg:text-2xl lg:leading-10">
          全国、世界的に有名な「宇治茶」の生産地京都。
          京都産のお茶は、適した気候条件により高品質な茶葉生産が行われます。
          日本茶の海外需要は年々増加し、工夫を凝らした多様な茶製品が日々製造販売されています。
          そんな日本茶葉を使用した様々な商品をたくさんの人に、奥深い味わいをお楽しみいただこうという想いを込めて今回「京都茶祭2023」開催の流れとなりました。
          お茶に詳しい方も、そうでない方も新たな発見と出会える、そんな京都茶祭になるよう、楽しんでいただきたいです！
        </p>
      </div>
      <div className="mx-auto max-w-screen-xl mb-8 px-8 py-6 lg:py-12">
        <h2 className="text-center text-gray-800 font-bold text-lg mb-10 lg:text-3xl lg:mb-12">
          開催日時
        </h2>
        <p className="text-center text-gray-700 text-md leading-8 lg:text-2xl lg:leading-10">
          2023年9月24日(日) 11:00～17:00（京都平安神宮 岡崎公園）
        </p>
      </div>
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26139.758743808292!2d135.7337828106958!3d35.019974128007995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600108e5cb5b6943%3A0x77c1e2034d53d7e5!2z5bKh5bSO5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1692705007066!5m2!1sja!2sjp"
          className="mx-auto max-w-screen-lg w-full h-96 px-6 mb-20"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
