export type JourneyMilestoneItem = {
  text: string;
  emphasis: string;
};

export type JourneyMilestone = {
  year: string;
  side: "left" | "right";
  current?: boolean;
  items: JourneyMilestoneItem[];
};

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: "2015",
    side: "left",
    items: [
      {
        emphasis: "Began",
        text: "its journey by developing iOS applications for a US client",
      },
      {
        emphasis: "Ventured",
        text: "into mobile application development",
      },
    ],
  },
  {
    year: "2016",
    side: "right",
    items: [
      {
        emphasis: "Expanded",
        text: "into web application development",
      },
      {
        emphasis: "Started",
        text: "Android-based application development",
      },
      {
        emphasis: "Initiated",
        text: "work with a client from Japan",
      },
    ],
  },
  {
    year: "2017",
    side: "left",
    items: [
      {
        emphasis: "Introduced",
        text: "handling large-scale web and mobile applications",
      },
      {
        emphasis: "Expanded",
        text: "into the local market with an e-commerce project",
      },
      {
        emphasis: "Started",
        text: "work with a client from Denmark",
      },
    ],
  },
  {
    year: "2018",
    side: "right",
    items: [
      {
        emphasis: "Started",
        text: "simulation-based work for stock market solutions",
      },
      // TODO(owner): Confirm the Italy client reference is approved for public website use.
      {
        emphasis: "Secured",
        text: "a new client from Italy",
      },
    ],
  },
  {
    year: "2019",
    side: "left",
    items: [
      // TODO(owner): Confirm public usage rights before publishing the Apple Inc. partnership claim.
      {
        emphasis: "Made",
        text: "a significant leap by partnering with tech giant Apple Inc.",
      },
      {
        emphasis: "Engaged",
        text: "with a Malaysian client",
      },
    ],
  },
  {
    year: "2020",
    side: "right",
    items: [
      {
        emphasis: "Ventured",
        text: "into the EdTech startup sector",
      },
      // TODO(owner): Confirm the office move date and wording for public website use.
      {
        emphasis: "Moved",
        text: "into a new office space",
      },
    ],
  },
  {
    year: "2021",
    side: "left",
    items: [
      {
        emphasis: "Started",
        text: "large-scale product-based development",
      },
      {
        emphasis: "Focused",
        text: "on technological upscaling and advancement",
      },
      // TODO(owner): Confirm health insurance wording and launch year for public website use.
      {
        emphasis: "Introduced",
        text: "comprehensive health insurance",
      },
    ],
  },
  {
    year: "2022",
    side: "right",
    items: [
      // TODO(owner): Confirm the 50+ members milestone year against company records.
      {
        emphasis: "Reached",
        text: "50+ Team Softzino members for the first time",
      },
      {
        emphasis: "Initiated",
        text: "multimedia development",
      },
      // TODO(owner): Confirm employee recognition program launch year and naming.
      {
        emphasis: "Launched",
        text: "the Employee of the Month recognition program",
      },
    ],
  },
  {
    year: "2023",
    side: "left",
    items: [
      // TODO(owner): Confirm the office relocation date and wording.
      {
        emphasis: "Relocated",
        text: "to a larger and more spacious office building",
      },
      // TODO(owner): Confirm the land procurement claim is approved for public website use.
      {
        emphasis: "Procured",
        text: "land for Softzino's own office",
      },
      {
        emphasis: "Opened",
        text: "large-scale research and development initiatives",
      },
    ],
  },
  {
    year: "2024",
    side: "right",
    items: [
      // TODO(owner): Confirm approval details before publishing the office building design claim.
      {
        emphasis: "Received",
        text: "approval for the new office building design",
      },
      {
        emphasis: "Initiated",
        text: "development projects using WordPress",
      },
      // TODO(owner): Confirm employee car benefits wording and launch year for public website use.
      {
        emphasis: "Introduced",
        text: "employee car benefits",
      },
    ],
  },
  {
    year: "2025",
    side: "left",
    current: true,
    items: [
      // TODO(owner): Confirm Dizitali public launch status, official spelling, and URL.
      {
        emphasis: "Established",
        text: "Dizitali",
      },
      // TODO(owner): Confirm NeoComerz public launch status, official spelling, and URL.
      {
        emphasis: "Launched",
        text: "NeoComerz",
      },
    ],
  },
];
