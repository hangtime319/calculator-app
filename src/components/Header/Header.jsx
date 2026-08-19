import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 w-full">
      <h1 className="text-(--color-text-primary) text-3xl">calc</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
