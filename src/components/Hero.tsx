import { useEffect, useState } from "react";
import { HERO_STATS, TERMINAL_LINES } from "../lib/data";
import { useCountUp, useInView, usePrefersReducedMotion, Reveal } from "../hooks/motion";
import { useScramble } from "../hooks/useScramble";

function Terminal() {
  const reduced = usePrefersReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reduced) {
      setCount(TERMINAL_LINES.length);
      return;
    }
    if (count >= TERMINAL_LINES.length) {
      const t = setTimeout(() => setCount(0), 6500);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setCount((c) => c + 1), TERMINAL_LINES[count].d);
    return () => clearTimeout(t);
  }, [count, reduced]);

  return (
    <div className="relative">
      {/* corner brackets */}
      <span className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-gold/70" aria-hidden="true" />
      <span className="absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-gold/70" aria-hidden="true" />
      <span className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-gold/70" aria-hidden="true" />
      <span className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-gold/70" aria-hidden="true" />

      <div className="relative overflow-hidden rounded-md border border-line bg-ink-2/95 shadow-[0_36px_100px_-32px_rgba(0,0,0,0.9)]">
        <span
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
          aria-hidden="true"
        />
        {/* header */}
        <div className="flex items-center gap-2 border-b border-line-soft px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-gold/25" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold/45" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold/80" aria-hidden="true" />
          <span className="ml-3 font-mono text-[11px] tracking-wide text-faint">
            scrape_session.py — bash
          </span>
          <span className="ml-auto font-mono text-[10px] text-faint">80×24</span>
        </div>
        {/* body */}
        <div className="relative min-h-[420px] overflow-hidden p-5 font-mono text-[12px] leading-[1.95] md:min-h-[384px] md:text-[12.5px]">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-gold/[0.06] to-transparent animate-scan"
            aria-hidden="true"
          />
          <ol aria-live="off">
            {TERMINAL_LINES.slice(0, count).map((l, i) => (
              <li key={i} className={`animate-line-in ${l.c ?? "text-muted"}`}>
                {l.t}
              </li>
            ))}
          </ol>
          {count < TERMINAL_LINES.length && !reduced && (
            <span
              className="mt-1 inline-block h-3.5 w-2 bg-gold-bright animate-caret"
              aria-hidden="true"
            />
          )}
        </div>
        {/* status bar */}
        <div className="flex items-center justify-between border-t border-line-soft px-5 py-2 font-mono text-[10px] tracking-wider text-faint">
          <span>rows: 398 · cols: 9</span>
          <span className="text-gold">0 errors</span>
        </div>
      </div>
    </div>
  );
}

function Stat({ value, decimals, suffix, label, started }: { value: number; decimals: number; suffix: string; label: string; started: boolean }) {
  const v = useCountUp(value, started);
  return (
    <div>
      <div className="font-display text-3xl font-bold text-gold-bright md:text-4xl">
        {v.toFixed(decimals)}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-faint md:text-[11px]">
        {label}
      </div>
    </div>
  );
}

export function Hero() {
  const [startSecond, setStartSecond] = useState(false);
  const reduced = usePrefersReducedMotion();
  const line1 = useScramble("Python Web Scraping &", true, 3);
  const line2 = useScramble("Data Extraction Specialist", startSecond, 3);
  const { ref: statsRef, inView: statsIn } = useInView<HTMLDivElement>(0.3);

  useEffect(() => {
    if (reduced) return;
    const t = setTimeout(() => setStartSecond(true), 1100);
    return () => clearTimeout(t);
  }, [reduced]);

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-48 right-[-15%] h-[560px] w-[680px] bg-[radial-gradient(closest-side,rgba(210,162,41,0.09),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-28 md:pb-20 md:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-[1.06fr_0.94fr]">
          {/* left */}
          <div>
            <Reveal>
              <p className="font-mono text-xs text-faint md:text-sm">
                <span className="text-gold">root@pyextract</span>
                <span>:~$</span> whoami
                <span className="ml-1 inline-block h-3.5 w-2 translate-y-0.5 bg-gold animate-caret" aria-hidden="true" />
              </p>
            </Reveal>

            <h1 className="mt-5 font-display text-[2.35rem] font-bold leading-[1.06] tracking-tight md:text-[3.3rem] xl:text-[3.6rem]">
              <span className="block text-paper">{line1}</span>
              <span className="block text-gold">{line2}</span>
            </h1>

            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                I build resilient, automated data pipelines, handle anti-bot bypasses, and deliver
                clean, ready-to-use B2B datasets for businesses and startups.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2.5 rounded-sm bg-gold px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-all hover:-translate-y-0.5 hover:bg-gold-bright hover:shadow-[0_12px_32px_-10px_rgba(210,162,41,0.45)]"
                >
                  View My Projects
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 rounded-sm border border-line px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-paper transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold-bright"
                >
                  Contact Me
                </a>
              </div>
            </Reveal>

            <Reveal delay={440}>
              <p className="mt-8 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse-dot" aria-hidden="true" />
                Available for new contracts — scope your dataset
              </p>
            </Reveal>
          </div>

          {/* right */}
          <Reveal delay={250}>
            <Terminal />
          </Reveal>
        </div>

        {/* stats */}
        <div ref={statsRef} className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line-soft pt-9 md:mt-20 md:grid-cols-4 md:pt-10">
          {HERO_STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 110}>
              <Stat {...s} started={statsIn} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
