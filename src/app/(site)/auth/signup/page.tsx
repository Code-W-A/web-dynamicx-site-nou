import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Creeaza cont | ${siteName}`,
  description: "Creeaza-ti cont pentru a accesa functionalitati avansate.",
  robots: { index: false, follow: false },
};

export default function SignupPage() {
  return (
    <>
      <Signup />
    </>
  );
}
