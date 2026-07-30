export type ExperimentStatus = "Experiment" | "Live";

export type Experiment = {
  id: string;
  name: string;
  /** What was noticed — the beginning of the story. */
  observation: string;
  /** Optional emphasized line within the observation. */
  observationHighlight?: string;
  /** The exploration — how we attempt a better solution. */
  exploration: string;
  status: ExperimentStatus;
  href?: string;
  hrefLabel?: string;
  accent: string;
};

export const experiments: Experiment[] = [
  {
    id: "fairwaycast",
    name: "FairwayCast",
    observation:
      "Weather apps tell you the forecast, but they don't answer the real question:",
    observationHighlight: "Should I play golf today?",
    exploration:
      "Combine weather conditions into a simple recommendation that helps golfers decide whether to play and what to expect on the course.",
    status: "Experiment",
    href: "https://bears4life-utsf.github.io/FairwayCast/",
    hrefLabel: "Open FairwayCast",
    accent: "#2F6B4F",
  },
  {
    id: "pokescout",
    name: "PokeScout",
    observation:
      "Learning Pokémon alongside my kids meant constantly searching for information about characters, battles, and type matchups.",
    exploration:
      "Create a simple reference that makes it easy to explore Pokémon, understand strengths and weaknesses, and discover information more quickly.",
    status: "Experiment",
    href: "https://bears4life-utsf.github.io/PokeScout/",
    hrefLabel: "Open PokeScout",
    accent: "#7A6B3E",
  },
  {
    id: "payson-football",
    name: "PaysonFootball.com",
    observation:
      "Following youth football shouldn't require searching multiple places for schedules, locations, weather, and team information—especially for families with multiple players.",
    exploration:
      "Bring schedules, teams, maps, weather, and parent resources together into one simple destination.",
    status: "Live",
    href: "https://paysonfootball.com",
    hrefLabel: "Visit site",
    accent: "#5C6B58",
  },
  {
    id: "timeframe",
    name: "TimeFrame",
    observation:
      "Historical events and notable birthdays are scattered across different sources, making it difficult to see what makes a particular day interesting.",
    exploration:
      "Combine multiple APIs into a single timeline that turns any date into a window through history.",
    status: "Experiment",
    href: "https://bears4life-utsf.github.io/TimeFrame/",
    hrefLabel: "Open TimeFrame",
    accent: "#4A6D8C",
  },
  {
    id: "chordframe",
    name: "ChordFrame",
    observation:
      "Playing guitar shouldn't require constantly scrolling through chord sheets and taking a hand off the instrument.",
    exploration:
      "Display chords and lyrics in a clean multi-column layout so an entire song stays visible while you play.",
    status: "Experiment",
    href: "https://bears4life-utsf.github.io/ChordFrame/",
    hrefLabel: "Open ChordFrame",
    accent: "#6B5E4E",
  },
];
