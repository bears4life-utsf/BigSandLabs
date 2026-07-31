export const site = {
  name: "Big Sand Labs",
  title: "Big Sand Labs — Build What Matters",
  description:
    "Big Sand Labs exists because the best software starts with curiosity.",
  url: "https://bears4life-utsf.github.io/BigSandLabs",
  founder: {
    name: "Zeke S. Smith",
    siteLabel: "ZekeSmith.dev",
    siteUrl: "https://zekesmith.dev",
  },
  nav: [
    { label: "Philosophy", href: "#philosophy" },
    { label: "Experiments", href: "#experiments" },
    { label: "About", href: "#about" },
  ],
  hero: {
    eyebrow: "Curiosity-Driven Software",
    headline: "Build What Matters.",
    supporting: "Every experiment begins with a simple observation.",
    primaryCta: { label: "Explore Experiments", href: "#experiments" },
    secondaryCta: { label: "Why Big Sand Labs?", href: "#philosophy" },
    progression: ["Observe", "Experiment", "Share"] as const,
  },
  about: {
    eyebrow: "Built from Curiosity",
    headline: "About Big Sand Labs",
    paragraphs: [
      "Big Sand Labs is where Zeke S. Smith explores ideas through software. Every experiment begins with a real problem, a simple question, and a willingness to learn. Some experiments remain experiments. The most useful ideas become products worth sharing.",
    ],
    linkLabel: "Visit ZekeSmith.dev",
    linkNote: "Writing, background, and product thinking.",
  },
  philosophy: {
    eyebrow: "Philosophy",
    headline:
      "Every experiment begins with curiosity. The good ones earn a future.",
    intro: "Explore ideas by building. Share what proves genuinely useful.",
    principles: [
      {
        title: "Observe",
        description: "Pay attention to the everyday problems.",
      },
      {
        title: "Experiment",
        description: "Start small. Every experiment teaches something.",
      },
      {
        title: "Share",
        description: "When something proves genuinely useful, share it.",
      },
    ],
  },
  experiments: {
    eyebrow: "Experiments",
    headline: "Built from Curiosity",
    intro:
      "Ideas become experiments. The best ones become products worth sharing.",
  },
  closing: {
    headline: "Beyond the Lab",
    supporting:
      "Big Sand Labs is where I continue learning through experimentation. ZekeSmith.dev is where I share what I've learned throughout my career—through writing, interactive tools, and practical frameworks for product leaders.",
    cta: {
      label: "Visit ZekeSmith.dev",
      href: "https://zekesmith.dev",
    },
  },
  footer: {
    tagline: "Curiosity. Experiment. Product worth sharing.",
  },
} as const;
