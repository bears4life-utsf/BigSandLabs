import { site } from "@/content/site";

export function About() {
  const { about, founder } = site;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-b border-border/80 py-20 sm:py-24"
    >
      <div className="section-shell grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end lg:gap-16">
        <div>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2
            id="about-heading"
            className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            {about.headline}
          </h2>
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="mt-5 text-base leading-relaxed text-muted sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="rounded-xl border border-border bg-background-elevated p-6 shadow-soft sm:p-7">
          <p className="text-sm font-medium text-foreground">Created by</p>
          <p className="mt-1 font-serif text-2xl text-foreground">
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
