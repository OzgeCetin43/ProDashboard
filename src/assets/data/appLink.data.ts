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
    subMenu: [
      {
        id: nanoid(),
        name: "List",
        path: "/project-list-app",
      },
      {
        id: nanoid(),
        name: "Overview",
        path: "/project-overview-app",
      },
      {
        id: nanoid(),
        name: "Create Project",
        path: "/create-project-app",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Tasks",
    subMenu: [
      {
        id: nanoid(),
        name: "Kanban Board",
        path: "/kanban-board-app",
      },
      {
        id: nanoid(),
        name: "List View",
        path: "/task-list-view-app",
      },
      {
        id: nanoid(),
        name: "Task Details",
        path: "/task-details-app",
      },
    ],
  },
  {
    id: nanoid(),
    name: "CRM",
    subMenu: [
      {
        id: nanoid(),
        name: "Contacts",
        path: "/crm-contacts-app",
      },
      {
        id: nanoid(),
        name: "Companies",
        path: "/crm-companies-app",
      },
      {
        id: nanoid(),
        name: "Deals",
        path: "/crm-deals-app",
      },
      {
        id: nanoid(),
        name: "Leads",
        path: "/crm-leads-app",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Crypto",
    subMenu: [
      {
        id: nanoid(),
        name: "Transactions",
        path: "/crypto-transactions-app",
      },
      {
        id: nanoid(),
        name: "Buy & Sell",
        path: "/crypto-buy-and-sell-app",
      },
      {
        id: nanoid(),
        name: "Orders",
        path: "/crypto-orders-app",
      },
      {
        id: nanoid(),
        name: "My Wallet",
        path: "/crypto-my-wallet-app",
      },
      {
        id: nanoid(),
        name: "ICO List",
        path: "/crypto-ico-list-app",
      },
      {
        id: nanoid(),
        name: "KYC Application",
        path: "/crypto-kyc-application-app",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Invoices",
    subMenu: [
      {
        id: nanoid(),
        name: "List View",
        path: "/invoice-list-view-app",
      },
      {
        id: nanoid(),
        name: "Details",
        path: "/invoice-details-app",
      },
      {
        id: nanoid(),
        name: "Create Invoice",
        path: "/create-invoice-app",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Support Tickets",
    subMenu: [
      {
        id: nanoid(),
        name: "List View",
        path: "/support-ticket-list-view-app",
      },
      {
        id: nanoid(),
        name: "Ticket Details",
        path: "/support-ticket-details-app",
      },
    ],
  },
  {
    id: nanoid(),
    name: "NFT Marketplace",
    subMenu: [
      {
        id: nanoid(),
        name: "Marketplace",
        path: "/nft-marketplace-app",
      },
      {
        id: nanoid(),
        name: "Explore Now",
        path: "/nft-explore-now-app",
      },
      {
        id: nanoid(),
        name: "Live Auction",
        path: "/nft-live-auction-app",
      },
      {
        id: nanoid(),
        name: "Item Details",
        path: "/nft-item-details-app",
      },
      {
        id: nanoid(),
        name: "Collections",
        path: "/nft-collections-app",
      },
      {
        id: nanoid(),
        name: "Creators",
        path: "/nft-creators-app",
      },
      {
        id: nanoid(),
        name: "Ranking",
        path: "/nft-ranking-app",
      },
      {
        id: nanoid(),
        name: "Wallet Connect",
        path: "/nft-wallet-connect-app",
      },
      {
        id: nanoid(),
        name: "Create NFT",
        path: "/create-nft-app",
      },
    ],
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
    subMenu: [
      {
        id: nanoid(),
        name: "Statistics",
        path: "/jobs-statistics-app",
      },
      {
        id: nanoid(),
        name: "Job Lists",
        path: "/job-lists-app",
      },
      {
        id: nanoid(),
        name: "Job Grid",
        path: "/job-grid-app",
      },
      {
        id: nanoid(),
        name: "Job Overview",
        path: "/job-overview-app",
      },
      {
        id: nanoid(),
        name: "Candidate List View",
        path: "/candidate-list-view-app",
      },
      {
        id: nanoid(),
        name: "Candidate Grid View",
        path: "/candidate-grid-view-app",
      },
      {
        id: nanoid(),
        name: "Application",
        path: "/job-application-app",
      },
      {
        id: nanoid(),
        name: "New Job",
        path: "/new-job-app",
      },
      {
        id: nanoid(),
        name: "Companies List",
        path: "/job-companies-list-app",
      },
      {
        id: nanoid(),
        name: "Job Categories",
        path: "/job-categories-app",
      },
    ],
  },
  {
    id: nanoid(),
    name: "API Key",
    path: "/api-key-app",
  },
];
