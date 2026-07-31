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
    eyebrow: "About",
    headline: "An independent software lab",
    paragraphs: [
      "Big Sand Labs was created by Zeke S. Smith as a place to explore ideas through experimentation. Every experiment begins with a real problem, a simple question, and a willingness to learn. The most useful ideas become products worth sharing.",
    ],
    linkLabel: "Visit ZekeSmith.dev",
    linkNote: "Writing, background, and product thinking.",
  },
  philosophy: {
    eyebrow: "Philosophy",
    headline: "Curiosity leads. Usefulness decides.",
    intro: "Explore ideas by building. Share what proves genuinely useful.",
    principles: [
      {
        title: "Observe",
        description:
          "Pay attention to the everyday problems people simply learn to live with.",
      },
      {
        title: "Experiment",
        description:
          "Build to understand. Start small. Every experiment teaches something.",
      },
      {
        title: "Share",
        description:
          "When something proves genuinely useful, share it.",
      },
    ],
  },
  experiments: {
    eyebrow: "Experiments",
    headline: "On the workbench",
    intro:
      "Open one to explore why it exists—and what it became.",
  },
  closing: {
    headline: "Beyond the Lab",
    supporting:
      "Big Sand Labs is where I explore ideas by building. ZekeSmith.dev is where I explore them through writing, leadership, and product thinking.",
    cta: {
      label: "Visit ZekeSmith.dev",
      href: "https://zekesmith.dev",
    },
  },
  footer: {
    tagline: "Curiosity. Experiment. Product worth sharing.",
  },
} as const;
