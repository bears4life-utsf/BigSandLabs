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
  /** Short setup sentence. */
  whySetup: string;
  /** Short supporting sentence or phrase. */
  whySupport: string;
  /** Emphasized closing line — the emotional hook. */
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
    whyHighlight:
      "Spend less time searching and more time understanding.",
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
      "Weather apps tell you the forecast, but not whether the conditions are worth playing in.",
    whySupport: "Turn the weather into a clear golf recommendation.",
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
      "Following youth football shouldn't require searching multiple places for game-day information.",
    whySupport:
      "Bring schedules, locations, weather, and team details together.",
    whyHighlight: "Especially for families following multiple players.",
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
    whySetup:
      "Playing guitar and singing shouldn't require stopping to scroll through a chord sheet.",
    whySupport: "Keep the full song visible while playing.",
    whyHighlight: "Play through the entire song without interruption.",
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
    whySetup:
      "The weather tells you the temperature, but not what to wear.",
    whySupport:
      "Turn the forecast and personal style into a practical outfit recommendation.",
    whyHighlight: "Know what to wear before opening the closet.",
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
    whySetup:
      "A date should tell a story, not just mark a place on the calendar.",
    whySupport:
      "Combine historical events and notable people into one experience.",
    whyHighlight: "Turn any date into a window through time.",
    status: "Experiment",
    accent: "slate",
    illustration: "timeframe",
    href: "https://bears4life-utsf.github.io/TimeFrame/",
    hrefLabel: "Open TimeFrame",
  },
];
