import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import type { Variants } from "framer-motion";
import { IoPaw } from "react-icons/io5";
import { MdOutlineStackedBarChart } from "react-icons/md";

import DashboardNavigation from "./dashboardNavigation.component";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const containerVariants: Variants = {
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

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const [selectedNavigation, setSelectedNavigation] = useState<string | null>(
    null
  );

  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      svgControls.start("open");
    } else {
      containerControls.start("close");
      svgControls.start("close");
    }
  }, [isOpen]);

  const handleSidebarOpenClose = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <motion.aside
      variants={containerVariants}
      initial="close"
      animate={containerControls}
      className="h-full bg-[#1a1a1a] flex flex-col z-10 gap-8 p-4 absolute top-0 left-0"
    >
      <div className="w-full flex items-center justify-between">
        <div
          className="w-10 h-10 flex items-center justify-center bg-stone-950  border border-neutral-700 rounded-full cursor-pointer"
          onClick={handleSidebarOpenClose}
        >
          <IoPaw size={18} />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div
          className="flex items-center gap-2 text-xs cursor-pointer"
          onClick={() =>
            setSelectedNavigation((prev) => {
              if (prev === "dashboards") {
                return null;
              }
              return "dashboards";
            })
          }
        >
          <div className="w-10 h-10 flex items-center justify-center border border-neutral-700 rounded-xs bg-stone-950">
            <MdOutlineStackedBarChart size={18} />
          </div>
          <span className={`${isOpen ? "block" : "hidden"} font-bold`}>
            Dashboards
          </span>
        </div>
      </div>
      <div>
        {selectedNavigation === "dashboards" && (
          <DashboardNavigation
            isOpen={isOpen}
            setSelectedNavigation={setSelectedNavigation}
          />
        )}
      </div>
    </motion.aside>
  );
};

export default Sidebar;
