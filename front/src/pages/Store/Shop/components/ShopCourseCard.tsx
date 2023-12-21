import React, { useContext, useEffect, useState } from "react";
import {
  addToman,
  insertDelimEveryThreeDigits,
  English2Persian,
} from "src/utils/convertors";
import { level2farsi } from "src/utils/shopTranslator";
import { IShopCourseCard } from "../types";
import { StoreContext } from "../../StoreContext";
import { IShopDataItem } from "../../api.types";
import Loading from "src/components/ui/Loading";
import BasketSVG from "src/assets/svgs/BasketSVG";

const ShopCourseCard: React.FC<IShopCourseCard> = ({
  id,
  onQuantityChange,
  index,
  status,
}) => {
  const [shopItem, setShopItem] = useState<IShopDataItem>();
  const { shopData, isShopError, isShopLoading, isShopSuccess, cartData } =
    useContext(StoreContext);

  // USE USE REDUCER
  useEffect(() => {
    if (shopData) {
      const thisCourseCart = shopData?.courses.find((item) => item.id === id);
      setShopItem(thisCourseCart);
    }
  }, []);

  return (
    <>
      {isShopLoading ? (
        <Loading />
      ) : isShopError ? (
        "مشکلی پیش آمده لطفا دقایقی دیگر به ما سر بزنید"
      ) : (
        shopItem && (
          <div
            className="rounded-[10px] flex flex-col items-start p-4 gap-2 w-full"
            style={{
              backgroundImage: `linear-gradient(180deg, #38383850 0, #38383850 100%), url(${shopItem.images[0]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex justify-between items-center w-full">
              <h3 className=" text-center text-base font-normal text-[#FEF3E9]">
                {shopItem.title + " " + level2farsi(shopItem.detail.level)}
              </h3>
              <h4 className="text-center text-[#fef3e9] opacity-70 text-sm font-normal">
                {addToman(
                  English2Persian(
                    insertDelimEveryThreeDigits(shopItem.detail.level)
                  )
                )}
              </h4>
            </div>
            {status.isLoading ? (
              <Loading />
            ) : status.availability === "purchased" ? (
              <button className=" rounded-[4px] text-[#FEF4EA] text-[10px] flex items-center gap-2 bg-none justify-center w-full py-1 bg-[#58423A]">
                شما این دوره را دارید
              </button>
            ) : status.availability === "available" ? (
              <button
                onClick={() => {
                  onQuantityChange("add", status.id)(shopItem.id);
                }}
                className=" rounded-[4px] text-[#58423a] text-[10px] flex items-center gap-2 bg-none justify-center w-full py-1 bg-[#fef3e9d0]"
              >
                افزودن به سبد خرید
                <BasketSVG />
              </button>
            ) : (
              <button
                onClick={() => {
                  onQuantityChange("delete", status.id)(shopItem.id);
                }}
                className=" rounded-[4px] text-[#58423a] text-[10px] flex items-center gap-2 bg-none justify-center w-full py-1 bg-[#D48B71]"
              >
                حذف از سبد خرید
              </button>
            )}
          </div>
        )
      )}
    </>
  );
};

export default ShopCourseCard;
