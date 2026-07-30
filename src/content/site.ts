export const site = {
  name: "Big Sand Labs",
  title: "Big Sand Labs — Build What Matters",
  description:
    "Big Sand Labs exists because the best software starts with curiosity. Every experiment begins with a real problem. Some ideas remain experiments. Others become products worth sharing.",
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
    headline: "Build What Matters.",
    supporting:
      "Big Sand Labs exists because the best software starts with curiosity. Every experiment begins with a real problem, a question worth exploring, or the belief that something could work better. Some ideas remain experiments. Others become products worth sharing.",
    primaryCta: { label: "Explore the experiments", href: "#experiments" },
    secondaryCta: { label: "Read our philosophy", href: "#philosophy" },
    progression: ["Curiosity", "Experiment", "Product"] as const,
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
      "Every experiment begins with an observation. Some are still being explored. Others are Live—products worth sharing that we maintain and recommend.",
  },
  process: {
    eyebrow: "How ideas move",
    headline: "Not every experiment becomes a product.",
    intro:
      "And that is okay. Useful learning does not require a finished product.",
    stages: ["Curiosity", "Experiment", "Product"] as const,
  },
  about: {
    eyebrow: "About",
    headline: "An independent software lab",
    paragraphs: [
      "Big Sand Labs was created by Zeke Smith, a software product leader who learns best by building. It is a home for curiosity-driven experiments and the products worth sharing that grow from them.",
      "He builds to understand problems more clearly—and to make everyday life a little simpler, clearer, or more useful.",
    ],
    linkLabel: "Visit ZekeSmith.dev",
    linkNote:
      "Writing, background, and product thinking.",
  },
  closing: {
    headline: "What is worth exploring next?",
    supporting:
      "New work appears here as curiosity becomes an experiment—and as the most useful experiments become products worth sharing.",
    primaryCta: { label: "View experiments", href: "#experiments" },
    secondaryCta: {
      label: "Visit ZekeSmith.dev",
      href: "https://zekesmith.dev",
    },
  },
  footer: {
    tagline: "Curiosity. Experiment. Product worth sharing.",
  },
} as const;
