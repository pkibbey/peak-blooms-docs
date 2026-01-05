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

  const max = Math.max(baseline ?? 0, ai ?? 0, 1);
  const baselinePct =
    baseline != null ? Math.min(100, Math.round((baseline / max) * 100)) : 0;
  const aiPct = ai != null ? Math.min(100, Math.round((ai / max) * 100)) : 0;

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

      {ai != null && (
        <>
          <div className="mt-2 flex items-center justify-between gap-2">
            <div className="grid grid-cols-[60px_1fr_auto] items-center gap-2 w-3/4">
              <div className="text-xs text-muted-foreground mr-2">AI</div>
              <div className="w-40 bg-slate-100 rounded overflow-hidden h-3">
                <div
                  aria-hidden
                  style={{ width: `${aiPct}%` }}
                  className="h-3 bg-primary"
                />
              </div>
              <div className="ml-2 text-xs text-muted-foreground">
                {ai != null ? humanizeMinutes(ai) : "—"}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="grid grid-cols-[60px_1fr_auto] items-center gap-2 w-3/4">
              <div className="text-xs text-muted-foreground mr-2">Baseline</div>
              <div className="w-40 bg-slate-100 rounded overflow-hidden h-3">
                <div
                  aria-hidden
                  style={{ width: `${baselinePct}%` }}
                  className="h-3 bg-slate-400"
                />
              </div>
              <div className="ml-2 text-xs text-muted-foreground">
                {baseline != null ? humanizeMinutes(baseline) : "—"}
              </div>
            </div>
          </div>
        </>
      )}

      {percentSaved != null && timeSaved != null && baseline != null ? (
        <div className="mt-2 text-xs text-muted-foreground">
          {humanizeMinutes(timeSaved)} total time saved ({percentSaved}%)
        </div>
      ) : null}
    </div>
  );
}
