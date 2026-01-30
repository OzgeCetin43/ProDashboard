import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

import { dashboardLinks } from "../assets/data/dashboardLink.data";

type DashboardNavigationProps = {
  isOpen: boolean;
  setSelectedNavigation: React.Dispatch<React.SetStateAction<string | null>>;
};

const navigationVariants = {
  close: {
    x: -300,
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 100,
  },
};

const DashboardNavigation: React.FC<DashboardNavigationProps> = ({
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
        className={`w-64 h-full flex flex-col gap-4 absolute bg-[#212121] ml-0 top-0 ${isOpen ? "left-48" : "left-20"} border-l border-neutral-700 p-4 text-sm`}
      >
        <IoClose
          size={18}
          className="relative left-[95%] cursor-pointer"
          onClick={() => setSelectedNavigation(null)}
        />
        <div className="w-full">
          {dashboardLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={`hover:bg-stone-600 block p-2 rounded-xs ${location.pathname === link.path ? "bg-sky-600 font-bold" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.nav>
    </div>
  );
};

export default DashboardNavigation;
