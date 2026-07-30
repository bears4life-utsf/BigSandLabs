import { site } from "@/content/site";

export function Philosophy() {
  const { philosophy } = site;

  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="section-sand scroll-mt-20 border-b border-border/80 py-20 sm:py-24"
    >
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">{philosophy.eyebrow}</p>
          <h2
            id="philosophy-heading"
            className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            {philosophy.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {philosophy.intro}
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
            {philosophy.supporting}
          </p>
        </div>

        <blockquote className="pull-quote mt-12 max-w-3xl">
          <p className="font-serif text-xl leading-snug text-foreground sm:text-2xl">
            {philosophy.pullQuote}
          </p>
        </blockquote>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {philosophy.principles.map((principle, index) => (
            <li key={principle.title} className="principle-card">
              <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif text-xl text-foreground">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                {principle.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
