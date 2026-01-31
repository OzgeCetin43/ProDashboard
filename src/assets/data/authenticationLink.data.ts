import { nanoid } from "nanoid";

type AuthenticationLinkType = {
  id: string;
  name: string;
  path?: string;
  subMenu?: {
    id: string;
    name: string;
    path: string;
  }[];
};

export const authenticationLinks: AuthenticationLinkType[] = [
  {
    id: nanoid(),
    name: "Sign In",
    subMenu: [
      {
        id: nanoid(),
        name: "Basic",
        path: "/sign-in-basic-authentication",
      },
      {
        id: nanoid(),
        name: "Cover",
        path: "/sign-in-cover-authentication",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Sign Up",
    subMenu: [
      {
        id: nanoid(),
        name: "Basic",
        path: "/sign-up-basic-authentication",
      },
      {
        id: nanoid(),
        name: "Cover",
        path: "/sign-up-cover-authentication",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Password Reset",
    subMenu: [
      {
        id: nanoid(),
        name: "Basic",
        path: "/password-reset-basic-authentication",
      },
      {
        id: nanoid(),
        name: "Cover",
        path: "/password-reset-cover-authentication",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Password Create",
    subMenu: [
      {
        id: nanoid(),
        name: "Basic",
        path: "/password-create-basic-authentication",
      },
      {
        id: nanoid(),
        name: "Cover",
        path: "/password-create-cover-authentication",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Lock Screen",
    subMenu: [
      {
        id: nanoid(),
        name: "Basic",
        path: "/lock-screen-basic-authentication",
      },
      {
        id: nanoid(),
        name: "Cover",
        path: "/lock-screen-cover-authentication",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Logout",
    subMenu: [
      {
        id: nanoid(),
        name: "Basic",
        path: "/logout-basic-authentication",
      },
      {
        id: nanoid(),
        name: "Cover",
        path: "/logout-cover-authentication",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Success Message",
    subMenu: [
      {
        id: nanoid(),
        name: "Basic",
        path: "/success-message-basic-authentication",
      },
      {
        id: nanoid(),
        name: "Cover",
        path: "/success-message-cover-authentication",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Two Step Verification",
    subMenu: [
      {
        id: nanoid(),
        name: "Basic",
        path: "/two-step-verification-basic-authentication",
      },
      {
        id: nanoid(),
        name: "Cover",
        path: "/two-step-verification-cover-authentication",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Errors",
    subMenu: [
      {
        id: nanoid(),
        name: "404 Basic",
        path: "/404-basic-authentication",
      },
      {
        id: nanoid(),
        name: "404 Cover",
        path: "/404-cover-authentication",
      },
      {
        id: nanoid(),
        name: "404 Alt",
        path: "/404-alt-authentication",
      },
      {
        id: nanoid(),
        name: "500",
        path: "/500-authentication",
      },
      {
        id: nanoid(),
        name: "Offline Page",
        path: "/offline-page-authentication",
      },
    ],
  },
];
