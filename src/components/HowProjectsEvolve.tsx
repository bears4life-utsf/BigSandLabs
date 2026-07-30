import { site } from "@/content/site";

export function HowProjectsEvolve() {
  const { evolution } = site;

  return (
    <section
      id="how-projects-evolve"
      aria-labelledby="evolution-heading"
      className="scroll-mt-20 border-b border-border/80 py-20 sm:py-24"
    >
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">{evolution.eyebrow}</p>
          <h2
            id="evolution-heading"
            className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            {evolution.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {evolution.intro}
          </p>
        </div>

        <ol className="mt-12 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {evolution.stages.map((stage, index) => (
            <li
              key={stage.title}
              className="relative border-t border-border py-6 sm:border-t-0 sm:border-l sm:px-5 sm:py-0 lg:px-6 first:sm:border-l-0 first:sm:pl-0"
            >
              <p className="text-xs font-semibold tracking-[0.14em] text-stone uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif text-xl text-foreground">
                {stage.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {stage.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
