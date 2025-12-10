"use client";

export default function AuthCard({ title, subtitle, children }) {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo-row">
          <div className="auth-logo-title">AniKuy</div>
        </div>
        <h2 className="page-title" style={{ marginBottom: 4 }}>
          {title}
        </h2>
        {subtitle && <p className="auth-subtitle">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
}