"use client";

import mermaid from "mermaid";
import { useEffect } from "react";

export default function MermaidInit() {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "default",
      securityLevel: "loose",
    });
    
    // Find all mermaid divs and render them
    // We need to wait for the DOM to be ready and for the content to be injected
    const renderMermaid = async () => {
      const elements = document.querySelectorAll(".mermaid");
      if (elements.length > 0) {
        await mermaid.run({
          nodes: elements as any,
        });
      }
    };

    renderMermaid();
  }, []);

  return null;
}
