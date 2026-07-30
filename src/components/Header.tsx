"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-nav-bg backdrop-blur-md">
      <div className="section-shell flex h-14 items-center justify-between gap-4 sm:h-16">
        <Link
          href="/"
          className="shrink-0 text-[0.95rem] font-semibold tracking-tight text-foreground transition-colors hover:text-accent-strong sm:text-base"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 text-sm text-muted md:flex md:gap-2"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-1.5 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.founder.siteUrl}
            className="ml-2 rounded-md border border-border bg-background-elevated/70 px-2.5 py-1.5 text-foreground transition-colors hover:border-border-strong hover:text-accent-strong"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="sr-only">Founder&apos;s personal site: </span>
            {site.founder.siteLabel}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center rounded-md border border-border bg-background-elevated/70 px-3 py-1.5 text-sm text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background-elevated md:hidden"
        >
          <div className="section-shell flex flex-col gap-1 py-3 text-sm">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2.5 text-foreground transition-colors hover:bg-surface"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.founder.siteUrl}
              className="rounded-md px-2 py-2.5 text-foreground transition-colors hover:bg-surface"
              rel="noopener noreferrer"
              target="_blank"
              onClick={() => setOpen(false)}
            >
              {site.founder.siteLabel}
              <span className="text-muted"> — founder&apos;s site</span>
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
