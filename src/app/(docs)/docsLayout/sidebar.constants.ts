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
        url: "https://x.com/scriptorcas",
      },
    ],
  },
  {
    groupKey: "templates",
    groupValue: "Templates",
    children: [
      {
        label: "Gen Ai SaaS",
        value: "genaisaas",
        url: "/docs",
      },
      {
        label: "Agency",
        value: "installation",
        url: "/docs",
      },
    ],
  },
  {
    groupKey: "components",
    groupValue: "Reusables Components",
    children: [
      {
        label: "Features",
        value: "featues",
        url: "/docs/gridfeature",
        new: true,
      },
      {
        label: "Dock Menu",
        value: "dockmenu",
        url: "/docs/dockmenus",
      },
      {
        label: "Pricing ",
        value: "pricing reveal",
        url: "/docs/pricingreveal",
      },
      {
        label: "Marquee skills",
        value: "skillsmarquee",
        url: "/docs/skillmarquee",
      },
      {
        label: "Footer",
        value: "footer-show",
        url: "/docs/footer",
      },
      {
        label: "Hero Sections",
        value: "hero-sections",
        url: "/docs/herosections",
      },
      { label: "Mix", value: "mix-components", url: "/docs/mix" },
      {
        label: "Cards",
        value: "cards-section",
        url: "/docs/cards",
      },
      {
        label: "Dual Range Slider",
        value: "dual-range-slider",
        url: "/docs/dual-range-slider",
      },
      {
        label: "Event Calendar",
        value: "eventcalendar",
        url: "/docs/eventcalendar",
      },
      {
        label: "Feadback Card",
        value: "feadback",
        url: "/docs/feadback",
        new: true,
      },
      {
        label: "Floating Label Input",
        value: "floating-label-input",
        url: "/docs/floating-label-input",
      },
      { label: "Footer", value: "footer", url: "/docs/footer" },
      {
        label: "HTTP Status Code",
        value: "statuscode",
        url: "/docs/statuscode",
      },
      {
        label: "Image Preview",
        value: "imagepreview",
        url: "/docs/imagepreview",
      },
      {
        label: "Infinite Scroll",
        value: "infiniteScroll",
        url: "/docs/infinite-scroll",
      },
      { label: "Input", value: "input", url: "/docs/input" },
      {
        label: "Loading Button",
        value: "loading-button",
        url: "/docs/loading-button",
      },
      {
        label: "Multiple Selector",
        value: "multipleSelector",
        url: "/docs/multiple-selector",
      },
      { label: "Navbar", value: "navbar", url: "/docs/navbar", new: true },
      {
        label: "Progress With Value",
        value: "progress-with-value",
        url: "/docs/progress-with-value",
      },
      {
        label: "Responsive Modal",
        value: "responsive-modal",
        url: "/docs/responsive-modal",
      },
      { label: "Spinner", value: "spinner", url: "/docs/spinner" },
      {
        label: "Skeleton",
        value: "skeleton",
        url: "/docs/skeleton",
      },
    ],
  },
];
