"use client";

import { useRouter } from "next/navigation";

export default function BottomNav({ active }) {
  const router = useRouter();

  const go = (path) => () => router.push(path);

  return (
    <nav className="bottom-nav">
      <button
        className={`nav-item ${active === "home" ? "active" : ""}`}
        onClick={go("/")}
      >
        <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
          />
        </svg>
        <span className="nav-label">Home</span>
      </button>

      <button
        className={`nav-item ${active === "explore" ? "active" : ""}`}
        onClick={go("/explore")}
      >
        <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm3.94 6.06-2.12 5.3a1 1 0 0 1-.56.56l-5.3 2.12a.25.25 0 0 1-.32-.32z"
          />
        </svg>
        <span className="nav-label">Explore</span>
      </button>

      <button
        className={`nav-item ${active === "my-list" ? "active" : ""}`}
        onClick={go("/my-list")}
      >
        <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 12h3v8z"
          />
        </svg>
        <span className="nav-label">My List</span>
      </button>

      <button
        className={`nav-item ${active === "profile" ? "active" : ""}`}
        onClick={go("/profile")}
      >
        <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 12a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5zm0 2c-4.33 0-8 2.17-8 4.5V21h16v-2.5C20 16.17 16.33 14 12 14z"
          />
        </svg>
        <span className="nav-label">Profile</span>
      </button>
    </nav>
  );
}