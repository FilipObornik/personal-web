"use client";

interface WaveSeparatorProps {
  fillColor?: string;
  className?: string;
  flip?: boolean;
  variant?: 1 | 2 | 3 | 4;
}

const wavePaths = {
  1: "M0 60V35Q400 0 720 35T1440 20V60H0Z",
  2: "M0 60V30Q360 10 720 25Q1080 40 1440 30V60H0Z",
  3: "M0 60V40Q200 15 500 30T1000 20Q1250 35 1440 25V60H0Z",
  4: "M0 60V25Q350 45 700 20T1440 35V60H0Z",
};

export default function WaveSeparator({
  fillColor = "white",
  className = "",
  flip = false,
  variant = 1
}: WaveSeparatorProps) {
  return (
    <div className={`absolute left-0 right-0 ${flip ? 'top-0 rotate-180' : 'bottom-0 -mb-px'} ${className}`}>
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full block"
        preserveAspectRatio="none"
        style={{ marginBottom: '-1px' }}
      >
        <path
          d={wavePaths[variant]}
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
