import dotenv from "dotenv";

dotenv.config();

export const envConfig = {
  SERVICE_ID: process.env.APP_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: process.env.APP_EMAILJS_TEMPLATE_ID,
  USER_ID: process.env.APP_EMAILJS_USER_ID,
};
