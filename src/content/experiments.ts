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
  /**
   * Editorial statement lines.
   * Empty string = intentional vertical pause between groups.
   */
  why: string[];
  /** Optional emphasized closing line (e.g. FairwayCast). */
  whyHighlight?: string;
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
    why: [
      "Learning Pokémon shouldn't require",
      "jumping between multiple websites.",
      "",
      "Characters.",
      "Battles.",
      "Type matchups.",
      "",
      "One place.",
    ],
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
    why: [
      "Weather apps tell you the forecast.",
      "They don't answer the real question:",
    ],
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
    why: [
      "Following youth football shouldn't require",
      "searching multiple places.",
      "",
      "Schedules.",
      "Locations.",
      "Weather.",
      "Team information.",
      "",
      "Especially with multiple players.",
    ],
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
    why: [
      "Playing through an entire song",
      "shouldn't require stopping to scroll.",
    ],
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
    why: [
      "The weather tells you the temperature—",
      "but not what to wear.",
    ],
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
    why: [
      "A date should tell a story,",
      "not just mark a place on the calendar.",
    ],
    status: "Experiment",
    accent: "slate",
    illustration: "timeframe",
    href: "https://bears4life-utsf.github.io/TimeFrame/",
    hrefLabel: "Open TimeFrame",
  },
];
