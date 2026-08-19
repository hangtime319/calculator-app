import React from "react";
import { formatNumber } from "../../utils/formatNumber";

const Display = ({ currentValue, previousValue, operator }) => {

  return (
    <div className="flex items-center justify-end w-full bg-(--color-bg-screen) px-6 py-4 break-all overflow-hidden rounded-lg">
      <span className="text-4xl text-(--color-text-light)">
        {formatNumber(previousValue)}{operator}{formatNumber(currentValue)}
      </span>
    </div>
  );
};

export default Display;
