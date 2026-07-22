// Line-art SVG motifs — no emoji, everything drawn as continuous strokes
// to match the letter / stationery aesthetic.

export function SprigLeft({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 56C24 50 40 40 52 26C60 16 66 8 70 2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M22 44C26 36 24 28 16 24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M34 36C39 29 38 21 31 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M46 26C51 20 50 12 44 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M58 16C62 11 61 5 56 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function SprigRight({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ transform: 'scaleX(-1)' }}
    >
      <path
        d="M4 56C24 50 40 40 52 26C60 16 66 8 70 2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M22 44C26 36 24 28 16 24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M34 36C39 29 38 21 31 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M46 26C51 20 50 12 44 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M58 16C62 11 61 5 56 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function LineHeart({ className, filled = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M24 40C24 40 4 27.5 4 14.8C4 7.7 9.6 3 15.7 3C19.8 3 22.7 5.3 24 8.2C25.3 5.3 28.2 3 32.3 3C38.4 3 44 7.7 44 14.8C44 27.5 24 40 24 40Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill={filled ? 'currentColor' : 'none'}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WaxSeal({ className, cracked = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="70" cy="70" r="62" fill="var(--burgundy)" />
      <circle cx="70" cy="70" r="62" fill="url(#sealGrain)" opacity="0.35" />
      <circle cx="70" cy="70" r="54" stroke="var(--gold)" strokeWidth="1" opacity="0.6" fill="none" />
      <path
        d="M70 96C70 96 42 78 42 58.5C42 48.7 49.9 42 58.3 42C63.9 42 68.3 45 70 49.6C71.7 45 76.1 42 81.7 42C90.1 42 98 48.7 98 58.5C98 78 70 96 70 96Z"
        fill="var(--gold)"
        opacity="0.9"
      />
      {cracked && (
        <>
          <path d="M30 40L54 70L38 100" stroke="var(--burgundy-deep)" strokeWidth="1.5" opacity="0.8" />
          <path d="M110 42L86 68L104 98" stroke="var(--burgundy-deep)" strokeWidth="1.5" opacity="0.8" />
        </>
      )}
      <defs>
        <radialGradient id="sealGrain" cx="0.3" cy="0.3" r="0.9">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.15" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function ArrowDown({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 21L12 29L20 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CornerFlourish({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 2C2 2 30 4 30 26C30 40 16 40 16 30C16 24 22 22 25 27C28 32 20 40 30 44C42 49 60 40 60 40"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChevronLeft({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M15 5L7 12L15 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M9 5L17 12L9 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
