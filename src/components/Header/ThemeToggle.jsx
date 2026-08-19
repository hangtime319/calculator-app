import React from "react";
import { useTheme } from "../../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, handleThemeToggle } = useTheme();
  return (
    <div className="flex items-end gap-6">
      <p className="text-sm tracking-widest text-(--color-text-primary) uppercase">Theme</p>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-between w-full px-3 mb-1">
          <span className="text-(--color-text-light) text-xs">1</span>
          <span className="text-(--color-text-light) text-xs">2</span>
          <span className="text-(--color-text-light) text-xs">3</span>
        </div>
        <div className="p-1.5 bg-(--color-bg-toggle) rounded-full w-20 h-7 relative cursor-pointer" onClick={handleThemeToggle}>
          <span className={`block bg-(--color-key-accent) w-4 h-4 rounded-full absolute ${theme === "1" ? "translate-x-0" : theme === "2" ? "translate-x-6" : "translate-x-12"} transition-all duration-200 ease-in-out`}></span>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
