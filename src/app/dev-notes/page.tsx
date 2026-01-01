import Link from "next/link";

export default function DevNotesPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Dev Notes</h1>

      <p className="text-muted-foreground mb-6">
        This project tested whether pairing modern front-end primitives with
        disciplined engineering practices and AI-assisted workflows could
        materially increase delivery velocity without sacrificing quality.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">AI-assisted workflows</h2>
        <ul className="list-disc pl-5 text-muted-foreground">
          <li>Accelerated boilerplate and component scaffolding</li>
          <li>Generated unit test scaffolds and suggested mutations</li>
          <li>Proposed refactors and helper extraction to improve reusability</li>
          <li>Transformed CSV data into realistic mock datasets for testing</li>
          <li>Produced provisional asset prototypes for layout and validation</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Architect’s oversight</h2>
        <p className="text-muted-foreground">
          AI-assisted outputs were curated and validated under Architect-level
          judgment to preserve stability, maintainability, and consistent
          design decisions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Tradeoffs & Notes</h2>
        <ul className="list-disc pl-5 text-muted-foreground">
          <li>
            AI accelerates repetitive tasks but requires guardrails for
            correctness
          </li>
          <li>
            Tests and CI are essential to verify suggested changes quickly
          </li>
          <li>
            Not all suggestions were accepted; the Architect prioritized
            long-term maintenance
          </li>
        </ul>
      </section>

      <div className="mt-8">
        <Link href="/" className="text-primary underline">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
