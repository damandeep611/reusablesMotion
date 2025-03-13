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
      { label: "Alert", value: "alert", url: "/docs/alert", new: true },
      {
        label: "Animated Feature Section",
        value: "animatedfeaturesection",
        url: "/docs/gridfeature",
      },
      {
        label: "Pricing Card Reveal ",
        value: "pricing reveal",
        url: "/docs/pricingreveal",
      },
      {
        label: "Animated Testimonials",
        value: "animatedtestimonials",
        url: "/docs/animatedtestimonials",
      },
      {
        label: "Autosize Textarea",
        value: "autosize-textarea",
        url: "/docs/autosize-textarea",
      },
      { label: "Button", value: "button", url: "/docs/button" },
      { label: "Card", value: "card", url: "/docs/card" },
      {
        label: "Datetime Picker",
        value: "datetime-picker",
        url: "/docs/datetime-picker",
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
