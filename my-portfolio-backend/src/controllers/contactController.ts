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