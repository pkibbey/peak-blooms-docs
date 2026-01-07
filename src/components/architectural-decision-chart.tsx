"use client";

export interface ArchitecturalDecisionChartProps {
  baselineTimeMinutes?: number;
  aiTimeMinutes?: number;
  title?: string;
}

function humanizeMinutes(minutes?: number) {
  if (minutes == null || Number.isNaN(minutes)) return "—";
  const m = Math.max(0, Math.round(minutes));
  const hours = Math.floor(m / 60);
  const mins = m % 60;
  if (hours > 0 && mins > 0) return `${hours}h ${mins}m`;
  if (hours > 0) return `${hours}h`;
  return `${mins}m`;
}

export default function ArchitecturalDecisionChart({
  baselineTimeMinutes,
  aiTimeMinutes,
  title,
}: ArchitecturalDecisionChartProps) {
  const baseline = baselineTimeMinutes ?? null;
  const ai = aiTimeMinutes ?? null;

  if (baseline === null) return null; // hide entire graphic when both missing

  const timeSaved = baseline != null && ai != null ? baseline - ai : baseline;
  const percentSaved =
    baseline != null && ai != null && baseline > 0
      ? Math.round(((baseline - ai) / baseline) * 1000) / 10
      : 100; // one decimal

  const accessibleSummary = (() => {
    const prefix = title ? `${title}: ` : "";
    if (
      baseline != null &&
      ai != null &&
      baseline > 0 &&
      timeSaved != null &&
      percentSaved != null
    ) {
      return `${prefix}AI reduced time by ${humanizeMinutes(timeSaved)} (${percentSaved}%).`;
    }
    if (baseline != null && ai == null) {
      return `${prefix}Baseline estimate ${humanizeMinutes(baseline)}. AI estimate not provided.`;
    }
    if (ai != null && baseline == null) {
      return `${prefix}AI estimate ${humanizeMinutes(ai)}. Baseline estimate not provided.`;
    }
    return `${prefix}Time estimates not available.`;
  })();

  return (
    <div className="space-y-1">
      <span className="sr-only">{accessibleSummary}</span>

      {percentSaved != null && timeSaved != null && baseline != null ? (
        <div className="mt-2 text-sm text-muted-foreground">
          *<span className="text-primary/80">{humanizeMinutes(timeSaved)}</span>{" "}
          time saved
        </div>
      ) : null}
    </div>
  );
}
