"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function EpisodePage() {
  useEffect(() => {
    document.body.setAttribute("data-page", "episode");
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
            <h2 id="episodeTitle" className="page-title">
              Episode
            </h2>

            <div className="player-wrapper">
              <iframe
                id="episodePlayer"
                src=""
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="player-toolbar">
              <button id="serverBtn" className="toolbar-btn" type="button">
                <span className="toolbar-icon-wrap">
                  <svg
                    className="toolbar-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M4 5h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 8h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2zm2 3v2h2v-2zM6 8v2h2V8z"
                    />
                  </svg>
                </span>
                <span className="toolbar-text">
                  <span className="toolbar-text-main">Server</span>
                  <span className="toolbar-text-sub" id="serverLabel">
                    Auto
                  </span>
                </span>
              </button>

              <button id="qualityBtn" className="toolbar-btn" type="button">
                <span className="toolbar-icon-wrap">
                  <svg
                    className="toolbar-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M12 4a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8zm3.46 9.88-1.42 1.42L12 13.41l-2.05 1.89-1.41-1.42L10.59 12 8.54 9.88l1.41-1.42L12 10.59l2.04-2.13 1.42 1.42L13.41 12z"
                    />
                  </svg>
                </span>
                <span className="toolbar-text">
                  <span className="toolbar-text-main">Kualitas</span>
                  <span className="toolbar-text-sub" id="qualityLabel">
                    Auto
                  </span>
                </span>
              </button>

              <button id="downloadBtn" className="toolbar-btn" type="button">
                <span className="toolbar-icon-wrap">
                  <svg
                    className="toolbar-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M5 20h14v-2H5v2zm7-16-5 5h3v4h4v-4h3l-5-5z"
                    />
                  </svg>
                </span>
                <span className="toolbar-text">
                  <span className="toolbar-text-main">Unduh</span>
                  <span className="toolbar-text-sub">Pilih kualitas</span>
                </span>
              </button>

              <button id="shareBtn" className="toolbar-btn" type="button">
                <span className="toolbar-icon-wrap">
                  <svg
                    className="toolbar-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M18 16a3 3 0 0 0-2.24 1.03L9.91 13.7a3.09 3.09 0 0 0 0-1.4l5.85-3.33A3 3 0 1 0 15 7a2.94 2.94 0 0 0 .07.64L9.22 11a3 3 0 1 0 0 4l5.85 3.36A3 3 0 1 0 18 16z"
                    />
                  </svg>
                </span>
                <span className="toolbar-text">
                  <span className="toolbar-text-main">Bagikan</span>
                  <span className="toolbar-text-sub">Link episode</span>
                </span>
              </button>
            </div>

            <div id="playerDropdownContainer" className="dropdown-container">
              <div id="serverMenu" className="dropdown-panel" />
              <div id="qualityMenu" className="dropdown-panel" />
              <div id="downloadMenu" className="dropdown-panel" />
            </div>

            <div className="episode-nav">
              <button
                id="prevEpisodeBtn"
                className="btn-outline"
                type="button"
              >
                &larr; Episode Sebelumnya
              </button>
              <button
                id="nextEpisodeBtn"
                className="btn-outline"
                type="button"
              >
                Episode Selanjutnya &rarr;
              </button>
            </div>
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
      <Script src="/assets/js/episode.js" />
    </>
  );
}