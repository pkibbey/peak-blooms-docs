"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";

type Props = {
  imageSrc: string;
  imageAlt?: string;
  imageClassName?: string;
  buttonLabel: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  overlayClassName?: string;
  buttonOffsetClass?: string;
  rounded?: boolean | string;
};

function ImageBehindButton({
  imageSrc,
  imageAlt = "",
  imageClassName = "w-60",
  buttonLabel,
  href,
  target = "_blank",
  rel = "noopener noreferrer",
  onClick,
  overlayClassName,
  buttonOffsetClass = "-bottom-5",
  rounded = true,
}: Props) {
  const borderRadius =
    typeof rounded === "string" ? rounded : rounded ? "rounded-lg" : "";

  const buttonClass = cn(buttonVariants({ variant: "default", size: "lg" }));

  const ButtonTrigger = () => {
    if (href) {
      return (
        <a href={href} target={target} rel={rel} className={buttonClass}>
          {buttonLabel}
        </a>
      );
    }

    return (
      <Button
        onClick={onClick}
        variant="default"
        size="lg"
        className={cn(
          buttonClass,
          "outline-white outline-[0.5px] outline-solid group-hover:outline-1",
        )}
      >
        {buttonLabel}
      </Button>
    );
  };

  return (
    <div className="relative mb-4 overflow-visible z-10 flex flex-col items-center rounded-sm group">
      <div className={cn("absolute z-10", buttonOffsetClass)}>
        <ButtonTrigger />
      </div>

      <button
        type="button"
        className="relative cursor-pointer"
        onClick={
          href
            ? () => {
                window.open(href, "_blank");
              }
            : onClick
        }
      >
        <Image
          width={2248}
          height={1298}
          src={imageSrc}
          alt={imageAlt}
          className={cn(
            imageClassName,
            borderRadius,
            "relative top-0 group-hover:-top-2 transition-all",
          )}
        />
        <div
          className={cn(
            "absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-background/70 to-transparent",
            overlayClassName,
          )}
        />
      </button>
    </div>
  );
}

export default ImageBehindButton;
