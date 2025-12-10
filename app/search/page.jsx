"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function SearchPage() {
  useEffect(() => {
    document.body.setAttribute("data-page", "search");
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
                d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
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
            id="searchButton"
            aria-label="Cari Anime"
          >
            <svg className="icon-svg" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L19 20.49 20.49 19 15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              />
            </svg>
          </button>
        </header>

        <main id="mainContent">
          <div className="page-container">
            <h2 className="page-title">Pencarian</h2>

            <form id="searchForm" className="search-form">
              <input
                type="text"
                id="searchInput"
                className="search-input"
                placeholder="Cari anime (cth: one piece)"
                autoComplete="off"
              />
              <button className="btn-primary" type="submit">
                Cari
              </button>
            </form>

            <div id="searchResultInfo" className="section-subtitle" />

            <div id="searchResultGrid" className="anime-grid full-grid" />
          </div>
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
          <a className="nav-item active" data-tab="explore" href="/explore">
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
          <a className="nav-item" data-tab="profile" href="/profile">
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
      <Script src="/assets/js/search.js" />
      <Script id="search-override" strategy="afterInteractive">
        {`
        (function () {
          const allowTargets = () => {
            const input = document.getElementById("searchInput");
            return input;
          };

          window.addEventListener(
            "contextmenu",
            function (e) {
              const input = allowTargets();
              if (input && (e.target === input || input.contains(e.target))) {
                e.stopImmediatePropagation();
              }
            },
            true
          );

          window.addEventListener(
            "selectstart",
            function (e) {
              const input = allowTargets();
              if (input && (e.target === input || input.contains(e.target))) {
                e.stopImmediatePropagation();
              }
            },
            true
          );
        })();
        `}
      </Script>
    </>
  );
}