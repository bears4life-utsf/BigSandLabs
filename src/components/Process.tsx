import { site } from "@/content/site";

export function Process() {
  const { process } = site;

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="section-paper scroll-mt-20 py-20 sm:py-28"
    >
      <div className="section-shell">
        <div className="prose-measure">
          <p className="eyebrow">{process.eyebrow}</p>
          <h2
            id="process-heading"
            className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            {process.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {process.intro}
          </p>
        </div>

        <ol className="process-rail mt-14">
          {process.stages.map((stage, index) => (
            <li key={stage} className="process-step">
              <p className="text-xs font-semibold tracking-[0.14em] text-stone uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 font-serif text-2xl text-foreground">{stage}</p>
              {index < process.stages.length - 1 ? (
                <p
                  className="mt-3 text-sm text-muted md:hidden"
                  aria-hidden="true"
                >
                  ↓
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
