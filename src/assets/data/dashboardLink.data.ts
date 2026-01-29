import { nanoid } from "nanoid";

type DashboardLinkType = {
  id: string;
  name: string;
  path: string;
};

export const dashboardLinks: DashboardLinkType[] = [
  {
    id: nanoid(),
    name: "Analytics",
    path: "/",
  },
  {
    id: nanoid(),
    name: "CRM",
    path: "/crm",
  },
  {
    id: nanoid(),
    name: "Ecommerce",
    path: "/ecommerce",
  },
  {
    id: nanoid(),
    name: "Crypto",
    path: "/crypto",
  },
  {
    id: nanoid(),
    name: "Projects",
    path: "/projects",
  },
  {
    id: nanoid(),
    name: "NFT",
    path: "/nft",
  },
  {
    id: nanoid(),
    name: "Job",
    path: "/job",
  },
  {
    id: nanoid(),
    name: "Blog",
    path: "/blog",
  },
];
