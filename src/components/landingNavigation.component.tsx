import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

import { landingLinks } from "../assets/data/landingLink.data";

import { navigationVariants } from "../assets/animations/navigationVariants.animation";

type LandingNavigationProps = {
  isOpen: boolean;
  setSelectedNavigation: React.Dispatch<React.SetStateAction<string | null>>;
};

const LandingNavigation: React.FC<LandingNavigationProps> = ({
  isOpen,
  setSelectedNavigation,
}) => {
  const location = useLocation();

  return (
    <div className="flex flex-col gap-3">
      <motion.nav
        variants={navigationVariants}
        initial="close"
        animate="open"
        exit="close"
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
        className={`w-64 h-full flex flex-col gap-4 absolute bg-bg-tertiary ml-0 top-0 ${isOpen ? "left-48" : "left-20"} border-l border-border-color p-4 text-sm shadow-xl`}
      >
        <IoClose
          size={18}
          className="absolute top-4 right-2 cursor-pointer text-text-secondary hover:text-accent-primary"
          onClick={() => setSelectedNavigation(null)}
        />
        <div className="w-full mt-6">
          {landingLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={`block p-2 rounded-xs ${location.pathname === link.path ? "bg-accent-primary text-white font-bold hover:bg-accent-hover" : "text-text-primary hover:bg-bg-primary hover:text-accent-primary"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.nav>
    </div>
  );
};

export default LandingNavigation;
