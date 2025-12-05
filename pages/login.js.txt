// pages/login.js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { user, login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (user) {
      router.replace("/profile");
    }
  }, [user, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    try {
      await login(email, password);
      router.push("/profile");
    } catch (err) {
      setErrorMsg(err.message || "Gagal login");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Login AniKuy</h1>
        <p className="auth-subtitle">
          Masuk dulu biar bisa akses My List dan Profile.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="auth-field">
            <label className="auth-label">Email</label>
            <input
              className="auth-input"
              type="email"
              placeholder="kamu@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="auth-field">
            <label className="auth-label">Password</label>
            <input
              className="auth-input"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {errorMsg && <div className="auth-error">{errorMsg}</div>}

          <button
            type="submit"
            className="auth-button"
            disabled={submitting}
          >
            {submitting ? "Memproses..." : "Login"}
          </button>
        </form>

        <div className="auth-footer">
          Belum punya akun? <Link href="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}
