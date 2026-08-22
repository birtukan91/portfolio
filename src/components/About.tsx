import { ABOUT_CHECKLIST, PROFILE_YAML } from "../lib/data";
import { Reveal } from "../hooks/motion";
import { SectionHeading } from "./SectionHeading";
// To use your own photo: replace src/assets/profile.jpg with your image
// (keep the same filename) and rebuild.
import profilePhoto from "../assets/profile.jpg";

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-0.5 shrink-0 text-gold" aria-hidden="true">
      <rect x="0.75" y="0.75" width="16.5" height="16.5" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.2" />
      <path d="M5 9.4l2.6 2.6L13 6.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhotoCard() {
  return (
    <div className="relative overflow-hidden rounded-md border border-line bg-ink-2 shadow-[0_28px_70px_-30px_rgba(0,0,0,0.85)]">
      <span
        className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
        aria-hidden="true"
      />
      {/* header bar */}
      <div className="flex items-center gap-2 border-b border-line-soft px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-gold/25" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-gold/45" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-gold/80" aria-hidden="true" />
        <span className="ml-3 font-mono text-[11px] text-faint">avatar.jpg — 4000×5000</span>
        <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.16em] text-gold">verified</span>
      </div>

      {/* photo */}
      <div className="relative">
        <img
          src={profilePhoto}
          alt="Portrait of the developer"
          className="block aspect-[4/4.4] w-full object-cover object-top saturate-[0.92] contrast-[1.02]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-2 via-transparent to-transparent"
          aria-hidden="true"
        />
        {/* corner brackets */}
        <span className="absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-gold/80" aria-hidden="true" />
        <span className="absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-gold/80" aria-hidden="true" />
        <span className="absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-gold/80" aria-hidden="true" />
        <span className="absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-gold/80" aria-hidden="true" />
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-paper/80">
          the human behind the spiders
        </p>
      </div>

      {/* yaml */}
      <div className="p-5 md:p-6">
        <dl className="space-y-2.5 font-mono text-[12.5px] leading-relaxed">
          {PROFILE_YAML.map(([k, v]) => (
            <div key={k} className="flex gap-3">
              <dt className="w-24 shrink-0 text-gold">{k}:</dt>
              <dd className="text-paper/80">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-5 inline-flex items-center gap-2.5 rounded-sm border border-gold/40 bg-gold/10 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-gold-bright">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-dot" aria-hidden="true" />
          status: open to new projects
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading index="01" kicker="whoami" title="About Me" />

      <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
        <div>
          <Reveal>
            <p className="text-lg leading-[1.85] text-paper/90 md:text-[1.32rem]">
              I am a Python developer specializing in automated web scraping, API reverse
              engineering, and data processing. I help businesses{" "}
              <span className="text-gold-bright">eliminate manual data entry</span>, gather{" "}
              <span className="text-gold-bright">targeted market intelligence</span>, and fuel their
              outbound sales campaigns with <span className="text-gold-bright">verified lead lists</span>.
              Whether dealing with dynamic JavaScript sites, pagination, or hidden backend
              endpoints, I build custom solutions tailored to your exact data requirements.
            </p>
          </Reveal>

          <div className="mt-10">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-faint">
                // what i handle
              </p>
            </Reveal>
            <ul className="mt-5 grid gap-3.5 sm:grid-cols-2">
              {ABOUT_CHECKLIST.map((item, i) => (
                <Reveal key={item} delay={i * 90}>
                  <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <CheckIcon />
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <Reveal delay={180}>
          <PhotoCard />
        </Reveal>
      </div>
    </section>
  );
}
