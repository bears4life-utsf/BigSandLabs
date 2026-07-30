export const site = {
  name: "Big Sand Labs",
  title: "Big Sand Labs — Practical software born from curiosity",
  description:
    "Big Sand Labs builds practical software, AI tools, and digital products that begin as personal projects, experiments, or solutions to everyday problems.",
  url: "https://bears4life-utsf.github.io/BigSandLabs",
  founder: {
    name: "Zeke Smith",
    siteLabel: "ZekeSmith.dev",
    siteUrl: "https://zekesmith.dev",
  },
  nav: [
    { label: "Projects", href: "#projects" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "About", href: "#about" },
  ],
  hero: {
    brand: "Big Sand Labs",
    headline: "Practical software born from curiosity and real-world problems.",
    supporting:
      "We build software, AI tools, and digital products that often begin as personal projects, experiments, or solutions to everyday frustrations.",
    primaryCta: { label: "Explore the projects", href: "#projects" },
    secondaryCta: { label: "Read our philosophy", href: "#philosophy" },
    progression: ["Problem", "Experiment", "Tool", "Product"] as const,
  },
  philosophy: {
    eyebrow: "Philosophy",
    headline: "Build the things you wish existed.",
    intro:
      "Every project begins with a question, frustration, or opportunity to learn. We build to understand problems, test ideas, and create better solutions.",
    supporting:
      "Some projects stay small and personal. Others become tools worth sharing.",
    pullQuote:
      "We do not start with markets. We start with problems worth solving.",
    principles: [
      {
        title: "Notice friction",
        description:
          "Pay attention to problems, confusing experiences, and unnecessary work.",
      },
      {
        title: "Learn by building",
        description:
          "Use real projects to explore ideas and develop new technical capabilities.",
      },
      {
        title: "Share what works",
        description:
          "When an experiment becomes genuinely useful, make it available to others.",
      },
    ],
  },
  projects: {
    eyebrow: "Projects",
    headline: "What we are building",
    intro:
      "A mix of products, tools, and experiments. Each one started with a real problem or a desire to learn.",
  },
  evolution: {
    eyebrow: "How projects evolve",
    headline: "Not every idea needs to become a business.",
    intro:
      "Stopping at any stage is acceptable. A successful experiment does not always need to become a company.",
    stages: [
      {
        title: "Problem",
        description:
          "Something is confusing, frustrating, inefficient, or interesting.",
      },
      {
        title: "Experiment",
        description: "Build the smallest useful version and learn from it.",
      },
      {
        title: "Tool",
        description: "Continue when it solves the original problem well.",
      },
      {
        title: "Product",
        description:
          "Share it more broadly when it proves valuable to others.",
      },
    ],
  },
  about: {
    eyebrow: "About",
    headline: "An independent software lab",
    paragraphs: [
      "Big Sand Labs was created by Zeke Smith, a longtime software product leader who learns best by building. It is a home for the tools, experiments, and products that emerge when practical problems meet curiosity.",
      "After a career building and leading software products, Zeke is using personal projects to deepen his technical and AI expertise—and to create software he wishes existed.",
    ],
    linkLabel: "Visit ZekeSmith.dev",
    linkNote:
      "Leadership writing, professional background, and product thinking.",
  },
  closing: {
    headline: "What problem is worth exploring next?",
    supporting:
      "New projects will be added as ideas become experiments and experiments become useful tools.",
    primaryCta: { label: "View projects", href: "#projects" },
    secondaryCta: {
      label: "Visit ZekeSmith.dev",
      href: "https://zekesmith.dev",
    },
  },
  footer: {
    tagline: "Notice friction. Learn by building. Share what works.",
  },
} as const;
