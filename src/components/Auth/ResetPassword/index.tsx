"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import z from "zod";
import { integrations } from "../../../../integrations.config";

const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(8)
    .refine(
      (val) =>
        /[A-Z]/.test(val) && // At least one uppercase letter
        /[a-z]/.test(val) && // At least one lowercase letter
        /\d/.test(val) && // At least one number
        /[@$!%*?&]/.test(val), // At least one special character
      {
        message:
          "Parola trebuie să aibă minim 8 caractere și să conțină litere mari și mici, o cifră și un caracter special.",
      },
    ),
  rePassword: z.string().min(8),
});

const ResetPassword = ({ token }: { token: string }) => {
  const [data, setData] = useState({
    password: "",
  });
  const [error, setError] = useState("");
  const [verified, setVerified] = useState(false);
  const [user, setUser] = useState({
    email: "",
  });

  const router = useRouter();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.post(`/api/forget-password/verify-token`, {
          token,
        });

        if (res.status === 200) {
          setUser({
            email: res.data.email,
          });
          setVerified(true);
        }
      } catch (error: any) {
        toast.error(error.response.data);
        router.push("/auth/forget-password");
      }
    };

    if (integrations?.isAuthEnabled) {
      verifyToken();
    }
  }, [token, router]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (data.password === "") {
      toast.error("Te rugăm să introduci parola.");
      return;
    }

    const result = await resetPasswordSchema.safeParseAsync(data);

    if (!result.success) {
      const firstError = result.error.issues[0];
      toast.error(firstError.message);
      return;
    }

    try {
      const res = await axios.post(`/api/forget-password/update`, {
        email: user?.email,
        password: data.password,
      });

      if (res.status === 200) {
        toast.success(res.data);
        setVerified(true);
        setData({ password: "" });
        router.push("/auth/signin");
      }
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  return (
    <section className="pt-[90px] lg:pt-[240px]">
      <div className="px-4 xl:container">
        <div className="border-b pb-24">
          <div className="mx-auto max-w-[750px] rounded-sm border bg-white px-6 py-10 sm:p-[70px]">
            <div className="mb-8 text-center">
              <h1 className="font-heading mb-3 text-2xl font-medium text-black sm:text-3xl lg:text-2xl xl:text-[40px] xl:leading-tight">
                Actualizează parola
              </h1>

              <p className="text-body-color text-center md:px-20">
                Introdu noua parolă
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 pb-7 lg:justify-between">
                <input
                  type="password"
                  placeholder="Parolă"
                  name="password"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  required
                  className="placeholder-dark-text text-dark focus:border-primary w-full border-b bg-transparent py-5 text-base font-medium outline-hidden"
                />

                <button
                  aria-label="login with email and password"
                  className={`bg-primary inline-flex items-center justify-center rounded px-14 py-[14px] text-sm font-semibold text-white ${
                    error.length > 0 || !data.password
                      ? "bg-gray-600"
                      : "bg-black"
                  }`}
                  type="submit"
                >
                  Salvează parola
                </button>

                {error.length > 0 && <p className="text-red-500">{error}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
