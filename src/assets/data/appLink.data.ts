import { nanoid } from "nanoid";

type AppLinkType = {
  id: string;
  name: string;
  path?: string;
  subMenu?: {
    id: string;
    name: string;
    path: string;
  }[];
};

export const appLinks: AppLinkType[] = [
  {
    id: nanoid(),
    name: "Calendar",
    path: "/calendar-app",
  },
  {
    id: nanoid(),
    name: "Chat",
    path: "/chat-app",
  },
  {
    id: nanoid(),
    name: "Email",
    subMenu: [
      {
        id: nanoid(),
        name: "Mailbox",
        path: "/mailbox-app",
      },
      {
        id: nanoid(),
        name: "Email Templates",
        path: "/email-templates-app",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Ecommerce",
    subMenu: [
      {
        id: nanoid(),
        name: "Products",
        path: "/products-app",
      },
      {
        id: nanoid(),
        name: "Product Details",
        path: "/product-details-app",
      },
      {
        id: nanoid(),
        name: "Create Product",
        path: "/create-product-app",
      },
      {
        id: nanoid(),
        name: "Orders",
        path: "/orders-app",
      },
      {
        id: nanoid(),
        name: "Order Details",
        path: "/order-details-app",
      },
      {
        id: nanoid(),
        name: "Customers",
        path: "/customers-app",
      },
      {
        id: nanoid(),
        name: "Shopping Cart",
        path: "/shopping-cart-app",
      },
      {
        id: nanoid(),
        name: "Checkout",
        path: "/checkout-app",
      },
      {
        id: nanoid(),
        name: "Sellers",
        path: "/sellers-app",
      },
      {
        id: nanoid(),
        name: "Seller Details",
        path: "/seller-details-app",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Projects",
    path: "/projects-app",
  },
  {
    id: nanoid(),
    name: "Tasks",
    path: "/tasks-app",
  },
  {
    id: nanoid(),
    name: "CRM",
    path: "/crm-app",
  },
  {
    id: nanoid(),
    name: "Crypto",
    path: "/crypyo-app",
  },
  {
    id: nanoid(),
    name: "Invoices",
    path: "/invoices-app",
  },
  {
    id: nanoid(),
    name: "Support Tickets",
    path: "/support-tickets-app",
  },
  {
    id: nanoid(),
    name: "NFT Marketplace",
    path: "/nft-marketplace-app",
  },
  {
    id: nanoid(),
    name: "File Manager",
    path: "/file-manager-app",
  },
  {
    id: nanoid(),
    name: "To Do",
    path: "/to-do-app",
  },
  {
    id: nanoid(),
    name: "Jobs",
    path: "/jobs-app",
  },
  {
    id: nanoid(),
    name: "API Key",
    path: "/api-key-app",
  },
];
