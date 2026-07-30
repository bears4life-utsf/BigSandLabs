export type ExperimentStatus = "Experiment" | "Live";

export type Experiment = {
  id: string;
  name: string;
  /** Short curiosity hook — why this experiment exists. */
  why: string;
  /** Optional emphasized follow-up line. */
  whyHighlight?: string;
  status: ExperimentStatus;
  href?: string;
  hrefLabel?: string;
};

export const experiments: Experiment[] = [
  {
    id: "pokescout",
    name: "PokeScout",
    why: "Learning Pokémon shouldn't require jumping between multiple websites to understand characters, battles, and type matchups.",
    status: "Experiment",
    href: "https://bears4life-utsf.github.io/PokeScout/",
    hrefLabel: "Open PokeScout",
  },
  {
    id: "fairwaycast",
    name: "FairwayCast",
    why: "Weather apps tell you the forecast, but they don't answer the real question:",
    whyHighlight: "Should I play golf today?",
    status: "Experiment",
    href: "https://bears4life-utsf.github.io/FairwayCast/",
    hrefLabel: "Open FairwayCast",
  },
  {
    id: "payson-football",
    name: "Payson Football",
    why: "Following youth football shouldn't require searching multiple places for schedules, locations, weather, and team information—especially for families with multiple players.",
    status: "Live",
    href: "https://paysonfootball.com",
    hrefLabel: "Visit site",
  },
  {
    id: "chordframe",
    name: "ChordFrame",
    why: "Playing through an entire song shouldn't require stopping to scroll.",
    status: "Experiment",
    href: "https://bears4life-utsf.github.io/ChordFrame/",
    hrefLabel: "Open ChordFrame",
  },
  {
    id: "closetcast",
    name: "ClosetCast",
    why: "The weather tells you the temperature—but not what to wear.",
    status: "Experiment",
    href: "https://bears4life-utsf.github.io/ClosetCast/",
    hrefLabel: "Open ClosetCast",
  },
  {
    id: "timeframe",
    name: "TimeFrame",
    why: "A date should tell a story, not just mark a place on the calendar.",
    status: "Experiment",
    href: "https://bears4life-utsf.github.io/TimeFrame/",
    hrefLabel: "Open TimeFrame",
  },
];
