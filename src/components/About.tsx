import { site } from "@/content/site";

export function About() {
  const { about, founder } = site;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-band scroll-mt-20 py-20 sm:py-28"
    >
      <div className="section-shell grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-16">
        <div className="prose-measure">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2
            id="about-heading"
            className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            {about.headline}
          </h2>

          <div className="mt-8 space-y-6">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-[1.7] text-muted sm:text-lg sm:leading-[1.75]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <aside className="border border-border bg-background-elevated p-6 sm:p-7">
          <p className="text-sm font-medium text-stone">Created by</p>
          <p className="mt-2 font-serif text-2xl text-foreground">
            {founder.name}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {about.linkNote}
          </p>
          <a
            href={founder.siteUrl}
            className="mt-5 inline-flex text-sm font-medium text-accent transition-colors hover:text-accent-strong"
            rel="noopener noreferrer"
            target="_blank"
          >
            {about.linkLabel}
            <span aria-hidden="true"> →</span>
          </a>
        </aside>
      </div>
    </section>
  );
}
