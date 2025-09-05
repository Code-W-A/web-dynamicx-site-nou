import Signin from "@/components/Auth/Signin";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Autentificare | ${siteName}`,
  description: "Autentifica-te in contul tau Web Dynamicx.",
  robots: { index: false, follow: false },
};

export default function SigninPage() {
  return (
    <>
      <Signin />
    </>
  );
}
