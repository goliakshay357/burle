// Placeholder SVG art used until real photography lands.
// Each component is a self-contained <svg> so it inlines into the HTML
// with zero network cost and renders identically on first paint.

export function PhMainHallPortrait() {
  return (
    <svg viewBox="0 0 300 420" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#3a2a18" />
          <stop offset="0.5" stopColor="#7d5a2e" />
          <stop offset="1" stopColor="#1a120a" />
        </linearGradient>
      </defs>
      <rect width="300" height="420" fill="url(#g1)" />
      <g opacity="0.6">
        <circle cx="60" cy="160" r="2" fill="#f3e2b8" />
        <circle cx="120" cy="170" r="2" fill="#f3e2b8" />
        <circle cx="180" cy="160" r="2" fill="#f3e2b8" />
        <circle cx="240" cy="170" r="2" fill="#f3e2b8" />
        <circle cx="90" cy="200" r="2" fill="#f3e2b8" />
        <circle cx="150" cy="210" r="2" fill="#f3e2b8" />
        <circle cx="210" cy="200" r="2" fill="#f3e2b8" />
      </g>
      <rect x="0" y="320" width="300" height="100" fill="#0d0905" opacity="0.8" />
      <rect x="100" y="240" width="100" height="120" fill="#c19a52" opacity="0.4" />
    </svg>
  );
}

export function PhLawnPortrait() {
  return (
    <svg viewBox="0 0 300 420" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#5a4a2a" />
          <stop offset="0.6" stopColor="#3a4520" />
          <stop offset="1" stopColor="#1a2010" />
        </linearGradient>
      </defs>
      <rect width="300" height="420" fill="url(#g2)" />
      <g opacity="0.7" stroke="#f3e2b8" strokeWidth="0.5" fill="none">
        <line x1="0" y1="280" x2="300" y2="280" />
        <line x1="0" y1="290" x2="300" y2="290" />
        <line x1="0" y1="300" x2="300" y2="300" />
      </g>
      <g fill="#f3e2b8" opacity="0.8">
        <circle cx="40" cy="180" r="3" />
        <circle cx="100" cy="170" r="3" />
        <circle cx="160" cy="180" r="3" />
        <circle cx="220" cy="170" r="3" />
        <circle cx="280" cy="180" r="3" />
      </g>
    </svg>
  );
}

export function PhFoyerPortrait() {
  return (
    <svg viewBox="0 0 300 420" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g3" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#d4b988" />
          <stop offset="0.5" stopColor="#9d7d4a" />
          <stop offset="1" stopColor="#3a2a18" />
        </linearGradient>
      </defs>
      <rect width="300" height="420" fill="url(#g3)" />
      <g opacity="0.5" fill="#1a120a">
        <rect x="60" y="80" width="40" height="200" />
        <rect x="140" y="80" width="40" height="200" />
        <rect x="220" y="80" width="40" height="200" />
      </g>
      <rect x="0" y="320" width="300" height="100" fill="#1a120a" opacity="0.7" />
    </svg>
  );
}

export function PhSuitePortrait() {
  return (
    <svg viewBox="0 0 300 420" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g4" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#e8d4a8" />
          <stop offset="0.6" stopColor="#a07a3a" />
          <stop offset="1" stopColor="#2a1f12" />
        </linearGradient>
      </defs>
      <rect width="300" height="420" fill="url(#g4)" />
      <ellipse cx="150" cy="200" rx="80" ry="40" fill="#f3ede2" opacity="0.3" />
      <rect x="120" y="240" width="60" height="120" fill="#1a120a" opacity="0.5" />
    </svg>
  );
}

export function PhMainHallWide() {
  return (
    <svg viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="sp1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#3a2a18" />
          <stop offset="0.5" stopColor="#7d5a2e" />
          <stop offset="1" stopColor="#14110d" />
        </linearGradient>
      </defs>
      <rect width="600" height="450" fill="url(#sp1)" />
      <rect x="200" y="240" width="200" height="180" fill="#c19a52" opacity="0.3" />
      <g fill="#f3e2b8" opacity="0.7">
        <circle cx="120" cy="140" r="3" /><circle cx="200" cy="130" r="3" /><circle cx="280" cy="140" r="3" /><circle cx="360" cy="130" r="3" /><circle cx="440" cy="140" r="3" /><circle cx="520" cy="130" r="3" />
        <circle cx="160" cy="180" r="2" /><circle cx="240" cy="170" r="2" /><circle cx="320" cy="180" r="2" /><circle cx="400" cy="170" r="2" /><circle cx="480" cy="180" r="2" />
      </g>
      <line x1="0" y1="380" x2="600" y2="380" stroke="#1a120a" strokeWidth="2" opacity="0.5" />
    </svg>
  );
}

export function PhLawnWide() {
  return (
    <svg viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="sp2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#7a5a2e" />
          <stop offset="0.4" stopColor="#5a6028" />
          <stop offset="1" stopColor="#1a2010" />
        </linearGradient>
      </defs>
      <rect width="600" height="450" fill="url(#sp2)" />
      <g fill="#f3e2b8" opacity="0.85">
        <circle cx="80" cy="200" r="4" /><circle cx="180" cy="180" r="4" /><circle cx="280" cy="200" r="4" /><circle cx="380" cy="180" r="4" /><circle cx="480" cy="200" r="4" /><circle cx="560" cy="180" r="4" />
        <circle cx="120" cy="240" r="3" /><circle cx="220" cy="220" r="3" /><circle cx="320" cy="240" r="3" /><circle cx="420" cy="220" r="3" /><circle cx="520" cy="240" r="3" />
      </g>
      <g stroke="#f3e2b8" strokeWidth="0.4" opacity="0.4" fill="none">
        <path d="M0 200 Q150 195 300 200 T600 200" />
        <path d="M0 220 Q150 215 300 220 T600 220" />
      </g>
      <rect x="0" y="320" width="600" height="130" fill="#1a2010" opacity="0.6" />
    </svg>
  );
}

export function PhFoyerWide() {
  return (
    <svg viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="sp3" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#d4b988" />
          <stop offset="0.5" stopColor="#9d7d4a" />
          <stop offset="1" stopColor="#3a2a18" />
        </linearGradient>
      </defs>
      <rect width="600" height="450" fill="url(#sp3)" />
      <g fill="#1a120a" opacity="0.55">
        <rect x="80" y="80" width="50" height="280" />
        <rect x="180" y="80" width="50" height="280" />
        <rect x="280" y="80" width="50" height="280" />
        <rect x="380" y="80" width="50" height="280" />
        <rect x="480" y="80" width="50" height="280" />
      </g>
      <rect x="0" y="360" width="600" height="90" fill="#1a120a" opacity="0.7" />
      <ellipse cx="300" cy="200" rx="240" ry="80" fill="#f3e2b8" opacity="0.1" />
    </svg>
  );
}

export function PhSuiteWide() {
  return (
    <svg viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="sp4" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#e8d4a8" />
          <stop offset="0.5" stopColor="#a07a3a" />
          <stop offset="1" stopColor="#2a1f12" />
        </linearGradient>
      </defs>
      <rect width="600" height="450" fill="url(#sp4)" />
      <ellipse cx="300" cy="220" rx="160" ry="80" fill="#f3ede2" opacity="0.4" />
      <rect x="240" y="260" width="120" height="140" fill="#1a120a" opacity="0.5" />
      <line x1="240" y1="260" x2="240" y2="400" stroke="#c19a52" strokeWidth="1" opacity="0.7" />
      <line x1="360" y1="260" x2="360" y2="400" stroke="#c19a52" strokeWidth="1" opacity="0.7" />
    </svg>
  );
}
