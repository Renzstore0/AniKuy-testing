"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function SettingPage() {
  useEffect(() => {
    document.body.setAttribute("data-page", "settings");
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
            data-href="/profile"
          >
            <svg className="icon-svg" viewBox="0 0 24 24" aria-hidden="true">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="15 18 9 12 15 6"
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

          <div
            className="icon-button"
            aria-hidden="true"
            style={{ visibility: "hidden" }}
          />
        </header>

        <main id="mainContent">
          <div className="page-container">
            <h2 className="page-title">Pengaturan</h2>

            <div className="settings-group">
              <h3 className="settings-group-title">Tema</h3>

              <button
                type="button"
                className="settings-pill"
                id="themeToggle"
                aria-expanded="false"
                aria-controls="themeSheet"
              >
                <span className="settings-pill-left">Tema</span>
                <span
                  className="settings-pill-right"
                  id="currentThemeLabel"
                >
                  Biru &amp; Hitam (Default)
                </span>
              </button>
            </div>
          </div>
        </main>

        <div id="themeSheet" className="theme-sheet" aria-hidden="true">
          <div
            className="theme-sheet-overlay"
            id="themeSheetOverlay"
          />

          <div
            className="theme-sheet-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="themeSheetTitle"
          >
            <div className="theme-sheet-handle" />

            <h3 className="section-title small-title" id="themeSheetTitle">
              Pilih Tema
            </h3>

            <div className="theme-options">
              <label className="theme-option">
                <input
                  type="radio"
                  name="theme-option"
                  value="dark"
                  id="themeDark"
                />
                <div>
                  <div className="theme-option-main">
                    Biru &amp; Hitam (Default)
                  </div>
                  <div className="theme-option-sub">
                    Tampilan gelap dengan aksen biru.
                  </div>
                </div>
              </label>

              <label className="theme-option">
                <input
                  type="radio"
                  name="theme-option"
                  value="light"
                  id="themeLight"
                />
                <div>
                  <div className="theme-option-main">Putih &amp; Hitam</div>
                  <div className="theme-option-sub">
                    Tampilan terang dengan latar putih dan hitam.
                  </div>
                </div>
              </label>
            </div>

            <button
              type="button"
              className="theme-sheet-close"
              id="themeSheetClose"
            >
              Tutup
            </button>
          </div>
        </div>

        <div id="toast" className="toast" />

        <Script src="/assets/js/core.js" />
      </div>
    </>
  );
}