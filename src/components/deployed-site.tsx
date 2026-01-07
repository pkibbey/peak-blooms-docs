"use client";

import Image from "next/image";
import ImageBehindButton from "./image-behind-button";
import { Button } from "./ui/button";

export function DeployedSite() {
  return (
    <section className="w-full bg-gradient-to-b from-background to-muted/30">
      <div className="flex flex-col items-center bg-background p-8 md:p-12 text-center space-y-6">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            View the Deployed Site
          </h2>
          <p className="text-lg text-muted-foreground">
            Check out the deployed Peak Blooms application live on Vercel
          </p>
        </div>
        <div className="relative mt-6">
          <Image
            width={2144}
            height={1298}
            src="/peak-blooms.png"
            alt="Peak Blooms homepage preview"
            className="relative z-10 w-60 rounded-sm shadow-xl"
          />
          <Image
            width={2144}
            height={1298}
            src="/admin.png"
            alt="Admin dashboard preview"
            className="absolute -right-40 top-4 w-50 rounded-sm shadow-xl"
          />
          <Image
            width={2144}
            height={1298}
            src="/inspirations.png"
            alt="Inspirations page preview"
            className="absolute -left-40 top-4 w-50 rounded-sm shadow-xl"
          />
        </div>{" "}
        <Button
          onClick={() => {
            const element = document.getElementById("executive-summary");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
          variant="default"
          size="lg"
          className="outline-white outline-[0.5px] outline-solid group-hover:outline-1"
        >
          Visit Peak Blooms
        </Button>
      </div>
    </section>
  );
}
