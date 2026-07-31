import { ExperimentCard } from "@/components/ExperimentCard";
import { experiments } from "@/content/experiments";
import { site } from "@/content/site";

export function Experiments() {
  const { experiments: copy } = site;

  return (
    <section
      id="experiments"
      aria-labelledby="experiments-heading"
      className="section-band scroll-mt-20 py-20 sm:py-28"
    >
      <div className="section-shell">
        <div className="prose-measure">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2
            id="experiments-heading"
            className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            {copy.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {copy.intro}
          </p>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-2">
          {experiments.map((experiment) => (
            <li key={experiment.id} className="h-full">
              <ExperimentCard experiment={experiment} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
