export type ExperimentStage =
  | "In Use"
  | "Working Tool"
  | "Early Experiment"
  | "Learning Build"
  | "Archived";

export type Experiment = {
  id: string;
  name: string;
  /** One-sentence origin story — why it exists. */
  problem: string;
  /** One concrete sentence — what someone can do with it. */
  capability: string;
  category: string;
  stage: ExperimentStage;
  href?: string;
  hrefLabel?: string;
  accent: string;
};

export const experiments: Experiment[] = [
  {
    id: "payson-football",
    name: "PaysonFootball.com",
    problem: "Our football program deserved a better website.",
    capability:
      "Find schedules, coaches, announcements, and team information in one place.",
    category: "Community Software",
    stage: "In Use",
    href: "https://paysonfootball.com",
    hrefLabel: "Visit site",
    accent: "#5C6B58",
  },
  {
    id: "timeframe",
    name: "TimeFrame",
    problem: "I wanted a simpler way to explore what happened in a given year.",
    capability:
      "Enter a year and browse the events that shaped that moment in history.",
    category: "History Tool",
    stage: "Working Tool",
    href: "https://bears4life-utsf.github.io/TimeFrame/",
    hrefLabel: "Open TimeFrame",
    accent: "#4A6D8C",
  },
  {
    id: "chordframe",
    name: "ChordFrame",
    problem: "I got tired of scrolling through chord sheets while playing.",
    capability:
      "View songs in a clean multi-column layout designed to stay visible while you play.",
    category: "Music Tool",
    stage: "Working Tool",
    href: "https://bears4life-utsf.github.io/ChordFrame/",
    hrefLabel: "Open ChordFrame",
    accent: "#6B5E4E",
  },
  {
    id: "fairwaycast",
    name: "FairwayCast",
    problem: "I wanted a clearer answer to whether I should play golf today.",
    capability:
      "Check a course and tee time, then get a clear should-I-play recommendation.",
    category: "Sports Tool",
    stage: "Working Tool",
    href: "https://bears4life-utsf.github.io/FairwayCast/",
    hrefLabel: "Open FairwayCast",
    accent: "#2F6B4F",
  },
  {
    id: "pokescout",
    name: "PokeScout",
    problem: "I wanted to learn by building something fun.",
    capability:
      "Search Pokémon and compare types to understand matchups at a glance.",
    category: "Learning Build",
    stage: "Learning Build",
    href: "https://bears4life-utsf.github.io/PokeScout/",
    hrefLabel: "Open PokeScout",
    accent: "#7A6B3E",
  },
];
