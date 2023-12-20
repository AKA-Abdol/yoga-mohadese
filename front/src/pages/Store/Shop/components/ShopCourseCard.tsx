import React, { ReactElement, SetStateAction, useEffect } from "react";
import {
  addToman,
  insertDelimEveryThreeDigits,
  English2Persian,
} from "src/utils/convertors";
import { level2farsi } from "src/utils/shopTranslator";
import { IShopCourseCard } from "../types";
import api from "src/services";
import { SHOP_ADD_ITEM_URL, SHOP_DELETE_ITEM_URL } from "../../api.data";
import { useMutation } from "@tanstack/react-query";

const ShopCourseCard: React.FC<IShopCourseCard> = ({
  title,
  price,
  backgroundTuhmbURL,
  id,
  level,
  index,
  itemStatus,
  onQuantityChange,
  // addToCart,
  // deleteFromCart,
}) => {

  

  return (
    <div
      className="rounded-[10px] flex flex-col items-start p-4 gap-2 w-full"
      style={{
        backgroundImage: `linear-gradient(180deg, #38383850 0, #38383850 100%), url(${backgroundTuhmbURL})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-between items-center w-full">
        <h3 className=" text-center text-base font-normal text-[#FEF3E9]">
          {title + " " + level2farsi(level)}
        </h3>
        <h4 className="text-center text-[#fef3e9] opacity-70 text-sm font-normal">
          {addToman(English2Persian(insertDelimEveryThreeDigits(price)))}
        </h4>
      </div>
      {itemStatus === "purchased" ? (
        <button
          className=" rounded-[4px] text-[#FEF4EA] text-[10px] flex items-center gap-2 bg-none justify-center w-full py-1 bg-[#58423A]"
        >
          شما این دوره را دارید
        </button>
      ) : itemStatus === "available" ? (
        <button
          // onClick={() => addToCart(id, index as number)}
          className=" rounded-[4px] text-[#58423a] text-[10px] flex items-center gap-2 bg-none justify-center w-full py-1 bg-[#fef3e9d0]"
        >
          افزودن به سبد خرید
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
          >
            <path
              d="M9.85425 6.87496C9.85323 6.59983 9.7697 6.33133 9.61445 6.10418C9.45921 5.87703 9.23939 5.70168 8.98341 5.6008L9.8405 2.39246C9.8584 2.32414 9.86027 2.25259 9.84596 2.18342C9.83165 2.11425 9.80155 2.04933 9.758 1.99371C9.71348 1.9416 9.65784 1.90014 9.59518 1.87238C9.53251 1.84462 9.46442 1.83126 9.39591 1.8333H3.11675L2.9655 1.2558C2.9392 1.15813 2.88134 1.07191 2.80092 1.01056C2.72051 0.949211 2.62206 0.916186 2.52091 0.91663H1.60425V1.8333H2.168L3.30466 6.07746C3.33152 6.17745 3.39144 6.26541 3.47467 6.32699C3.5579 6.38858 3.65952 6.42018 3.763 6.41663H8.47925C8.6008 6.41663 8.71738 6.46492 8.80334 6.55087C8.88929 6.63683 8.93758 6.75341 8.93758 6.87496C8.93758 6.99652 8.88929 7.1131 8.80334 7.19905C8.71738 7.28501 8.6008 7.3333 8.47925 7.3333H2.52091C2.39936 7.3333 2.28278 7.38159 2.19682 7.46754C2.11087 7.55349 2.06258 7.67007 2.06258 7.79163C2.06258 7.91319 2.11087 8.02977 2.19682 8.11572C2.28278 8.20168 2.39936 8.24996 2.52091 8.24996H3.06175C2.98637 8.45765 2.96215 8.68044 2.99113 8.89947C3.02012 9.1185 3.10146 9.32732 3.22827 9.50825C3.35508 9.68918 3.52362 9.83689 3.71962 9.93886C3.91562 10.0408 4.13331 10.0941 4.35425 10.0941C4.57519 10.0941 4.79288 10.0408 4.98888 9.93886C5.18488 9.83689 5.35342 9.68918 5.48023 9.50825C5.60703 9.32732 5.68838 9.1185 5.71736 8.89947C5.74635 8.68044 5.72213 8.45765 5.64675 8.24996H6.72841C6.6598 8.43907 6.63351 8.64094 6.65141 8.84132C6.66931 9.04169 6.73096 9.2357 6.83202 9.40965C6.93307 9.58361 7.07107 9.73327 7.23627 9.84807C7.40146 9.96288 7.58984 10.04 7.78811 10.0741C7.98638 10.1082 8.18971 10.0983 8.38376 10.0452C8.57781 9.99216 8.75784 9.89714 8.91116 9.7669C9.06448 9.63665 9.18736 9.47435 9.27112 9.29144C9.35487 9.10853 9.39747 8.90947 9.39591 8.7083C9.39506 8.47151 9.33183 8.23912 9.21258 8.03455C9.40857 7.91098 9.57016 7.73989 9.68234 7.53716C9.79452 7.33444 9.85365 7.10666 9.85425 6.87496ZM8.06216 5.49996H4.12508L3.36425 2.74996H8.80008L8.06216 5.49996ZM4.35425 9.16663C4.2636 9.16663 4.17498 9.13975 4.09961 9.08939C4.02424 9.03903 3.96549 8.96744 3.9308 8.88369C3.89611 8.79994 3.88704 8.70779 3.90472 8.61888C3.92241 8.52997 3.96606 8.44831 4.03016 8.38421C4.09426 8.32011 4.17592 8.27646 4.26483 8.25877C4.35374 8.24109 4.44589 8.25016 4.52964 8.28485C4.61339 8.31954 4.68498 8.37829 4.73534 8.45366C4.7857 8.52903 4.81258 8.61765 4.81258 8.7083C4.81258 8.82985 4.76429 8.94643 4.67834 9.03239C4.59238 9.11834 4.47581 9.16663 4.35425 9.16663ZM8.02091 9.16663C7.93026 9.16663 7.84165 9.13975 7.76628 9.08939C7.69091 9.03903 7.63216 8.96744 7.59747 8.88369C7.56278 8.79994 7.5537 8.70779 7.57139 8.61888C7.58907 8.52997 7.63272 8.44831 7.69682 8.38421C7.76092 8.32011 7.84259 8.27646 7.9315 8.25877C8.02041 8.24109 8.11256 8.25016 8.19631 8.28485C8.28006 8.31954 8.35164 8.37829 8.402 8.45366C8.45237 8.52903 8.47925 8.61765 8.47925 8.7083C8.47925 8.82985 8.43096 8.94643 8.34501 9.03239C8.25905 9.11834 8.14247 9.16663 8.02091 9.16663Z"
              fill="#58423A"
            />
          </svg>
        </button>
      ) : (
        <button
          // onClick={() => deleteFromCart(id, index as number)}
          className=" rounded-[4px] text-[#58423a] text-[10px] flex items-center gap-2 bg-none justify-center w-full py-1 bg-[#D48B71]"
        >
          حذف از سبد خرید
        </button>
      )}
    </div>
  );
};

export default ShopCourseCard;
