import { site } from "@/content/site";

export function HowProjectsEvolve() {
  const { evolution } = site;

  return (
    <section
      id="how-projects-evolve"
      aria-labelledby="evolution-heading"
      className="section-sand scroll-mt-20 border-b border-border/80 py-20 sm:py-24"
    >
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">{evolution.eyebrow}</p>
          <h2
            id="evolution-heading"
            className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            {evolution.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {evolution.intro}
          </p>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {evolution.stages.map((stage, index) => (
            <li key={stage.title} className="principle-card">
              <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
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
