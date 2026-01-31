import { nanoid } from "nanoid";

type PageLinkType = {
  id: string;
  name: string;
  path?: string;
  subMenu?: {
    id: string;
    name: string;
    path: string;
  }[];
};

export const pageLinks: PageLinkType[] = [
  {
    id: nanoid(),
    name: "Profile",
    subMenu: [
      {
        id: nanoid(),
        name: "Simple Page",
        path: "/profile-simple-page",
      },
      {
        id: nanoid(),
        name: "Settings",
        path: "/profile-settings-page",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Team",
    path: "/team-page",
  },
  {
    id: nanoid(),
    name: "Timeline",
    path: "/timeline-page",
  },
  {
    id: nanoid(),
    name: "FAQs",
    path: "/faqs-page",
  },
  {
    id: nanoid(),
    name: "Pricing",
    path: "/pricing-page",
  },
  {
    id: nanoid(),
    name: "Gallery",
    path: "/gallery-page",
  },
  {
    id: nanoid(),
    name: "Maintenance",
    path: "/maintenance-page",
  },
  {
    id: nanoid(),
    name: "Coming Soon",
    path: "/coming-soon-page",
  },
  {
    id: nanoid(),
    name: "Sitemap",
    path: "/sitemap-page",
  },
  {
    id: nanoid(),
    name: "Search Results",
    path: "/search-results-page",
  },
  {
    id: nanoid(),
    name: "Privacy Policy",
    path: "/privacy-policy-page",
  },
  {
    id: nanoid(),
    name: "Terms & Conditions",
    path: "/terms-and-conditions-page",
  },
  {
    id: nanoid(),
    name: "Blogs",
    path: "/blogs-page",
  },
];
