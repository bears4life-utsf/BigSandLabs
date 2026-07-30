import { site } from "@/content/site";

export function Closing() {
  const { closing } = site;

  return (
    <section
      aria-labelledby="closing-heading"
      className="section-paper py-20 sm:py-28"
    >
      <div className="section-shell">
        <div className="prose-measure">
          <h2
            id="closing-heading"
            className="font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            {closing.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {closing.supporting}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={closing.primaryCta.href}
              className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-background-elevated transition-colors hover:bg-accent-strong"
            >
              {closing.primaryCta.label}
            </a>
            <a
              href={closing.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-md border border-border-strong bg-background-elevated/80 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent-strong"
              rel="noopener noreferrer"
              target="_blank"
            >
              {closing.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
