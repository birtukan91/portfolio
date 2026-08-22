import { SERVICES, type ServiceIcon } from "../lib/data";
import { Reveal } from "../hooks/motion";
import { SectionHeading } from "./SectionHeading";

function ServiceGlyph({ icon }: { icon: ServiceIcon }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (icon) {
    case "spider":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="2.6" />
          <path d="M12 9.4V4.5M9.6 10.4L5.5 6.3M14.4 10.4l4.1-4.1M9.3 12H4.5M14.7 12h4.8M9.6 13.6l-4.1 4.1M14.4 13.6l4.1 4.1M12 14.6v4.9" />
        </svg>
      );
    case "radar":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
          <path d="M6.5 6.5a7.8 7.8 0 0 0 0 11M17.5 6.5a7.8 7.8 0 0 1 0 11" />
          <path d="M3.6 3.6a12 12 0 0 0 0 16.8M20.4 3.6a12 12 0 0 1 0 16.8" strokeOpacity="0.45" />
        </svg>
      );
    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="3" strokeOpacity="0.5" />
          <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
          <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3" />
        </svg>
      );
    case "funnel":
      return (
        <svg {...common}>
          <path d="M4 5h16l-6.2 7.2v5.6L10.2 20v-7.8L4 5z" />
          <path d="M8.5 8.2h7" strokeOpacity="0.5" />
        </svg>
      );
  }
}

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading index="02" kicker="core_services" title="Core Services" />

      <div className="grid gap-5 md:grid-cols-2">
        {SERVICES.map((s, i) => (
          <Reveal key={s.n} delay={(i % 2) * 120} className="h-full">
            <article className="group relative h-full border border-line bg-ink-2/50 p-7 transition-colors duration-300 hover:border-gold/45 hover:bg-ink-2 md:p-8">
              <span
                className="absolute right-0 top-0 h-2.5 w-2.5 origin-top-right scale-0 bg-gold transition-transform duration-300 group-hover:scale-100"
                aria-hidden="true"
              />
              <div className="flex items-start justify-between">
                <span className="font-display text-2xl font-bold text-faint transition-colors duration-300 group-hover:text-gold">
                  {s.n}
                </span>
                <span className="rounded-sm border border-line p-2.5 text-gold transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-gold/50">
                  <ServiceGlyph icon={s.icon} />
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-paper transition-colors duration-300 group-hover:text-gold-bright">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-line px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-paper/65"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
