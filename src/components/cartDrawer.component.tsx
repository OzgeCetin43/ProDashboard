import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

import { cartDrawerVariants } from "../assets/animations/cartDrawerVariants.animation";

import emptyCartIcon from "../assets/images/cart-icon.svg";

type CartDrawerProps = {
  setIsCartDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartDrawer: React.FC<CartDrawerProps> = ({ setIsCartDrawerOpen }) => {
  return (
    <motion.aside
      variants={cartDrawerVariants}
      initial="close"
      animate="open"
      exit="close"
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
      className="h-screen w-[80%] md:w-1/4 absolute top-0 right-0 z-5 bg-[#1a1a1a]"
    >
      <div className="absolute w-full flex items-center justify-between p-4 bg-sky-600">
        <h1 className="font-bold">Shopping Cart</h1>
        <IoClose
          size={18}
          className="cursor-pointer"
          onClick={() => setIsCartDrawerOpen(false)}
        />
      </div>
      <div className="h-full w-full flex flex-col items-center justify-center gap-4">
        <img src={emptyCartIcon} alt="empty cart" className="w-1/2" />
        <h3 className="font-bold">Cart is Empty</h3>
        <Link
          to="/"
          className="bg-orange-600 p-2 rounded-xs font-bold"
          onClick={() => setIsCartDrawerOpen(false)}
        >
          Go back to shopping
        </Link>
      </div>
    </motion.aside>
  );
};

export default CartDrawer;
