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

      <div className="section-shell hero-content flex min-h-[min(92vh,48rem)] flex-col justify-center pb-28 pt-16 sm:pb-36 sm:pt-12 lg:pb-40 lg:pt-10">
        <div className="hero-panel hero-manifesto -translate-y-10 sm:-translate-y-14 lg:-translate-y-16">
          <div className="reveal flex items-center gap-3">
            <BrandMark className="h-8 w-8 text-accent" />
            <p className="hero-label">{hero.eyebrow}</p>
          </div>

          <h1
            id="hero-heading"
            className="reveal reveal-delay-1 mt-6 font-serif text-[2.6rem] leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-[3.75rem]"
          >
            {hero.headline}
          </h1>

          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg leading-[1.65] text-foreground/85 sm:text-xl sm:leading-[1.7]">
            {hero.supporting}
          </p>

          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3 sm:mt-9">
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
            aria-label="Guiding principles"
            className="progression-track reveal reveal-delay-4 mt-10 sm:mt-11"
          >
            {hero.progression.map((step, index) => (
              <li key={step} className="flex items-center">
                {index > 0 ? (
                  <span className="progression-connector" aria-hidden="true">
                    ↓
                  </span>
                ) : null}
                <span className="progression-step">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
