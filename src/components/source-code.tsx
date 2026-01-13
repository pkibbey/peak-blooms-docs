"use client";

import ImageBehindButton from "./image-behind-button";

export function SourceCode() {
  return (
    <section className="w-full bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="bg-card p-8 md:p-12 text-center space-y-6">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Explore the Code
          </h2>
          <p className="text-lg text-muted-foreground">
            View the complete source code and implementation details on GitHub
          </p>
        </div>

        <ImageBehindButton
          imageSrc="/pkibbey.png"
          imageAlt="GitHub repository preview"
          buttonLabel="View on GitHub"
          href="https://github.com/pkibbey/peak-blooms"
          overlayClassName="from-white via-white/70 "
        />
      </div>
    </section>
  );
}
