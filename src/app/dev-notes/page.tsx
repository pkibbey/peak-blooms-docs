import Link from "next/link";

export default function DevNotesPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Dev Notes</h1>

      <p className="text-muted-foreground mb-6">
        This project tested whether pairing modern front-end primitives with
        disciplined engineering practices and targeted AI assistance could
        materially increase delivery velocity without sacrificing quality.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How AI was used</h2>
        <ul className="list-disc pl-5 text-muted-foreground">
          <li>Boilerplate generation for components and pages</li>
          <li>Unit test scaffolding and mutation suggestions</li>
          <li>
            Refactors and extraction of helpers to improve component reusability
          </li>
          <li>
            Parsing CSV product data into realistic mock datasets used by the
            site
          </li>
          <li>
            Generating product and site feature images (asset prototypes) for
            layout and testing
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Architect’s oversight</h2>
        <p className="text-muted-foreground">
          AI-generated suggestions were curated, validated, and integrated under
          Architect-level judgment to ensure stability, maintainability, and
          consistent design decisions.
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
