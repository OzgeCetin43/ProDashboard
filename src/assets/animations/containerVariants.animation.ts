import type { Variants } from "framer-motion";

export const containerVariants: Variants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring" as const,
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "12rem",
    transition: {
      type: "spring" as const,
      damping: 15,
      duration: 0.5,
    },
  },
};
