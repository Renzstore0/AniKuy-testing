"use client";

import { useRouter } from "next/navigation";

export default function AnimeCard({
  item,
  badgeTop,
  badgeBottom,
  rating,
  meta
}) {
  const router = useRouter();

  const goDetail = () => {
    if (!item?.slug) return;
    router.push(`/anime/detail?slug=${encodeURIComponent(item.slug)}`);
  };

  return (
    <div className="anime-card" onClick={goDetail}>
      <div className="anime-thumb">
        <img src={item.poster} alt={item.title} />
        {badgeTop && <div className="badge-top-left">{badgeTop}</div>}
        {badgeBottom && (
          <div className="badge-bottom-left">{badgeBottom}</div>
        )}

        {rating && (
          <div className="badge-rating">
            <span className="star">★</span>
            <span>{rating}</span>
          </div>
        )}
      </div>

      <div className="anime-title">{item.title}</div>
      {meta && <div className="anime-meta">{meta}</div>}
    </div>
  );
}