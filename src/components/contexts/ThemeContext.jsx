import React, { createContext, useState, useEffect, Children } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("1");

  useEffect(() => {
    document.body.classList.remove("theme-1", "theme-2", "theme-3");
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  const handleThemeToggle = () => {
    if (theme === "1") {
      setTheme("2");
    } else if (theme === "2") {
      setTheme("3");
    } else {
      setTheme("1");
    }
  };

  return <ThemeContext.Provider value={{ theme, handleThemeToggle }}>{children}</ThemeContext.Provider>;
};
