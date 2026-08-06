export type ExperimentStatus = "Experiment" | "Live";

export type ExperimentAccent =
  | "porch"
  | "gold"
  | "golf"
  | "payson"
  | "amber"
  | "rose"
  | "slate";

export type ExperimentIllustration =
  | "porchlight"
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
  /** Body description for the experiment card. */
  description: string;
  status: ExperimentStatus;
  accent: ExperimentAccent;
  illustration: ExperimentIllustration;
  href?: string;
  hrefLabel?: string;
};

export const experiments: Experiment[] = [
  {
    id: "porchlight",
    catalogId: "EXP-001",
    name: "PorchLight",
    description:
      "The best playgrounds aren't always next door. Discover shared adventures for families who don't live in the same neighborhood.",
    status: "Experiment",
    accent: "porch",
    illustration: "porchlight",
    href: "https://bears4life-utsf.github.io/porchlight/",
    hrefLabel: "Open PorchLight",
  },
  {
    id: "pokescout",
    catalogId: "EXP-002",
    name: "PokeScout",
    description:
      "Learning Pokémon shouldn't mean jumping between websites. Explore Pokémon, moves, type matchups, and battles—all without leaving the page.",
    status: "Experiment",
    accent: "gold",
    illustration: "pokescout",
    href: "https://bears4life-utsf.github.io/PokeScout/",
    hrefLabel: "Open PokeScout",
  },
  {
    id: "fairwaycast",
    catalogId: "EXP-003",
    name: "FairwayCast",
    description:
      "Weather apps tell you the forecast, not whether it's worth playing. Turn today's conditions into a simple golf recommendation.",
    status: "Experiment",
    accent: "golf",
    illustration: "fairwaycast",
    href: "https://bears4life-utsf.github.io/FairwayCast/",
    hrefLabel: "Open FairwayCast",
  },
  {
    id: "payson-football",
    catalogId: "EXP-004",
    name: "Payson Football",
    description:
      "Game-day information shouldn't be scattered across multiple places. Find schedules, locations, weather, and team updates in one place.",
    status: "Live",
    accent: "payson",
    illustration: "payson-football",
    href: "https://paysonfootball.com",
    hrefLabel: "Visit site",
  },
  {
    id: "chordframe",
    catalogId: "EXP-005",
    name: "ChordFrame",
    description:
      "Playing guitar shouldn't mean stopping to scroll. Keep the entire song visible from the first chord to the last.",
    status: "Experiment",
    accent: "amber",
    illustration: "chordframe",
    href: "https://bears4life-utsf.github.io/ChordFrame/",
    hrefLabel: "Open ChordFrame",
  },
  {
    id: "closetcast",
    catalogId: "EXP-006",
    name: "ClosetCast",
    description:
      "Knowing the temperature isn't the same as knowing what to wear. Get clothing recommendations based on the conditions you'll actually experience.",
    status: "Experiment",
    accent: "rose",
    illustration: "closetcast",
    href: "https://bears4life-utsf.github.io/ClosetCast/",
    hrefLabel: "Open ClosetCast",
  },
  {
    id: "timeframe",
    catalogId: "EXP-007",
    name: "TimeFrame",
    description:
      "Dates shouldn't just mark time. Discover the people and events that make every day in history worth remembering.",
    status: "Experiment",
    accent: "slate",
    illustration: "timeframe",
    href: "https://bears4life-utsf.github.io/TimeFrame/",
    hrefLabel: "Open TimeFrame",
  },
];
