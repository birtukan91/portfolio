import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./motion";

const GLYPHS = "!<>-_\\/[]{}=+*^?#01<>~";

function mask(text: string) {
  let s = "";
  for (const ch of text) {
    s += ch === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
  }
  return s;
}

/** Decodes `text` from scrambled glyphs, character by character.
 *  While `start` is false, a glyph mask of the same length is shown so the
 *  layout never shifts. */
export function useScramble(text: string, start = true, speed = 3) {
  const [out, setOut] = useState(() => mask(text));
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) {
      setOut(text);
      return;
    }
    if (!start) {
      setOut(mask(text));
      return;
    }
    let frame = 0;
    let raf = 0;
    const totalFrames = text.length * speed;
    const tick = () => {
      frame += 1;
      const solved = (frame / totalFrames) * text.length;
      if (solved >= text.length) {
        setOut(text);
        return;
      }
      let s = "";
      for (let i = 0; i < text.length; i += 1) {
        const ch = text[i];
        if (ch === " " || i < solved) s += ch;
        else s += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      setOut(s);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, start, reduced, speed]);

  return out;
}
