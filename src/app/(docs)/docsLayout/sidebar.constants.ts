interface DocumentationChild {
  label: string;
  value: string;
  url: string;
  new?: boolean;
}

interface Documentation {
  groupKey: string;
  groupValue: string;
  children: DocumentationChild[];
}

export const DOCS: Documentation[] = [
  {
    groupKey: "Follow for more updates",
    groupValue: "Follow for more updates",
    children: [
      {
        label: "Twitter @devdaman",
        value: "Twitter @devdaman",
        url: "https://x.com/devdaman",
      },
    ],
  },
  {
    groupKey: "gettingStart",
    groupValue: "Getting Started",
    children: [
      {
        label: "Introduction",
        value: "introduction",
        url: "/docs",
      },
      {
        label: "Installation",
        value: "installation",
        url: "/docs/installation",
      },
    ],
  },
  {
    groupKey: "components",
    groupValue: "Reusables Components",
    children: [
      {
        label: "Animated Feature Section",
        value: "animatedfeaturesection",
        url: "/docs/gridfeature",
      },
    ],
  },
];
