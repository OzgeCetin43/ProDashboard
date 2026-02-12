import React, { useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { GiHexagonalNut } from "react-icons/gi";

import CartDrawer from "./cartDrawer.component";
import Notification from "./notification.component";
import Inbox from "./inbox.component";
import Profile from "./profile.component";
import ThemeToggle from "./themeToggle.component";

import avatar from "../assets/images/avatar.jpg";

const Header: React.FC = () => {
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState<boolean>(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);
  const [isInboxOpen, setIsInboxOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  return (
    <>
      <header className="w-full h-auto md:h-14 p-4 bg-bg-secondary flex flex-col md:flex-row items-center justify-between gap-2 border-b border-border-color shadow-sm">
        <div className="w-full flex-1 flex items-center justify-between border border-border-color rounded-xs p-2 bg-bg-primary">
          <input
            type="text"
            placeholder="Search"
            className="w-full text-xs outline-none bg-transparent text-text-primary placeholder:text-text-secondary"
          />
          <FaSearch className="w-6 h-6 p-1 text-text-secondary hover:text-accent-primary rounded-full cursor-pointer" />
        </div>
        <div className="w-full flex-2 flex items-center justify-center md:justify-end gap-4">
          <ThemeToggle />
          <FaCartShopping
            className="bg-bg-primary text-text-primary hover:bg-accent-primary hover:text-white p-3 h-10 w-10 rounded-full cursor-pointer border border-border-color"
            onClick={() => setIsCartDrawerOpen(true)}
          />
          <div className="relative">
            <FaBell
              className="bg-bg-primary text-text-primary hover:bg-accent-primary hover:text-white p-3 h-10 w-10 rounded-full cursor-pointer border border-border-color"
              onClick={() => setIsNotificationOpen((prev) => !prev)}
            />
            {isNotificationOpen && (
              <div className="absolute z-5 top-[130%] -right-32 md:right-0">
                <Notification setIsNotificationOpen={setIsNotificationOpen} />
              </div>
            )}
          </div>
          <div className="relative">
            <GiHexagonalNut
              className="bg-bg-primary text-text-primary hover:bg-accent-primary hover:text-white p-3 h-10 w-10 rounded-full cursor-pointer border border-border-color"
              onClick={() => setIsInboxOpen((prev) => !prev)}
            />
            {isInboxOpen && (
              <div className="absolute z-5 top-[130%] -right-20 md:right-0">
                <Inbox setIsInboxOpen={setIsInboxOpen} />
              </div>
            )}
          </div>
          <div className="relative">
            <img
              src={avatar}
              alt="avatar"
              className="w-10 h-10 rounded-full cursor-pointer border border-border-color"
              onClick={() => setIsProfileOpen((prev) => !prev)}
            />
            {isProfileOpen && (
              <div className="absolute z-5 top-[130%] right-0">
                <Profile setIsProfileOpen={setIsProfileOpen} />
              </div>
            )}
          </div>
        </div>
      </header>
      {isCartDrawerOpen && (
        <CartDrawer setIsCartDrawerOpen={setIsCartDrawerOpen} />
      )}
    </>
  );
};

export default Header;
