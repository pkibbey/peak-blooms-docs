"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from "./ui/hover-card";

type Props = {
  imageSrc: string;
  imageAlt?: string;
  imageClassName?: string;
  buttonLabel: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "destructive"
    | "link";
  size?:
    | "default"
    | "xs"
    | "sm"
    | "lg"
    | "icon"
    | "icon-xs"
    | "icon-sm"
    | "icon-lg";
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
  variant = "default",
  size = "lg",
  overlayClassName,
  buttonOffsetClass = "-bottom-7",
  rounded = true,
}: Props) {
  const borderRadius =
    typeof rounded === "string" ? rounded : rounded ? "rounded-lg" : "";

  const buttonClass = cn(buttonVariants({ variant, size }));

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
        variant={variant}
        size={size}
        className={cn(buttonClass)}
      >
        {buttonLabel}
      </Button>
    );
  };

  return (
    <div className="relative mb-4 overflow-visible z-10 flex flex-col items-center rounded-sm">
      <div className={cn("absolute z-10", buttonOffsetClass)}>
        <div className="pt-4">
          <ButtonTrigger />
        </div>
      </div>

      <div className="relative">
        <Image
          width={2248}
          height={1298}
          src={imageSrc}
          alt={imageAlt}
          className={cn(imageClassName, borderRadius)}
        />
        <div
          className={cn(
            "absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-background/70 to-transparent",
            overlayClassName,
          )}
        />
      </div>
    </div>
  );
}

export default ImageBehindButton;
