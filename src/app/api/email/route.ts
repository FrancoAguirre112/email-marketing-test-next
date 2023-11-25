import { Resend } from "resend";

const resend = new Resend("re_7TydpRkh_HkZbUH2hfb1UhuyptCYPywZi");

export const POST = async (request: Request) => {
  const { from, to, subject, html } = await request.json()
  try {
    const data = await resend.emails.send({
      from: from,
      to: to,
      subject: subject,
      html: html,
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
