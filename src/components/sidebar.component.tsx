import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimationControls } from "framer-motion";
import { MdOutlineStackedBarChart } from "react-icons/md";
import { FaAppStoreIos } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { ImPagebreak } from "react-icons/im";
import { BsRocketTakeoffFill } from "react-icons/bs";

import DashboardNavigation from "./dashboardNavigation.component";
import AppNavigation from "./appNavigation.component";
import AuthenticationNavigation from "./authenticationNavigation.component";
import PageNavigation from "./pageNavigation.component";
import LandingNavigation from "./landingNavigation.component";

import logo from "../assets/images/logo.png";
import grabIcon from "../assets/images/dashboard-footer-icon.webp";

import { containerVariants } from "../assets/animations/containerVariants.animation";

import { useIsMdUp } from "../hooks/useIsMdUp";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const [selectedNavigation, setSelectedNavigation] = useState<string | null>(
    null,
  );

  const isMdUp = useIsMdUp();

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
    setSelectedNavigation(null);
  }, [isOpen]);

  const handleSidebarOpenClose = () => {
    if (isMdUp) {
      setIsOpen((prev) => !prev);
    } else {
      setIsOpen(false);
    }
  };

  const handleNavigationClick = (name: string) => {
    setSelectedNavigation((prev) => {
      if (prev === name) {
        return null;
      }
      return name;
    });
  };

  return (
    <motion.aside
      variants={containerVariants}
      initial="close"
      animate={containerControls}
      className="min-h-screen bg-[#1a1a1a] flex flex-col z-10 gap-8 p-4 sticky top-0 left-0"
    >
      <div className="w-full flex items-center justify-between">
        <div
          className="w-10 h-10 flex items-center justify-center bg-stone-950  border border-neutral-700 rounded-full cursor-pointer"
          onClick={handleSidebarOpenClose}
        >
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          <div
            className="flex items-center gap-2 text-xs cursor-pointer"
            onClick={() => handleNavigationClick("dashboards")}
          >
            <div className="w-10 h-10 flex items-center justify-center border border-neutral-700 rounded-xs bg-stone-950">
              <MdOutlineStackedBarChart size={18} />
            </div>
            <span className={`${isOpen ? "block" : "hidden"} font-bold`}>
              Dashboards
            </span>
          </div>
          <div
            className="flex items-center gap-2 text-xs cursor-pointer"
            onClick={() => handleNavigationClick("apps")}
          >
            <div className="w-10 h-10 flex items-center justify-center border border-neutral-700 rounded-xs bg-stone-950">
              <FaAppStoreIos size={18} />
            </div>
            <span className={`${isOpen ? "block" : "hidden"} font-bold`}>
              Apps
            </span>
          </div>
          <div
            className="flex items-center gap-2 text-xs cursor-pointer"
            onClick={() => handleNavigationClick("authentication")}
          >
            <div className="w-10 h-10 flex items-center justify-center border border-neutral-700 rounded-xs bg-stone-950">
              <FaLock size={18} />
            </div>
            <span className={`${isOpen ? "block" : "hidden"} font-bold`}>
              Authentication
            </span>
          </div>
          <div
            className="flex items-center gap-2 text-xs cursor-pointer"
            onClick={() => handleNavigationClick("pages")}
          >
            <div className="w-10 h-10 flex items-center justify-center border border-neutral-700 rounded-xs bg-stone-950">
              <ImPagebreak size={18} />
            </div>
            <span className={`${isOpen ? "block" : "hidden"} font-bold`}>
              Pages
            </span>
          </div>
          <div
            className="flex items-center gap-2 text-xs cursor-pointer"
            onClick={() => handleNavigationClick("landing")}
          >
            <div className="w-10 h-10 flex items-center justify-center border border-neutral-700 rounded-xs bg-stone-950">
              <BsRocketTakeoffFill size={18} />
            </div>
            <span className={`${isOpen ? "block" : "hidden"} font-bold`}>
              Landing
            </span>
          </div>
        </div>
        <div
          className={`text-xs ${isOpen ? "flex flex-col items-center gap-2" : "hidden"}`}
        >
          <img src={grabIcon} />
          <h2 className="font-bold text-sm text-center">
            Grab Nice ProDashboard
          </h2>
          <p className="text-center">
            Customize your dashboard and learn about our features
          </p>
          <Link to="/" className="p-2 bg-orange-600 rounded-xs font-bold">
            Get Started
          </Link>
        </div>
      </div>
      <div>
        {selectedNavigation === "dashboards" && (
          <DashboardNavigation
            isOpen={isOpen}
            setSelectedNavigation={setSelectedNavigation}
          />
        )}
        {selectedNavigation === "apps" && (
          <AppNavigation
            isOpen={isOpen}
            setSelectedNavigation={setSelectedNavigation}
          />
        )}
        {selectedNavigation === "authentication" && (
          <AuthenticationNavigation
            isOpen={isOpen}
            setSelectedNavigation={setSelectedNavigation}
          />
        )}
        {selectedNavigation === "pages" && (
          <PageNavigation
            isOpen={isOpen}
            setSelectedNavigation={setSelectedNavigation}
          />
        )}
        {selectedNavigation === "landing" && (
          <LandingNavigation
            isOpen={isOpen}
            setSelectedNavigation={setSelectedNavigation}
          />
        )}
      </div>
    </motion.aside>
  );
};

export default Sidebar;
