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

        <ul className="philosophy-columns mt-14 sm:mt-16">
          {philosophy.principles.map((principle) => (
            <li key={principle.title} className="philosophy-column">
              <h3 className="font-serif text-2xl leading-tight tracking-tight text-foreground sm:text-[1.65rem]">
                {principle.title}
              </h3>
              <p className="mt-4 max-w-xs text-base leading-[1.65] text-muted">
                {principle.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
