export const calculate = (previousValue, currentValue, operator) => {
  const prev = parseFloat(previousValue);
  const current = parseFloat(currentValue);

  // Se faltar algum número, retorna 0 como segurança
  if (isNaN(prev) || isNaN(current)) return 0;

  switch (operator) {
    case "+":
      return prev + current;
    case "-":
      return prev - current;
    case "/":
      return prev / current;
    case "x":
      return prev * current;
    default:
      return 0;
  }
};