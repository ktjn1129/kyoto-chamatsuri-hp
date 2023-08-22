import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msgToManager = {
      to: "kyotochamatsuri@gmail.com",
      from: "kyotochamatsuri@gmail.com",
      subject: "【重要】京都茶祭イベントサイトからのお問い合わせ",
      text:
        req.body.name +
        "様よりお問い合せがありました。" +
        "メッセージ：" +
        req.body.message +
        "Eメール：" +
        req.body.email,
      html: `
        <p>以下の内容でお問合せがありましたので、ご対応をお願いします。</p>
        </br>
        <p>【お名前】</p>
        <p>${req.body.name}</p>
        <p>【Eメール】</p>
        <p>${req.body.email}</p>
        <p>【お問い合わせ内容】</p>
        <p>${req.body.message}</p>
      `,
    };

    const msgToUser = {
      to: req.body.email,
      from: "kyotochamatsuri@gmail.com",
      subject: "【京都茶祭運営事務局】お問合せありがとうございました",
      text:
        "お問合せを受け付けました。今しばらく回答をお待ちくださいませ。" +
        req.body.message,
      html: `
        <p>${req.body.name}様</p>
        <p>お世話になっております。京都茶祭運営事務局です。</p>
        <p>以下の内容でお問合せを受け付けましたのでお知らせいたします。</p>
        <p>今しばらく回答をお待ちくださいませ。</p>
        <br/>
        <p>【お問い合わせ内容】</p>
        <p>${req.body.message}</p>
        <br/>
      `,
    };

    (async () => {
      try {
        await sgMail.send(msgToManager);
        await sgMail.send(msgToUser);
        res.status(200).json(msgToUser);
      } catch (error: any) {
        console.error(error);
        res.status(500).json(error);
      }
    })();
  }
}
