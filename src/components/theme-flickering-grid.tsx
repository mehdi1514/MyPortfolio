"use client";

import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeFlickeringGrid(
  props: React.ComponentProps<typeof FlickeringGrid>
) {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("rgb(0, 0, 0)");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)");
  }, [resolvedTheme]);

  return <FlickeringGrid color={color} {...props} />;
}
