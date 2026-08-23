import { useState, type FormEvent } from "react";
import { CONTACT } from "../lib/data";
import { Reveal } from "../hooks/motion";
import { SectionHeading } from "./SectionHeading";

function GitHubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.67.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="4.5" width="16" height="11" rx="1" />
      <path d="M2.5 5.5l7.5 5.5 7.5-5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative border-t border-line-soft bg-ink-2/30">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[720px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(210,162,41,0.07),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          index="05"
          kicker="contact"
          title="Have a Data Extraction or Web Scraping Project in Mind?"
        />

        <div className="grid gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <Reveal>
              <p className="max-w-lg text-base leading-relaxed text-muted md:text-lg">
                Let&rsquo;s discuss your project requirements and build a custom automation
                solution for your business.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-9">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-faint">
                  // direct email
                </p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group mt-3 inline-flex items-center gap-3 font-mono text-sm text-paper transition-colors hover:text-gold-bright md:text-base"
                >
                  <span className="text-gold">
                    <MailIcon />
                  </span>
                  <span className="underline decoration-gold/40 underline-offset-4 transition-colors group-hover:decoration-gold">
                    {CONTACT.email}
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-faint">
                  // socials
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href={CONTACT.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-sm border border-line px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/80 transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold-bright"
                  >
                    <GitHubIcon />
                    GitHub
                  </a>
                  <a
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-sm border border-line px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/80 transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold-bright"
                  >
                    <LinkedInIcon />
                    LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-9 font-mono text-[11px] text-faint">
                <span className="text-gold"> Available: 24/7</span> · remote, worldwide
                
              </p>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative overflow-hidden rounded-md border border-line bg-ink-2 p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.85)] md:p-8">
              <span
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
                aria-hidden="true"
              />
              {sent ? (
                <div className="py-6 font-mono text-[13px] leading-[2.2]">
                  <p className="text-faint">$ ./send_message --to client</p>
                  <p className="text-gold-bright">200 OK · message received</p>
                  
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold-bright"
                  >
                    send another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="cf-name" className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                      name:
                    </label>
                    <input
                      id="cf-name"
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      className="mt-2 w-full rounded-sm border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-faint/70 transition-colors focus:border-gold/70 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="cf-email" className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                      email:
                    </label>
                    <input
                      id="cf-email"
                      type="email"
                      name="email"
                      required
                      placeholder="your@company.com"
                      className="mt-2 w-full rounded-sm border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-faint/70 transition-colors focus:border-gold/70 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="cf-msg" className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                      message:
                    </label>
                    <textarea
                      id="cf-msg"
                      name="message"
                      required
                      rows={5}
                      placeholder="What data do you need, from where, and how often?"
                      className="mt-2 w-full resize-y rounded-sm border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-faint/70 transition-colors focus:border-gold/70 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2.5 rounded-sm bg-gold px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-all hover:bg-gold-bright"
                  >
                    Send Message
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
