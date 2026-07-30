import { BrandMark } from "@/components/BrandMark";
import { LandscapeBackdrop } from "@/components/LandscapeBackdrop";
import { site } from "@/content/site";

export function Hero() {
  const { hero } = site;

  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-shell relative min-h-[min(92vh,48rem)] overflow-hidden border-b border-border/70"
    >
      <LandscapeBackdrop />

      <div className="section-shell hero-content flex min-h-[min(92vh,48rem)] flex-col justify-end pb-14 pt-24 sm:justify-center sm:pb-20 sm:pt-24 lg:pb-24">
        <div className="hero-panel">
          <div className="reveal flex items-center gap-3">
            <BrandMark className="h-9 w-9 text-accent" />
            <p className="eyebrow">Independent software lab</p>
          </div>

          <h1
            id="hero-heading"
            className="reveal reveal-delay-1 mt-5 font-serif text-[2.75rem] leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-[4.5rem]"
          >
            {hero.brand}
          </h1>

          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-xl leading-snug text-foreground/90 sm:text-2xl lg:text-[1.7rem]">
            {hero.headline}
          </p>

          <p className="reveal reveal-delay-2 mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            {hero.supporting}
          </p>

          <div className="reveal reveal-delay-3 mt-9 flex flex-wrap gap-3">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-background-elevated shadow-soft transition-colors hover:bg-accent-strong"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-md border border-border-strong bg-background-elevated/75 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-accent hover:text-accent-strong"
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          <ol
            aria-label="How ideas progress"
            className="progression-track reveal reveal-delay-4 mt-12"
          >
            {hero.progression.map((step, index) => (
              <li key={step} className="flex items-center">
                {index > 0 ? (
                  <span className="progression-connector" aria-hidden="true" />
                ) : null}
                <span className="progression-step">
                  <span className="progression-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
