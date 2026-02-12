import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { appLinks } from "../assets/data/appLink.data";

import { navigationVariants } from "../assets/animations/navigationVariants.animation";

type AppNavigationProps = {
  isOpen: boolean;
  setSelectedNavigation: React.Dispatch<React.SetStateAction<string | null>>;
};

const AppNavigation: React.FC<AppNavigationProps> = ({
  isOpen,
  setSelectedNavigation,
}) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<string | null>(null);

  const location = useLocation();

  const handleSubMenuClick = (name: string) => {
    setIsSubMenuOpen((prev) => {
      if (prev === name) {
        return null;
      }
      return name;
    });
  };

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
        className={`w-64 h-full flex flex-col gap-4 absolute bg-bg-tertiary ml-0 top-0 ${isOpen ? "left-48" : "left-20"} border-l border-border-color p-4 text-sm max-h-screen overflow-y-auto shadow-xl`}
      >
        <IoClose
          size={18}
          className="absolute top-4 right-2 cursor-pointer text-text-secondary hover:text-accent-primary"
          onClick={() => setSelectedNavigation(null)}
        />
        <div className="w-full mt-6">
          {appLinks.map((link) =>
            link.subMenu ? (
              <div key={link.id} className="flex flex-col justify-center gap-2">
                <div
                  onClick={() => handleSubMenuClick(link.name)}
                  className={`block p-2 rounded-xs p-2 rounded-xs cursor-pointer flex items-center justify-between ${isSubMenuOpen === link.name ? "text-accent-primary font-bold" : "text-text-primary hover:bg-bg-primary hover:text-accent-primary"}`}
                >
                  <span>{link.name}</span>
                  {isSubMenuOpen === link.name ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </div>
                <div className="border-l border-border-color ml-2">
                  {isSubMenuOpen === link.name &&
                    link.subMenu?.map((subLink) => (
                      <Link
                        key={subLink.id}
                        to={subLink?.path as any}
                        className={`hover:bg-bg-primary block p-2 rounded-xs text-text-primary ${location.pathname === subLink.path ? "bg-accent-primary text-white font-bold" : ""} ml-2`}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.id}
                to={link?.path as any}
                className={`hover:bg-bg-primary block p-2 rounded-xs text-text-primary ${location.pathname === link.path ? "bg-accent-primary text-white font-bold" : ""}`}
              >
                {link.name}
              </Link>
            ),
          )}
        </div>
      </motion.nav>
    </div>
  );
};

export default AppNavigation;
