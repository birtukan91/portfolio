import { STACK_GROUPS } from "../lib/data";
import { Reveal } from "../hooks/motion";
import { SectionHeading } from "./SectionHeading";

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading index="04" kicker="toolbox" title="Technical Stack" />

      <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        {/* config-file panel */}
        <Reveal className="lg:sticky lg:top-28">
          <div className="relative overflow-hidden rounded-md border border-line bg-ink-2 shadow-[0_28px_80px_-30px_rgba(0,0,0,0.85)]">
            <span
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
              aria-hidden="true"
            />
            <div className="flex items-center gap-2 border-b border-line-soft px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-gold/25" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold/45" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold/80" aria-hidden="true" />
              <span className="ml-3 font-mono text-[11px] text-faint">stack.yaml — config</span>
            </div>
            <div className="p-6 font-mono text-[13px] leading-[2.05]">
              <p className="text-faint"># last audited 2026-02</p>
              {STACK_GROUPS.map((g) => (
                <div key={g.key} className="mt-3 first:mt-1">
                  <p className="text-gold">
                    {g.key}:
                  </p>
                  {g.items.map((item) => (
                    <p key={item} className="pl-5 text-paper/80">
                      <span className="text-gold-dim">-</span> {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* grouped chips */}
        <div className="space-y-9">
          {STACK_GROUPS.map((g, gi) => (
            <Reveal key={g.key} delay={gi * 90}>
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.26em] text-faint">
                  <span className="text-gold">//</span> {g.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="cursor-default rounded-sm border border-line bg-ink-2/40 px-3.5 py-2 text-sm text-paper/80 transition-colors duration-200 hover:border-gold/50 hover:text-gold-bright"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={380}>
            <p className="border-l-2 border-gold/60 bg-gold/[0.05] px-4 py-3 font-mono text-xs leading-relaxed text-muted">
              Every project ships with a short handover doc: endpoints hit, selectors used,
              legal/ToS notes, and re-run instructions.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
