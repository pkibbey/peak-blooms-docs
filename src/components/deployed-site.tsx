"use client";

import ImageBehindButton from "./image-behind-button";

export function DeployedSite() {
  return (
    <section className="w-full bg-gradient-to-b from-background to-muted/30">
      <div className="bg-background p-8 md:p-12 text-center space-y-6">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            View the Live Site
          </h2>
          <p className="text-lg text-muted-foreground">
            Check out the deployed Peak Blooms application live on Vercel
          </p>
        </div>

        <ImageBehindButton
          imageSrc="/peak-blooms.png"
          imageAlt="Peak Blooms live site preview"
          buttonLabel="Visit Live Site"
          href="https://peak-blooms.vercel.app/"
        />
      </div>
    </section>
  );
}
