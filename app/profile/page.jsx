"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function ProfilePage() {
  useEffect(() => {
    document.body.setAttribute("data-page", "profile");
    return () => document.body.removeAttribute("data-page");
  }, []);

  return (
    <>
      <div className="app-root">
        <header className="app-header">
          <button
            className="icon-button back-button"
            id="backButton"
            aria-label="Kembali"
          >
            <svg className="icon-svg" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"
              />
            </svg>
          </button>

          <div className="logo-wrap">
            <img
              src="https://pomf2.lain.la/f/22yuvdrk.png"
              alt="AniKuy Logo"
              className="logo-img"
            />
          </div>

          <button
            className="icon-button"
            id="settingsButton"
            aria-label="Pengaturan"
          >
            <svg className="icon-svg" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.61-.22l-2.39.96a7.05 7.05 0 0 0-1.63-.94l-.36-2.54A.5.5 0 0 0 14 2h-4a.5.5 0 0 0-.49.42l-.36 2.54c-.6.24-1.15.56-1.66.94l-2.39-.96a.5.5 0 0 0-.61.22L2.57 10c-.13.22-.07.5.12.64l2.03 1.58c-.04.31-.06.64-.06.98 0 .3.02.6.06.9l-2.03 1.58a.5.5 0 0 0-.12.64l1.92 3.32c.14.23.41.32.65.22l2.39-.96c.5.38 1.06.7 1.66.94l.36 2.54a.5.5 0 0 0 .49.42h4a.5.5 0 0 0 .49-.42l.36-2.54c.6-.24 1.16-.56 1.67-.94l2.39.96c.24.1.51.01.65-.22l1.92-3.32a.5.5 0 0 0-.12-.64zm-7.14 2.06A3 3 0 1 1 15 12a3 3 0 0 1-3 3z"
              />
            </svg>
          </button>
        </header>

        <main id="mainContent">
          <div className="page-container">
            <h2 className="page-title">Profil</h2>

            <p className="profile-coming">Segera Hadir</p>
          </div>

          <p className="profile-version">Versi 1.4.4.x</p>
        </main>

        <nav className="bottom-nav">
          <a className="nav-item" data-tab="home" href="/">
            <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
              />
            </svg>
            <span className="nav-label">Home</span>
          </a>
          <a className="nav-item" data-tab="explore" href="/explore">
            <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm3.94 6.06-2.12 5.3a1 1 0 0 1-.56.56l-5.3 2.12a.25.25 0 0 1-.32-.32z"
              />
            </svg>
            <span className="nav-label">Explore</span>
          </a>
          <a className="nav-item" data-tab="my-list" href="/my-list">
            <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 12h3v8z"
              />
            </svg>
            <span className="nav-label">My List</span>
          </a>
          <a className="nav-item active" data-tab="profile" href="/profile">
            <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 12a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5zm0 2c-4.33 0-8 2.17-8 4.5V21h16v-2.5C20 16.17 16.33 14 12 14z"
              />
            </svg>
            <span className="nav-label">Profile</span>
          </a>
        </nav>
      </div>

      <div id="toast" className="toast" />

      <Script src="/assets/js/core.js" />
    </>
  );
}