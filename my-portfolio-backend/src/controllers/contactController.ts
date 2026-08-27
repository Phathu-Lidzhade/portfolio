import type { Request, Response } from "express";

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export const submitContactForm = (
  req: Request<{}, {}, ContactRequest>,
  res:Response
) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email and message are required.",
    });
  }

  console.log("New contact message:");
  console.log({
    name,
    email,
    message,
  });

  return res.status(200).json({
    success: true,
    message: "Message received successfully.",
  });
};