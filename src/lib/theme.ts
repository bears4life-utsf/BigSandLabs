export const THEME_STORAGE_KEY = "bsl-theme";

export type Theme = "day" | "night";

export function isTheme(value: string | null | undefined): value is Theme {
  return value === "day" || value === "night";
}

export function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "day";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "night"
    : "day";
}

/** Resolve theme: stored preference wins; otherwise system preference. */
export function resolveTheme(stored: string | null): Theme {
  return isTheme(stored) ? stored : getSystemTheme();
}

export function readStoredTheme(): string | null {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function getDocumentTheme(): Theme {
  if (typeof document === "undefined") return "day";
  return document.documentElement.getAttribute("data-theme") === "night"
    ? "night"
    : "day";
}

export function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* private mode / blocked storage */
  }

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute(
      "content",
      theme === "night" ? "#1a2230" : "#f4f0e8",
    );
  }
}

/** Inline bootstrap — keep in sync with applyTheme / resolveTheme. */
export const THEME_BOOTSTRAP_SCRIPT = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var s=localStorage.getItem(k);var t=(s==="day"||s==="night")?s:(window.matchMedia("(prefers-color-scheme: dark)").matches?"night":"day");document.documentElement.setAttribute("data-theme",t);var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",t==="night"?"#1a2230":"#f4f0e8");}catch(e){document.documentElement.setAttribute("data-theme","day");}})();`;
