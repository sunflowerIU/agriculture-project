"use server";
import { Resend } from "resend";
import EmailTemplate from "../_components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");
  const bot = formData.get("bot");
  //   console.log(formData);

  if (bot) {
    throw Error("You cannot submit the form.");
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["amittamang423@gmail.com"],
      subject: "Your work website",
      react: (
        <EmailTemplate
          name={name}
          email={email}
          phone={phone}
          message={message}
        />
      ),
    });

    if (error) {
      return error;
    }

    return data;
  } catch (error) {
    return error;
  }
}
