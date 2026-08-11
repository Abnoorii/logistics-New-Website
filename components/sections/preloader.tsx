"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SESSION_KEY = "logisticsaf.seenIntro";

export function Preloader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  // Decide once, after mount, whether to run at all.
  useEffect(() => {
    if (pathname !== "/") return;
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      /* ignore (private mode) */
    }
    if (seen) return;
    setVisible(true);
  }, [pathname]);

  // Run progress animation once when visible.
  useEffect(() => {
    if (!visible) return;
    let raf = 0;
    let start = 0;
    const dur = 900;

    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / dur);
      setProgress(Math.floor(p * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        try {
          sessionStorage.setItem(SESSION_KEY, "1");
        } catch {
          /* ignore */
        }
        setTimeout(() => setVisible(false), 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          <div className="noise" />
          <div className="relative">
            <WorldMap progress={progress} />
          </div>
          <div className="mt-10 flex w-64 items-center gap-4 md:w-96">
            <span className="font-mono text-xs tracking-widest text-steel-400">
              LOADING
            </span>
            <div className="h-px flex-1 bg-white/10">
              <motion.div
                className="h-full bg-amber-400"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>
            <span className="font-mono text-xs tabular-nums text-steel-200">
              {String(progress).padStart(3, "0")}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Stylized dotted world map. Each dot pulses in sequence. */
function WorldMap({ progress }: { progress: number }) {
  const grid = [
    "                        ",
    "     xxx   xxx  xxxx    ",
    "   xxxxxx xxxxx xxxxx   ",
    "   xxxxxxxxxxxxxxxxxxx  ",
    "    xxxxxx xxxxx xxxxxx ",
    "     xxxx    xx  xxxxx  ",
    "      xxx    xxx  xxxx  ",
    "       x    xxxx   xxx  ",
    "            xxxxx  xx   ",
    "             xxxx       ",
    "              xx    xx  ",
    "                        ",
  ];
  const rows = grid.length;
  const cols = grid[0].length;
  const cell = 12;
  const w = cols * cell;
  const h = rows * cell;
  const total = grid.join("").replace(/ /g, "").length;
  let seen = 0;

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className="drop-shadow-[0_0_40px_rgba(249,171,39,0.25)]"
    >
      {grid.map((row, y) =>
        row.split("").map((c, x) => {
          if (c === " ") return null;
          const idx = seen++;
          const activate = idx / total <= progress / 100;
          return (
            <motion.circle
              key={`${x}-${y}`}
              cx={x * cell + cell / 2}
              cy={y * cell + cell / 2}
              r={2}
              fill={activate ? "#f9ab27" : "#243049"}
              animate={activate ? { r: [2, 3, 2] } : {}}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (idx % 12) * 0.05,
              }}
            />
          );
        })
      )}
    </svg>
  );
}
