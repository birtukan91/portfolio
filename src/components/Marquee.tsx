import { MARQUEE_ITEMS } from "../lib/data";

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {MARQUEE_ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-5 font-mono text-xs uppercase tracking-[0.24em] text-muted md:px-8 md:text-[13px]">
            {item}
          </span>
          <span className="h-1.5 w-1.5 rotate-45 bg-gold/60" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="select-none overflow-hidden border-y border-line-soft bg-ink-2/50 py-4">
      <div className="flex w-max animate-marquee">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
