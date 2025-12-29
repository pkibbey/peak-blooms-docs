"use client";

import ImageBehindButton from "./image-behind-button";

export function CTA() {
  return (
    <ImageBehindButton
      imageSrc="/peak-blooms.png"
      imageAlt="Peak Blooms live site preview"
      buttonLabel="View the Journey"
      onClick={() => {
        const element = document.getElementById("roadmap");
        element?.scrollIntoView({ behavior: "smooth" });
      }}
      variant="default"
      size="lg"
    />
  );
}
