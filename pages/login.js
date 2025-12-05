// pages/login.js
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { user, login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // kalau sudah login, langsung alihkan ke /my-list
  useEffect(() => {
    if (user) {
      router.replace("/my-list");
    }
  }, [user, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    setError("");
    setSubmitting(true);

    try {
      await login(email.trim(), password);
      router.push("/my-list");
    } catch (err) {
      console.error(err);
      let msg = "Login gagal. Cek email dan password kamu.";
      if (err?.code === "auth/user-not-found") {
        msg = "Akun tidak ditemukan.";
      } else if (err?.code === "auth/wrong-password") {
        msg = "Password salah.";
      } else if (err?.code === "auth/too-many-requests") {
        msg = "Terlalu banyak percobaan. Coba lagi nanti.";
      }
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Login - AniKuy</title>
      </Head>
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-logo">
            <img
              src="https://pomf2.lain.la/f/22yuvdrk.png"
              alt="AniKuy Logo"
            />
          </div>
          <h1 className="auth-title">Masuk ke AniKuy</h1>
          <p className="auth-subtitle">
            Simpan dan pantau anime favoritmu di My List.
          </p>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="auth-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="auth-input"
                placeholder="contoh@mail.com"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="auth-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="auth-input"
                placeholder="********"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="auth-button"
              disabled={submitting}
            >
              {submitting ? "Memproses..." : "Masuk"}
            </button>
          </form>

          <p className="auth-footer">
            Belum punya akun?{" "}
            <Link href="/register">Daftar dulu</Link>
          </p>
        </div>
      </div>
    </>
  );
}
