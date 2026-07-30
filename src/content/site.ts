export const site = {
  name: "Big Sand Labs",
  title: "Big Sand Labs — Where ideas become experiments",
  description:
    "Big Sand Labs is an independent software workshop for practical experiments born from curiosity and real-world problems.",
  url: "https://bears4life-utsf.github.io/BigSandLabs",
  founder: {
    name: "Zeke Smith",
    siteLabel: "ZekeSmith.dev",
    siteUrl: "https://zekesmith.dev",
  },
  nav: [
    { label: "Experiments", href: "#experiments" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "About", href: "#about" },
  ],
  hero: {
    brand: "Big Sand Labs",
    headline: "Practical software born from curiosity and real-world problems.",
    supporting:
      "We build software, AI tools, and digital products that often begin as personal projects, experiments, or solutions to everyday frustrations.",
    primaryCta: { label: "Explore the experiments", href: "#experiments" },
    secondaryCta: { label: "Read our philosophy", href: "#philosophy" },
    progression: ["Problem", "Experiment", "Tool", "Product"] as const,
  },
  philosophy: {
    eyebrow: "Philosophy",
    headline: "Build the things you wish existed.",
    intro:
      "Everything starts with curiosity. We notice friction, build to learn, and share what proves useful.",
    pullQuote:
      "We do not start with markets. We start with problems worth solving.",
    principles: [
      {
        title: "Notice friction",
        description:
          "Pay attention to unnecessary work, confusing experiences, and everyday problems.",
      },
      {
        title: "Learn by building",
        description:
          "Build real things to understand ideas, technologies, and possibilities.",
      },
      {
        title: "Share what works",
        description:
          "When an experiment proves genuinely useful, share it with others.",
      },
    ],
  },
  experiments: {
    eyebrow: "Experiments",
    headline: "Currently on the workbench",
    intro:
      "Each experiment began with a real problem or a desire to learn. They sit at different stages—from early builds to tools already in use.",
  },
  process: {
    eyebrow: "How ideas move",
    headline: "Not every experiment needs to become a product.",
    intro:
      "Stopping at any stage is okay. A successful experiment does not always need to become a company.",
    stages: ["Problem", "Experiment", "Tool", "Product"] as const,
  },
  about: {
    eyebrow: "About",
    headline: "An independent software workshop",
    paragraphs: [
      "Big Sand Labs was created by Zeke Smith, a longtime software product leader who learns best by building. It is a home for the tools, experiments, and products that emerge when practical problems meet curiosity.",
      "After a career building and leading software products, Zeke uses personal projects to deepen his technical and AI expertise—and to create software he wishes existed.",
    ],
    linkLabel: "Visit ZekeSmith.dev",
    linkNote:
      "Leadership writing, professional background, and product thinking.",
  },
  closing: {
    headline: "What problem is worth exploring next?",
    supporting:
      "New work appears here as ideas become experiments and experiments become useful tools.",
    primaryCta: { label: "View experiments", href: "#experiments" },
    secondaryCta: {
      label: "Visit ZekeSmith.dev",
      href: "https://zekesmith.dev",
    },
  },
  footer: {
    tagline: "Notice friction. Learn by building. Share what works.",
  },
} as const;
