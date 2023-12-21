import React, { FC } from "react";
import { ICartItem } from "../types";
import { translateISOString2JalaliMonth } from "src/utils/dates";
import { level2farsi } from "src/utils/shopTranslator";
import {
  English2Persian,
  insertDelimEveryThreeDigits,
  addToman,
} from "src/utils/convertors";
const CartItem: React.FC<ICartItem> = ({ level, month, price, title }) => {
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
          {translateISOString2JalaliMonth(month)} ماه
        </h5>
      </div>
      <h5 className="text-[#58423A] text-base ">
        {addToman(English2Persian(insertDelimEveryThreeDigits(price)))}
      </h5>
    </div>
  );
};

export default CartItem;
