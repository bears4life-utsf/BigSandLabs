import { site } from "@/content/site";

export function Philosophy() {
  const { philosophy } = site;

  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="scroll-mt-20 border-b border-border/80 py-20 sm:py-24"
    >
      <div className="section-shell">
        <div className="max-w-3xl">
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
          <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
            {philosophy.supporting}
          </p>
        </div>

        <blockquote className="mt-12 max-w-3xl border-l-2 border-accent pl-5 sm:pl-6">
          <p className="font-serif text-xl leading-snug text-foreground sm:text-2xl">
            {philosophy.pullQuote}
          </p>
        </blockquote>

        <ul className="mt-14 grid gap-6 sm:grid-cols-3">
          {philosophy.principles.map((principle, index) => (
            <li
              key={principle.title}
              className="border-t border-border pt-5"
            >
              <p className="text-xs font-semibold tracking-[0.14em] text-stone uppercase">
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
