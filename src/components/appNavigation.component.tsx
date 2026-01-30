import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { appLinks } from "../assets/data/appLink.data";

type AppNavigationProps = {
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
        className={`w-64 h-full flex flex-col gap-4 absolute bg-[#212121] ml-0 top-0 ${isOpen ? "left-48" : "left-20"} border-l border-neutral-700 p-4 text-sm max-h-screen overflow-y-auto`}
      >
        <IoClose
          size={18}
          className="absolute top-4 right-2 cursor-pointer"
          onClick={() => setSelectedNavigation(null)}
        />
        <div className="w-full">
          {appLinks.map((link) =>
            link.subMenu ? (
              <div className="flex flex-col justify-center gap-2">
                <div
                  onClick={() => handleSubMenuClick(link.name)}
                  className="flex items-center justify-between hover:bg-stone-600 p-2 rounded-xs"
                >
                  <span>{link.name}</span>
                  {isSubMenuOpen === link.name ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </div>
                <div className="border-l border-neutral-700 ml-2">
                  {isSubMenuOpen === link.name &&
                    link.subMenu?.map((subLink) => (
                      <Link
                        key={subLink.id}
                        to={subLink?.path as any}
                        className={`hover:bg-stone-600 block p-2 rounded-xs ${location.pathname === subLink.path ? "bg-sky-600 font-bold" : ""} ml-2`}
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
                className={`hover:bg-stone-600 block p-2 rounded-xs ${location.pathname === link.path ? "bg-sky-600 font-bold" : ""}`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      </motion.nav>
    </div>
  );
};

export default AppNavigation;
