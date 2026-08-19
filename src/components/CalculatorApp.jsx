import { useCalculator } from "../hooks/useCalculator";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./Header/Header";
import Display from "./Display/Display";
import Keypad from "./Keypad/Keypad";

const CalculatorApp = () => {
  const { currentValue, previousValue, operator, handleNumber, handleOperator, handleOperation, handleDelete, handleReset, handleDecimal } = useCalculator();

  return (
    <ThemeProvider>
    <div className="grid grid-cols-1 gap-4 px-5 w-full max-w-md">
      <Header />
      <Display currentValue={currentValue} operator={operator} previousValue={previousValue} />
      <Keypad handleNumber={handleNumber} handleOperator={handleOperator} handleOperation={handleOperation} handleDelete={handleDelete} handleReset={handleReset} handleDecimal={handleDecimal} />
    </div>
    </ThemeProvider>
  );
};

export default CalculatorApp;
