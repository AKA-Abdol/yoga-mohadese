import React, { ReactNode, useContext, useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import DownArrow from "src/assets/svgs/DownArrow";
import ClickToShowBox from "src/components/ui/ClickToShowBox";
import { yogaLevels } from "src/assets/docs/yogaLevels";
import Button from "src/components/ui/Button";
import TrashSVG from "src/assets/svgs/TrashSVG";
import ShopItemBG1 from "src/assets/images/shopItem1.png";
import ShopItemBG2 from "src/assets/images/shopItem2.png";
import ShopItemBG3 from "src/assets/images/shopItem3.png";

const BgList = [ShopItemBG1, ShopItemBG2, ShopItemBG3];

const ShopCourseCard: React.FC<IShopCourseCard> = ({
  id,
  onQuantityChange,
  index,
  status,
}) => {
  const [shopItem, setShopItem] = useState<IShopDataItem>();
  const { shopData, isShopError, isShopLoading, isShopSuccess, cartData } =
    useContext(StoreContext);
  const navigate = useNavigate();
  // USE USE REDUCER
  useEffect(() => {
    if (shopData) {
      const thisCourseCart = shopData?.courses.find((item) => item.id === id);
      setShopItem(thisCourseCart);
    }
  }, []);

  const navigateToUser = () => {
    navigate("/user");
  };

  const moreInfo: ReactNode = (
    <>
      توضیحات بیشتر <DownArrow />
    </>
  );

  return (
    <>
      {isShopLoading ? (
        <Loading />
      ) : isShopError ? (
        "مشکلی پیش آمده لطفا دقایقی دیگر به ما سر بزنید"
      ) : (
        shopItem && (
          <div
            className="rounded-[10px] flex flex-col items-start p-4 gap-2 w-full lg:w-[370px]"
            style={{
              backgroundImage: `linear-gradient(180deg, #38383850 0, #38383899 100%), url(${
                BgList[index % 3]
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
            }}
          >
            <div className="flex justify-between items-center w-full">
              <h3 className=" text-center text-base font-normal text-[#FEF3E9]">
                {shopItem.title + " " + level2farsi(shopItem.detail.level)}
              </h3>
              <h4 className="text-center text-[#fef3e9] opacity-90 text-sm font-normal">
                {addToman(
                  English2Persian(
                    insertDelimEveryThreeDigits(shopItem.detail.price)
                  )
                )}
              </h4>
            </div>
            <div>
              <h4 className="text-center text-[#fef3e9] opacity-90 text-sm font-normal">آذر ماه</h4>
            </div>
            {status.isLoading ? (
              <div className={`text-[#FEF4EA] bg-[#FEF3E9] btn-shop`}>
                <Loading size="sm" />
              </div>
            ) : status.availability === "purchased" ? (
              <button
                className={` text-[#FEF4EA] bg-[#58423A] cursor-not-allowed btn-shop`}
              >
                شما این دوره را دارید
              </button>
            ) : status.availability === "available" ? (
              <button
                onClick={() => {
                  onQuantityChange("add", status.id)(shopItem.id);
                }}
                className={`text-[#58423a] bg-[#fef3e9b4] btn-shop`}
              >
                افزودن به سبد خرید
                <BasketSVG />
              </button>
            ) : (
              <button
                onClick={() => {
                  onQuantityChange("delete", status.id)(shopItem.id);
                }}
                className={`text-[#58423a] bg-[#d48b71c2] btn-shop`}
              >
                حذف از سبد خرید
                <TrashSVG />
              </button>
            )}
            {status.availability === "purchased" ? (
              <button
                onClick={navigateToUser}
                className={`w-full border-[#8CA780CC] bg-[#8CA780CC] text-[#FEF3E9] btn-shop`}
              >
                رفتن به کلاس
              </button>
            ) : (
              <ClickToShowBox
                title={moreInfo}
                boxClassNames="rounded-[4px] border border-[#FEF3E9] flex items-center py-1 bg-none justify-center w-full"
                titleClassNames="text-[#FEF3E9] text-[10px] flex items-center justify-center"
                content={yogaLevels[index].content}
                contentClassNames="text-[#FEFAF7] text-[10px] leading-[200%]"
                backgroundColor="#58423A"
              />
            )}
          </div>
        )
      )}
    </>
  );
};

export default ShopCourseCard;
