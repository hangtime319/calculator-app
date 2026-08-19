export const formatNumber = (numStr) => {
  if (numStr === "" || numStr == null) return "";
  
  const stringValue = String(numStr);
  const [intergerPart, decimalPart] = stringValue.split(".");

  const formattedInteger = Number(intergerPart).toLocaleString("en-US");

  if (decimalPart === undefined) {
    return formattedInteger;
  }

  return `${formattedInteger}.${decimalPart}`;
};
