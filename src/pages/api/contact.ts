import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    console.log(req.body);
    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      pool: true,
      port: 587,
      host: "smtp.office365.com",
      auth: {
        user: "priyam.266gupta@outlook.com",
        pass: process.env.EMAIL_FROM_PASSWORD,
      },
      secure: false,
      maxConnections: 1,
    });

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error: Error | null, success: boolean) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    const mailData = {
      from: "priyam.266gupta@outlook.com",
      to: "priyam.g266@gmail.com",
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`,
    };

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailData, (err: Error | null, info: any) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });

    return res.status(200).json({ message: "Success" });
  } catch (error: any) {
    throw new Error(`Failed to call the api: ${error.message}`);
  }
}
