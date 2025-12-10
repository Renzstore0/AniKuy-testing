"use client";

import { useRouter } from "next/navigation";

export default function AppHeader({
  showBack = false,
  backHref,
  showSearch = true,
  showSettings = false
}) {
  const router = useRouter();

  const handleBack = () => {
    if (backHref) router.push(backHref);
    else router.back();
  };

  return (
    <header className="app-header">
      {showBack ? (
        <button
          className="icon-button back-button"
          aria-label="Kembali"
          onClick={handleBack}
        >
          <svg className="icon-svg" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
            />
          </svg>
        </button>
      ) : (
        <div style={{ width: 32 }} />
      )}

      <div
        className="logo-wrap"
        style={{ cursor: "pointer" }}
        onClick={() => router.push("/")}
      >
        <img
          src="https://pomf2.lain.la/f/22yuvdrk.png"
          alt="AniKuy Logo"
          className="logo-img"
        />
      </div>

      {showSettings ? (
        <button
          className="icon-button"
          aria-label="Pengaturan"
          onClick={() => router.push("/settings")}
        >
          <svg className="icon-svg" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.61-.22l-2.39.96a7.05 7.05 0 0 0-1.63-.94l-.36-2.54A.5.5 0 0 0 14 2h-4a.5.5 0 0 0-.49.42l-.36 2.54c-.6.24-1.15.56-1.66.94l-2.39-.96a.5.5 0 0 0-.61.22L2.57 10c-.13.22-.07.5.12.64l2.03 1.58c-.04.31-.06.64-.06.98 0 .3.02.6.06.9l-2.03 1.58a.5.5 0 0 0-.12.64l1.92 3.32c.14.23.41.32.65.22l2.39-.96c.5.38 1.06.7 1.66.94l.36 2.54a.5.5 0 0 0 .49.42h4a.5.5 0 0 0 .49-.42l.36-2.54c.6-.24 1.16-.56 1.67-.94l2.39.96c.24.1.51.01.65-.22l1.92-3.32a.5.5 0 0 0-.12-.64zm-7.14 2.06A3 3 0 1 1 15 12a3 3 0 0 1-3 3z"
            />
          </svg>
        </button>
      ) : showSearch ? (
        <button
          className="icon-button"
          aria-label="Cari Anime"
          onClick={() => router.push("/search")}
        >
          <svg className="icon-svg" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L19 20.49 20.49 19 15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            />
          </svg>
        </button>
      ) : (
        <div style={{ width: 32 }} />
      )}
    </header>
  );
}