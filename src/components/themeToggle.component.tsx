import React from "react";
import { useTheme } from "../context/theme.context";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 bg-bg-tertiary border border-border-color hover:bg-accent-primary rounded-full cursor-pointer text-text-primary hover:text-white"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <FaMoon className="w-4 h-4" />
      ) : (
        <FaSun className="w-4 h-4 text-status-warning" />
      )}
    </button>
  );
};

export default ThemeToggle;
