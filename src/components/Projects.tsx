import { PROJECTS } from "../lib/data";
import { Reveal } from "../hooks/motion";
import { SectionHeading } from "./SectionHeading";

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-1 shrink-0 text-gold" aria-hidden="true">
      <path d="M5 2.5L10 7L5 11.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-y border-line-soft bg-ink-2/30">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading index="03" kicker="case_studies" title="Featured Projects" />

        <div className="space-y-8">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.tag} delay={i * 80}>
              <article className="group relative border border-line bg-ink-2/70 p-7 transition-colors duration-300 hover:border-gold/40 md:p-10">
                <span
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-gold">
                    <span className="text-faint">./</span>
                    {p.tag}
                  </span>
                  <span className="rounded-sm border border-gold/35 bg-gold/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-gold-bright">
                    {p.status}
                  </span>
                  <span className="ml-auto hidden font-mono text-[10px] uppercase tracking-[0.2em] text-faint sm:block">
                    project_{String(i + 1).padStart(2, "0")} / 0{PROJECTS.length}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold text-paper transition-colors duration-300 group-hover:text-gold-bright md:text-[1.75rem]">
                  {p.title}
                </h3>

                <div className="mt-7 grid gap-8 md:grid-cols-[1.25fr_0.75fr]">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-faint">
                      // objective
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted md:text-[15px]">
                      {p.objective}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-faint">
                      // stack used
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-sm border border-line bg-ink/60 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-paper/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-faint">
                    // key features
                  </p>
                  <ul className="mt-3 grid gap-3 sm:grid-cols-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed text-paper/80">
                        <Chevron />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex items-start gap-4 border-l-2 border-gold bg-gold/[0.06] px-5 py-4">
                  <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.24em] text-gold">
                    deliverable
                  </span>
                  <p className="text-sm leading-relaxed text-paper/85">{p.deliverable}</p>
                </div>

                <div className="mt-8 grid grid-cols-3 border-t border-line-soft pt-6">
                  {p.metrics.map((m, mi) => (
                    <div key={m.label} className={mi > 0 ? "border-l border-line-soft pl-4 md:pl-6" : ""}>
                      <div className="font-display text-lg font-bold text-gold-bright md:text-2xl">
                        {m.value}
                      </div>
                      <div className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-faint md:text-[10.5px]">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
