import React from "react";

const Button = ({ value, variant = "default", isDouble = false, onClick }) => {
  const baseClasses = "flex items-center justify-center rounded-md py-2 active:shadow-none active:translate-y-1 transition-all duration-75 cursor-pointer";

  const variantClasses = {
    default: "bg-(--color-key-neutral) text-(--color-text-key-neutral) text-3xl shadow-[0_4px_0_0_var(--color-key-neutral-shadow)] hover:brightness-150",
    secondary: "bg-(--color-key-secundary) text-(--color-text-key-secundary) text-xl shadow-[0_4px_0_0_var(--color-key-secundary-shadow)] hover:brightness-150", // DEL / RESET
    accent: "bg-(--color-key-accent) text-(--color-text-key-accent) text-2xl shadow-[0_4px_0_0_var(--color-key-accent-shadow)] hover:brightness-150", // =
  };

  const widthClass = isDouble ? "col-span-2" : "col-span-1";

  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${widthClass}`;

  return (
    <button className={finalClasses} onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

export default Button;
