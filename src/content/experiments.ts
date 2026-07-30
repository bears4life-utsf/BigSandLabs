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
    id: "product-tradeoff-engine",
    name: "Product Tradeoff Engine",
    problem: "I wanted a better way to explain product tradeoffs.",
    description:
      "An interactive model for seeing how scope, time, quality, cost, risk, and team size pull on each other.",
    category: "Product thinking",
    status: "Exploring",
    href: "https://zekesmith.dev/#tradeoffs",
    hrefLabel: "Try the model",
    accent: "#8A5E45",
  },
  {
    id: "pokescout",
    name: "PokeScout",
    problem: "I wanted to learn by building something fun.",
    description:
      "A lightweight reference for searching Pokémon, understanding type effectiveness, and spotting useful matchups.",
    category: "Learning",
    status: "Live",
    href: "https://bears4life-utsf.github.io/pokescout/",
    hrefLabel: "Open PokeScout",
    accent: "#7A6B3E",
  },
  {
    id: "electronic-waiver",
    name: "Electronic Waiver Tool",
    problem: "I got tired of chasing paper forms.",
    description:
      "A simple flow for reviewing a PDF waiver, signing with a finger or mouse, and submitting it electronically.",
    category: "Operations",
    status: "Exploring",
    accent: "#4F6678",
  },
];
