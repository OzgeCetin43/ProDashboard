import React, { useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { GiHexagonalNut } from "react-icons/gi";

import CartDrawer from "./cartDrawer.component";

import avatar from "../assets/images/avatar.jpg";

const Header: React.FC = () => {
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState<boolean>(false);

  return (
    <>
      <header className="w-full h-auto md:h-14 p-4 bg-[#232323] flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="w-full flex-1 flex items-center justify-between border border-neutral-700 rounded-xs p-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full text-xs outline-none"
          />
          <FaSearch className="w-6 h-6 p-1 hover:bg-sky-600 rounded-full cursor-pointer" />
        </div>
        <div className="w-full flex-2 flex items-center justify-center md:justify-end gap-4">
          <div className="relative">
            <FaCartShopping
              className="bg-neutral-700 hover:bg-orange-600 p-3 h-10 w-10 rounded-full cursor-pointer"
              onClick={() => setIsCartDrawerOpen(true)}
            />
          </div>
          <div className="relative">
            <FaBell className="bg-neutral-700 hover:bg-orange-600 p-3 h-10 w-10 rounded-full cursor-pointer" />
          </div>
          <div className="relative">
            <GiHexagonalNut className="bg-neutral-700 hover:bg-orange-600 p-3 h-10 w-10 rounded-full cursor-pointer" />
          </div>
          <div className="relative">
            <img
              src={avatar}
              alt="avatar"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
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
