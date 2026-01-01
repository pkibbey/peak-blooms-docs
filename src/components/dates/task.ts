type InlineText = { kind: "text"; text: string };
type InlineHover = {
  kind: "hover";
  trigger: string;
  body: string;
  icon?: string;
  triggerClass?: string;
  side?: "top" | "right" | "left" | "bottom";
};
type InlineLink = {
  kind: "link";
  href: string;
  text: string;
  blank?: boolean;
};
type InlineFormat = { kind: "em" | "strong"; segments: InlineSegment[] };
type InlineSegment = InlineText | InlineHover | InlineLink | InlineFormat;

export type Task =
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered?: boolean; items: Task[] }
  | { type: "raw"; jsx: string };
