// cubic-bezier easing — cast to bypass strict Framer Motion Easing type
const ease = [0.22, 1, 0.36, 1] as unknown as [number, number, number, number];

// ── Variants ─────────────────────────────────────────────────────
// NOTE: Not typed as `Variants` intentionally — lets Framer Motion
// infer the correct type when passed to the `variants` prop.

export const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.6, ease } },
};

export const fadeLeft = {
  hidden:  { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.6, ease } },
};

export const fadeRight = {
  hidden:  { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.6, ease } },
};

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1,    transition: { duration: 0.45, ease } },
};

export const staggerContainer = (stagger = 0.1, delayChildren = 0) => ({
  hidden:  {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

export const heroStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

export const heroItem = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.75, ease } },
};

// ── Shared viewport options ───────────────────────────────────────
export const viewport = { once: true, amount: 0.1 } as const;