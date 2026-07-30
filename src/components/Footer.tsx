import { BrandMark } from "@/components/BrandMark";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10 sm:py-12">
      <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <BrandMark className="h-7 w-7 text-accent" />
            <p className="text-sm font-semibold text-foreground">{site.name}</p>
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            {site.footer.tagline}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
          <a
            href={site.founder.siteUrl}
            className="transition-colors hover:text-foreground"
            rel="noopener noreferrer"
            target="_blank"
          >
            {site.founder.siteLabel}
          </a>
          <span aria-hidden="true" className="text-border-strong">
            ·
          </span>
          <p>© {year}</p>
        </div>
      </div>
    </footer>
  );
}
