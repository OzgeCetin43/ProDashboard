import React from "react";
import { Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/dashboard.layout";
import Home from "./pages/home.page";
import Profile from "./pages/profile.page";
import Chat from "./pages/chat.page";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="/profile-simple-page" element={<Profile />} />
        <Route path="/chat-app" element={<Chat />} />
      </Route>
    </Routes>
  );
};

export default App;
