import React from "react";

export default function hairBuzzcut(props: { color: string }): SVGElement {
  const { color } = props;
  return (
    <svg
      style={{
        position: "absolute",
        bottom: "35%",
        width: "94%",
        height: "45%",
        left: "3%"
      }}
      width="240"
      height="150"
      viewBox="0 0 240 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      {/* Main buzzcut shape - follows natural head contour */}
      <path
        d="M120 10 C80 10, 50 20, 35 35 C25 45, 20 60, 20 75 C20 85, 22 95, 25 105 L30 105 C28 95, 26 85, 26 75 C26 62, 30 48, 38 38 C52 24, 82 16, 120 16 C158 16, 188 24, 202 38 C210 48, 214 62, 214 75 C214 85, 212 95, 210 105 L215 105 C218 95, 220 85, 220 75 C220 60, 215 45, 205 35 C190 20, 160 10, 120 10 Z"
        fill={color || "#171921"}
        opacity="0.95"
      />

      {/* Subtle texture overlay for buzzcut stubble effect */}
      <g opacity="0.3">
        {/* Top section texture */}
        <circle cx="90" cy="30" r="1" fill={color || "#171921"} />
        <circle cx="100" cy="28" r="1" fill={color || "#171921"} />
        <circle cx="110" cy="26" r="1" fill={color || "#171921"} />
        <circle cx="120" cy="25" r="1" fill={color || "#171921"} />
        <circle cx="130" cy="26" r="1" fill={color || "#171921"} />
        <circle cx="140" cy="28" r="1" fill={color || "#171921"} />
        <circle cx="150" cy="30" r="1" fill={color || "#171921"} />

        {/* Middle section texture */}
        <circle cx="70" cy="50" r="1" fill={color || "#171921"} />
        <circle cx="85" cy="48" r="1" fill={color || "#171921"} />
        <circle cx="100" cy="46" r="1" fill={color || "#171921"} />
        <circle cx="120" cy="45" r="1" fill={color || "#171921"} />
        <circle cx="140" cy="46" r="1" fill={color || "#171921"} />
        <circle cx="155" cy="48" r="1" fill={color || "#171921"} />
        <circle cx="170" cy="50" r="1" fill={color || "#171921"} />

        {/* Side section texture */}
        <circle cx="50" cy="70" r="1" fill={color || "#171921"} />
        <circle cx="60" cy="68" r="1" fill={color || "#171921"} />
        <circle cx="70" cy="70" r="1" fill={color || "#171921"} />
        <circle cx="170" cy="70" r="1" fill={color || "#171921"} />
        <circle cx="180" cy="68" r="1" fill={color || "#171921"} />
        <circle cx="190" cy="70" r="1" fill={color || "#171921"} />

        {/* Lower section texture */}
        <circle cx="40" cy="90" r="1" fill={color || "#171921"} />
        <circle cx="55" cy="88" r="1" fill={color || "#171921"} />
        <circle cx="75" cy="90" r="1" fill={color || "#171921"} />
        <circle cx="165" cy="90" r="1" fill={color || "#171921"} />
        <circle cx="185" cy="88" r="1" fill={color || "#171921"} />
        <circle cx="200" cy="90" r="1" fill={color || "#171921"} />
      </g>

      {/* Gradient effect for depth */}
      <defs>
        <linearGradient id="buzzcut-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color || "#171921"} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color || "#171921"} stopOpacity="0" />
        </linearGradient>
      </defs>
      <ellipse
        cx="120"
        cy="60"
        rx="80"
        ry="40"
        fill="url(#buzzcut-gradient)"
      />
    </svg>
  );
}
