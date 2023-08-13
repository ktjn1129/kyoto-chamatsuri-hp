import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_KEY);

    const msgToManager = {
      to: "kyotochamatsuri@gmail.com",
      from: "kyotochamatsuri@gmail.com",
      subject: "京都茶祭イベントサイトからのお問い合わせ",
      text:
        req.body.name +
        "様よりお問い合せがありました。" +
        "メッセージ：" +
        req.body.message +
        "Eメール：" +
        req.body.email,
      html: `
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
      subject: "お問い合せありがとうございました。",
      text:
        "お問い合せを受け付けました。回答を今しばらくお待ちくださいませ。" +
        req.body.message,
      html: `
        <p>${req.body.name}様</p>
        <p>お問い合せを受け付けました。回答を今しばらくお待ちくださいませ。</p><br/>

        <p>【お問い合わせ内容】</p>
        <p>${req.body.message}</p>
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
