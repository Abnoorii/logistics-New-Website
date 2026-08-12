"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  /** MP4 URL. Defaults to a CC0 container-port clip from Pexels. */
  src?: string;
  /** WebM URL for smaller payloads where supported. */
  srcWebm?: string;
  /** Poster image shown before play + as fallback if the video fails. */
  poster?: string;
  className?: string;
  /** Opacity of the video against the page background. */
  opacityClass?: string;
};

/**
 * Silent, looping, muted, autoplay video backdrop. Respects
 * `prefers-reduced-motion` and skips the video for slow connections
 * or Save-Data mode. Renders nothing (letting the parent gradient
 * show through) on error.
 */
export function VideoBackdrop({
  src = "https://videos.pexels.com/video-files/3141207/3141207-uhd_2560_1440_25fps.mp4",
  srcWebm,
  poster,
  className,
  opacityClass = "opacity-30",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const conn = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } })
      .connection;
    if (conn?.saveData) return;
    if (conn?.effectiveType && /2g|slow-2g/.test(conn.effectiveType)) return;
    setEnabled(true);
  }, []);

  if (!enabled) return null;

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden
      className={cn(
        "absolute inset-0 h-full w-full object-cover [filter:url(#subtle-brand)] saturate-[.85]",
        opacityClass,
        className
      )}
      onError={(e) => {
        // Fail silently — let the parent's gradient background show.
        (e.currentTarget as HTMLVideoElement).style.display = "none";
      }}
    >
      {srcWebm && <source src={srcWebm} type="video/webm" />}
      <source src={src} type="video/mp4" />
    </video>
  );
}
