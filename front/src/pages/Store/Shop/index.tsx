import { FC, useContext, useEffect, useState } from "react";
import ShopCourseCard from "./components/ShopCourseCard";
import Loading from "src/components/ui/Loading";
import Header from "src/components/Header";
import ShopItemBG1 from "src/assets/images/shopItem1.png";
import ShopItemBG2 from "src/assets/images/shopItem2.png";
import ShopItemBG3 from "src/assets/images/shopItem3.png";
import { Link } from "react-router-dom";
import { StoreContext } from "../StoreContext";
import api from "src/services";
import { SHOP_ADD_ITEM_URL, SHOP_DELETE_ITEM_URL } from "../api.data";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ICartItem, IShopData } from "../api.types";
import { ShopCourseStatus } from "./types";
import { error } from "console";
const BgList = [ShopItemBG1, ShopItemBG2, ShopItemBG3];

const Shop: React.FC = ({}) => {
  const {
    shopData,
    cartData,
    isShopError,
    isShopLoading,
    isShopSuccess,
    userData,
    isUserLoading,
  } = useContext(StoreContext);

  const [itemsAvailabilityList, setItemsAvailabilityList] = useState<
    Array<ShopCourseStatus>
  >([]);

  const onQuantityChange = (action: "add" | "delete") => {
    console.log("PASSED FROM CHANGE");
    if (action === "add")
      return (itemId: string) => {
        console.log("PASSED FROM ADD");
        api.post(`${SHOP_ADD_ITEM_URL}/${itemId}`)({});
      };
    else
      return (itemId: string) => {
        console.log("PASSED FROM DELETE");
        api.delete(`${SHOP_ADD_ITEM_URL}/${itemId}`)({});
      };
  };

  return (
    <main className="max-w-[100vw] w-[100vw] min-w-[100vw]">
      <Header />
      {isUserLoading ? (
        <Loading />
      ) : userData == undefined ? (
        <div className="w-full h-[100vh] flex items-center justify-center px-12">
          <Link to="/auth" className=" text-center text-[#58423A]">
            برای خرید دوره ها ابتدا باید
            <span className=" underline text-[#D48B71]"> وارد </span> حساب
            کاربری خود شوید.
          </Link>
        </div>
      ) : (
        <div className="pt-28 mx-8 justify-center items-center flex flex-col gap-y-4 ">
          {isShopLoading ? (
            <Loading />
          ) : isShopSuccess && shopData ? (
            shopData.courses.map((item, index) => (
              <ShopCourseCard
                id={item.id}
                key={item.id}
                onQuantityChange={onQuantityChange}
              />
            ))
          ) : (
            "در حال حاضر دوره فعالی نداریم بعدا به ما سر بزنید."
          )}
        </div>
      )}
    </main>
  );
};

export default Shop;
