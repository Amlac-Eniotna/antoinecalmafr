"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Le message fait moins de 10 caractères"),
});

type FormData = z.infer<typeof FormSchema>;

export async function sendEmail(data: FormData) {
  try {
    // Validate form data
    const result = FormSchema.safeParse(data);

    if (!result.success) {
      return { success: false, errors: result.error.flatten().fieldErrors };
    }

    const { name, email, message } = result.data;

    // Configure nodemailer transporter
    // Note: For production, use actual SMTP credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Boolean(process.env.SMTP_SECURE),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"${email}" <contact@antoinecalma.fr>`,
      to: process.env.CONTACT_EMAIL,
      subject: `[Portfolio Contact] : ${name}`,
      text: message,
      html: `
        <div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
