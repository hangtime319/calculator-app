import { useState, useEffect } from "react";
import { calculate } from "../utils/calculate";

export const useCalculator = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState("");
  const [operator, setOperator] = useState(null);
  const [overwrite, setOverwrite] = useState(false);

  const handleNumber = (number) => {
    if (overwrite) {
      setCurrentValue(number);
      setOverwrite(false);
      return;
    }

    if (currentValue === "0") {
      setCurrentValue(number);
      return;
    }

    setCurrentValue((prev) => prev + number);
  };

  const handleOperator = (op) => {
    if (currentValue === "" && previousValue !== "") {
      setOperator(op);
      return;
    }
    setPreviousValue(currentValue);
    setOperator(op);
    setCurrentValue("");
    setOverwrite(false);
  };

  const handleOperation = () => {
    if (previousValue === "" || currentValue === "" || !operator) return;

    const result = calculate(previousValue, currentValue, operator);

    setCurrentValue(String(result));
    setOverwrite(true);
    setPreviousValue("");
    setOperator(null);
  };

  const handleDelete = () => {
    if (currentValue === "" && operator !== null) {
      setCurrentValue(previousValue);
      setPreviousValue("");
      setOperator(null);
      return;
    }
    if (currentValue === "0") return;

    if (overwrite) {
      setCurrentValue("0");
      setOverwrite(false);
      return;
    }

    const newValue = currentValue.slice(0, -1);

    if (newValue === "") {
      setCurrentValue("0");
    } else {
      setCurrentValue(newValue);
    }
  };

  const handleReset = () => {
    setCurrentValue("0");
    setPreviousValue("");
    setOperator(null);
    setOverwrite(false);
  };

  const handleDecimal = () => {
    if (overwrite) {
      setCurrentValue("0.");
      setOverwrite(false);
      return;
    }

    if (currentValue.includes(".")) return;

    if (currentValue === "") {
      setCurrentValue("0.");
    } else {
      setCurrentValue((prev) => prev + ".");
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (/[0-9]/.test(e.key)) {
        handleNumber(e.key);
      } else if (e.key === "+" || e.key === "-" || e.key === "/") {
        handleOperator(e.key);
      } else if (e.key === "*") {
        handleOperator("x");
      } else if (e.key === "Enter" || e.key === "=") {
        e.preventDefault();
        handleOperation();
      } else if (e.key === "." || e.key === ",") {
        handleDecimal();
      } else if (e.key === "Delete") {
        handleDelete();
      } else if (e.key === "Escape") {
        handleReset();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentValue, previousValue, operator, overwrite]);

  return {
    currentValue,
    previousValue,
    operator,
    handleNumber,
    handleOperator,
    handleOperation,
    handleDelete,
    handleReset,
    handleDecimal,
  };
};
