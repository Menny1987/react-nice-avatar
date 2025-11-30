import React from "react";

export default function hatCap(props: { color: string }): React.ReactElement {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        bottom: "50%",
        left: "12%",
        width: "76%",
        height: "65%"
      }}
      width="300"
      height="200"
      viewBox="0 0 300 200"
      fill="none"
      preserveAspectRatio="xMidYMid meet">

      {/* Baseball cap bill/visor - curved, extending forward and down */}
      <path
        d="M 75 115 Q 85 105, 150 100 Q 215 105, 225 115 Q 220 125, 150 132 Q 80 125, 75 115 Z"
        fill={color}
        stroke="rgba(0,0,0,0.15)"
        strokeWidth="2"
      />

      {/* Bill shadow for depth */}
      <ellipse
        cx="150"
        cy="120"
        rx="70"
        ry="10"
        fill="rgba(0,0,0,0.12)"
      />

      {/* Cap crown - 6-panel rounded structure */}
      <ellipse
        cx="150"
        cy="75"
        rx="80"
        ry="42"
        fill={color}
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="2"
      />

      {/* Front panels - slightly darker for dimension */}
      <path
        d="M 90 75 Q 120 50, 150 50 Q 180 50, 210 75 Q 180 95, 150 95 Q 120 95, 90 75 Z"
        fill={color}
        opacity="0.15"
      />

      {/* Panel seams for authentic look */}
      <line
        x1="150"
        y1="50"
        x2="150"
        y2="105"
        stroke="rgba(0,0,0,0.08)"
        strokeWidth="1.5"
      />
      <line
        x1="120"
        y1="55"
        x2="120"
        y2="100"
        stroke="rgba(0,0,0,0.06)"
        strokeWidth="1"
      />
      <line
        x1="180"
        y1="55"
        x2="180"
        y2="100"
        stroke="rgba(0,0,0,0.06)"
        strokeWidth="1"
      />

      {/* Crown button (squatchee) on top - visible and prominent */}
      <circle
        cx="150"
        cy="55"
        r="7"
        fill={color === "#FFFFFF" || color === "#ffffff" ? "#E0E0E0" : "rgba(0,0,0,0.25)"}
        stroke="rgba(0,0,0,0.2)"
        strokeWidth="1.5"
      />
      <circle
        cx="150"
        cy="55"
        r="3.5"
        fill={color}
        opacity="0.9"
      />
    </svg>
  );
}
