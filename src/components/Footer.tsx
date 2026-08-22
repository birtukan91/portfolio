import { CONTACT } from "../lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-9 font-mono text-[11px] text-faint md:flex-row">
        <p>
          © 2026 <span className="text-gold">{CONTACT.handle}</span> — python data extraction
          specialist
        </p>
        <p className="tracking-wide">
          <span className="text-gold-dim">print(</span>
          <span className="text-gold">"thanks for scrolling"</span>
          <span className="text-gold-dim">)</span>
        </p>
        <a href="#top" className="uppercase tracking-[0.2em] transition-colors hover:text-gold-bright">
          ↑ back_to_top
        </a>
      </div>
    </footer>
  );
}
