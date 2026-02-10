import React from "react";
import { useTheme } from "../context/theme.context";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 bg-neutral-700 hover:bg-accent-primary rounded-full cursor-pointer transition-colors duration-300 text-white"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <FaMoon className="w-4 h-4" />
      ) : (
        <FaSun className="w-4 h-4 text-yellow-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
