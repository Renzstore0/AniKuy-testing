// pages/explore/index.js
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";

export default function ExplorePage() {
  useEffect(() => {
    document.body.dataset.page = "explore";
    return () => {
      delete document.body.dataset.page;
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>AniKuy - Explore</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="Explore katalog anime di AniKuy. Temukan anime baru, lihat jadwal rilis, dan jelajahi genre dengan tampilan yang rapi dan enak dipakai."
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AniKuy" />
        <meta property="og:title" content="Explore - AniKuy" />
        <meta
          property="og:description"
          content="Explore katalog anime di AniKuy. Temukan anime baru, lihat jadwal rilis, dan jelajahi genre dengan tampilan yang rapi dan enak dipakai."
        />
        <meta property="og:url" content="https://anikuy.my.id/explore" />
        <meta
          property="og:image"
          content="https://pomf2.lain.la/f/jut4jh8e.jpg"
        />
        <meta property="og:image:alt" content="Logo AniKuy" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Explore - AniKuy" />
        <meta
          name="twitter:description"
          content="Explore katalog anime di AniKuy. Temukan anime baru, lihat jadwal rilis, dan jelajahi genre dengan tampilan yang rapi dan enak dipakai."
        />
        <meta
          name="twitter:image"
          content="https://pomf2.lain.la/f/jut4jh8e.jpg"
        />

        <meta name="application-name" content="AniKuy" />
        <meta name="apple-mobile-web-app-title" content="AniKuy" />
      </Head>

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
            <h2 className="page-title">Explore</h2>

            <div className="explore-tabs">
              <button
                className="explore-tab active"
                data-tab="explore"
                type="button"
              >
                Eksplorasi
              </button>
              <button className="explore-tab" data-tab="schedule" type="button">
                Jadwal
              </button>
              <button className="explore-tab" data-tab="genre" type="button">
                Genre
              </button>
            </div>

            {/* panel Eksplorasi */}
            <div className="explore-panel active" data-tab="explore">
              <p className="section-subtitle">
                Eksplor anime secara bebas. Gunakan pencarian atau lihat list
                sedang tayang / selesai dari menu Home.
              </p>
            </div>

            {/* panel Jadwal */}
            <div className="explore-panel" data-tab="schedule">
              <p className="section-subtitle">Jadwal rilis anime per hari</p>
              <div id="scheduleLoading" className="loading-indicator">
                <div className="spinner"></div>
                <span>Memuat jadwal...</span>
              </div>
              <div id="scheduleContainer"></div>
            </div>

            {/* panel Genre */}
            <div className="explore-panel" data-tab="genre">
              <p className="section-subtitle">Pilih genre untuk mulai nonton</p>
              <div id="genreChipList" className="genre-chip-list"></div>
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
          <a
            className="nav-item active"
            data-tab="explore"
            href="/explore"
          >
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

      <div id="toast" className="toast"></div>

      <Script src="/assets/js/core.js" strategy="afterInteractive" />
      <Script src="/assets/js/explore.js" strategy="afterInteractive" />
    </>
  );
}
