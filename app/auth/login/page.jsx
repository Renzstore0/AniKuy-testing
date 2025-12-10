"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import AuthCard from "@/components/AuthCard";
import { useToast } from "@/components/ToastProvider";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { showToast } = useToast();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email: form.email,
      password: form.password,
      callbackUrl
    });

    setLoading(false);

    if (res?.error) {
      showToast(res.error);
      return;
    }

    router.push(callbackUrl);
  };

  const googleLogin = () => {
    signIn("google", { callbackUrl });
  };

  return (
    <AuthCard
      title="Selamat Datang Kembali!"
      subtitle="Silakan masuk untuk melanjutkan."
    >
      <form onSubmit={onSubmit}>
        <label className="auth-field-label" htmlFor="email">
          Username atau Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="auth-input"
          placeholder="Masukkan username atau email"
          value={form.email}
          onChange={onChange}
        />

        <label className="auth-field-label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="auth-input"
          placeholder="Masukkan password Anda"
          value={form.password}
          onChange={onChange}
        />

        <button className="auth-primary-btn" type="submit" disabled={loading}>
          {loading ? "Login..." : "Login"}
        </button>
      </form>

      <div className="auth-or">
        <span>ATAU</span>
      </div>

      <button className="auth-google-btn" type="button" onClick={googleLogin}>
        <span>G</span>
        <span>Login dengan Google</span>
      </button>

      <div className="auth-bottom-text">
        Belum punya akun?{" "}
        <a href="/auth/register" onClick={(e) => (e.preventDefault(), router.push("/auth/register"))}>
          Daftar di sini
        </a>
      </div>
    </AuthCard>
  );
}