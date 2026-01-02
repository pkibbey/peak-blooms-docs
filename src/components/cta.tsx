"use client";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";

export function CTA() {
  const buttonClass = cn(buttonVariants({ variant: "default", size: "lg" }));

  return (
    <Button
      onClick={() => {
        const element = document.getElementById("executive-summary");
        element?.scrollIntoView({ behavior: "smooth" });
      }}
      variant="default"
      size="lg"
      className={cn(
        buttonClass,
        "outline-white outline-[0.5px] outline-solid group-hover:outline-1",
      )}
    >
      View the Journey
    </Button>
  );
}
