import { useContext } from "react";
import { ThemeContext } from "../components/contexts/ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme should be used inside of the ThemeProvider");
  }

  return context;
};
