"use client";

import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export function Marquee({
  children,
  speed = "normal",
  className,
  pauseOnHover = true,
  reverse = false,
}: {
  children: ReactNode;
  speed?: "slow" | "normal";
  className?: string;
  pauseOnHover?: boolean;
  reverse?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex min-w-max shrink-0 items-center gap-14 pr-14",
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
        aria-hidden="false"
      >
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-max shrink-0 items-center gap-14 pr-14",
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
