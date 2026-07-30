import { site } from "@/content/site";

export function Hero() {
  const { hero } = site;

  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-atmosphere relative overflow-hidden border-b border-border/80"
    >
      <div className="hero-grain pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="section-shell relative flex min-h-[min(88vh,44rem)] flex-col justify-center py-16 sm:py-20 lg:py-24">
        <p className="eyebrow reveal">Independent software lab</p>

        <h1
          id="hero-heading"
          className="reveal reveal-delay-1 mt-5 font-serif text-[2.6rem] leading-none tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem]"
        >
          {hero.brand}
        </h1>

        <p className="reveal reveal-delay-1 mt-6 max-w-2xl text-xl leading-snug tracking-tight text-foreground/90 sm:text-2xl lg:text-[1.65rem]">
          {hero.headline}
        </p>

        <p className="reveal reveal-delay-2 mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {hero.supporting}
        </p>

        <div className="reveal reveal-delay-3 mt-9 flex flex-wrap gap-3">
          <a
            href={hero.primaryCta.href}
            className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-background-elevated transition-colors hover:bg-accent-strong"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center justify-center rounded-md border border-border-strong bg-background-elevated/60 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent-strong"
          >
            {hero.secondaryCta.label}
          </a>
        </div>

        <ol
          aria-label="How ideas progress"
          className="reveal reveal-delay-3 mt-14 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-muted"
        >
          {hero.progression.map((step, index) => (
            <li key={step} className="flex items-center gap-2">
              {index > 0 ? (
                <span
                  aria-hidden="true"
                  className="mx-1 h-px w-5 bg-border-strong sm:w-8"
                />
              ) : null}
              <span className="rounded-full border border-border bg-background-elevated/70 px-3 py-1 text-foreground/85">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
