import React from "react";
import Button from "./Button";

const Keypad = ({ handleNumber, handleOperator, handleOperation, handleDelete, handleReset, handleDecimal }) => {

  return (
    <div className="grid grid-cols-4 gap-3 md:gap-4 bg-(--color-bg-toggle) rounded-lg p-5 md:p-6 w-full mt-3">
      {/* Line 1 */}
      <Button value="7" onClick={handleNumber} />
      <Button value="8" onClick={handleNumber} />
      <Button value="9" onClick={handleNumber} />
      <Button value="DEL" variant="secondary" onClick={handleDelete}  />

      {/* Line 2 */}
      <Button value="4" onClick={handleNumber} />
      <Button value="5" onClick={handleNumber} />
      <Button value="6" onClick={handleNumber} />
      <Button value="+" onClick={handleOperator} />

      {/* Line 3 */}
      <Button value="1" onClick={handleNumber} />
      <Button value="2" onClick={handleNumber} />
      <Button value="3" onClick={handleNumber} />
      <Button value="-" onClick={handleOperator} />

      {/* Line 4 */}
      <Button value="." onClick={handleDecimal} />
      <Button value="0" onClick={handleNumber} />
      <Button value="/" onClick={handleOperator} />
      <Button value="x" onClick={handleOperator} />

      {/* Line 5 */}
      <Button value="RESET" variant="secondary" isDouble={true} onClick={handleReset} />
      <Button value="=" variant="accent" isDouble={true} onClick={handleOperation} />
    </div>
  );
};

export default Keypad;
