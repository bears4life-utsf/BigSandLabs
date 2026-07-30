export type ProjectStatus =
  | "Live"
  | "In Development"
  | "Experiment"
  | "Exploring";

export type Project = {
  id: string;
  name: string;
  description: string;
  category: string;
  status: ProjectStatus;
  href?: string;
  hrefLabel?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    id: "compass",
    name: "Compass",
    description:
      "A personal financial operating system designed to help people understand what is about to happen with their money—whether they are financially okay today, what bills and income remain, and what decision comes next. Not traditional accounting or budgeting software; it began as a clearer, calmer way to understand personal finances.",
    category: "Personal Finance",
    status: "In Development",
    accent: "#3E5C6B",
  },
  {
    id: "payson-football",
    name: "PaysonFootball.com",
    description:
      "A modern website created to give a local youth football program a clearer and more useful home for schedules, teams, coaches, announcements, and parent information. It began because the football program needed a better website.",
    category: "Community Software",
    status: "Live",
    href: "https://paysonfootball.com",
    hrefLabel: "Visit site",
    accent: "#5C6B58",
  },
  {
    id: "product-tradeoff-engine",
    name: "Product Tradeoff Engine",
    description:
      "An interactive thought experiment that helps product leaders visualize how decisions involving scope, time, quality, cost, risk, and team size affect the rest of a product system. It grew from years of explaining that every meaningful product decision involves tradeoffs.",
    category: "Product Leadership",
    status: "Experiment",
    href: "https://zekesmith.dev/#tradeoffs",
    hrefLabel: "Try the model",
    accent: "#6B5E4E",
  },
  {
    id: "pokescout",
    name: "PokeScout",
    description:
      "A lightweight Pokémon reference tool for searching characters, understanding type effectiveness, and identifying useful opponents. It began as a fun way to learn by building a real application.",
    category: "Learning Experiment",
    status: "Experiment",
    href: "https://bears4life-utsf.github.io/pokescout/",
    hrefLabel: "Open PokeScout",
    accent: "#7A6B3E",
  },
  {
    id: "electronic-waiver",
    name: "Electronic Waiver Tool",
    description:
      "A simple electronic waiver workflow that allows parents to review a PDF, sign it using a finger or mouse, and submit the completed document electronically. It began because chasing paper forms is unnecessary friction.",
    category: "Youth Sports Operations",
    status: "Exploring",
    accent: "#4F6678",
  },
];
