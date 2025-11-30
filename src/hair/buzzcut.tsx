import React from "react";

export default function hairBuzzcut(props: { color: string }): React.ReactElement {
  const { color } = props;
  return (
    <svg
      style={{
        position: "absolute",
        bottom: "32%",
        width: "94%",
        height: "48%",
        left: "3%"
      }}
      width="240"
      height="150"
      viewBox="0 0 240 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">

      {/* Subtle base contour following head shape */}
      <path
        d="M120 15 C85 15, 55 25, 40 40 C28 52, 22 68, 22 85 C22 95, 24 105, 27 115 L213 115 C216 105, 218 95, 218 85 C218 68, 212 52, 200 40 C185 25, 155 15, 120 15 Z"
        fill={color || "#171921"}
        opacity="0.12"
      />

      {/* Stippling dots for buzzcut texture - 22 total dots with varying sizes and strategic placement */}

      {/* Top section: SPARSE (7 dots, lighter area) */}
      <circle cx="100" cy="35" r="0.7" fill={color || "#171921"} opacity="0.28" />
      <circle cx="120" cy="32" r="0.9" fill={color || "#171921"} opacity="0.25" />
      <circle cx="140" cy="35" r="0.6" fill={color || "#171921"} opacity="0.27" />
      <circle cx="110" cy="42" r="0.8" fill={color || "#171921"} opacity="0.26" />
      <circle cx="130" cy="40" r="0.7" fill={color || "#171921"} opacity="0.28" />
      <circle cx="90" cy="45" r="0.6" fill={color || "#171921"} opacity="0.27" />
      <circle cx="150" cy="44" r="0.75" fill={color || "#171921"} opacity="0.26" />

      {/* Mid-top transition: MEDIUM (5 dots) */}
      <circle cx="75" cy="55" r="1.0" fill={color || "#171921"} opacity="0.30" />
      <circle cx="95" cy="58" r="1.1" fill={color || "#171921"} opacity="0.32" />
      <circle cx="120" cy="56" r="0.9" fill={color || "#171921"} opacity="0.29" />
      <circle cx="145" cy="58" r="1.0" fill={color || "#171921"} opacity="0.31" />
      <circle cx="165" cy="55" r="1.1" fill={color || "#171921"} opacity="0.30" />

      {/* Sides: MEDIUM-DENSE (6 dots per side) */}
      {/* Left side */}
      <circle cx="55" cy="70" r="1.2" fill={color || "#171921"} opacity="0.33" />
      <circle cx="65" cy="75" r="1.3" fill={color || "#171921"} opacity="0.34" />
      <circle cx="48" cy="85" r="1.1" fill={color || "#171921"} opacity="0.32" />

      {/* Right side */}
      <circle cx="185" cy="70" r="1.2" fill={color || "#171921"} opacity="0.33" />
      <circle cx="175" cy="75" r="1.3" fill={color || "#171921"} opacity="0.34" />
      <circle cx="192" cy="85" r="1.1" fill={color || "#171921"} opacity="0.32" />

      {/* Lower back edge: DENSER (4 dots, darkest area) */}
      <circle cx="60" cy="95" r="1.4" fill={color || "#171921"} opacity="0.35" />
      <circle cx="80" cy="98" r="1.5" fill={color || "#171921"} opacity="0.34" />
      <circle cx="160" cy="98" r="1.5" fill={color || "#171921"} opacity="0.34" />
      <circle cx="180" cy="95" r="1.4" fill={color || "#171921"} opacity="0.35" />
    </svg>
  );
}
