import { nanoid } from "nanoid";

type LandingLinkType = {
  id: string;
  name: string;
  path: string;
};

export const landingLinks: LandingLinkType[] = [
  {
    id: nanoid(),
    name: "One Page",
    path: "/one-page-landing",
  },
  {
    id: nanoid(),
    name: "NFT",
    path: "/nft-landing",
  },
  {
    id: nanoid(),
    name: "Job",
    path: "/job-landing",
  },
];
