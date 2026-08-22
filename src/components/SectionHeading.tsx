import { Reveal } from "../hooks/motion";

interface Props {
  index: string;
  kicker: string;
  title: string;
  align?: "left" | "center";
}

export function SectionHeading({ index, kicker, title, align = "left" }: Props) {
  const center = align === "center";
  return (
    <div className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}>
      <Reveal>
        <div
          className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-gold md:text-xs ${
            center ? "justify-center" : ""
          }`}
        >
          <span className="text-faint">{index}</span>
          <span className="h-px w-8 bg-gold/40" aria-hidden="true" />
          <span>{kicker}</span>
        </div>
      </Reveal>
      <Reveal bare className="mt-4">
        <h2 className="mask-line font-display text-3xl font-bold tracking-tight text-paper md:text-[2.6rem] md:leading-[1.1]">
          <span className="mask-inner">{title}</span>
        </h2>
      </Reveal>
    </div>
  );
}
