"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { integrations, messages } from "../../../../integrations.config";
import z from "zod";

const forgetPasswordSchema = z.object({
  email: z.string().email(),
});

const ForgetPassword = () => {
  const [data, setData] = useState({
    email: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!integrations?.isAuthEnabled) {
      toast.error(messages?.auth);
      return;
    }

    const result = await forgetPasswordSchema.safeParseAsync(data);

    if (!result.success) {
      const firstError = result.error.issues[0];
      toast.error(firstError.message);
      return;
    }

    try {
      const res = await axios.post("/api/forget-password/reset", data);

      if (res.status === 404) {
        toast.error("Utilizatorul nu a fost găsit.");
        return;
      }

      if (res.status === 200) {
        toast.success(res.data);
        setData({ email: "" });
      }

      setData({ email: "" });
    } catch (error: any) {
      console.log(error);
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
                Ai uitat parola?
              </h1>

              <p className="text-body-color text-center md:px-20">
                Introdu adresa de email asociată contului și îți trimitem un link pentru resetare.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 pb-7 lg:justify-between lg:pb-12">
                <input
                  type="email"
                  placeholder="Introdu adresa ta de email"
                  name="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="placeholder-dark-text text-dark focus:border-primary w-full border-b bg-transparent py-5 text-base font-medium outline-hidden"
                />

                <button
                  aria-label="reset password"
                  className="bg-primary inline-flex items-center justify-center rounded-sm px-14 py-[14px] text-sm font-semibold text-white"
                  type="submit"
                >
                  Trimite link-ul de resetare
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
