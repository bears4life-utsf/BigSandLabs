import { BrandMark } from "@/components/BrandMark";
import { site } from "@/content/site";

export function Hero() {
  const { hero } = site;

  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-quiet border-b border-border"
    >
      <div className="section-shell flex flex-col justify-center py-20 sm:py-28 lg:min-h-[min(78vh,40rem)] lg:py-32">
        <div className="reveal flex items-center gap-3">
          <BrandMark className="h-8 w-8 text-accent" />
          <p className="eyebrow">Independent software workshop</p>
        </div>

        <h1
          id="hero-heading"
          className="reveal reveal-delay-1 mt-6 font-serif text-[2.6rem] leading-[0.98] tracking-tight text-foreground sm:text-5xl lg:text-[4rem]"
        >
          {hero.brand}
        </h1>

        <p className="reveal reveal-delay-1 mt-5 max-w-xl font-serif text-xl leading-snug text-foreground/85 sm:text-2xl">
          {hero.impression}
        </p>

        <p className="reveal reveal-delay-2 editorial-measure mt-8 text-lg leading-relaxed text-foreground/90 sm:text-xl">
          {hero.headline}
        </p>

        <p className="reveal reveal-delay-2 prose-measure mt-5 text-base leading-relaxed text-muted sm:text-lg">
          {hero.supporting}
        </p>

        <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-3">
          <a
            href={hero.primaryCta.href}
            className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-background-elevated transition-colors hover:bg-accent-strong"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center justify-center rounded-md border border-border-strong bg-background-elevated/80 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent-strong"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
