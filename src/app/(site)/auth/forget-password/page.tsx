import ForgetPassword from "@/components/Auth/ForgetPassword";

import { Metadata } from "next";

const siteName = process.env.SITE_NAME || "Web Dynamicx";

export const metadata: Metadata = {
  title: `Resetare parolă | ${siteName}`,
  description: "Reseteaza parola contului tau Web Dynamicx.",
  robots: { index: false, follow: false },
};

const ForgetPasswordPage = () => {
  return <ForgetPassword />;
};

export default ForgetPasswordPage;
