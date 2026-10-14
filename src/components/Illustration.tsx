import type { Scene } from "@/data/site";

/**
 * Original flat illustrations in the site palette, used wherever a real
 * photograph has not been added yet. `tone="deep"` is darker so white text
 * can sit on top of it (hero banners).
 */
export function Illustration({ scene, tone = "light", className = "" }: { scene: Scene; tone?: "light" | "deep"; className?: string }) {
  const deep = tone === "deep";
  const sky = deep ? ["#1b4c78", "#348cd4"] : ["#dcecfa", "#f7fbfe"];
  const hillBack = deep ? "#2a6aa6" : "#bddcf5";
  const hillFront = deep ? "#1d5c93" : "#8fc4ed";
  const ink = deep ? "#0f3557" : "#1d5c93";
  const soft = deep ? "#5ba7e2" : "#ffffff";
  const id = `sky-${scene}-${tone}`;

  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" className={`h-full w-full ${className}`} role="img" aria-label={`${scene} illustration`}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={sky[0]} />
          <stop offset="1" stopColor={sky[1]} />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill={`url(#${id})`} />
      <circle cx="640" cy="110" r="54" fill={deep ? "#8fc4ed" : "#ffffff"} opacity={deep ? 0.35 : 0.9} />
      <g fill={soft} opacity={deep ? 0.18 : 0.8}>
        <ellipse cx="170" cy="90" rx="70" ry="16" />
        <ellipse cx="230" cy="78" rx="44" ry="14" />
        <ellipse cx="520" cy="60" rx="56" ry="12" />
      </g>
      <path d="M0 360 C140 300 260 330 400 300 S660 280 800 320 V500 H0Z" fill={hillBack} />
      <SceneArt scene={scene} ink={ink} soft={soft} deep={deep} />
      <path d="M0 430 C160 400 300 440 460 418 S700 400 800 420 V500 H0Z" fill={hillFront} />
    </svg>
  );
}

function Tree({ x, y, s = 1, c }: { x: number; y: number; s?: number; c: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-4" y="0" width="8" height="40" fill={c} opacity=".8" />
      <circle cx="0" cy="-10" r="30" fill={c} opacity=".55" />
      <circle cx="-16" cy="4" r="20" fill={c} opacity=".45" />
      <circle cx="18" cy="2" r="22" fill={c} opacity=".5" />
    </g>
  );
}

function SceneArt({ scene, ink, soft, deep }: { scene: Scene; ink: string; soft: string; deep: boolean }) {
  const wall = deep ? "#dcecfa" : "#ffffff";
  switch (scene) {
    case "campus":
      return (
        <g>
          <Tree x={110} y={330} s={1.3} c={ink} />
          <Tree x={700} y={320} s={1.5} c={ink} />
          <rect x="250" y="210" width="300" height="160" fill={wall} />
          <polygon points="230,212 400,140 570,212" fill={ink} />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={272 + i * 46} y="232" width="14" height="120" fill={ink} opacity=".22" />
          ))}
          <rect x="378" y="300" width="44" height="70" rx="22" fill={ink} opacity=".7" />
          <circle cx="400" cy="182" r="12" fill={wall} />
          <path d="M370 500 L392 370 H408 L430 500Z" fill={wall} opacity=".6" />
        </g>
      );
    case "library":
      return (
        <g>
          <rect x="150" y="150" width="500" height="250" rx="6" fill={wall} />
          {[0, 1, 2].map((r) => (
            <g key={r}>
              <rect x="170" y={232 + r * 76} width="460" height="6" fill={ink} opacity=".5" />
              {Array.from({ length: 22 }).map((_, i) => (
                <rect
                  key={i}
                  x={176 + i * 20.5}
                  y={176 + r * 76 + ((i * 7) % 3) * 4}
                  width="15"
                  height={56 - ((i * 7) % 3) * 4}
                  rx="2"
                  fill={["#348cd4", "#8fc4ed", "#1d5c93", "#bddcf5", "#5ba7e2"][(i + r) % 5]}
                />
              ))}
            </g>
          ))}
        </g>
      );
    case "sports":
      return (
        <g>
          <ellipse cx="400" cy="400" rx="380" ry="90" fill="none" stroke={wall} strokeWidth="10" opacity=".9" />
          <ellipse cx="400" cy="400" rx="330" ry="70" fill="none" stroke={wall} strokeWidth="4" opacity=".6" />
          <ellipse cx="400" cy="400" rx="290" ry="56" fill="none" stroke={wall} strokeWidth="4" opacity=".6" />
          <circle cx="560" cy="250" r="44" fill={wall} />
          <path d="M520 240c25 10 55 10 80 0M535 285c10-25 10-50 0-75M585 285c-10-25-10-50 0-75" stroke={ink} strokeWidth="4" fill="none" opacity=".6" />
          <Tree x={150} y={320} s={1.2} c={ink} />
          <rect x="300" y="190" width="6" height="140" fill={ink} />
          <rect x="300" y="190" width="70" height="44" fill={ink} opacity=".75" />
        </g>
      );
    case "arts":
      return (
        <g>
          <path d="M300 400 L360 170 L420 400" stroke={ink} strokeWidth="8" fill="none" />
          <rect x="290" y="180" width="140" height="120" fill={wall} stroke={ink} strokeWidth="5" />
          <circle cx="330" cy="225" r="18" fill="#8fc4ed" />
          <path d="M300 290 L340 245 L370 270 L420 230 V290Z" fill="#348cd4" opacity=".7" />
          <path d="M520 400c-40 0-56-30-46-70 6-24 4-44-10-60h112c-14 16-16 36-10 60 10 40-6 70-46 70Z" fill={wall} />
          <path d="M478 320h104" stroke={ink} strokeWidth="5" opacity=".5" />
          <ellipse cx="230" cy="380" rx="56" ry="34" fill={wall} />
          {[["#1d5c93", 205, 372], ["#5ba7e2", 230, 362], ["#8fc4ed", 255, 375]].map(([c, x, y]) => (
            <circle key={String(x)} cx={Number(x)} cy={Number(y)} r="9" fill={String(c)} />
          ))}
        </g>
      );
    case "music":
      return (
        <g>
          <ellipse cx="320" cy="350" rx="80" ry="70" fill={wall} />
          <rect x="300" y="120" width="40" height="190" rx="10" fill={wall} />
          <circle cx="320" cy="350" r="22" fill={ink} opacity=".6" />
          {[0, 1, 2, 3].map((i) => (
            <line key={i} x1={308 + i * 8} y1="130" x2={308 + i * 8} y2="400" stroke={ink} strokeWidth="1.5" opacity=".5" />
          ))}
          <g fill={ink}>
            <ellipse cx="520" cy="260" rx="20" ry="14" />
            <rect x="536" y="170" width="5" height="92" />
            <ellipse cx="590" cy="240" rx="20" ry="14" />
            <rect x="606" y="150" width="5" height="92" />
            <path d="M536 170 L611 150 V166 L536 186Z" />
          </g>
          <g fill="none" stroke={wall} strokeWidth="4" opacity=".8">
            <path d="M460 330c40-30 80 30 120 0s80 30 120 0" />
          </g>
        </g>
      );
    case "science":
      return (
        <g>
          <path d="M350 150h60M360 150v80l-70 140a20 20 0 0 0 18 30h146a20 20 0 0 0 18-30l-70-140v-80" fill={wall} stroke={ink} strokeWidth="6" strokeLinejoin="round" />
          <path d="M305 340h150l22 42a14 14 0 0 1-12 20H295a14 14 0 0 1-12-20Z" fill="#5ba7e2" opacity=".8" />
          <circle cx="360" cy="370" r="8" fill={wall} />
          <circle cx="400" cy="355" r="5" fill={wall} />
          <g transform="translate(590 230)" fill="none" stroke={wall} strokeWidth="4">
            <ellipse rx="70" ry="24" />
            <ellipse rx="70" ry="24" transform="rotate(60)" />
            <ellipse rx="70" ry="24" transform="rotate(-60)" />
          </g>
          <circle cx="590" cy="230" r="12" fill={ink} />
          <Tree x={140} y={330} c={ink} />
        </g>
      );
    case "yoga":
      return (
        <g>
          <circle cx="400" cy="250" r="110" fill={wall} opacity=".55" />
          <g fill={ink} opacity=".75">
            <path d="M400 340c-30-20-40-60-30-100 20 20 30 60 30 100Z" />
            <path d="M400 340c30-20 40-60 30-100-20 20-30 60-30 100Z" />
            <path d="M400 345c-50 0-90-25-110-60 40 0 80 20 110 60Z" />
            <path d="M400 345c50 0 90-25 110-60-40 0-80 20-110 60Z" />
            <path d="M400 330c-14-30-14-70 0-110 14 40 14 80 0 110Z" />
          </g>
          <rect x="250" y="370" width="300" height="12" rx="6" fill={wall} />
        </g>
      );
    case "assembly":
      return (
        <g>
          <rect x="560" y="190" width="5" height="160" fill={ink} />
          <rect x="565" y="192" width="70" height="16" fill="#ff9933" opacity=".85" />
          <rect x="565" y="208" width="70" height="16" fill="#ffffff" />
          <rect x="565" y="224" width="70" height="16" fill="#138808" opacity=".8" />
          <circle cx="600" cy="216" r="5" fill="none" stroke="#1d5c93" strokeWidth="1.5" />
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 10 }).map((__, c) => (
              <g key={`${r}-${c}`} transform={`translate(${120 + c * 42 + (r % 2) * 18} ${270 + r * 36})`}>
                <circle cx="0" cy="0" r="9" fill={ink} opacity={0.5 + r * 0.12} />
                <rect x="-9" y="10" width="18" height="18" rx="6" fill={wall} opacity=".85" />
              </g>
            )),
          )}
        </g>
      );
    case "garden":
      return (
        <g>
          <Tree x={160} y={320} s={1.4} c={ink} />
          <Tree x={640} y={330} s={1.1} c={ink} />
          {Array.from({ length: 9 }).map((_, i) => (
            <g key={i} transform={`translate(${260 + i * 36} ${370 - (i % 3) * 14})`}>
              <rect x="-1.5" y="0" width="3" height="50" fill={ink} opacity=".6" />
              {[0, 72, 144, 216, 288].map((a) => (
                <ellipse key={a} cx="0" cy="-8" rx="5" ry="10" fill={i % 2 ? wall : "#8fc4ed"} transform={`rotate(${a})`} />
              ))}
              <circle cx="0" cy="0" r="4" fill={ink} />
            </g>
          ))}
          <g transform="translate(470 220)" fill={wall}>
            <ellipse cx="-12" cy="0" rx="14" ry="20" transform="rotate(-25)" />
            <ellipse cx="12" cy="0" rx="14" ry="20" transform="rotate(25)" />
          </g>
        </g>
      );
    case "classroom":
      return (
        <g>
          <rect x="180" y="140" width="440" height="200" rx="8" fill={ink} opacity={deep ? 0.9 : 0.85} />
          <rect x="180" y="340" width="440" height="10" fill={wall} />
          <g fill="none" stroke="#ffffff" strokeWidth="3" opacity=".85">
            <path d="M220 200h70M220 240h120M220 280h90" />
            <circle cx="500" cy="230" r="44" />
            <path d="M456 230h88M500 186v88" opacity=".6" />
          </g>
          <text x="380" y="215" fill="#ffffff" fontSize="30" fontFamily="Georgia, serif" opacity=".9">a² + b²</text>
        </g>
      );
    case "theatre":
      return (
        <g>
          <path d="M120 100h560v40H120Z" fill={ink} />
          <path d="M120 140h150c-20 90-10 180 20 260H120Z" fill={ink} opacity=".8" />
          <path d="M680 140H530c20 90 10 180-20 260h170Z" fill={ink} opacity=".8" />
          <path d="M400 140 300 400h200Z" fill={wall} opacity=".35" />
          <circle cx="400" cy="300" r="22" fill={wall} />
          <rect x="384" y="322" width="32" height="60" rx="12" fill={wall} />
        </g>
      );
    case "computer":
      return (
        <g>
          <rect x="230" y="150" width="340" height="210" rx="14" fill={ink} />
          <rect x="246" y="166" width="308" height="178" rx="6" fill={wall} />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={266 + (i % 3) * 14} y={186 + i * 24} width={90 + ((i * 37) % 120)} height="10" rx="5" fill={["#348cd4", "#8fc4ed", "#1d5c93"][i % 3]} />
          ))}
          <rect x="370" y="360" width="60" height="30" fill={ink} />
          <rect x="320" y="388" width="160" height="10" rx="5" fill={ink} />
        </g>
      );
  }
}
