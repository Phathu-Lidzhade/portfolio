const requiredEnvVariables = [
  "RESEND_API_KEY",
  "CONTACT_EMAIL",
  "FRONTEND_URL",
] as const;

for (const variable of requiredEnvVariables) {
  if (!process.env[variable]) {
    throw new Error(`Missing required environment variable: ${variable}`);
  }
}

export const env: {
  resendApiKey: string;
  contactEmail: string;
  frontendUrl: string;
} = {
  resendApiKey: process.env.RESEND_API_KEY!,
  contactEmail: process.env.CONTACT_EMAIL!,
  frontendUrl: process.env.FRONTEND_URL!,
};