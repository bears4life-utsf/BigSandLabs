import { site } from "@/content/site";

export function Philosophy() {
  const { philosophy } = site;

  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="section-paper scroll-mt-20 py-20 sm:py-28"
    >
      <div className="section-shell">
        <div className="prose-measure">
          <p className="eyebrow">{philosophy.eyebrow}</p>
          <h2
            id="philosophy-heading"
            className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            {philosophy.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {philosophy.intro}
          </p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {philosophy.principles.map((principle) => (
            <li key={principle.title} className="principle-card">
              <h3 className="font-serif text-2xl leading-tight text-foreground">
                {principle.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                {principle.description}
              </p>
            </li>
          ))}
        </ul>

        <blockquote className="prose-measure mt-16 border-l-2 border-accent pl-5 sm:pl-6">
          <p className="font-serif text-xl leading-snug text-foreground sm:text-2xl">
            {philosophy.pullQuote}
          </p>
        </blockquote>
      </div>
    </section>
  );
}
