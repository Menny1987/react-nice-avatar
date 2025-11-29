import React from "react";

import Turban from "./turban";
import Beanie from "./beanie";
import Cap from "./cap";
import CapFlipped from "./capFlipped";

export default function hat(props: { color: string, style: string }): SVGElement {
  const { style, color } = props;
  switch (style) {
    case "beanie": return <Beanie color={color} />;
    case "turban": return <Turban color={color} />;
    case "cap": return <Cap color={color} />;
    case "capFlipped": return <CapFlipped color={color} />;
    case "none":
    default:
      return null;
  }
}
