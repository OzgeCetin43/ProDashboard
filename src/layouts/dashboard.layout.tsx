import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar.component";

const DashboardLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex gap-10">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="ml-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
