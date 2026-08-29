import type { Request, Response } from "express";
import { Resend } from "resend";
import { escapeHtml } from "../utils/escapeHtml";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export const submitContactForm = async (
  req: Request<{}, {}, ContactRequest>,
  res:Response
) => {
  const { name, email, message } = req.body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({
      success: false,
      message: "All fields are required.",
    });
  }

  if (name.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: "Name must be at least 2 Characters.",
    });
  }

  if (message.trim().length < 10) {
    return res.status(400).json({
      success: false,
      message: "Message must be at least 10 Characters.",
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email.trim())) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address.",
    });
  }

  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeMessage = escapeHtml(message.trim());

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: [process.env.CONTACT_EMAIL!],
    subject: `Portfolio contact from ${safeName}`,
    html: `
      <h2>New Portfolio Contact</h2>

      <p><strong>Name:</strong> ${safeName}</p>

      <p><strong>Email:</strong> ${safeEmail}</p>

      <p><strong>Message:</strong></p>

      <p>${safeMessage}</p>
      `,
  });

  if (error) {
    console.error("Resend error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send your message.",
    });
  }

  console.log("Email sent:", data);

  return res.status(200).json({
    success: true,
    message: "Message send successfully.",
  });
};