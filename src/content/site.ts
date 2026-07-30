export const site = {
  name: "Big Sand Labs",
  title: "Big Sand Labs — Build What Matters",
  description:
    "Big Sand Labs turns curiosity into practical software. We explore everyday problems through experiments, and share the solutions that make life a little better.",
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
      "We turn curiosity into practical software. Every experiment begins with a real problem, a question worth exploring, or something we simply believe could work better. Some remain experiments. Others become products worth sharing.",
    primaryCta: { label: "Explore the experiments", href: "#experiments" },
    secondaryCta: { label: "Read our philosophy", href: "#philosophy" },
    progression: ["Problem", "Experiment", "Tool", "Product"] as const,
  },
  philosophy: {
    eyebrow: "Philosophy",
    headline: "Build What Matters.",
    intro:
      "Big Sand Labs is a place where ideas become experiments, experiments become tools, and the best of those tools become products worth sharing. Building is how we learn, solve problems, and improve everyday life.",
    guidingPrinciple:
      "Build What Matters. Explore ideas through creating. Share the solutions that make life a little better.",
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
    headline: "Currently on the workbench",
    intro:
      "Every idea begins as an experiment. Some are still evolving. Others are Live—products worth sharing that we maintain and recommend.",
  },
  process: {
    eyebrow: "How ideas move",
    headline: "Not every experiment needs to become a product.",
    intro:
      "Every idea begins as an experiment. The most useful ones become Live. Stopping along the way is okay—useful does not have to mean finished.",
    stages: ["Problem", "Experiment", "Tool", "Product"] as const,
  },
  about: {
    eyebrow: "About",
    headline: "An independent software lab",
    paragraphs: [
      "Big Sand Labs was created by Zeke Smith, a longtime software product leader who learns best by building. It is a home for the experiments, tools, and products that emerge when everyday problems meet curiosity.",
      "After years of building and leading software products, Zeke uses personal projects to keep learning—and to create things that make life a little clearer, simpler, or more useful.",
    ],
    linkLabel: "Visit ZekeSmith.dev",
    linkNote:
      "Leadership writing, professional background, and product thinking.",
  },
  closing: {
    headline: "What problem is worth exploring next?",
    supporting:
      "New work appears here as ideas become experiments and the most useful ones find their way into the world.",
    primaryCta: { label: "View experiments", href: "#experiments" },
    secondaryCta: {
      label: "Visit ZekeSmith.dev",
      href: "https://zekesmith.dev",
    },
  },
  footer: {
    tagline:
      "Build What Matters. Explore ideas through creating. Share the solutions that make life a little better.",
  },
} as const;
