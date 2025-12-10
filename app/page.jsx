"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/components/AppShell";
import AnimeCard from "@/components/AnimeCard";
import { apiGet } from "@/lib/api";
import { useToast } from "@/components/ToastProvider";

function getTodayName() {
  const days = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu"
  ];
  return days[new Date().getDay()];
}

function formatEpisodeLabel(text) {
  if (!text) return "";
  let t = String(text).trim();
  let m = t.match(/^Total\s+(\d+)\s*(Episode|Eps?)?/i);
  if (m) return `Eps ${m[1]}`;
  m = t.match(/^Episode\s+(\d+)/i);
  if (m) return `Eps ${m[1]}`;
  m = t.match(/^(\d+)\s*(Episode|Eps?)?$/i);
  if (m) return `Eps ${m[1]}`;
  return t.replace(/Episode/gi, "Eps");
}

export default function HomePage() {
  const [ongoing, setOngoing] = useState([]);
  const [complete, setComplete] = useState([]);
  const [todayList, setTodayList] = useState([]);
  const [todayIndex, setTodayIndex] = useState(0);
  const router = useRouter();
  const { showToast } = useToast();

  useEffect(() => {
    async function loadHome() {
      try {
        const json = await apiGet("/anime/home");
        if (json.status !== "success") {
          showToast("Gagal memuat data home");
          return;
        }

        setOngoing(json.data.ongoing_anime || []);
        setComplete(json.data.complete_anime || []);
      } catch {
        showToast("Gagal memuat data home");
      }
    }

    async function loadToday() {
      try {
        const json = await apiGet("/anime/schedule");
        if (json.status !== "success" || !Array.isArray(json.data)) return;
        const todayName = getTodayName();
        const today = json.data.find((d) => d.day === todayName);
        if (!today || !Array.isArray(today.anime_list)) return;

        const list = today.anime_list.map((a) => ({
          title: a.anime_name,
          poster: a.poster,
          slug: a.slug
        }));

        setTodayList(list);
        setTodayIndex(0);
      } catch {
        // boleh diam, section ini opsional
      }
    }

    loadHome();
    loadToday();
  }, [showToast]);

  useEffect(() => {
    if (!todayList.length) return;
    const timer = setInterval(() => {
      setTodayIndex((idx) => (idx + 1) % todayList.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [todayList]);

  const currentToday =
    todayList.length > 0 ? todayList[todayIndex % todayList.length] : null;
  const prevToday =
    todayList.length > 0
      ? todayList[(todayIndex - 1 + todayList.length) % todayList.length]
      : null;
  const nextToday =
    todayList.length > 0
      ? todayList[(todayIndex + 1) % todayList.length]
      : null;

  const goTodayDetail = () => {
    if (!currentToday?.slug) return;
    router.push(`/anime/detail?slug=${encodeURIComponent(currentToday.slug)}`);
  };

  return (
    <AppShell
      page="home"
      headerProps={{ showBack: false, showSearch: true, showSettings: false }}
    >
      {/* Rilis Hari Ini */}
      {currentToday && (
        <section
          id="todaySection"
          className="today-hero-section"
          style={{ marginBottom: 24 }}
        >
          <div className="section-header today-section-header">
            <div>
              <h2
                className="section-title today-section-title"
                id="todayHeaderTitle"
              >
                Anime Rilis Hari Ini - {getTodayName()}
              </h2>
            </div>
          </div>

          <div className="today-hero-card">
            <button
              className="today-hero-nav prev"
              aria-label="Sebelumnya"
              onClick={() =>
                setTodayIndex(
                  (idx) => (idx - 1 + todayList.length) % todayList.length
                )
              }
            >
              &#10094;
            </button>

            <div className="today-hero-poster-row">
              <div className="today-hero-poster side">
                {prevToday && (
                  <img
                    src={prevToday.poster}
                    alt={prevToday.title}
                    onClick={() =>
                      setTodayIndex(
                        (idx) =>
                          (idx - 1 + todayList.length) % todayList.length
                      )
                    }
                  />
                )}
              </div>
              <div className="today-hero-poster main">
                <img
                  src={currentToday.poster}
                  alt={currentToday.title}
                  onClick={goTodayDetail}
                />
              </div>
              <div className="today-hero-poster side">
                {nextToday && (
                  <img
                    src={nextToday.poster}
                    alt={nextToday.title}
                    onClick={() =>
                      setTodayIndex((idx) => (idx + 1) % todayList.length)
                    }
                  />
                )}
              </div>
            </div>

            <button
              className="today-hero-nav next"
              aria-label="Selanjutnya"
              onClick={() =>
                setTodayIndex((idx) => (idx + 1) % todayList.length)
              }
            >
              &#10095;
            </button>

            <div className="today-hero-info">
              <h3 className="today-hero-title" id="todayTitle">
                {currentToday.title}
              </h3>
              <button
                className="today-hero-btn"
                id="todayWatchBtn"
                type="button"
                onClick={goTodayDetail}
              >
                Tonton Sekarang
              </button>
            </div>

            <div className="today-hero-dots" id="todayDots">
              {todayList.map((_, i) => (
                <span
                  key={i}
                  className={i === todayIndex ? "active" : ""}
                  onClick={() => setTodayIndex(i)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sedang Tayang */}
      <section>
        <div className="section-header">
          <div>
            <h2 className="section-title">Sedang Tayang</h2>
          </div>
          <button
            className="section-action"
            type="button"
            onClick={() => router.push("/anime/ongoing")}
          >
            Semua
          </button>
        </div>

        <div id="ongoingGridHome" className="anime-grid">
          {ongoing.slice(0, 9).map((a) => (
            <AnimeCard
              key={a.slug}
              item={a}
              badgeTop="Baru"
              badgeBottom={formatEpisodeLabel(a.current_episode || "")}
              meta={a.release_day || ""}
            />
          ))}
        </div>
      </section>

      {/* Selesai Ditayangkan */}
      <section>
        <div className="section-header section-header-spaced">
          <div>
            <h2 className="section-title">Selesai Ditayangkan</h2>
          </div>
          <button
            className="section-action"
            type="button"
            onClick={() => router.push("/anime/complete")}
          >
            Semua
          </button>
        </div>

        <div id="completeRowHome" className="anime-row">
          {complete.slice(0, 15).map((a) => (
            <AnimeCard
              key={a.slug}
              item={a}
              rating={a.rating || "N/A"}
              meta={a.last_release_date || ""}
            />
          ))}
        </div>
      </section>
    </AppShell>
  );
}