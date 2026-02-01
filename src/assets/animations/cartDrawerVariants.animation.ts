import type { Variants } from "framer-motion";

export const cartDrawerVariants: Variants = {
  close: {
    x: 300,
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 100,
  },
};
