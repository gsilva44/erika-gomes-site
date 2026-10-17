/** Ramo botânico delicado, em traço fino. A cor vem de `text-*` no className. */
const LEAVES = Array.from({ length: 7 }, (_, i) => ({
  y: 292 - i * 40,
  side: i % 2 === 0 ? -1 : 1,
  rx: 26 - i * 1.6,
  ry: 8.5 - i * 0.5,
}));

export function Branch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 320"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none select-none ${className}`}
    >
      <path d="M60 318 C57 220 64 120 60 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      {LEAVES.map((l, i) => {
        const cx = 60 + l.side * (l.rx + 2);
        const angle = l.side * -28;
        return (
          <ellipse
            key={i}
            cx={cx}
            cy={l.y}
            rx={l.rx}
            ry={l.ry}
            fill="currentColor"
            fillOpacity="0.55"
            transform={`rotate(${angle} ${cx} ${l.y})`}
          />
        );
      })}
      <ellipse cx="60" cy="16" rx="6" ry="16" fill="currentColor" fillOpacity="0.55" />
    </svg>
  );
}
