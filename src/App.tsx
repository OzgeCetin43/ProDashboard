import React from "react";
import { Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/dashboard.layout";
import Home from "./pages/home.page";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
