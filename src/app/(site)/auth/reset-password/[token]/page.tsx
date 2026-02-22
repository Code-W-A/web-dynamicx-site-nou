import ResetPassword from "@/components/Auth/ResetPassword";

import { Metadata } from "next";

const siteName = process.env.SITE_NAME || "Web Dynamicx";

export const metadata: Metadata = {
  title: `Resetează parola | ${siteName}`,
  description: "Introdu noua parola pentru contul tau.",
  robots: { index: false, follow: false },
};

const ResetPasswordPage = async (props: { params: Promise<{ token: string }> }) => {
  const params = await props.params;
  return <ResetPassword token={params.token} />;
};

export default ResetPasswordPage;
