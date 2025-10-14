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

  if (bot) {
    throw Error("You cannot submit the form.");
  }

  // Basic validation
  if (!name || !email || !message) {
    return { error: "Name, email, and message are required." };
  }

  try {
    const domain = process.env.SITE_URL.replace(/^https?:\/\//, "");
    const from = `${process.env.COMPANY_NAME} <no-reply@${domain}>`;
    const { data, error } = await resend.emails.send({
      // TODO: Replace with your real sender address/domain
      from,
      // from: "Acme <onboarding@resend.dev>",
      to: ["amittamang423@gmail.com"],
      subject: `Message from ${name} via ${process.env.COMPANY_NAME} website`,
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
      return { error: error.message || "Failed to send email." };
    }

    return data;
  } catch (error) {
    return { error: "An unexpected error occurred. Please try again later." };
  }
}
