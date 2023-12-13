import React, { FC } from "react";
import { IFactorItem } from "../types";
import { getJalaliMonthName } from "src/utils/dates";
import { level2farsi } from "src/utils/shopTranslator";
import {
  English2Persian,
  addCommaEach3Digits,
  addToman,
} from "src/utils/converts";
const FactorItem: React.FC<IFactorItem> = ({ level, month, price, title }) => {
  return (
    <div className="flex justify-between items-center border-b border-[#58423a80] pb-1">
      <div className="flex items-center gap-2">
        {!level ? (
          <h5 className="text-[#58423A] text-base "> {level2farsi(level)}</h5>
        ) : (
          <h5>{title}</h5>
        )}
        <span className="text-[#58423A] text-base "> | </span>
        <h5 className="text-[#58423a80] text-base ">
          {getJalaliMonthName(month)} ماه
        </h5>
      </div>
      <h5 className="text-[#58423A] text-base ">
        {addToman(English2Persian(addCommaEach3Digits(price)))}
      </h5>
    </div>
  );
};

export default FactorItem;
