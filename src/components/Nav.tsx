import { useEffect, useState } from "react";
import { NAV_LINKS, CONTACT } from "../lib/data";

export function Nav() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? h.scrollTop / max : 0);
      setScrolled(h.scrollTop > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* scroll progress */}
      <div
        className="h-[2px] origin-left bg-gradient-to-r from-gold-dim via-gold to-gold-bright"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled ? "border-line bg-ink/90 backdrop-blur-md" : "border-transparent bg-ink/40 backdrop-blur-sm"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="group flex items-baseline font-mono text-sm" aria-label="pyextract — home">
            <span className="text-faint">~/</span>
            <span className="text-paper transition-colors group-hover:text-gold-bright">{CONTACT.handle}</span>
            <span className="ml-0.5 inline-block h-3.5 w-2 translate-y-0.5 bg-gold animate-caret" aria-hidden="true" />
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted transition-colors hover:text-gold-bright"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={`mailto:${CONTACT.email}`}
            className="hidden rounded-sm border border-gold/50 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-gold-bright transition-all hover:border-gold hover:bg-gold/10 lg:inline-block"
          >
            email me
          </a>
          <a
            href="#contact"
            className="rounded-sm bg-gold px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-gold-bright md:hidden"
          >
            contact
          </a>
        </nav>
      </div>
    </header>
  );
}
