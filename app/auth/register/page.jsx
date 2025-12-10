"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import AuthCard from "@/components/AuthCard";
import { useToast } from "@/components/ToastProvider";

export default function RegisterPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        showToast(data.message || "Registrasi gagal");
        return;
      }

      showToast("Registrasi berhasil, silakan login");
      router.push("/auth/login");
    } catch {
      showToast("Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <AuthCard
      title="Buat Akun Baru"
      subtitle="Isi data di bawah untuk mendaftar."
    >
      <form onSubmit={onSubmit}>
        <label className="auth-field-label" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          name="username"
          className="auth-input"
          placeholder="Masukkan username Anda"
          value={form.username}
          onChange={onChange}
        />

        <label className="auth-field-label" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="auth-input"
          placeholder="Masukkan email Anda"
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
          {loading ? "Mendaftar..." : "Daftar"}
        </button>
      </form>

      <div className="auth-or">
        <span>ATAU</span>
      </div>

      <button className="auth-google-btn" type="button" onClick={googleLogin}>
        <span>G</span>
        <span>Daftar dengan Google</span>
      </button>

      <div className="auth-bottom-text">
        Sudah punya akun?{" "}
        <a href="/auth/login" onClick={(e) => (e.preventDefault(), router.push("/auth/login"))}>
          Login di sini
        </a>
      </div>
    </AuthCard>
  );
}