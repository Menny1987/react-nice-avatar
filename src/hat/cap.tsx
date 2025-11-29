import React from "react";

export default function hatCap(props: { color: string }): SVGElement {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        bottom: "38%",
        left: "18%",
        width: "60%",
        height: "80%"
      }}
      width="300"
      height="240"
      viewBox="0 0 300 240"
      fill="none"
      preserveAspectRatio="xMidYMid meet">
      {/* Cap bill/visor - extending forward and down */}
      <ellipse
        cx="150"
        cy="170"
        rx="140"
        ry="35"
        fill={color}
        stroke="rgba(0,0,0,0.15)"
        strokeWidth="2" />
      {/* Shadow under bill for depth */}
      <ellipse
        cx="150"
        cy="175"
        rx="135"
        ry="30"
        fill="rgba(0,0,0,0.1)" />

      {/* Cap crown - main part that fits on head */}
      <path
        d="M 60 140 Q 60 80, 150 80 Q 240 80, 240 140 L 230 165 Q 150 170, 70 165 Z"
        fill={color}
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="2" />

      {/* Crown top panel - lighter for dimension */}
      <ellipse
        cx="150"
        cy="95"
        rx="75"
        ry="25"
        fill={color}
        opacity="0.9" />

      {/* Panel seams for realistic look */}
      <path
        d="M 150 80 L 145 140"
        stroke="rgba(0,0,0,0.15)"
        strokeWidth="1.5" />
      <path
        d="M 150 80 L 155 140"
        stroke="rgba(0,0,0,0.15)"
        strokeWidth="1.5" />

      {/* Cap button on top center */}
      <circle
        cx="150"
        cy="85"
        r="8"
        fill={color === "#FFFFFF" || color === "#ffffff" ? "#E0E0E0" : "rgba(0,0,0,0.2)"}
        stroke="rgba(0,0,0,0.2)"
        strokeWidth="1" />
      <circle
        cx="150"
        cy="85"
        r="4"
        fill={color} />
    </svg>
  );
}
