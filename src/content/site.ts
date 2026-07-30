export const site = {
  name: "Big Sand Labs",
  title: "Big Sand Labs — Build What Matters",
  description:
    "Big Sand Labs exists because the best software starts with curiosity.",
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
    eyebrow: "Curiosity-Driven Software",
    headline: "Build What Matters.",
    supporting:
      "Big Sand Labs exists because the best software starts with curiosity.",
    primaryCta: { label: "Explore Experiments", href: "#experiments" },
    secondaryCta: { label: "Why Big Sand Labs?", href: "#philosophy" },
    progression: ["Observe", "Experiment", "Share"] as const,
  },
  philosophy: {
    eyebrow: "Philosophy",
    headline: "Curiosity leads. Usefulness decides.",
    intro:
      "We notice everyday problems, explore them by building, and share what proves genuinely useful.",
    guidingPrinciple:
      "Curiosity → Experiment → Product worth sharing.",
    principles: [
      {
        title: "See Opportunities",
        description:
          "Pay attention to the small problems we encounter every day. Ask questions. Stay curious. The best ideas often begin with something most people simply learn to live with.",
      },
      {
        title: "Explore Solutions",
        description:
          "Learn by creating. Start small. Improve incrementally. Building isn't the goal—understanding is. Every experiment teaches something, whether it becomes a product or not.",
      },
      {
        title: "Share What Works",
        description:
          "When something proves genuinely useful, put it into the world. Sometimes that means a free tool. Sometimes it's open source. Sometimes it's a product worth paying for. What matters is helping people by sharing solutions that make life a little better.",
      },
    ],
  },
  experiments: {
    eyebrow: "Experiments",
    headline: "On the workbench",
    intro:
      "Every experiment begins with an observation. The cards below share why each one exists—open one to read the full story.",
  },
  about: {
    eyebrow: "About",
    headline: "An independent software lab",
    paragraphs: [
      "Big Sand Labs was created by Zeke Smith, a product leader who believes the best way to understand an idea is to build it. It's home to curiosity-driven experiments and the products worth sharing that grow from them.",
      {
        lead: "Every experiment starts with a real problem and a simple question: ",
        emphasis: "Could this work better?",
      },
      "Building is a way to better understand problems—and to make everyday life a little simpler, clearer, or more useful.",
    ],
    linkLabel: "Visit ZekeSmith.dev",
    linkNote: "Writing, background, and product thinking.",
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
