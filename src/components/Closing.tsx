import { site } from "@/content/site";

export function Closing() {
  const { closing } = site;

  return (
    <section
      aria-labelledby="closing-heading"
      className="section-paper py-24 sm:py-32"
    >
      <div className="section-shell">
        <div className="prose-measure">
          <h2
            id="closing-heading"
            className="font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            {closing.headline}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-[1.7] text-muted sm:text-lg sm:leading-[1.75]">
            {closing.supporting}
          </p>
          <a
            href={closing.cta.href}
            className="mt-12 inline-flex items-center text-[0.95rem] font-semibold text-accent transition-colors hover:text-accent-strong"
            rel="noopener noreferrer"
            target="_blank"
          >
            {closing.cta.label}
            <span aria-hidden="true"> →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
