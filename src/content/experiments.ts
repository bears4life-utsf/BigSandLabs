export type ExperimentStatus = "Experiment" | "Live";

export type ExperimentAccent =
  | "gold"
  | "golf"
  | "payson"
  | "amber"
  | "rose"
  | "slate";

export type ExperimentIllustration =
  | "pokescout"
  | "fairwaycast"
  | "payson-football"
  | "chordframe"
  | "closetcast"
  | "timeframe";

export type Experiment = {
  id: string;
  catalogId: string;
  name: string;
  /** Problem statement — one concise sentence. */
  whySetup: string;
  /** Solution statement — one concise sentence. */
  whySupport: string;
  /** Bold takeaway — emotional payoff. */
  whyHighlight: string;
  status: ExperimentStatus;
  accent: ExperimentAccent;
  illustration: ExperimentIllustration;
  href?: string;
  hrefLabel?: string;
};

export const experiments: Experiment[] = [
  {
    id: "pokescout",
    catalogId: "EXP-001",
    name: "PokeScout",
    whySetup:
      "Learning Pokémon shouldn't require jumping between multiple websites.",
    whySupport:
      "Find characters, battles, and type matchups in one place.",
    whyHighlight: "Spend less time searching. More time understanding.",
    status: "Experiment",
    accent: "gold",
    illustration: "pokescout",
    href: "https://bears4life-utsf.github.io/PokeScout/",
    hrefLabel: "Open PokeScout",
  },
  {
    id: "fairwaycast",
    catalogId: "EXP-002",
    name: "FairwayCast",
    whySetup:
      "Weather apps show the forecast, not whether it's worth playing.",
    whySupport: "Turn weather into a simple golf recommendation.",
    whyHighlight: "Should I play golf today?",
    status: "Experiment",
    accent: "golf",
    illustration: "fairwaycast",
    href: "https://bears4life-utsf.github.io/FairwayCast/",
    hrefLabel: "Open FairwayCast",
  },
  {
    id: "payson-football",
    catalogId: "EXP-003",
    name: "Payson Football",
    whySetup:
      "Game-day information shouldn't be scattered across multiple places.",
    whySupport:
      "Bring schedules, locations, weather, and team details together.",
    whyHighlight: "Built for families following multiple players.",
    status: "Live",
    accent: "payson",
    illustration: "payson-football",
    href: "https://paysonfootball.com",
    hrefLabel: "Visit site",
  },
  {
    id: "chordframe",
    catalogId: "EXP-004",
    name: "ChordFrame",
    whySetup: "Playing guitar shouldn't require stopping to scroll.",
    whySupport: "Keep the entire song visible while playing.",
    whyHighlight: "Play through the whole song without interruption.",
    status: "Experiment",
    accent: "amber",
    illustration: "chordframe",
    href: "https://bears4life-utsf.github.io/ChordFrame/",
    hrefLabel: "Open ChordFrame",
  },
  {
    id: "closetcast",
    catalogId: "EXP-005",
    name: "ClosetCast",
    whySetup: "The temperature alone doesn't tell you what to wear.",
    whySupport: "Recommend clothing based on the real conditions.",
    whyHighlight: "Know what to wear before you leave.",
    status: "Experiment",
    accent: "rose",
    illustration: "closetcast",
    href: "https://bears4life-utsf.github.io/ClosetCast/",
    hrefLabel: "Open ClosetCast",
  },
  {
    id: "timeframe",
    catalogId: "EXP-006",
    name: "TimeFrame",
    whySetup: "Dates shouldn't just mark time.",
    whySupport: "Add historical context to every day.",
    whyHighlight: "Every date has a story.",
    status: "Experiment",
    accent: "slate",
    illustration: "timeframe",
    href: "https://bears4life-utsf.github.io/TimeFrame/",
    hrefLabel: "Open TimeFrame",
  },
];
