"use client";

import { Hero } from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="w-full lg:flex justify-between mb-28">
        <div className="mx-auto my-auto max-w-screen-md px-8 lg:px-12 lg:py-12 mb-14">
          <h2 className="text-center text-gray-800 font-bold text-lg mb-10 lg:text-3xl lg:mb-12">
            京都茶祭とは
          </h2>
          <p className="text-gray-700 text-md leading-8 lg:text-xl lg:leading-10">
            全国、世界的に有名な「宇治茶」の生産地京都。
            京都産のお茶は、適した気候条件により高品質な茶葉生産が行われます。
            日本茶の海外需要は年々増加し、工夫を凝らした多様な茶製品が日々製造販売されています。
            そんな日本茶葉を使用した様々な商品をたくさんの人に、奥深い味わいをお楽しみいただこうという想いを込めて今回「京都茶祭2023」開催の流れとなりました。
            お茶に詳しい方も、そうでない方も新たな発見と出会える、そんな京都茶祭になるよう、楽しんでいただきたいです！
          </p>
        </div>
        <div className="mx-auto my-auto w-full h-96 lg:h-[540px] relative">
          <Image
            src="/images/chabatake.jpg"
            alt="Chabatake"
            layout={"fill"}
            objectFit={"cover"}
          ></Image>
        </div>
      </div>

      <div className="w-full lg:flex justify-between mb-28">
        <div className="mx-auto my-auto w-full h-96 lg:h-[580px] relative mb-14">
          <Image
            src="/images/chatsumi.jpg"
            alt="Chatsumi"
            layout={"fill"}
            objectFit={"cover"}
          ></Image>
        </div>
        <div className="mx-auto my-auto max-w-screen-md px-8 lg:px-12 lg:py-12">
          <h2 className="text-center text-gray-800 font-bold text-lg mb-10 lg:text-3xl lg:mb-12">
            和束町手揉技術保存会による製茶体験
          </h2>
          <p className="text-gray-700 text-md leading-8 lg:text-xl lg:leading-10">
            和束町の隣、宇治田原町で江戸時代に完成された、煎茶の製法。
            古くは焙炉（ほいろ）というわしを張った木組みの上で、熱を加え、揉みながら乾燥させていきました。
            今ではすっかり機械化されていますが、その機械は手の動きを忠実に再現したものと言われ、今も手揉みには及ばないといいます。
            そのピンとした、針のような仕上がりはまさに芸術品。
            機械を扱ううえでも、この手揉み製茶の感覚が役に立つため、全国的にこの技術は受け継がれていて、全国大会も行われています。
            2018年にはこの全国大会でも優勝した、和束茶手揉技術保存会。
            その技をご覧ください。
            和束町手揉技術保存会会長、細井堅太さんの解説付きです。
            当日どなたでも手揉体験できます！ 煎茶の手揉工程をぜひ体験ください！
          </p>
        </div>
      </div>

      <div className="w-full lg:flex justify-between mb-28">
        <div className="mx-auto my-auto max-w-screen-md px-8 lg:px-12 lg:py-12 mb-14">
          <h2 className="text-center text-gray-800 font-bold text-lg mb-10 lg:text-3xl lg:mb-12">
            販売商品について
          </h2>
          <p className="text-gray-700 text-md leading-8 lg:text-xl lg:leading-10">
            当日は京都和束町より 碾茶（てんちゃ）工場直営
            煎茶・お抹茶・グリーンティー等 や
            人気ジェラート店の抹茶ジェラートなど
            あまり見たことのない茶製品が沢山販売されます！
            その他お茶をふんだんに使った、お茶チップスや、「食べるお茶」など
            様々な楽しめる商品をご用意しています！
            緑あふれる京都茶祭へのご来場、こころよりお待ちしています！
          </p>
        </div>
        <div className="mx-auto my-auto w-full h-96 lg:h-[460px] relative">
          <Image
            src="/images/yunomi.jpg"
            alt="Yunomi"
            layout={"fill"}
            objectFit={"cover"}
          ></Image>
        </div>
      </div>

      <div className="w-full lg:flex justify-between mb-20">
        <div className="mx-auto lg:w-4/12 mb-14 px-8 lg:px-12 lg:py-12">
          <h2 className="text-center text-gray-800 font-bold text-lg mb-10 lg:text-3xl lg:mb-12">
            開催日時
          </h2>
          <p className="text-gray-700 text-center text-md leading-8 lg:text-xl lg:leading-10">
            2023年9月24日(日) 11:00～17:00
            <br />
            （京都平安神宮 岡崎公園）
          </p>
        </div>
        <div className="mx-auto my-auto w-full relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26139.758743808292!2d135.7337828106958!3d35.019974128007995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600108e5cb5b6943%3A0x77c1e2034d53d7e5!2z5bKh5bSO5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1692705007066!5m2!1sja!2sjp"
            className="w-full h-96"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}
