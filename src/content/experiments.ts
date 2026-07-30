export type ExperimentStatus = "Live" | "Building" | "Exploring" | "Archived";

export type Experiment = {
  id: string;
  name: string;
  /** One-sentence origin story — the problem or desire that started it. */
  problem: string;
  description: string;
  category: string;
  status: ExperimentStatus;
  href?: string;
  hrefLabel?: string;
  accent: string;
};

export const experiments: Experiment[] = [
  {
    id: "payson-football",
    name: "PaysonFootball.com",
    problem: "Our football program deserved a better website.",
    description:
      "A clearer home for schedules, teams, coaches, announcements, and parent information for a local youth football program.",
    category: "Community",
    status: "Live",
    href: "https://paysonfootball.com",
    hrefLabel: "Visit site",
    accent: "#5C6B58",
  },
  {
    id: "timeframe",
    name: "TimeFrame",
    problem: "I wanted a simpler way to explore what happened in a given year.",
    description:
      "A tool for traveling to a year in history and seeing how events connect across time.",
    category: "Learning",
    status: "Live",
    href: "https://bears4life-utsf.github.io/TimeFrame/",
    hrefLabel: "Open TimeFrame",
    accent: "#4A6D8C",
  },
  {
    id: "chordframe",
    name: "ChordFrame",
    problem: "I got tired of scrolling through chord sheets while trying to play.",
    description:
      "Paste chords and lyrics into a clean multi-column page built for hands-free playing.",
    category: "Music",
    status: "Live",
    href: "https://bears4life-utsf.github.io/ChordFrame/",
    hrefLabel: "Open ChordFrame",
    accent: "#6B5E4E",
  },
  {
    id: "fairwaycast",
    name: "FairwayCast",
    problem: "I wanted a clearer answer to whether I should play golf today.",
    description:
      "Turns course weather into a should-I-play recommendation, with conditions and what to bring.",
    category: "Sports",
    status: "Live",
    href: "https://bears4life-utsf.github.io/FairwayCast/",
    hrefLabel: "Open FairwayCast",
    accent: "#2F6B4F",
  },
  {
    id: "pokescout",
    name: "PokeScout",
    problem: "I wanted to learn by building something fun.",
    description:
      "A lightweight reference for searching Pokémon, understanding type effectiveness, and spotting useful matchups.",
    category: "Learning",
    status: "Live",
    href: "https://bears4life-utsf.github.io/PokeScout/",
    hrefLabel: "Open PokeScout",
    accent: "#7A6B3E",
  },
];
