type BrandMarkProps = {
  className?: string;
  title?: string;
};

/** Abstract mark: ridge, water, and light — not a literal logo illustration. */
export function BrandMark({ className, title }: BrandMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <rect width="32" height="32" rx="8" fill="currentColor" fillOpacity="0.08" />
      <path
        d="M5 22.5C9.5 17.5 13 15.2 16.5 17.2C20 19.2 23.2 16.8 27 13"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M5 25.5C10 22.2 14.2 21.4 18 22.8C21.8 24.2 24.5 22.5 27 20"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeOpacity="0.45"
      />
      <circle cx="22.5" cy="14.2" r="2.1" fill="currentColor" fillOpacity="0.7" />
    </svg>
  );
}
